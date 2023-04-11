open Code_mirror

module Merlin =
  Merlin_codemirror.Make (struct
    let worker_url = "merlin_worker.bc.js"
    let cmis =
      let cmi_names = [
        "arith_status.cmi";
        "big_int.cmi";
        "bigarray.cmi";
        "camlinternalAtomic.cmi";
        "camlinternalFormat.cmi";
        "camlinternalFormatBasics.cmi";
        "camlinternalLazy.cmi";
        "camlinternalMod.cmi";
        "camlinternalOO.cmi";
        "dynlink.cmi";
        "event.cmi";
        "nat.cmi";
        "num.cmi";
        "profiling.cmi";
        "ratio.cmi";
        "runtime_events.cmi";
        "std_exit.cmi";
        "stdlib.cmi";
        "stdlib__Arg.cmi";
        "stdlib__Array.cmi";
        "stdlib__ArrayLabels.cmi";
        "stdlib__Atomic.cmi";
        "stdlib__Bigarray.cmi";
        "stdlib__Bool.cmi";
        "stdlib__Buffer.cmi";
        "stdlib__Bytes.cmi";
        "stdlib__BytesLabels.cmi";
        "stdlib__Callback.cmi";
        "stdlib__Char.cmi";
        "stdlib__Complex.cmi";
        "stdlib__Condition.cmi";
        "stdlib__Digest.cmi";
        "stdlib__Domain.cmi";
        "stdlib__Effect.cmi";
        "stdlib__Either.cmi";
        "stdlib__Ephemeron.cmi";
        "stdlib__Filename.cmi";
        "stdlib__Float.cmi";
        "stdlib__Format.cmi";
        "stdlib__Fun.cmi";
        "stdlib__Gc.cmi";
        "stdlib__Genlex.cmi";
        "stdlib__Hashtbl.cmi";
        "stdlib__In_channel.cmi";
        "stdlib__Int.cmi";
        "stdlib__Int32.cmi";
        "stdlib__Int64.cmi";
        "stdlib__Lazy.cmi";
        "stdlib__Lexing.cmi";
        "stdlib__List.cmi";
        "stdlib__ListLabels.cmi";
        "stdlib__Map.cmi";
        "stdlib__Marshal.cmi";
        "stdlib__MoreLabels.cmi";
        "stdlib__Mutex.cmi";
        "stdlib__Nativeint.cmi";
        "stdlib__Obj.cmi";
        "stdlib__Oo.cmi";
        "stdlib__Option.cmi";
        "stdlib__Out_channel.cmi";
        "stdlib__Parsing.cmi";
        "stdlib__Pervasives.cmi";
        "stdlib__Printexc.cmi";
        "stdlib__Printf.cmi";
        "stdlib__Queue.cmi";
        "stdlib__Random.cmi";
        "stdlib__Result.cmi";
        "stdlib__Scanf.cmi";
        "stdlib__Semaphore.cmi";
        "stdlib__Seq.cmi";
        "stdlib__Set.cmi";
        "stdlib__Stack.cmi";
        "stdlib__StdLabels.cmi";
        "stdlib__Stream.cmi";
        "stdlib__String.cmi";
        "stdlib__StringLabels.cmi";
        "stdlib__Sys.cmi";
        "stdlib__Uchar.cmi";
        "stdlib__Unit.cmi";
        "stdlib__Weak.cmi";
        "str.cmi";
        "thread.cmi";
        "topdirs.cmi";
        "unix.cmi";
        "unixLabels.cmi";
      ] in
      let cmi_urls = List.map (fun name -> "/static/stdlib/" ^ name) cmi_names in
    { Protocol.static_cmis = []; cmi_urls }
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
