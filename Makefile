node:
	cd merlinjs && yarn

js: node
	dune build merlinjs/index.js --profile=release

js-dev: node
	dune build merlinjs/index.js --profile=release --watch

.PHONY: js-dev js node
