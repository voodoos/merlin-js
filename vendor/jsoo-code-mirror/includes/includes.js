import { EditorView, basicSetup } from "codemirror"
import { EditorState, StateField, StateEffect, EditorSelection, RangeSet } from "@codemirror/state"
import { hoverTooltip, showPanel, keymap, Decoration } from "@codemirror/view"
import * as lint from "@codemirror/lint"
import * as autocomplete from "@codemirror/autocomplete"
import * as dark from "@codemirror/theme-one-dark"
import * as language from "@codemirror/language"
import { oCaml } from "@codemirror/legacy-modes/mode/mllike"
import { markdown } from "@codemirror/lang-markdown"
import { dracula } from 'thememirror';


joo_global_object.__CM__view = EditorView;
joo_global_object.__CM__state = EditorState;
joo_global_object.__CM__Decoration = Decoration;
joo_global_object.__CM__RangeSet = RangeSet;
joo_global_object.__CM__EditorSelection = EditorSelection;
joo_global_object.__CM__lint = lint;
joo_global_object.__CM__autocomplete = autocomplete;
joo_global_object.__CM__hoverTooltip = hoverTooltip;
joo_global_object.__CM__basic_setup = basicSetup
joo_global_object.__CM__dark = dark;
joo_global_object.__CM__language = language;
joo_global_object.__CM__mllike = oCaml;
joo_global_object.__CM__markdown = markdown;
joo_global_object.__CM__showPanel = showPanel;
joo_global_object.__CM__StateField = StateField;
joo_global_object.__CM__StateEffect = StateEffect;
joo_global_object.__CM__keymap = keymap;
joo_global_object.__CM__theme_dracula = dracula;
