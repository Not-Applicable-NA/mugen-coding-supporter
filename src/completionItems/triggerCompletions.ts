import * as vscode from 'vscode';
import { mugenData } from "../datas";

export class TriggerCompletionItemProvidor implements vscode.CompletionItemProvider {
    provideCompletionItems(): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const completionItems: vscode.CompletionItem[] = [];
        for (const triggerData of mugenData.trigger) {
            const completionItem: vscode.CompletionItem = new vscode.CompletionItem(triggerData.label, triggerData.kind);
            completionItem.insertText = triggerData.snippet;
            completionItem.documentation = triggerData.description;
            completionItem.detail = triggerData.detail;
            completionItems.push(completionItem);
        }
        return completionItems;
    }
}