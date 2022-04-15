.PHONY: example node dev release
example:
	dune build --ignore-promoted-rules
	parcel _build/default/example/src/index.html

node:
	npm install

dev: node
  dune build --watch

release:
  dune build -p code-mirror
