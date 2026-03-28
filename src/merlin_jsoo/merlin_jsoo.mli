open Merlin_kernel

val log : string -> unit

val init : unit -> unit
(** Install the persistent signature loader. Must be called before any merlin
    query. *)

val add_static_cmis : (string * string) list -> unit
(** Register CMIs from in-memory content. Each pair is
    [(module_name, raw_cmi_bytes)]. *)

val add_dynamic_cmis : url:string -> toplevel_modules:string list -> unit
(** Register CMIs to be fetched on demand from the given base URL. *)

val dispatch : Msource.t -> 'a Query_protocol.t -> 'a
(** Run a merlin query on the given source. *)

module Completion : sig
  val prefix_of_position :
    ?short_path:bool -> Msource.t -> Msource.position -> string
  (** Extract the completion prefix at the given position. *)
end
