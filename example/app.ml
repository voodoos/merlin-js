open Code_mirror

module Merlin =
  Merlin_codemirror.Make (struct
    let worker_url = "worker/merlin_worker.bc.js"
    let cmis = { Protocol.static_cmis = Static_files.stdlib_cmis; dynamic_cmis = None }
  end)

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = []) () =
  let extensions =
    basic_setup :: Merlin_codemirror.ocaml :: exts
  in
  let config =
    State.EditorStateConfig.create ?doc ~extensions ()
  in
  let state = State.EditorState.create ~config () in
  let config = View.EditorViewConfig.create
    ~state
    ~parent:(Merlin_codemirror.Utils.get_el_by_id "editor") ()
  in
  let view = View.EditorView.create ~config () in
  (state, view)

let _editor = init ~exts:Merlin.all_extensions ()
