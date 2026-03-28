open Merlin_utils
open Std
open Js_of_ocaml
open Merlin_kernel
open Merlin_jsoo
module Location = Ocaml_parsing.Location

let add_cmis { Protocol.static_cmis; dynamic_cmis } =
  List.iter static_cmis ~f:(fun { Protocol.sc_name; sc_content } ->
      Merlin_jsoo.add_static_cmis [ (sc_name, sc_content) ]);
  Option.iter dynamic_cmis
    ~f:(fun { Protocol.dcs_url; dcs_toplevel_modules; _ } ->
      Merlin_jsoo.add_dynamic_cmis ~url:dcs_url
        ~toplevel_modules:dcs_toplevel_modules);
  Protocol.Added_cmis

let at_pos source position =
  let prefix = Completion.prefix_of_position source position in
  let (`Offset to_) = Msource.get_offset source position in
  let from =
    to_
    - String.length
        (Completion.prefix_of_position ~short_path:true source position)
  in
  if prefix = "" then None
  else
    let query =
      Query_protocol.Complete_prefix (prefix, position, [], true, true)
    in
    Some (from, to_, dispatch source query)

let on_message = function
  | Protocol.Complete_prefix (source, position) ->
      let source = Msource.make source in
      begin match at_pos source position with
      | Some (from, to_, compl) ->
          let entries = compl.entries in
          Protocol.Completions { from; to_; entries }
      | None -> Protocol.Completions { from = 0; to_ = 0; entries = [] }
      end
  | Type_enclosing (source, position) ->
      let source = Msource.make source in
      let query = Query_protocol.Type_enclosing (None, position, None) in
      Protocol.Typed_enclosings (Merlin_jsoo.dispatch source query)
  | Protocol.All_errors source ->
      let source = Msource.make source in
      let query =
        Query_protocol.Errors { lexing = true; parsing = true; typing = true }
      in
      let errors =
        Merlin_jsoo.dispatch source query
        |> List.map ~f:(fun (Location.{ kind; sub; source; _ } as error) ->
            let of_sub sub =
              Location.print_sub_msg Format.str_formatter sub;
              String.trim (Format.flush_str_formatter ())
            in
            let loc = Location.loc_of_report error in
            let main =
              Format.asprintf "@[%a@]" Location.print_main error |> String.trim
            in
            Protocol.{ kind; loc; main; sub = List.map ~f:of_sub sub; source })
      in
      Protocol.Errors errors
  | Add_cmis cmis -> add_cmis cmis

let post res = Marshal.to_string res [] |> Js.bytestring |> Worker.post_message

let run () =
  let open Merlin_jsoo in
  Console.console##log (Js.string "Worker running");
  init ();
  Worker.set_onmessage (fun marshaled_message ->
      let action : Protocol.action =
        let str = Js.to_bytestring marshaled_message in
        Marshal.from_string str 0
      in
      log
      @@ Printf.sprintf "Received message with action %S"
           (Protocol.action_to_string action);
      let res = on_message action in
      log
      @@ Printf.sprintf "Sending message with answer %S"
           (Protocol.answer_to_string res);
      post res);
  post Protocol.Ready
