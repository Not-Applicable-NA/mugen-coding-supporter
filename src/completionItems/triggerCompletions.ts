import * as vscode from 'vscode';
import { triggerCompletionItems } from "./triggers";

export class triggerCompletionItemProvidor implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const completionItems: vscode.CompletionItem[] = [];
        for (const triggerCompletionItem of triggerCompletionItems) {
            const completionItem: vscode.CompletionItem = new vscode.CompletionItem(triggerCompletionItem.label, triggerCompletionItem.kind);
            completionItem.insertText = triggerCompletionItem.insertText;
            completionItem.documentation = triggerCompletionItem.documentation;
            completionItem.detail = triggerCompletionItem.detail;
            completionItems.push(completionItem);
        }
        return completionItems;
    }
}