import { basicSetup } from "codemirror"
import * as state from "@codemirror/state"
import * as view from "@codemirror/view"
import * as lint from "@codemirror/lint"
import * as autocomplete from "@codemirror/autocomplete"
import * as dark from "@codemirror/theme-one-dark"
import * as language from "@codemirror/language"
import { oCaml } from "@codemirror/legacy-modes/mode/mllike"

joo_global_object.__CM__view = view;
joo_global_object.__CM__state = state;
joo_global_object.__CM__lint = lint;
joo_global_object.__CM__autocomplete = autocomplete;
// joo_global_object.__CM__hoverTooltip = hoverTooltip;
// joo_global_object.__CM__keymap = keymap;
joo_global_object.__CM__basic_setup = basicSetup
joo_global_object.__CM__dark = dark;
joo_global_object.__CM__stream_parser = language;
joo_global_object.__CM__mllike = oCaml;
