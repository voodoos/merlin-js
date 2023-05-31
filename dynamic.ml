open Code_mirror

module Merlin =
  Merlin_codemirror.Make (struct
    let worker_url = "merlin_worker.bc.js"
    let cmis =
      let dcs_toplevel_modules = [
        "CamlinternalAtomic";
        "CamlinternalFormat";
        "CamlinternalFormatBasics";
        "CamlinternalLazy";
        "CamlinternalMod";
        "CamlinternalOO";
        "Std_exit";
        "Stdlib";
        "Unix";
        "UnixLabels";
      ] in
      let dcs_url = "/stdlib/" in
      let dcs_file_prefixes = ["stdlib__"] in
    { Protocol.static_cmis = [];
      dynamic_cmis = Some {
        dcs_url; dcs_toplevel_modules; dcs_file_prefixes } }
  end)

let basic_setup = Jv.get Jv.global "__CM__basic_setup" |> Extension.of_jv

let init ?doc ?(exts = [||]) () =
  let open Editor in
  let extensions =
    Array.append [| basic_setup; Merlin_codemirror.ocaml |] exts
  in
  let config =
    State.Config.create ?doc ~extensions ()
  in
  let state = State.create ~config () in
  let opts = View.opts
    ~state
    ~parent:(Merlin_codemirror.Utils.get_el_by_id "editor") ()
  in
  let view : View.t = View.create ~opts () in
  (state, view)

let _editor = init ~exts:Merlin.all_extensions ()
