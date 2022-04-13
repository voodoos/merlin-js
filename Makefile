js:
	dune build @all-js --profile=release

js-dev:
	dune build @all-js --watch --terminal-persistence=clear-on-rebuild

.PHONY: js-dev js
