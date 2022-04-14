open Code_mirror
open Merlin_codemirror

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = [||]) () =
  let open Editor in
  let config =
    State.Config.create ?doc
      ~extensions:(Array.concat [ [| basic_setup |]; exts ])
      ()
  in
  let state = State.create ~config () in
  let opts = View.opts ~state ~parent:(Utils.get_el_by_id "editor") () in
  let view : View.t = View.create ~opts () in
  (state, view)

let worker = Merlin_client.make_worker "merlin_worker.bc.js"

let _editor = init ~exts:(all_extensions worker) ()
