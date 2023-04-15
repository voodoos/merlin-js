#use "topfind" ;;
#require "unix";;


let rec iter_cmi ~f dir_handle =
  match Unix.readdir dir_handle with
  | exception End_of_file -> ()
  | file ->
    if Filename.extension file = ".cmi" then
      f file;
    iter_cmi ~f dir_handle

let () =
  let cwd = Unix.getcwd () in
  let stdlib = Filename.concat cwd "stdlib" in
  let out = open_out "static_files.ml" in

  Printf.fprintf out "open Protocol\nlet stdlib_cmis = [";
  let dir = Unix.opendir stdlib in
  iter_cmi ~f:(fun file ->
    let fullpath = Filename.concat stdlib file in
    let module_name = Filename.basename file |> String.capitalize_ascii in
    Printf.fprintf out "{sc_name=%S; sc_content=[%%blob %S]};" module_name fullpath) dir;
    Printf.fprintf out "]\n";

  close_out out
