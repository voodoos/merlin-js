module Utils : sig
  val get_el_by_id : string -> Brr.El.t
  val get_full_doc : Code_mirror.Editor.State.t -> string
end

val ocaml : Code_mirror.Extension.t
(** An extension providing OCaml syntax highlighting *)

module type Config = sig
  val worker_url : string
  (** The url of the worker javascript file *)

  val cmis : Protocol.cmis
  (** CMIs are required for merlin to work correctly. These can either be
      provided statically or provided as a list of URLs from which the
      CMIs can be downloaded. If using URLs, these will only be
      downloaded on demand. *)
end

module Make : functor (Config : Config) -> sig
  val autocomplete : Code_mirror.Extension.t
  (** An extension providing completions when typing *)

  val tooltip_on_hover : Code_mirror.Extension.t
  (** An extension providing type-information when hovering code *)

  val linter : Code_mirror.Extension.t
  (** An extension that highlights errors and warnings in the code *)

  val all_extensions : Code_mirror.Extension.t array
  (** All the Merlin-specific extensions (does not include [ocaml]) *)
end
