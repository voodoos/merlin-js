open Merlin_utils
open Std
open Js_of_ocaml
open Merlin_kernel
module Location = Ocaml_parsing.Location

let stdlib_path = "/static/cmis"
let log s = Console.console##log (Js.string s)

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

let reset_dirs () =
  Ocaml_utils.Directory_content_cache.clear ();
  let open Ocaml_utils.Load_path in
  let { visible; hidden } = get_paths () in
  reset ();
  init ~auto_include:no_auto_include ~visible ~hidden

let add_dynamic_cmis dcs =
    let open Ocaml_typing.Persistent_env.Persistent_signature in
    let old_loader = !load in

    let fetch =
      (fun filename ->
        let url = Filename.concat dcs.Protocol.dcs_url filename in
        sync_get url)
    in

    List.iter ~f:(fun name ->
      let filename = filename_of_module name in
      match fetch (filename_of_module name) with
      | Some content ->
        let name = Filename.(concat stdlib_path filename) in
        Sys_js.create_file ~name ~content
      | None -> ()) dcs.dcs_toplevel_modules;

    let new_load ~allow_hidden ~unit_name =
      let filename = filename_of_module unit_name in
      let fs_name = Filename.(concat stdlib_path filename) in
      (* Check if it's already been downloaded. This will be the
         case for all toplevel cmis. Also check whether we're supposed
         to handle this cmi *)
      if
        not (Sys.file_exists fs_name) &&
        List.exists ~f:(fun prefix ->
          String.starts_with ~prefix filename) dcs.dcs_file_prefixes
      then begin
        match fetch filename with
        | Some x ->
          Sys_js.create_file ~name:fs_name ~content:x;
          (* At this point we need to tell merlin that the dir contents
              have changed *)
          reset_dirs ()
        | None ->
          Printf.eprintf "Warning: Expected to find cmi at: %s\n%!"
            (Filename.concat dcs.Protocol.dcs_url filename)
      end;
      old_loader ~allow_hidden ~unit_name
    in
    load := new_load

  let add_cmis { Protocol.static_cmis; dynamic_cmis } =
    List.iter static_cmis ~f:(fun { Protocol.sc_name; sc_content } ->
      let filename = Printf.sprintf "%s.cmi" (String.uncapitalize_ascii sc_name) in
      let name = Filename.(concat stdlib_path filename) in
      Sys_js.create_file ~name ~content:sc_content);
    Option.iter ~f:add_dynamic_cmis dynamic_cmis;
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
