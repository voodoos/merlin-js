open Code_mirror
open Brr

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

module Highlight = struct
  type t = { from : int; to_ : int }

  include (Jv.Id : Jv.CONV with type t := t)
end

let add_underline =
  let map v changes =
    Some
      Highlight.
        {
          from = State.ChangeDesc.mapPos changes v.from;
          to_ = State.ChangeDesc.mapPos changes v.to_;
        }
  in
  State.StateEffect.define_ Highlight.to_jv Highlight.of_jv ~map

let underline_mark = View.Decoration.mark ~className:"cm-underline" ()

let underline_field =
  let to_jv v = State.RangeSet.ty_to_jv v in
  let of_jv jv =
    State.RangeSet.ty_of_jv
      { Types.to_jv = View.Decoration.to_jv; of_jv = View.Decoration.of_jv }
      jv
  in
  State.StateField.define to_jv of_jv
    ~create:(fun _ -> View.Decoration.none)
    ~update:(fun v tr ->
      let v = State.RangeSet.map v (State.Transaction.changes tr) in
      let effects = State.Transaction.effects tr in
      List.fold_right
        (fun e cur ->
          if State.StateEffect.is e add_underline then
            match State.StateEffect.value e add_underline with
            | Some { from; to_ } ->
                let add = View.Decoration.range ~from ~to_ underline_mark in
                State.RangeSet.update ~add:[ add ] cur
            | None -> cur
          else cur)
        effects v)
    ~provide:(State.Facet.from View.EditorView.decorations)

let underline_theme =
  View.EditorView.(
    base_theme
      (TO
         [
           (".cm-underline", TO [ ("textDecoration", TV "underline 3px red") ]);
         ]))

let underline_selection view =
  let selection = State.EditorState.selection (View.EditorView.state view) in
  let ranges = State.EditorSelection.ranges selection in
  let effects =
    List.filter_map
      (fun r ->
        if State.SelectionRange.empty r then None
        else
          let from = State.SelectionRange.from r in
          let to_ = State.SelectionRange.to_ r in
          Some (State.StateEffect.of_ add_underline { from; to_ }))
      ranges
  in
  match effects with
  | [] -> false
  | effects ->
      let state = View.EditorView.state view in
      let effects =
        try
          ignore (State.EditorState.field state underline_field);
          effects
        with _ ->
          let x =
            State.StateEffect.of_l
              (State.StateEffect.append_config ())
              [ State.StateField.extension underline_field; underline_theme ]
          in
          Console.log [ Jv.of_string "adding underline fields and theme" ];
          x :: effects
      in
      View.EditorView.dispatch view (State.Transaction.create ~effects ());
      true

let keymap = Keymap.create ~key:"F1" ~run:underline_selection ()
let ext = State.Facet.of_ Keymap.keymap keymap

let init ?doc ?(exts = []) () =
  let config =
    State.EditorStateConfig.create ?doc
      ~extensions:(basic_setup :: ext :: exts)
      ()
  in
  let state = State.EditorState.create ~config () in
  let config =
    View.EditorViewConfig.create ~state ~parent:(Document.body G.document) ()
  in
  let view : View.EditorView.t = View.EditorView.create ~config () in
  (state, view)

let _ =
  Console.log [ Jv.of_string "init_underline" ];
  let _state, _view =
    init ~doc:"Select some text and hit 'f1' to highlight it\nSome more text\n"
      ~exts:[] ()
  in
  (* let transaction =
    State.Transaction.create 
      ~effects:[State.StateEffect.of_ add_underline { from = 10; to_ = 20 }]
      ()
  in
  View.EditorView.dispatch view transaction;
  () *)
  ()
