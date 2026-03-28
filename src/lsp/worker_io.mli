include Linol.IO with type 'a t = 'a Lwt.t and type out_channel = unit

val create_in_channel : unit -> in_channel
val push_message : in_channel -> string -> unit
