import * as vscode from 'vscode';
import { getDefCompletionItems } from "./def";

export class DefCompletionItemProvidor implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const completionItems: vscode.CompletionItem[] = [];
        for (const defCompletionItem of getDefCompletionItems(document)) {
            const completionItem: vscode.CompletionItem = new vscode.CompletionItem(defCompletionItem.label, defCompletionItem.kind);
            completionItem.insertText = defCompletionItem.insertText;
            completionItem.documentation = defCompletionItem.documentation;
            completionItems.push(completionItem);
        }
        return completionItems;
    }
}