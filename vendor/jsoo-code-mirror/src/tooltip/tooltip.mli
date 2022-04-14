open Code_mirror

val tooltip : Jv.t
(** Global tooltip value *)

module Tooltip_view : sig
  (** Describes the way a tooltip is displayed. *)

  type t
  (** TooltypeView *)

  include Jv.CONV with type t := t

  val dom : t -> Brr.El.t
  (** The DOM element to position over the editor. *)

  type offset = { x: int; y: int }
  type coords = { left: int; right: int; top: int; bottom: int }


  val create :
    dom: Brr.El.t ->
    ?get_coords: (int -> coords) ->
    ?overlap: bool ->
    ?mount: (Editor.View.t -> unit) ->
    ?update: (Editor.View.Update.t -> unit) ->
    ?positioned: (unit -> unit) ->
    unit -> t
end

module Tooltip : sig
  (** Describes a tooltip. Values of this type, when provided through the
  show_tooltip facet, control the individual tooltips on the editor. *)

  type t
  (** Tooltip *)

  include Jv.CONV with type t := t

  val pos : t -> int
  (** The document position at which to show the tooltip. *)

  val end_ : t -> int option
  (** The end of the range annotated by this tooltip, if different from pos. *)

  val create :
    pos:int ->
    ?end_:int ->
    create:(Editor.View.t -> Tooltip_view.t) ->
    ?above:bool ->
    ?strict_side:bool ->
    ?arrow:bool ->
    unit -> t
end

type hover_config
val hover_config :
  ?hide_on_change: bool ->
  ?hover_time: int ->
  unit ->
  hover_config

val hover_tooltip :
  ?config:hover_config ->
  (view:Editor.View.t -> pos:int -> side: int -> Tooltip.t option Fut.t) ->
  Extension.t
