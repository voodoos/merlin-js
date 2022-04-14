.PHONY: example node dev
example:
	dune build
	parcel _build/default/example/src/index.html

node:
	npm install

dev: node
  dune build --watch
