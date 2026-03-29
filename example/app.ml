open Code_mirror
open State
open View

module Merlin = Merlin_codemirror.Make (struct
  let worker_url = "workers/merlin_worker.bc.wasm.js"

  let cmis =
    { Protocol.static_cmis = Static_files.stdlib_cmis; dynamic_cmis = None }
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
  let view : EditorView.t = View.EditorView.create ~config () in
  (state, view)

let _editor = init ~exts:Merlin.all_extensions ()
