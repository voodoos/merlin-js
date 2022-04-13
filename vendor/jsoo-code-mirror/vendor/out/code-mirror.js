"use strict";

var cm = {
  View: require('@codemirror/basic-setup').EditorView,
  State: require('@codemirror/basic-setup').EditorState,
  lint: require('@codemirror/lint'),
  autocomplete: require('@codemirror/autocomplete'),
  basicSetup: require('@codemirror/basic-setup').basicSetup,
  dark: require('@codemirror/theme-one-dark'),
  streamParser: require('@codemirror/stream-parser'),
  OCaml: require('@codemirror/legacy-modes/mode/mllike.cjs').oCaml
}; // Overwrite the defaults

joo_global_object.__CM__view = cm.View;
joo_global_object.__CM__state = cm.State;
joo_global_object.__CM__lint = cm.lint;
joo_global_object.__CM__autocomplete = cm.autocomplete;
joo_global_object.__CM__basic_setup = cm.basicSetup;
joo_global_object.__CM__dark = cm.dark;
joo_global_object.__CM__stream_parser = cm.streamParser;
joo_global_object.__CM__mllike = cm.OCaml;
global.CodeMirror = cm;
module.exports = cm;