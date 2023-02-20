open Code_mirror
open Brr
module Utils = Utils

let linter worker view =
  let open Fut.Syntax in
  let doc = Utils.get_full_doc @@ Editor.View.state view in
  let+ result = Merlin_client.query_errors worker doc in
  List.map
    (fun Protocol.{ kind; loc; main; sub = _; source } ->
      let from = loc.loc_start.pos_cnum in
      let to_ = loc.loc_end.pos_cnum in
      let source = Protocol.report_source_to_string source in
      let severity =
        match kind with
        | Report_error | Report_warning_as_error _ | Report_alert_as_error _ ->
            Lint.Diagnostic.Error
        | Report_warning _ -> Lint.Diagnostic.Warning
        | Report_alert _ -> Lint.Diagnostic.Info
      in
      Lint.Diagnostic.create ~source ~from ~to_ ~severity ~message:main ())
    result
  |> Array.of_list

let keywords =
  List.map
    (fun label -> Autocomplete.Completion.create ~label ~type_:"keyword" ())
    [
      "as";
      "do";
      "else";
      "end";
      "exception";
      "fun";
      "functor";
      "if";
      "in";
      "include";
      "let";
      "of";
      "open";
      "rec";
      "struct";
      "then";
      "type";
      "val";
      "while";
      "with";
      "and";
      "assert";
      "begin";
      "class";
      "constraint";
      "done";
      "downto";
      "external";
      "function";
      "initializer";
      "lazy";
      "match";
      "method";
      "module";
      "mutable";
      "new";
      "nonrec";
      "object";
      "private";
      "sig";
      "to";
      "try";
      "value";
      "virtual";
      "when";
    ]

let merlin_completion worker ctx =
  let open Fut.Syntax in
  let source = Utils.get_full_doc @@ Autocomplete.Context.state ctx in
  let pos = Autocomplete.Context.pos ctx in
  let+ { from; to_; entries } =
    Merlin_client.query_completions worker source (`Offset pos)
  in
  let options =
    let num_completions = List.length entries in
    List.mapi
      (fun i Query_protocol.Compl.{ name; desc; _ } ->
        let boost = num_completions - i in
        Autocomplete.Completion.create ~label:name ~detail:desc ~boost ())
      entries
  in
  Some (Autocomplete.Result.create ~filter:true ~from ~to_ ~options ())

let autocomplete worker =
  let override =
    [
      Autocomplete.Source.from_list keywords;
      Autocomplete.Source.create @@ merlin_completion worker;
    ]
  in
  let config = Autocomplete.config () ~override in
  Autocomplete.create ~config ()

let tooltip_on_hover worker =
  let open Tooltip in
  hover_tooltip @@ fun ~view ~pos ~side:_ ->
  let open Fut.Syntax in
  let doc = Utils.get_full_doc @@ Editor.View.state view in
  let pos = `Offset pos in
  let+ result = Merlin_client.query_type worker doc pos in
  match result with
  | (loc, `String type_, _) :: _ ->
      let create _view =
        let dom = El.div [ El.txt' type_ ] in
        Tooltip_view.create ~dom ()
      in
      let pos = loc.loc_start.pos_cnum in
      let end_ = loc.loc_end.pos_cnum in
      Some (Tooltip.create ~pos ~end_ ~above:true ~arrow:true ~create ())
  | _ -> None

let jump_to_definition worker key_binding =
  let open Editor in
  let run ~target =
    let open Fut.Syntax in
    let doc = Utils.get_full_doc @@ View.state target in
    let pos =
      `Offset
        (View.state target |> State.selection |> Selection.main
       |> Selection_range.from)
    in
    Brr.Console.(log [ "Locate pressed:"; pos ]);
    ignore
    @@ let+ result = Merlin_client.query_jump_to_definition worker doc pos in
       match result with
       | `Found (_file, loc) ->
           let anchor = loc.pos_cnum in
           let selection = Selection.(create ~ranges:[ range ~anchor () ]) () in
           View.dispatch target [ Transaction.Spec.create ~selection () ];
           Brr.Console.(log [ "Locate result:"; loc.pos_cnum ])
       | `File_not_found file ->
           let file =
             String.split_on_char '\'' file |> List.rev |> List.tl |> List.hd
           in
           let file =
             String.concat ""
               [
                 "https://github.com/ocaml/ocaml/tree/4.14/stdlib/";
                 String.uncapitalize_ascii file;
                 ".ml";
               ]
           in
           let window = Jv.get Jv.global "window" |> Brr.Window.of_jv in
           let name = Jstr.of_string "_blank" in
           ignore @@ Brr.Window.open' window ~name (Jstr.of_string file);
           Brr.Console.(log [ "Locate result:"; "file not found"; file ])
       | _ -> Brr.Console.(log [ "Locate result:"; "not found" ])
  in
  keymap_of [ Key_binding.set_run key_binding run ]

let ocaml = Jv.get Jv.global "__CM__mllike" |> Stream.Language.of_jv
let ocaml = Stream.Language.define ocaml

module Make (Config : sig
  val worker_url : string
  val jump_to_definition_key : Editor.Key_binding.t
end) =
struct
  let worker = Merlin_client.make_worker Config.worker_url
  let autocomplete = autocomplete worker
  let tooltip_on_hover = tooltip_on_hover worker
  let linter = Lint.create (linter worker)

  let jump_to_definition =
    jump_to_definition worker Config.jump_to_definition_key

  let all_extensions =
    [| linter; autocomplete; tooltip_on_hover; jump_to_definition |]
end
