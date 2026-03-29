open Code_mirror
open State
open View

module Merlin = Merlin_codemirror.Make (struct
  let worker_url = "workers/merlin_worker.bc.wasm.js"

  let cmis =
    let dcs_toplevel_modules =
      [
        "CamlinternalAtomic";
        "CamlinternalFormat";
        "CamlinternalFormatBasics";
        "CamlinternalLazy";
        "CamlinternalMod";
        "CamlinternalOO";
        "Std_exit";
        "Stdlib";
        "Unix";
        "UnixLabels";
      ]
    in
    let dcs_url = "stdlib/" in
    let dcs_file_prefixes = [] in
    {
      Protocol.static_cmis = [];
      dynamic_cmis = Some { dcs_url; dcs_toplevel_modules; dcs_file_prefixes };
    }
end)

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = []) () =
  let extensions = List.append [ basic_setup; Merlin_codemirror.ocaml ] exts in
  let config = EditorStateConfig.create ?doc ~extensions () in
  let state = EditorState.create ~config () in
  let config =
    EditorViewConfig.create ~state
      ~parent:(Merlin_codemirror.Utils.get_el_by_id "editor")
      ()
  in
  let view : EditorView.t = EditorView.create ~config () in
  (state, view)

let _editor = init ~exts:Merlin.all_extensions ()
