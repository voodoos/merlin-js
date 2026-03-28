open Code_mirror
open Brr

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = []) () =
  let config =
    State.EditorStateConfig.create ?doc ~extensions:(basic_setup :: exts) ()
  in
  let state = State.EditorState.create ~config () in
  let config =
    View.EditorViewConfig.create ~state ~parent:(Document.body G.document) ()
  in
  let view : View.EditorView.t = View.EditorView.create ~config () in
  (state, view)

let _ =
  let _state, view =
    init ~doc:"This doesn't have an asterisk in initially\nSome more text\n"
      ~exts:[] ()
  in
  let selection = State.Transaction.Short { anchor = 10; head = Some 20 } in
  let transaction =
    State.Transaction.create ~selection
      ~changes:{ from = 10; insert = Some "*"; to_ = None }
      ()
  in
  View.EditorView.dispatch view transaction;
  ()
