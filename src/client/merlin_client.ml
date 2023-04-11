open Brr
module Worker = Brr_webworkers.Worker

(* When a query is sent to the Worker we keep the Future result in an indexed
table so that the on_message function will be able to determine the Future when
the answer is posted by the Worker.
The Worker works synchronously so we expect answer to arrive in order. *)
type worker = {
  worker: Worker.t;
  queue: (Protocol.answer -> unit) Queue.t
}

let add_fut worker res = Queue.add res worker.queue
let res_fut worker v = (Queue.take worker.queue) v

let make_worker url =
  let worker = Worker.create @@ Jstr.of_string url in
  let queue = Queue.create () in
  let worker = { worker; queue } in
  let on_message m =
    let m = Ev.as_type m in
    let data_marshaled : bytes = Brr_io.Message.Ev.data m in
    let data : Protocol.answer = Marshal.from_bytes data_marshaled 0 in
    res_fut worker data
  in
  let _listener =
    Ev.listen Brr_io.Message.Ev.message on_message @@
      Worker.as_target worker.worker
  in
  worker

(* todo share that with worker *)
type action = Completion | Type_enclosing | Errors

type errors = Protocol.error list

let query ~action worker (*todo: other queries*) =
  let fut, set  = Fut.create () in
  add_fut worker set;
  Worker.post worker.worker (Marshal.to_bytes action []);
  fut

let query_errors worker (source : string) =
  let open Fut.Syntax in
  let action = Protocol.All_errors source in
  let+ data : Protocol.answer = query ~action worker in
  Console.(log ["Received errors:";  data]);
  match data with
  | Protocol.Errors errors -> errors
  | _ -> assert false

let query_completions worker (source : string) position =
  let open Fut.Syntax in
  let action = Protocol.Complete_prefix (source, position) in
  let+ data : Protocol.answer = query ~action worker in
  Console.(log ["Received completions:";  data]);
  match data with
  | Protocol.Completions compl -> compl
  | _ -> assert false

let query_type worker (source : string) position =
  let open Fut.Syntax in
  let action = Protocol.Type_enclosing (source, position) in
  let+ data : Protocol.answer = query ~action worker in
  Console.(log ["Received typed enclosings:";  data]);
  match data with
  | Protocol.Typed_enclosings l -> l
  | _ -> assert false

let add_cmis worker cmis =
  let open Fut.Syntax in
  let action = Protocol.Add_cmis cmis in
  let+ data : Protocol.answer = query ~action worker in
  Console.(log ["Received response from adding cmis:";  data]);
  match data with
  | Protocol.Added_cmis -> ()
  | _ -> assert false