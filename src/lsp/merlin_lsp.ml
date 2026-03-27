open Merlin_utils
open Std
open Merlin_kernel

module IO_direct = struct
  type 'a t = 'a

  let return x = x
  let failwith = Stdlib.failwith
  let ( let+ ) x f = f x
  let ( let* ) x f = f x
  let ( and+ ) a b = (a, b)

  type env = unit
  type in_channel = unit
  type out_channel = unit

  let stdin () = ()
  let stdout () = ()
  let read () _ _ _ = Stdlib.failwith "IO_direct: no stdin"
  let read_line () = Stdlib.failwith "IO_direct: no stdin"
  let write () _ _ _ = Stdlib.failwith "IO_direct: no stdout"
  let write_string () _ = Stdlib.failwith "IO_direct: no stdout"

  let fail e _bt = raise e

  let catch f g =
    let bt = Printexc.get_callstack 10 in
    try f () with exn -> g exn bt
end

module Ocaml_loc = Ocaml_parsing.Location
module Lsp = Linol_lsp.Lsp
module Jsonrpc2 = Linol.Jsonrpc2.Make (IO_direct)
module Jsonrpc = Linol_jsonrpc.Jsonrpc

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
  let diagnostic_severity (kind : Ocaml_loc.report_kind) : DiagnosticSeverity.t =
    match kind with
    | Report_error -> Error
    | Report_warning _ -> Warning
    | Report_warning_as_error _ -> Error
    | Report_alert _ -> Information
    | Report_alert_as_error _ -> Error
  in
  let source_of_report (report : Ocaml_loc.report) =
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
    let severity = diagnostic_severity error.kind in
    let message =
      Format.asprintf "@[%a@]" Ocaml_loc.print_main error
      |> String.trim
    in
    let source = source_of_report error in
    Diagnostic.create ~range ~severity ?source ~message:(`String message) ()

class merlin_server =
  object (self)
    inherit Jsonrpc2.server

    method spawn_query_handler f =
      try f ()
      with exn ->
        Printf.eprintf "uncaught exception in handler:\n%s\n%!"
          (Printexc.to_string exn)

    method! config_hover = Some (`Bool true)

    method! config_completion =
      Some (CompletionOptions.create ~triggerCharacters:[ "." ] ())

    method! config_modify_capabilities c =
      ServerCapabilities.create
        ?codeLensProvider:c.codeLensProvider
        ?completionProvider:c.completionProvider
        ?hoverProvider:c.hoverProvider
        ~textDocumentSync:(Option.value c.textDocumentSync
          ~default:(`TextDocumentSyncKind TextDocumentSyncKind.Full))
        ~signatureHelpProvider:
          (SignatureHelpOptions.create
             ~triggerCharacters:[ " "; "~"; "?"; ":"; "(" ]
             ~retriggerCharacters:[")"; ";"; " "; "\n"; "="; "|"; "{"; "}"; "["; "]"]
             ())
        ()

    method on_notif_doc_did_open ~notify_back _doc ~content =
      self#publish_diagnostics ~notify_back content

    method on_notif_doc_did_change ~notify_back _doc _changes ~old_content:_
        ~new_content =
      self#publish_diagnostics ~notify_back new_content

    method on_notif_doc_did_close ~notify_back:_ _doc = ()

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
      notify_back#send_diagnostic diagnostics;
      ()

    method! on_req_hover ~notify_back:_ ~id:_ ~uri:_ ~pos ~workDoneToken:_
        (doc : Jsonrpc2.doc_state) =
      let source = Msource.make doc.content in
      let position = lsp_position_to_merlin pos in
      let query = Query_protocol.Type_enclosing (None, position, None) in
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
                Hover.create ~contents:(`MarkupContent contents) ~range ()
              in
              Some hover
          | _ -> None
        with _ -> None )

    method! on_req_completion ~notify_back:_ ~id:_ ~uri:_ ~pos ~ctx:_
        ~workDoneToken:_ ~partialResultToken:_ (doc : Jsonrpc2.doc_state) =
      let source = Msource.make doc.content in
      let position = lsp_position_to_merlin pos in
      let prefix = Merlin_jsoo.Completion.prefix_of_position source position in
      if prefix = "" then None
      else
        try
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
                CompletionItem.create ~label:entry.name ~kind
                  ~detail:entry.desc ())
          in
          let list =
            CompletionList.create ~isIncomplete:false ~items ()
          in
          Some (`CompletionList list)
        with _ -> None

    method! on_request_unhandled ~notify_back:_ ~id:_
        (type a) (r : a Lsp.Client_request.t) : a =
      match r with
      | Lsp.Client_request.SignatureHelp params ->
        let uri = params.textDocument.uri in
        let empty = SignatureHelp.create ~signatures:[] () in
        (match self#find_doc uri with
         | None -> empty
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
           (try
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
               let help = SignatureHelp.create
                 ~signatures:[sig_info]
                 ~activeSignature:result.active_signature
                 ~activeParameter:(Some result.active_param)
                 () in
               help
           with _ -> empty))
      | _ -> Stdlib.failwith "unhandled request"
  end

(* === Worker-based JSON-RPC transport === *)

let handle_add_cmis params =
  let open Yojson.Safe.Util in
  (try
     let statics = params |> member "staticCmis" |> to_list in
     let cmis = List.map statics ~f:(fun j ->
       (j |> member "name" |> to_string,
        j |> member "content" |> to_string)) in
     Merlin_jsoo.add_static_cmis cmis
   with _ -> ());
  (try
     let dynamics = params |> member "dynamicCmis" |> to_list in
     List.iter dynamics ~f:(fun j ->
       let url = j |> member "url" |> to_string in
       let toplevel_modules = j |> member "toplevelModules" |> to_list
                              |> List.map ~f:to_string in
       Merlin_jsoo.add_dynamic_cmis ~url ~toplevel_modules)
   with _ -> ())

let post_json json =
  let s = Yojson.Safe.to_string json in
  Merlin_jsoo.log (Printf.sprintf "[lsp-server] >>> %s" s);
  Worker.post_message (Js.string s)

(* Send server notifications (diagnostics, log messages, etc.) to the client *)
let notify_back (notif : Lsp.Server_notification.t) =
  let notif = Lsp.Server_notification.to_jsonrpc notif in
  post_json (Jsonrpc.Notification.yojson_of_t notif)

let run () =
  Merlin_jsoo.init ();

  let server = new merlin_server in

  (* Send server-initiated requests to the client *)
  let next_id = ref 0 in
  let pending :
      (Jsonrpc.Id.t, Jsonrpc.Response.t -> unit) Hashtbl.t =
    Hashtbl.create 8
  in
  let server_request
      (Jsonrpc2.Request_and_handler (req, handler)) =
    let id = `Int !next_id in
    incr next_id;
    let jsonrpc_req = Lsp.Server_request.to_jsonrpc_request req ~id in
    Hashtbl.replace pending id (fun (resp : Jsonrpc.Response.t) ->
        match resp.result with
        | Ok json ->
            let result = Lsp.Server_request.response_of_json req json in
            handler (Ok result)
        | Error err -> handler (Error err));
    post_json (Jsonrpc.Request.yojson_of_t jsonrpc_req);
    id
  in

  (* Handle incoming JSON-RPC messages from the client *)
  Worker.set_onmessage (fun msg ->
      let json_str = Js.to_string msg in
      Merlin_jsoo.log (Printf.sprintf "[lsp-server] <<< %s" json_str);
      let json = Yojson.Safe.from_string json_str in
      let packet = Jsonrpc.Packet.t_of_yojson json in
      match packet with
      | Jsonrpc.Packet.Notification notif ->
          if notif.method_ = "merlin/addCmis" then (
            match notif.params with
            | Some (`Assoc _ as params) -> handle_add_cmis params
            | _ -> ())
          else (
          match Lsp.Client_notification.of_jsonrpc notif with
          | Ok n ->
              server#on_notification ~notify_back ~server_request n
          | Error _ -> ())
      | Jsonrpc.Packet.Request req -> (
          match Lsp.Client_request.of_jsonrpc req with
          | Ok (Lsp.Client_request.E r) ->
              let result =
                server#on_request ~notify_back ~server_request
                  ~id:req.id r
              in
              let response =
                match result with
                | Ok value ->
                    Jsonrpc.Response.ok req.id
                      (Lsp.Client_request.yojson_of_result r value)
                | Error msg ->
                    Jsonrpc.Response.error req.id
                      (Jsonrpc.Response.Error.make
                         ~code:InternalError ~message:msg ())
              in
              post_json (Jsonrpc.Response.yojson_of_t response)
          | Error msg ->
              let response =
                Jsonrpc.Response.error req.id
                  (Jsonrpc.Response.Error.make ~code:InvalidRequest
                     ~message:msg ())
              in
              post_json (Jsonrpc.Response.yojson_of_t response))
      | Jsonrpc.Packet.Response resp -> (
          match Hashtbl.find_opt pending resp.id with
          | Some handler ->
              Hashtbl.remove pending resp.id;
              handler resp
          | None -> ())
      | _ -> ())

let ()=  run ()
