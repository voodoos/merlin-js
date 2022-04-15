open Code_mirror
open Brr
let get_el_by_id i =
  Brr.Document.find_el_by_id G.document (Jstr.of_string i) |> Option.get


let get_full_doc state =
  let lines = Editor.(state |> State.doc |> Text.to_jstr_array) in
  lines |> Array.map Jstr.to_string |> Array.to_list |> String.concat "\n"
