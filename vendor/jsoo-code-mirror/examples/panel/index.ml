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

let update dom v =
  let st = View.EditorView.Update.state v in
  let doc = State.EditorState.doc st in
  let length = State.Text.length doc in
  El.set_children dom [ El.txt' (string_of_int length) ]

let panel_constructor (_v : View.EditorView.t) =
  let dom = Brr.El.div [ Brr.El.txt (Jstr.v "Hello! This is a panel\n") ] in
  View.Panel.create ~update:(update dom) dom

let _ =
  let toggleHelp = State.StateEffect.define Jv.of_bool Jv.to_bool in

  let state_update cur t =
    let effects = State.Transaction.effects t in
    List.fold_right
      (fun e cur ->
        match State.StateEffect.value e toggleHelp with Some b -> b | _ -> cur)
      effects cur
  in

  let provide field =
    State.Facet.from' View.showPanel field (fun b ->
        if b then Some panel_constructor else None)
  in

  let help_state =
    State.StateField.define Jv.of_bool Jv.to_bool
      ~create:(fun _ -> false)
      ~provide ~update:state_update
  in

  let run v =
    let cur = State.EditorState.field (View.EditorView.state v) help_state in
    let eff = State.StateEffect.of_ toggleHelp (not cur) in
    let transaction = State.Transaction.create ~effects:[ eff ] () in
    View.EditorView.dispatch v transaction;
    true
  in

  let keymap = Keymap.create ~key:"F1" ~run () in

  let ext = State.Facet.of_ Keymap.keymap keymap in

  let _editor =
    init ~doc:"Press 'f1' to toggle the panel"
      ~exts:[ ext; State.StateField.extension help_state ]
      ()
  in
  ()
