open Merlin_kernel
module Location = Ocaml_parsing.Location

type source = string

(** CMIs are provided either statically or as URLs to be downloaded on demand *)

(** Dynamic cmis are loaded from beneath the given url. In addition the
    top-level modules are specified, and prefixes for other modules. For
    example, for the OCaml standard library, a user might pass:

    {[
      { dcs_url="/static/stdlib";
        dcs_toplevel_modules=["Stdlib"];
        dcs_file_prefixes=["stdlib__"]; }
    ]}

    In which case, merlin will expect to be able to download a valid file
    from the url ["/static/stdlib/stdlib.cmi"] corresponding to the
    specified toplevel module, and it will also attempt to download any
    module with the prefix ["Stdlib__"] from the same base url, so for
    example if an attempt is made to look up the module ["Stdlib__Foo"]
    then merlin-js will attempt to download a file from the url
    ["/static/stdlib/stdlib__Foo.cmi"].
    *)

type dynamic_cmis = {
  dcs_url : string;
  dcs_toplevel_modules : string list;
  dcs_file_prefixes : string list;
}

type static_cmi = {
  sc_name : string; (* capitalised, e.g. 'Stdlib' *)
  sc_content : string;
}

type cmis = {
  static_cmis : static_cmi list;
  dynamic_cmis : dynamic_cmis option;
}

type action =
  | Complete_prefix of source * Msource.position
  | Type_enclosing of source * Msource.position
  | All_errors of source
  | Add_cmis of cmis

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

type is_tail_position =
  [`No | `Tail_position | `Tail_call]

(* type errors = { from: int; to_: int; entries: error list } *)
type answer =
 | Errors of error list
 | Completions of completions
 | Typed_enclosings of
    (Location.t * [ `Index of int | `String of string ] * is_tail_position) list
 | Added_cmis

let report_source_to_string = function
  | Location.Lexer   -> "lexer"
  | Location.Parser  -> "parser"
  | Location.Typer   -> "typer"
  | Location.Warning -> "warning" (* todo incorrect ?*)
  | Location.Unknown -> "unknown"
  | Location.Env     -> "env"
  | Location.Config  -> "config"
