all: build ocamlmerlin ocamlmerlin-server dot-merlin-reader

build:
	dune build --always-show-command-line

ocamlmerlin ocamlmerlin-server dot-merlin-reader:
	ln -s _build/install/default/bin/$@ ./$@

clean:
	dune clean

test: build
	dune runtest

preprocess:
	dune build --always-show-command-line @preprocess

promote:
	dune promote

node:
	cd merlinjs && yarn

js: node
	dune build merlinjs/index.js --profile=release

js-dev: node
	dune build merlinjs/index.js --profile=release --watch

.PHONY: all js node build dev clean test promote
