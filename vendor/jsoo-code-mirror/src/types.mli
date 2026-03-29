type 'a conv = { to_jv : 'a -> Jv.t; of_jv : Jv.t -> 'a }

module State : sig
  module EditorStateConfig : sig
    type t

    include Jv.CONV with type t := t
    (* TODO: Add selection *)

    val undefined : t
  end

  module EditorState : sig
    type t

    include Jv.CONV with type t := t
  end

  module Text : sig
    type t

    include Jv.CONV with type t := t
  end

  module EditorSelection : sig
    type t

    include Jv.CONV with type t := t
  end

  module Transaction : sig
    type t

    include Jv.CONV with type t := t
  end

  module StateEffect : sig
    type t
    type 'a ty

    include Jv.CONV with type t := t

    val ty_to_jv : 'a ty -> Jv.t
    val conv_of_ty : 'a ty -> 'a conv
    val ty_of_jv : 'a conv -> Jv.t -> 'a ty
  end

  module StateField : sig
    type 'a t

    val extension : 'a t -> Extension.t
    val conv : 'a t -> 'a conv
    val to_jv : 'a t -> Jv.t
    val of_jv : 'a conv -> Jv.t -> 'a t
  end

  module Facet : sig
    type ('input, 'output) t

    val to_jv : ('input, 'output) t -> Jv.t
    val to_conv : ('input, 'output) t -> 'input conv
    val create : 'input conv -> Jv.t -> ('input, 'output) t
  end
end

module View : sig
  module EditorView : sig
    type t

    include Jv.CONV with type t := t
  end
end
