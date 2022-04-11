open Code_mirror
open Brr
module Json = Yojson.Basic

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let get_el_by_id i =
  Brr.Document.find_el_by_id G.document (Jstr.of_string i) |> Option.get

let worker = Merlin_client.make_worker "merlin_worker.bc.js"

let get_full_doc state =
  let lines = Editor.(state |> State.doc |> Text.to_jstr_array) in
  lines |> Array.map Jstr.to_string |> Array.to_list |> String.concat "\n"

let linter : (Editor.View.t -> Lint.Diagnostic.t array Fut.t) = fun view ->
  let open Fut.Syntax in
  let doc = get_full_doc @@ Editor.View.state view in
  let+ result = Merlin_client.query_errors worker doc in
  List.map (fun Protocol.{ kind; loc; main; sub = _; source } ->
      let from = loc.loc_start.pos_cnum in
      let to_ = loc.loc_end.pos_cnum in
      let source = Protocol.report_source_to_string source in
      let severity = match kind with
        | Report_error
        | Report_warning_as_error _
        | Report_alert_as_error _ -> Lint.Diagnostic.Error
        | Report_warning _ -> Lint.Diagnostic.Warning
        | Report_alert _ -> Lint.Diagnostic.Info
      in
      Lint.Diagnostic.create ~source ~from ~to_ ~severity ~message:main ()
    ) result
  |> Array.of_list

let init ?doc ?(exts = [||]) () =
  let open Editor in
  let config =
    State.Config.create ?doc
      ~extensions:(Array.concat [ [| basic_setup |]; exts ])
      ()
  in
  let state = State.create ~config () in
  let opts = View.opts ~state ~parent:(get_el_by_id "editor") () in
  let view : View.t = View.create ~opts () in
  (state, view)

let _editor = init ~exts:[| Lint.create linter |] ()
