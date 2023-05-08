import { window } from "vscode";

export default function log() {
  const editor = window.activeTextEditor;

  console.log(editor?.document.languageId);
}
