let view = lazy (Jv.get Jv.global "__CM__view")

include Types.View

module EditorViewConfig : sig
  type t

  include Jv.CONV with type t := t

  val create :
    ?state:State.EditorState.t ->
    ?parent:Brr.El.t ->
    ?root:Brr.Document.t ->
    ?dispatch_transactions:(State.Transaction.t list -> EditorView.t -> unit) ->
    unit ->
    t

  val undefined : t
end = struct
  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  let create ?(state : State.EditorState.t option) ?parent ?root
      ?dispatch_transactions () =
    let o = Jv.obj [||] in
    Jv.set_if_some o "state" (Option.map State.EditorState.to_jv state);
    Jv.set_if_some o "parent" (Option.map Brr.El.to_jv parent);
    Jv.set_if_some o "root" (Option.map Brr.Document.to_jv root);
    Jv.set_if_some o "dispatchTransactions"
      (Option.map (Jv.callback ~arity:1) dispatch_transactions);
    o

  let undefined : t = Jv.undefined
end

module Decoration : sig
  type t

  include Jv.CONV with type t := t

  val mark :
    ?inclusive:bool ->
    ?inclusive_start:bool ->
    ?inclusive_end:bool ->
    ?className:string ->
    ?tagName:string ->
    unit ->
    t

  val none : t State.RangeSet.ty
  val range : from:int -> ?to_:int -> t -> t State.Range.ty
end = struct
  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  let decoration = lazy (Jv.get Jv.global "__CM__Decoration")

  let mark ?inclusive ?inclusive_start ?inclusive_end ?className ?tagName () =
    let o = Jv.obj [||] in
    Jv.Bool.set_if_some o "inclusive" inclusive;
    Jv.Bool.set_if_some o "inclusiveStart" inclusive_start;
    Jv.Bool.set_if_some o "inclusiveEnd" inclusive_end;
    Jv.set_if_some o "class" (Option.map Jv.of_string className);
    Jv.set_if_some o "tagName" (Option.map Jv.of_string tagName);
    Brr.Console.log [ Jstr.v "Marking"; o ];
    Jv.call (Lazy.force decoration) "mark" [| o |] |> of_jv

  let none =
    let v = Jv.get (Lazy.force decoration) "none" in
    let conv = Types.{ to_jv; of_jv } in
    State.RangeSet.ty_of_jv conv v

  let range ~from ?to_ v : t State.Range.ty =
    let args =
      match to_ with
      | None -> [| Jv.of_int from |]
      | Some to_ -> [| Jv.of_int from; Jv.of_int to_ |]
    in
    let v = Jv.call v "range" args in
    let conv = Types.{ to_jv; of_jv } in
    State.Range.ty_of_jv conv v
end

module EditorView = struct
  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  let create : ?config:EditorViewConfig.t -> unit -> t =
   fun ?(config = EditorViewConfig.undefined) () ->
    Jv.new' (Lazy.force view) [| EditorViewConfig.to_jv config |]

  let state t = Jv.get t "state" |> State.EditorState.of_jv

  let set_state t v =
    Jv.call t "setState" [| State.EditorState.to_jv v |] |> ignore

  module Update = struct
    type t = Jv.t

    let state t = State.EditorState.of_jv @@ Jv.get t "state"

    include (Jv.Id : Jv.CONV with type t := t)
  end

  let dom t = Jv.get t "dom" |> Brr.El.of_jv

  let update_listener : (Update.t -> unit, Jv.t) State.Facet.t =
    let jv_of_fn f = Jv.callback ~arity:1 (fun u -> f (Update.of_jv u)) in
    let iconv = { Types.to_jv = jv_of_fn; of_jv = (fun _ -> assert false) } in
    let jv = Jv.get (Lazy.force view) "updateListener" in
    State.Facet.create iconv jv

  let dispatch : t -> State.Transaction.t -> unit =
   fun t tr -> Jv.call t "dispatch" [| State.Transaction.to_jv tr |] |> ignore

  let line_wrapping () =
    Jv.get (Lazy.force view) "lineWrapping" |> Extension.of_jv

  let decorations : (Decoration.t State.RangeSet.ty, Jv.t) State.Facet.t =
    let jv = Jv.get (Lazy.force view) "decorations" in
    let decoration_conv =
      Types.{ to_jv = Decoration.to_jv; of_jv = Decoration.of_jv }
    in
    let conv =
      {
        Types.to_jv = State.RangeSet.jv_of_ty;
        of_jv = State.RangeSet.ty_of_jv decoration_conv;
      }
    in
    State.Facet.create conv jv

  type theme = TO of (string * theme) list | TV of string

  let theme ?dark th =
    let theme = Jv.get (Lazy.force view) "theme" in
    let rec to_obj theme =
      match theme with
      | TV s -> Jstr.of_string s |> Jv.of_jstr
      | TO vs ->
          let o = Jv.obj [||] in
          List.iter (fun (k, v) -> Jv.set o k (to_obj v)) vs;
          o
    in
    let opts = Jv.obj [||] in
    Jv.Bool.set_if_some opts "dark" dark;
    Jv.apply theme [| to_obj th; opts |] |> Extension.of_jv

  let base_theme th =
    let theme = Jv.get (Lazy.force view) "baseTheme" in
    let rec to_obj theme =
      match theme with
      | TV s -> Jstr.of_string s |> Jv.of_jstr
      | TO vs ->
          let o = Jv.obj [||] in
          List.iter (fun (k, v) -> Jv.set o k (to_obj v)) vs;
          o
    in
    Brr.Console.log [ Jstr.v "Base theme"; to_obj th ];
    Jv.apply theme [| to_obj th |] |> Extension.of_jv
end

module Panel = struct
  let showPanel = Jv.get Jv.global "__CM__showPanel"

  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  let create :
      ?mount:(unit -> unit) ->
      ?update:(EditorView.Update.t -> unit) ->
      ?top:bool ->
      ?destroy:(unit -> unit) ->
      Brr.El.t ->
      t =
   fun ?mount ?update ?top ?destroy dom ->
    let o = Jv.obj [||] in
    Jv.set_if_some o "mount" (Option.map (Jv.callback ~arity:1) mount);
    Jv.set_if_some o "update"
      (Option.map
         (fun u ->
           let u' jv = u (EditorView.Update.of_jv jv) in
           u')
         update
      |> Option.map (Jv.callback ~arity:1));
    Jv.set_if_some o "destroy" (Option.map (Jv.callback ~arity:1) destroy);
    Jv.Bool.set_if_some o "top" top;
    Jv.set o "dom" (Brr.El.to_jv dom);
    o

  module Constructor : sig
    type pc = (EditorView.t -> t) option

    val of_jv : Jv.t -> pc
    val to_jv : pc -> Jv.t
  end = struct
    type pc = (EditorView.t -> t) option

    let to_jv (f : pc) =
      match f with
      | Some x ->
          Brr.Console.log [ Jstr.v "Got a callback!" ];
          let callback v =
            let v = EditorView.of_jv v in
            let result = x v in
            (* Brr.Console.log [ result ]; *)
            to_jv result
          in
          Jv.callback ~arity:1 callback
      | None ->
          Brr.Console.log [ Jstr.v "No callback!" ];
          Jv.null

    let of_jv _jv = assert false
  end

  type panel_constructor = Constructor.pc
end

let showPanel : (Panel.Constructor.pc, Jv.t) State.Facet.t =
  let iconv = Panel.Constructor.{ Types.of_jv; to_jv } in
  State.Facet.create iconv Panel.showPanel
