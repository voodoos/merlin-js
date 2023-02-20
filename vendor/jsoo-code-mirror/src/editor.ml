module Selection_range = struct
  type t = Jv.t
  include (Jv.Id : Jv.CONV with type t := t)
  let from t = Jv.get t "from" |> Jv.to_int
  let to_ t = Jv.get t "from" |> Jv.to_int
end

module Selection = struct
  type t = Jv.t
  include (Jv.Id : Jv.CONV with type t := t)
  let g = Jv.get Globals.Packages.state "EditorSelection"

  let main t = Jv.get t "main" |> Selection_range.of_jv

  let as_single t = Jv.call t "asSingle" [||] |> of_jv

  let create ~(ranges : Selection_range.t list) ?main_index () =
    let ranges = Jv.of_jv_list ranges in
    let main_index = Option.map Jv.of_int main_index in
    let args = List.append [ ranges ] @@ Option.to_list main_index in
    Jv.call g "create" @@ Array.of_list args

  let range ~anchor ?head ?goal_column () =
    let head = Option.value ~default:anchor head in
    let args =
      List.append [ anchor; head ] @@ Option.to_list goal_column
    in
    Jv.call g "range" (Array.of_list @@ List.map Jv.of_int args)
end

module Transaction = struct
  module Spec = struct
    type t = Jv.t
    include (Jv.Id : Jv.CONV with type t := t)

    let create ?selection () =
      let o = Jv.obj [||] in
      Jv.set_if_some o "selection" selection;
      o
  end
end
module State = struct
  module Config = struct
    type t = Jv.t

    let create ?doc ?selection ?extensions () =
      let o = Jv.obj [||] in
      Jv.Jstr.set_if_some o "doc" doc;
      Jv.set_if_some o "selection" selection;
      Jv.set_if_some o "extensions"
        (Option.map (Jv.of_array Extension.to_jv) extensions);
      o
  end

  module type Facet = sig
    type t

    include Jv.CONV with type t := t

    type input
    type output

    val of_ : t -> input -> Extension.t
  end

  module FacetMaker (I : sig
    type t

    val to_jv : t -> Jv.t
  end) : Facet with type input = I.t and type output = Jv.t = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)

    type input = I.t
    type output = Jv.t

    let of_ t i = Jv.call t "of" [| I.to_jv i |] |> Extension.of_jv
  end

  type ('i, 'o) facet =
    | Facet :
        (module Facet with type input = 'i and type output = 'o and type t = 'a)
        * 'a
        -> ('i, 'o) facet

  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  let create ?(config = Jv.undefined) () =
    let editor_state = Jv.get Globals.Packages.state "EditorState" in
    Jv.call editor_state "create" [| config |]

  let doc t = Jv.get t "doc" |> Text.of_jv
  let selection t = Jv.get t "selection" |> Selection.of_jv
end

(* Helper for function *)
module Func (I : sig
  type t

  include Jv.CONV with type t := t
end) =
struct
  type t = I.t -> unit

  let to_jv f = Jv.repr f
end

(* Helper for lits*)
module List (Elt : sig
  type t

  include Jv.CONV with type t := t
end) =
struct
  type t = Elt.t list

  let to_jv l = Jv.of_list Elt.to_jv l
end

module View = struct
  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  type opts = Jv.t

  let opts ?state ?parent ?root ?dispatch () =
    let o = Jv.obj [||] in
    Jv.set_if_some o "state" state;
    Jv.set_if_some o "root" (Option.map Brr.Document.to_jv root);
    Jv.set_if_some o "dispatch" dispatch;
    Jv.set_if_some o "parent" (Option.map Brr.El.to_jv parent);
    o

  let g = Jv.get Globals.Packages.view "EditorView"
  let create ?(opts = Jv.undefined) () = Jv.new' g [| opts |]
  let state t = Jv.get t "state" |> State.of_jv
  let set_state t v = Jv.call t "setState" [| State.to_jv v |] |> ignore

  module Update = struct
    type t = Jv.t

    let state t = State.of_jv @@ Jv.get t "state"

    include (Jv.Id : Jv.CONV with type t := t)
  end

  let dom t = Jv.get t "dom" |> Brr.El.of_jv

  let update_listener _ : (Update.t -> unit, Jv.t) State.facet =
    let module F = State.FacetMaker (Func (Update)) in
    let jv = Jv.get g "updateListener" in
    Facet ((module F), F.of_jv jv)

  let line_wrapping () = Jv.get g "lineWrapping" |> Extension.of_jv

  let dispatch t transactions = ignore @@
    Jv.call t "dispatch" (Array.of_list transactions)
end

module Command = struct
  type t = target:View.t -> unit
  let to_jv t = Jv.repr @@ fun target -> t ~target:(View.of_jv target)
end

module Key_binding = struct
  type t = Jv.t
  include (Jv.Id : Jv.CONV with type t := t)

  let set_run t (c : Command.t) = Jv.set t "run" @@ Command.to_jv c; t

  let create ?key ?(run : Command.t option) () =
    let o = Jv.obj [||] in
    Jv.Jstr.set_if_some o "key" @@ Option.map Jstr.v key;
    Jv.set_if_some o "run"
      @@ Option.map (fun run -> Command.to_jv run )
      run;
    o
end

let keymap _ : (Key_binding.t list, Jv.t) State.facet =
  let module F = State.FacetMaker (List (Key_binding)) in
  let jv = Jv.get Globals.Packages.view "keymap" in
  Facet ((module F), F.of_jv jv)

let keymap_of keys =
  let Facet (in_, out_) = keymap () in
  let module Keymap = (val in_) in
  Keymap.of_ out_ keys