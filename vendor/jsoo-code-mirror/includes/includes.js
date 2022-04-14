import { EditorView, EditorState, basicSetup } from "@codemirror/basic-setup"
import * as tooltip from "@codemirror/tooltip"
import * as lint from "@codemirror/lint"
import * as autocomplete from "@codemirror/autocomplete"
import * as dark from "@codemirror/theme-one-dark"
import * as streamParser from "@codemirror/stream-parser"
import { oCaml } from "@codemirror/legacy-modes/mode/mllike"

joo_global_object.__CM__view = EditorView;
joo_global_object.__CM__state = EditorState;
joo_global_object.__CM__lint = lint;
joo_global_object.__CM__autocomplete = autocomplete;
joo_global_object.__CM__tooltip = tooltip;
joo_global_object.__CM__basic_setup = basicSetup
joo_global_object.__CM__dark = dark;
joo_global_object.__CM__stream_parser = streamParser;
joo_global_object.__CM__mllike = oCaml;
