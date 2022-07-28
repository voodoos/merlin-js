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
    let editor_state = Jv.get Jv.global "__CM__state" in
    Jv.call editor_state "create" [| config |]

  let doc t = Jv.get t "doc" |> Text.of_jv
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

  let g = Jv.get Jv.global "__CM__view"
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
end
