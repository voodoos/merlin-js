(lang dune 3.20)

(name merlin-js)

(generate_opam_files true)

(package
 (name merlin-js)
 (license "MIT")
 (synopsis "Editor helper, provides completion, typing and source browsing for the web")
 (description "Merlin is an assistant for editing OCaml code. It aims to provide the features available in modern browsers: error reporting, auto completion, source browsing and much more.")
 (depends
   merlin-lib
   js_of_ocaml
   js_of_ocaml-ppx
   wasm_of_ocaml-compiler
   brr
   code-mirror
   yojson
   ppx_blob))
