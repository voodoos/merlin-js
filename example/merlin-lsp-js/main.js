import { EditorView, basicSetup } from "codemirror";
import { LSPClient, languageServerExtensions } from "@codemirror/lsp-client";

// --- Worker transport ---

function workerTransport(worker) {
    const handlers = new Set();

    worker.addEventListener("message", (e) => {
        const data = typeof e.data === "string" ? e.data : JSON.stringify(e.data);
        for (const h of handlers) h(data);
    });

    return {
        send(message) {
            worker.postMessage(message);
        },
        subscribe(handler) {
            handlers.add(handler);
        },
        unsubscribe(handler) {
            handlers.delete(handler);
        },
    };
}

// --- Setup ---

const worker = new Worker("workers/merlin_lsp_worker.bc.js");
const transport = workerTransport(worker);

const client = new LSPClient({
    rootUri: "file:///workspace",
    extensions: languageServerExtensions(),
});

client.connect(transport);

// Send CMI configuration to the server once initialized.
// Adjust the url and toplevelModules to match your CMI serving setup.
client.initializing.then(() => {
    client.notification("merlin/addCmis", {
        dynamicCmis: [{
            url: "/example/workers/stdlib/",
            toplevelModules: ["Stdlib"],
        }, ],
    });
});

const fileUri = "file:///workspace/main.ml";

const view = new EditorView({
    doc: '(* Type some OCaml here *)\nlet x = 1\nlet y = x + 2\n',
    extensions: [
        basicSetup,
        client.plugin(fileUri, "ocaml"),
    ],
    parent: document.getElementById("editor"),
});
