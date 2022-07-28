open Code_mirror
open Brr
let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = [||]) () =
  let open Editor in
  Console.(log ["toto"]);
  let config =
    State.Config.create ?doc
      ~extensions:(Array.concat [ [| basic_setup |]; exts ])
      ()
  in
  Console.(log ["toto2"]);
  let state = State.create ~config () in
  Console.(log ["toto3"]);
  let opts = View.opts
    ~state
    ~parent:(Document.body G.document) ()
  in
  Console.(log ["toto4"]);
  let view : View.t = View.create ~opts () in
  Console.(log ["toto5"]);
  (state, view)

let _editor = init ~exts:[||] ()
