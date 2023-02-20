module Utils : sig
  val get_el_by_id : string -> Brr.El.t
  val get_full_doc : Code_mirror.Editor.State.t -> string
end

val ocaml : Code_mirror.Extension.t
(** An extension providing OCaml syntax highlighting *)

module Make : functor
  (Config : sig
     val worker_url : string
     val jump_to_definition_key : Code_mirror.Editor.Key_binding.t
   end)
  -> sig
  val autocomplete : Code_mirror.Extension.t
  (** An extension providing completions when typing *)

  val tooltip_on_hover : Code_mirror.Extension.t
  (** An extension providing type-information when hovering code *)

  val linter : Code_mirror.Extension.t
  (** An extension that highlights errors and warnings in the code *)

  val all_extensions : Code_mirror.Extension.t array
  (** All the Merlin-specific extensions (does not include [ocaml]) *)
end
