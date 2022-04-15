js:
	dune build @all-js --profile=release --ignore-promoted-rules

js-dev:
	dune build @all-js --watch --terminal-persistence=clear-on-rebuild

jsoo-node:
	cd vendor/jsoo-code-mirror && npm install

.PHONY: js-dev js
