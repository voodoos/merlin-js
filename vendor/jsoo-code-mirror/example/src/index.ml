open Code_mirror
open Brr

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let markdown () =
  let md = Jv.get Jv.global "__CM__markdown" in
  Jv.apply md [||] |> Extension.of_jv

let () =
  let open Editor in
  let config =
    State.Config.create ~extensions:[| basic_setup; markdown () |] ()
  in
  let state = State.create ~config () in
  let opts = View.opts ~state ~parent:(Document.body G.document) () in
  let _editor : View.t = View.create ~opts () in
  Console.log [ _editor; state; config ];
  ()
