import * as vscode from 'vscode';
import { cmdCompletionItems } from "./cmd";

export class CmdCompletionItemProvidor implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const completionItems: vscode.CompletionItem[] = [];
        for (const cmdCompletionItem of cmdCompletionItems) {
            const completionItem: vscode.CompletionItem = new vscode.CompletionItem(cmdCompletionItem.label, cmdCompletionItem.kind);
            completionItem.insertText = cmdCompletionItem.insertText;
            completionItem.documentation = cmdCompletionItem.documentation;
            completionItems.push(completionItem);
        }
        return completionItems;
    }
}