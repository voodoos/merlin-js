module Selection_range : sig
  type t
  include Jv.CONV with type t := t

  (** The lower boundary of the range. *)
  val from : t -> int

  (** The upper boundary of the range. *)
  val to_ : t -> int
end

module Selection : sig
  type t
  include Jv.CONV with type t := t

  (** Get the primary selection range. *)
  val main : t -> Selection_range.t

  (** Make sure the selection only has one range. Returns a selection holding
      only the main range from this selection. *)
  val as_single : t -> t

  (** Sort and merge the given set of ranges, creating a valid selection. *)
  val create : ranges:Selection_range.t list -> ?main_index:int -> unit -> t

  (** Create a selection range. *)
  val range :
    anchor:int ->
    ?head:int ->
    ?goal_column:int ->
    unit ->
    Selection_range.t
end

module Transaction : sig
  module Spec : sig
    type t
    include Jv.CONV with type t := t
    val create : ?selection:Selection.t -> unit -> t
  end
end

module State : sig
  type t

  include Jv.CONV with type t := t

  module Config : sig
    type t

    (* TODO: Add selection *)
    val create :
      ?doc:Jstr.t ->
      ?selection:Jv.t ->
      ?extensions:Extension.t array ->
      unit ->
      t
  end

  module type Facet = sig
    type t

    include Jv.CONV with type t := t

    type input
    type output

    val of_ : t -> input -> Extension.t
  end

  module FacetMaker : functor
    (I : sig
       type t

       include Jv.CONV with type t := t
     end)
    -> Facet with type input = I.t

  type ('i, 'o) facet =
    | Facet :
        (module Facet with type input = 'i and type output = 'o and type t = 'a)
        * 'a
        -> ('i, 'o) facet

  val create : ?config:Config.t -> unit -> t
  val doc : t -> Text.t
  val selection : t -> Selection.t
end

module View : sig
  type t
  (** Editor view *)

  include Jv.CONV with type t := t

  type opts
  (** Configurable options for the editor view *)

  (* TODO: Dispatch function *)
  val opts :
    ?state:State.t ->
    ?parent:Brr.El.t ->
    ?root:Brr.El.document ->
    ?dispatch:Jv.t ->
    unit ->
    opts

  val create : ?opts:opts -> unit -> t
  (** Create a new view *)

  val state : t -> State.t
  (** Current editor state *)

  val set_state : t -> State.t -> unit

  module Update : sig
    type t

    val state : t -> State.t

    include Jv.CONV with type t := t
  end

  val dom : t -> Brr.El.t
  val update_listener : unit -> (Update.t -> unit, Jv.t) State.facet
  val line_wrapping : unit -> Extension.t

  val dispatch : t -> Transaction.Spec.t list -> unit
end

module Command : sig
  type t = target:View.t -> unit
end

module Key_binding : sig
  type t
  val set_run : t -> Command.t -> t
  val create : ?key:string -> ?run:Command.t -> unit -> t
end

val keymap_of : Key_binding.t list -> Extension.t