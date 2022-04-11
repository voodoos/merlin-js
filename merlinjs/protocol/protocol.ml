open Merlin_kernel
module Location = Ocaml_parsing.Location

type source = string
type action = Complete_prefix of source * Msource.position | Type_enclosing | All_errors of source
type error = {
  kind : Location.report_kind;
  loc: Location.t;
  main : string;
  sub : string list;
  source : Location.error_source;
}
type completions = {
  from: int;
  to_: int;
  entries : Query_protocol.Compl.entry list
}
(* type errors = { from: int; to_: int; entries: error list } *)
type answer = Errors of error list | Completions of completions

let report_source_to_string = function
  | Location.Lexer   -> "lexer"
  | Location.Parser  -> "parser"
  | Location.Typer   -> "typer"
  | Location.Warning -> "warning" (* todo incorrect ?*)
  | Location.Unknown -> "unknown"
  | Location.Env     -> "env"
  | Location.Config  -> "config"
