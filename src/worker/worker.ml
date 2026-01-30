open Merlin_utils
open Std
open Js_of_ocaml
open Merlin_kernel
open Ocaml_typing
module Location = Ocaml_parsing.Location

let stdlib_path = "/static/cmis"
let log s = Console.console##log (Js.string s)

type cmaybe = Cmi of Cmi_format.cmi_infos | Url of string
let cmi_store : (string, cmaybe) Hashtbl.t = Hashtbl.create 128

let sync_get url =
    let x = XmlHttpRequest.create () in
    x##.responseType := Js.string "arraybuffer";
    x##_open (Js.string "GET") (Js.string url) Js._false;
    x##send Js.null;
    match x##.status with
    | 200 ->
        Js.Opt.case
          (File.CoerceTo.arrayBuffer x##.response)
          (fun () ->
            Console.console##log (Js.string "Failed to receive file");
            None)
          (fun b -> Some (Typed_array.String.of_arrayBuffer b))
    | _ -> None

let filename_of_module unit_name =
  Printf.sprintf "%s.cmi" (String.uncapitalize_ascii unit_name)

type header = Misc.modname * Ocaml_typing.Types.signature_item list

let read_cmi_from_string s =
  let open Cmi_format in
  match String.chop_prefix ~prefix:Config.cmi_magic_number s with
  | None -> log "Wrong magic number"; None
  | Some rest ->
    let rest = String.to_bytes rest in
    let (cmi_name, cmi_sign) : header = Marshal.from_bytes rest 0 in
    let offset = Marshal.header_size + Marshal.data_size rest 0 in
    let cmi_crcs : Misc.crcs = Marshal.from_bytes rest offset in
    let offset = offset + Marshal.header_size + Marshal.data_size rest offset in
    let cmi_flags : Cmi_format.pers_flags list = Marshal.from_bytes rest offset in
    Some { cmi_name; cmi_sign; cmi_crcs; cmi_flags }

let cmi_load_url = ["stdlib/"]

let persistent_sig_loader ~allow_hidden:_ ~unit_name =
  let open Ocaml_typing.Persistent_env.Persistent_signature in
  log @@ Printf.sprintf "Loading signature for %S" unit_name;
  match Hashtbl.find_opt cmi_store unit_name with
  | Some (Cmi infos) ->
            Some { filename = unit_name;
                   cmi = infos;
                   visibility = Visible }
  | Some (Url url) -> Option.bind (sync_get url) ~f:(read_cmi_from_string) |> Option.map ~f:(fun cmi ->
            Hashtbl.replace cmi_store unit_name (Cmi cmi);
            { filename = unit_name;
          cmi;
          visibility = Visible })
  | None ->
      List.find_mapi cmi_load_url ~f:(fun _ url ->
        let filename = filename_of_module unit_name in
        (* TODO use a specialize concat for urls *)
        let url = Filename.concat url filename in
        Option.bind (sync_get url) ~f:(read_cmi_from_string) |> Option.map ~f:(fun cmi ->
          Hashtbl.replace cmi_store unit_name (Cmi cmi);
          { filename = unit_name;
        cmi;
        visibility = Visible }))


  let add_cmis { Protocol.static_cmis; dynamic_cmis } =
    List.iter static_cmis ~f:(fun { Protocol.sc_name; sc_content } ->
      let cmi_infos = read_cmi_from_string sc_content in
      Option.iter cmi_infos ~f:(fun cmi_infos ->
        Hashtbl.add cmi_store sc_name (Cmi cmi_infos)));
        Option.iter dynamic_cmis ~f:(fun
            { Protocol.dcs_url; dcs_toplevel_modules; _ } ->
          List.iter dcs_toplevel_modules ~f:(fun name ->
            let filename = filename_of_module name in
            let url = Filename.concat dcs_url filename in
            log @@ Printf.sprintf "Known cmi for %s: %s %s" name filename url;
            Hashtbl.add cmi_store name (Url url)));
    Protocol.Added_cmis

let config =
  let initial = Mconfig.initial in
  { initial with
    merlin = { initial.merlin with
      stdlib = Some stdlib_path }}

let make_pipeline source =
  Mpipeline.make config source

let dispatch source query  =
  let pipeline = make_pipeline source in
  Mpipeline.with_pipeline pipeline @@ fun () -> (
    Query_commands.dispatch pipeline query
  )

module Completion = struct
  (* Prefixing code from ocaml-lsp-server *)
  let rfindi =
    let rec loop s ~f i =
      if i < 0 then
        None
      else if f (String.unsafe_get s i) then
        Some i
      else
        loop s ~f (i - 1)
    in
    fun ?from s ~f ->
      let from =
        let len = String.length s in
        match from with
        | None -> len - 1
        | Some i ->
          if i > len - 1 then
            raise @@ Invalid_argument "rfindi: invalid from"
          else
            i
      in
      loop s ~f from
  let lsplit2 s ~on =
    match String.index_opt s on with
    | None -> None
    | Some i ->
      let open String in
      Some (sub s ~pos:0 ~len:i, sub s ~pos:(i + 1) ~len:(length s - i - 1))

  (** @see <https://ocaml.org/manual/lex.html> reference *)
  let prefix_of_position ?(short_path = false) source position =
    match Msource.text source with
    | "" -> ""
    | text ->
      let from =
        let (`Offset index) = Msource.get_offset source position in
        min (String.length text - 1) (index - 1)
      in
      let pos =
        let should_terminate = ref false in
        let has_seen_dot = ref false in
        let is_prefix_char c =
          if !should_terminate then
            false
          else
            match c with
            | 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '\'' | '_'
            (* Infix function characters *)
            | '$' | '&' | '*' | '+' | '-' | '/' | '=' | '>'
            | '@' | '^' | '!' | '?' | '%' | '<' | ':' | '~' | '#' ->
              true
            | '`' ->
              if !has_seen_dot then
                false
              else (
                should_terminate := true;
                true
              ) | '.' ->
              has_seen_dot := true;
              not short_path
            | _ -> false
        in
        rfindi text ~from ~f:(fun c -> not (is_prefix_char c))
      in
      let pos =
        match pos with
        | None -> 0
        | Some pos -> pos + 1
      in
      let len = from - pos + 1 in
      let reconstructed_prefix = String.sub text ~pos ~len in
      (* if we reconstructed [~f:ignore] or [?f:ignore], we should take only
        [ignore], so: *)
      if
        String.is_prefixed ~by:"~" reconstructed_prefix
        || String.is_prefixed ~by:"?" reconstructed_prefix
      then
        match lsplit2 reconstructed_prefix ~on:':' with
        | Some (_, s) -> s
        | None -> reconstructed_prefix
      else
        reconstructed_prefix


  let at_pos source position =
    let prefix = prefix_of_position source position in
    let `Offset to_ = Msource.get_offset source position in
    let from =
      to_ - String.length (prefix_of_position ~short_path:true source position)
    in
    if prefix = "" then
      None
    else
      let query = Query_protocol.Complete_prefix (prefix, position, [], true, true)
      in
      Some (from, to_, dispatch source query)
end
(*
let dump () =
  let query = Query_protocol.Dump [`String "paths"] in
  dispatch (Msource.make "") query *)

(* let dump_config () =
  let pipeline = make_pipeline (Msource.make "") in
  Mpipeline.with_pipeline pipeline @@ fun () ->
    Mconfig.dump (Mpipeline.final_config pipeline)
    |> Json.pretty_to_string *)

let on_message = function
  | Protocol.Complete_prefix (source, position) ->
    let source = Msource.make source in
    begin match Completion.at_pos source position with
    | Some (from, to_, compl) ->
      let entries = compl.entries in
      Protocol.Completions { from; to_; entries; }
    | None ->
      Protocol.Completions { from = 0; to_ = 0; entries = []; }
    end
  | Type_enclosing (source, position) ->
    let source = Msource.make source in
    let query = Query_protocol.Type_enclosing (None, position, None) in
    Protocol.Typed_enclosings (dispatch source query)
  | Protocol.All_errors source ->
    let source = Msource.make source in
    let query = Query_protocol.Errors {
        lexing = true;
        parsing = true;
        typing = true;
      }
    in
    let errors =
      dispatch source query
      |> List.map ~f:(fun (Location.{kind; sub; source; _} as error) ->
        let of_sub sub =
            Location.print_sub_msg Format.str_formatter sub;
            String.trim (Format.flush_str_formatter ())
        in
        let loc = Location.loc_of_report error in
        let main =
          Format.asprintf "@[%a@]" Location.print_main error |> String.trim
        in
        Protocol.{
          kind;
          loc;
          main;
          sub = List.map ~f:of_sub sub;
          source;
      })
    in
    Protocol.Errors errors
  | Add_cmis cmis ->
    add_cmis cmis

let post res =
  Marshal.to_string res []
  |> Js.bytestring
  |> Worker.post_message

let run () =
  Console.console##log (Js.string "Worker running");
  Ocaml_typing.Persistent_env.Persistent_signature.load := persistent_sig_loader;
  Worker.set_onmessage (fun marshaled_message ->
    let action : Protocol.action =
      let str = Js.to_bytestring marshaled_message in
      Marshal.from_string str 0
    in
    log @@ Printf.sprintf "Received message with action %S"
      (Protocol.action_to_string action);
    let res = on_message action in
    log @@ Printf.sprintf "Sending message with answer %S"
      (Protocol.answer_to_string res);
    post res);
  post Protocol.Ready
