open Code_mirror
open Lsp_client
open Brr
open Brr_webworkers

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let worker_transport (worker : Worker.t) : Transport.t =
  let handlers : (Jstr.t -> unit) list ref = ref [] in
  let listener ev =
    let data = Jv.get (Ev.to_jv ev) "data" in
    let msg = Jv.to_jstr data in
    List.iter (fun h -> h msg) !handlers
  in
  let _listener =
    Ev.listen Brr_io.Message.Ev.message listener (Worker.as_target worker)
  in
  Transport.create ~send:(Worker.post worker)
    ~subscribe:(fun handler -> handlers := handler :: !handlers)
    ~unsubscribe:(fun handler ->
      handlers := List.filter (fun h -> h != handler) !handlers)

let _ =
  let open Fut.Result_syntax in
  let worker = Worker.create (Jstr.v "workers/merlin_lsp_worker.bc.js") in
  let transport = worker_transport worker in
  let extensions = language_server_extensions () in
  let client =
    let config =
      LSPClientConfig.create ~root_uri:"file:///workspace" ~extensions ()
    in
    LSPClient.create ~config ()
  in
  let client = LSPClient.connect client transport in
  let+ () = LSPClient.initializing client in
  let () =
    let cmi =
      Jv.obj
        [|
          ("url", Jv.of_string "/example/workers/stdlib/");
          ("toplevelModules", Jv.of_list Jv.of_string [ "Stdlib" ]);
        |]
    in
    let params = Jv.obj [| ("dynamicCmis", Jv.of_list Fun.id [ cmi ]) |] in
    LSPClient.notification client ~method_:"merlin/addCmis" ~params
  in
  let file_uri = "file:///workspace/main.ml" in
  let parent =
    Document.find_el_by_id G.document (Jstr.v "editor") |> Option.get
  in
  let state =
    State.EditorState.create
      ~config:
        (State.EditorStateConfig.create
           ~doc:"(* Type some OCaml here *)\nlet x = 1\nlet y = x + 2\n"
           ~extensions:
             [
               basic_setup;
               LSPClient.plugin client ~file_uri ~language_id:"ocaml" ();
             ]
           ())
      ()
  in
  let config = View.EditorViewConfig.create ~state ~parent () in
  View.EditorView.create ~config ()
