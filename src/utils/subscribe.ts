import { ExtensionContext, commands, window } from "vscode";

const LANGUAGE = "tod";

export default function subscribeCommand(this: ExtensionContext, command: string, actionCallback: () => void) {
  const commonCallback = () => {
    const editor = window.activeTextEditor;

    if (editor && editor.document.languageId === LANGUAGE) {
      actionCallback();
    }
  };
  
  this.subscriptions.push(commands.registerCommand(command, commonCallback));
}
