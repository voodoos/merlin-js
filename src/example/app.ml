open Code_mirror

module Merlin = Merlin_codemirror.Make (struct
  let worker_url = "merlin_worker.bc.js"
  let jump_to_definition_key = Editor.Key_binding.create ~key:"Ctrl-Shift-d" ()
end)

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = [||]) () =
  let open Editor in
  let extensions =
    Array.append [| basic_setup; Merlin_codemirror.ocaml |] exts
  in
  let config = State.Config.create ?doc ~extensions () in
  let state = State.create ~config () in
  let opts =
    View.opts ~state ~parent:(Merlin_codemirror.Utils.get_el_by_id "editor") ()
  in
  let view : View.t = View.create ~opts () in
  (state, view)

(* let key_jtd = Editor.Key_binding.create
   ~key:"Ctrl-d"
   ~run:(fun ~target ->
     let open Transaction in
     Merlin.
     let selection = Editor_selection.create ~ranges:[
         Editor_selection.range ~anchor:2 ()
       ] ()
     in
     Editor.View.dispatch target [ Spec.create ~selection () ] ;
     Brr.Console.(log ["PRESSED:"]))
   () *)

(* let keymap = Editor.keymap_of [key_jtd] *)

let _editor =
  let exts = Merlin.all_extensions in
  init ~exts ()
