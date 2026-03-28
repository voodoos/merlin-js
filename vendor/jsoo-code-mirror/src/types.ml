type 'a conv = { to_jv : 'a -> Jv.t; of_jv : Jv.t -> 'a }

module State = struct
  module EditorState = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)
  end

  module EditorStateConfig = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)

    let undefined : t = Jv.undefined
  end

  module Text = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)
  end

  module EditorSelection = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)
  end

  module ChangeDesc = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)
  end

  module StateEffect = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)

    type 'a ty = 'a conv * Jv.t

    let ty_to_jv : 'a ty -> Jv.t = fun (_, t) -> t
    let conv_of_ty (conv, _) = conv
    let ty_of_jv conv jv = (conv, jv)
  end

  module StateField = struct
    type 'a t = 'a conv * Jv.t

    let of_jv conv jv = (conv, jv)
    let extension (_, v) = Extension.of_jv v
    let to_jv (_, v) = v
    let conv (c, _) = c
  end

  module Facet = struct
    type ('input, 'output) t = 'input conv * Jv.t

    let to_jv (_, v) = v
    let create iconv v = (iconv, v)
    let to_conv (c, _) = c
  end

  module Transaction = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)
  end
end

module View = struct
  module EditorView = struct
    type t = Jv.t

    include (Jv.Id : Jv.CONV with type t := t)
  end
end
