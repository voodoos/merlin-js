#use "topfind" ;;
#require "unix";;

let () =
  let out = open_out "static_files.ml" in

  Printf.fprintf out "open Protocol\nlet stdlib_cmis = [";
  for i = 1 to Array.length Sys.argv - 1 do
      let fullpath = Sys.argv.(i) in
      let module_name =
        Filename.basename fullpath
        |> String.capitalize_ascii
        |> Filename.remove_extension
      in
      Printf.fprintf out "{sc_name=%S; sc_content=[%%blob %S]};" module_name fullpath
  done;
  Printf.fprintf out "]\n";

  close_out out
