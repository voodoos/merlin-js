open Merlin_utils
open Std
open Merlin_kernel

module Ocaml_loc = Ocaml_parsing.Location
module Lsp = Linol_lsp.Lsp

open Lsp.Types
open Js_of_ocaml

(* Compiler / Merlin types conversion to LSP *)

let lsp_position_to_merlin (pos : Position.t) : Msource.position =
  `Logical (pos.line + 1, pos.character)

let loc_to_range (loc : Ocaml_loc.t) : Range.t =
  let pos p =
    Position.create
      ~line:(max 0 (p.Lexing.pos_lnum - 1))
      ~character:(max 0 (p.Lexing.pos_cnum - p.Lexing.pos_bol))
  in
  Range.create ~start:(pos loc.loc_start) ~end_:(pos loc.loc_end)

let completion_kind (entry : Query_protocol.Compl.entry) : CompletionItemKind.t
    =
  match entry.kind with
  | `Value -> Value
  | `Constructor -> Constructor
  | `Variant -> EnumMember
  | `Label -> Field
  | `Module -> Module
  | `Modtype -> Interface
  | `Type -> TypeParameter
  | `MethodCall -> Method
  | `Keyword -> Keyword

let diagnostic_of_report =
  let severity (report : Ocaml_loc.report) : DiagnosticSeverity.t =
    match report.kind with
    | Report_error -> Error
    | Report_warning _ -> Warning
    | Report_warning_as_error _ -> Error
    | Report_alert _ -> Information
    | Report_alert_as_error _ -> Error
  in
  let source (report : Ocaml_loc.report) =
    match report.source with
    | Ocaml_loc.Lexer -> Some "Lexer"
    | Ocaml_loc.Parser -> Some "Parser"
    | Ocaml_loc.Typer -> Some "Typer"
    | Ocaml_loc.Env -> Some "Env"
    | Ocaml_loc.Config -> Some "Config"
    | Ocaml_loc.Warning
    | Ocaml_loc.Unknown -> None
  in
  fun (error : Ocaml_loc.report) ->
    let loc = Ocaml_loc.loc_of_report error in
    let range = loc_to_range loc in
    let severity = severity error in
    let message =
      Format.asprintf "@[%a@]" Ocaml_loc.print_main error
      |> String.trim
    in
    let source = source error in
    Diagnostic.create ~range ~severity ?source ~message:(`String message) ()

module Server = Linol.Make (Worker_io)

class merlin_server =
  object (self)
    inherit Server.server

    method spawn_query_handler f =
      Lwt.async (fun () ->
          Lwt.catch f (fun exn ->
              Printf.eprintf "uncaught exception in handler:\n%s\n%!"
                (Printexc.to_string exn);
              Lwt.return ()))

    method! config_hover = Some (`Bool true)

    method! config_completion =
      Some (CompletionOptions.create ~triggerCharacters:[ "." ] ())

    method! config_modify_capabilities c =
      let signatureHelpProvider =
        SignatureHelpOptions.create
          ~triggerCharacters:[ " "; "~"; "?"; ":"; "(" ]
          ~retriggerCharacters:[")"; ";"; " "; "\n"; "="; "|"; "{"; "}"; "["; "]"]
          ()
      in
      ServerCapabilities.create
        ?codeLensProvider:c.codeLensProvider
        ?completionProvider:c.completionProvider
        ?hoverProvider:c.hoverProvider
        ~textDocumentSync:(Option.value c.textDocumentSync
          ~default:(`TextDocumentSyncKind TextDocumentSyncKind.Full))
        ~signatureHelpProvider
        ()

    method on_notif_doc_did_open ~notify_back _doc ~content =
      self#publish_diagnostics ~notify_back content

    method on_notif_doc_did_change ~notify_back _doc _changes ~old_content:_
        ~new_content =
      self#publish_diagnostics ~notify_back new_content

    method on_notif_doc_did_close ~notify_back:_ _doc = Lwt.return ()

    method private publish_diagnostics ~notify_back content =
      let source = Msource.make content in
      let query =
        Query_protocol.Errors { lexing = true; parsing = true; typing = true }
      in
      let diagnostics =
        try
          Merlin_jsoo.dispatch source query
          |> List.map ~f:diagnostic_of_report
        with _ -> []
      in
      notify_back#send_diagnostic diagnostics

    method! on_req_hover ~notify_back:_ ~id:_ ~uri:_ ~pos ~workDoneToken:_
        (doc : Server.doc_state) =
      let source = Msource.make doc.content in
      let position = lsp_position_to_merlin pos in
      let query = Query_protocol.Type_enclosing (None, position, None) in
      Lwt.return
      ( try
          match Merlin_jsoo.dispatch source query with
          | [] -> None
          | (loc, `String typ, _) :: _ ->
              let value = Printf.sprintf "```ocaml\n%s\n```" typ in
              let contents =
                MarkupContent.create ~kind:MarkupKind.Markdown ~value
              in
              let range = loc_to_range loc in
              let hover =
                (* TODO also return documentation *)
                Hover.create ~contents:(`MarkupContent contents) ~range ()
              in
              Some hover
          | _ -> None
        with _ -> None )

    method! on_req_completion ~notify_back:_ ~id:_ ~uri:_ ~pos ~ctx:_
        ~workDoneToken:_ ~partialResultToken:_ (doc : Server.doc_state) =
      let source = Msource.make doc.content in
      let position = lsp_position_to_merlin pos in
      let prefix = Merlin_jsoo.Completion.prefix_of_position source position in
      if prefix = "" then Lwt.return None
      else
        Lwt.return
        ( try
            let query =
              Query_protocol.Complete_prefix (prefix, position, [], true, true)
            in
            let (completions : Query_protocol.completions) =
              Merlin_jsoo.dispatch source query
            in
            let items =
              List.map completions.entries
                ~f:(fun (entry : Query_protocol.Compl.entry) ->
                  let kind = completion_kind entry in
                  (* TODO also return documentation *)
                  CompletionItem.create ~label:entry.name ~kind
                    ~detail:entry.desc ())
            in
            let list =
              CompletionList.create ~isIncomplete:false ~items ()
            in
            Some (`CompletionList list)
          with _ -> None )

    method! on_request_unhandled ~notify_back:_ ~id:_
          (type a) (r : a Lsp.Client_request.t) : a Lwt.t =
      match r with
      | Lsp.Client_request.SignatureHelp params ->
        let uri = params.textDocument.uri in
        let empty = SignatureHelp.create ~signatures:[] () in
        (match self#find_doc uri with
         | None -> Lwt.return empty
         | Some doc ->
           let source = Msource.make doc.content in
           let position = lsp_position_to_merlin params.position in
           let trigger_kind = match params.context with
             | Some { triggerKind = TriggerCharacter; triggerCharacter = Some c; _ } ->
               Some (Query_protocol.Trigger_character c)
             | Some { triggerKind = TriggerCharacter; triggerCharacter = None; _ }
             | Some { triggerKind = ContentChange; _ } ->
               Some Query_protocol.Content_change
             | Some { triggerKind = Invoked; _ } ->
               Some Query_protocol.Invoked
             | None -> None
           in
           let is_retrigger = match params.context with
             | Some c -> c.isRetrigger
             | None -> false
           in
           let query = Query_protocol.Signature_help {
             position;
             trigger_kind;
             is_retrigger;
             active_signature_help = None;
           } in
           Lwt.return
           ( try
               match Merlin_jsoo.dispatch source query with
               | None -> empty
               | Some result ->
                 let params = List.map result.parameters
                   ~f:(fun (p : Query_protocol.signature_help_param) ->
                     ParameterInformation.create
                       ~label:(`Offset (p.label_start, p.label_end)) ()) in
                 let sig_info = SignatureInformation.create
                   ~label:result.label
                   ~parameters:params
                   ~activeParameter:(Some result.active_param)
                   () in
                 SignatureHelp.create
                   ~signatures:[sig_info]
                   ~activeSignature:result.active_signature
                   ~activeParameter:(Some result.active_param)
                   ()
             with _ -> empty ))
      | _ -> Lwt.fail_with "unhandled request"

    method! on_unknown_notification ~notify_back:_
      (n : Linol_jsonrpc.Jsonrpc.Notification.t) =
      if n.method_ = "merlin/addCmis" then begin
        let open Yojson.Safe.Util in
        (match n.params with
         | Some params ->
           let params = (params :> Yojson.Safe.t) in
           (try
              let statics = params |> member "staticCmis" |> to_list in
              let cmis = List.map statics ~f:(fun j ->
                (j |> member "name" |> to_string,
                 j |> member "content" |> to_string)) in
              Merlin_jsoo.add_static_cmis cmis
            with Type_error _ -> ());
           (try
              let dynamics = params |> member "dynamicCmis" |> to_list in
              List.iter dynamics ~f:(fun j ->
                let url = j |> member "url" |> to_string in
                let toplevel_modules = j |> member "toplevelModules" |> to_list
                                       |> List.map ~f:to_string in
                Merlin_jsoo.add_dynamic_cmis ~url ~toplevel_modules)
            with Type_error _ -> ())
         | None -> ())
      end;
      Lwt.return ()
  end

(* === Entry point === *)

let run () =
  Merlin_jsoo.init ();

  let server = new merlin_server in
  let ic = Worker_io.create_in_channel () in
  let t = Server.create ~ic ~oc:() server in

  Worker.set_onmessage (fun msg ->
      let json_str = Js.to_string msg in
      Merlin_jsoo.log (Printf.sprintf "[lsp-server] <<< %s" json_str);
      Worker_io.push_message ic json_str);
  Server.run t

let () = Lwt.async run
