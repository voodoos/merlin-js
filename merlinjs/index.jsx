import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { autocompletion, completeFromList, CompletionContext } from "@codemirror/autocomplete"
import { hoverTooltip } from "@codemirror/tooltip"
import { linter, lintGutter } from "@codemirror/lint"
import { StreamLanguage } from "@codemirror/stream-parser"
import { oCaml } from "@codemirror/legacy-modes/mode/mllike"

/* I was not able to have the client behave as a module so it needs to be loaded
before-hand in the browser */
let merlin_worker = make_worker()

const pos_to_offset = (doc, pos) => doc.line(pos.line).from + pos.col

/**
 * Completion
 *
 * @param {CompletionContext} context
 */
function merlin_prefix_completion(context /*: CompletionContext */) {
  let fulltext = context.state.doc.toJSON().join(context.state.lineBreak)
  let result =
    query_worker_completion(merlin_worker, fulltext, context.pos)
  return result.then(res => {
    let options = res.entries.map(entry => ({
      label: entry.name,
      detail: entry.desc
    }))
    return {
      from: res.from,
      to: res.to,
      options,
      filter: true
    }
  })
}

/**
 * Type enclosing
 */
const type_on_hover = hoverTooltip((view, pos, side) => {
  let fulltext = view.state.doc.toJSON().join(view.state.lineBreak)
  console.log (query_worker_errors(merlin_worker, fulltext, pos))
  let result =
    query_worker_type_enclosing(merlin_worker, fulltext, pos)
  return result.then(enclosings => {
    let first_enclosing = enclosings.at(0)
    console.log("enclosing:", first_enclosing)
    let type = first_enclosing.type
    return {
      pos: pos_to_offset(view.state.doc, first_enclosing.start),
      end: pos_to_offset(view.state.doc, first_enclosing.end),
      above: true,
      create(view) {
        let dom = document.createElement("div")
        dom.textContent = type
        return {dom}
      }
    }
  })
})

/**
 * Errors
 */
const errors = linter(view => {
  let fulltext = view.state.doc.toJSON().join(view.state.lineBreak)
  let result =
    query_worker_errors(merlin_worker, fulltext, 0)
  return result.then(result => result.map(error => {
      return {
        from: pos_to_offset(view.state.doc, error.start),
        to: pos_to_offset(view.state.doc, error.end),
        message: error.message,
        severity: "error",
        source: error.type
      }
    }))
})

/**
 * Syntax
 */
let ocaml = StreamLanguage.define(oCaml)

let keywords = [
  'as', 'do', 'else', 'end', 'exception', 'fun', 'functor', 'if', 'in',
  'include', 'let', 'of', 'open', 'rec', 'struct', 'then', 'type', 'val',
  'while', 'with', 'and', 'assert', 'begin', 'class', 'constraint',
  'done', 'downto', 'external', 'function', 'initializer', 'lazy',
  'match', 'method', 'module', 'mutable', 'new', 'nonrec', 'object',
  'private', 'sig', 'to', 'try', 'value', 'virtual', 'when',
].map(label => ({
  label,
  type: "keyword"
}))

new EditorView({
  state: EditorState.create({ extensions: [
    basicSetup,
    ocaml,
    type_on_hover,
    errors,
    // lintGutter(),
    autocompletion({override: [
      merlin_prefix_completion,
      completeFromList(keywords)]})] }),
  parent: document.getElementById('editor')
})
