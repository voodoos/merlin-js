open Merlin_kernel
module Location = Ocaml_parsing.Location

type source = string

type action =
  | Complete_prefix of source * Msource.position
  | Type_enclosing of source * Msource.position
  | Jump_to_definition of source * Msource.position
  | All_errors of source

type error = {
  kind : Location.report_kind;
  loc : Location.t;
  main : string;
  sub : string list;
  source : Location.error_source;
}

type completions = {
  from : int;
  to_ : int;
  entries : Query_protocol.Compl.entry list;
}

type is_tail_position = [ `No | `Tail_position | `Tail_call ]

(* type errors = { from: int; to_: int; entries: error list } *)
type answer =
  | Errors of error list
  | Completions of completions
  | Typed_enclosings of
      (Location.t * [ `Index of int | `String of string ] * is_tail_position)
      list
  | Location of
      [ `At_origin
      | `Builtin of string
      | `File_not_found of string
      | `Found of string option * Lexing.position
      | `Invalid_context
      | `Not_found of string * string option
      | `Not_in_env of string ]

let report_source_to_string = function
  | Location.Lexer -> "lexer"
  | Location.Parser -> "parser"
  | Location.Typer -> "typer"
  | Location.Warning -> "warning" (* todo incorrect ?*)
  | Location.Unknown -> "unknown"
  | Location.Env -> "env"
  | Location.Config -> "config"
