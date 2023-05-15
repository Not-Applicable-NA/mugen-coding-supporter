import * as vscode from 'vscode';
import { Data, mugenData } from "../datas";
import { trimTextLine } from '../trimText';

export class CmdCompletionItemProvidor implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const completionItems: vscode.CompletionItem[] = [];
        if ( position.character === 1 ) {
            
            let currentSection: string | undefined = undefined;
            for (let i = position.line-1; i >= 0; i--) {
                if ( trimTextLine(document.lineAt(i).text).match(/\[.*\]/i) ) {
                    currentSection = document.lineAt(i).text.replace(/[^a-z]/gi, "");
                    break;
                }
            }
            
            const completionCmdData = (datas: Data[]) => {
                for (const data of datas) {
                    const completionItem: vscode.CompletionItem = new vscode.CompletionItem(data.label, data.kind);
                    completionItem.insertText = data.snippet;
                    completionItem.documentation = data.description;
                    completionItems.push(completionItem);
                    if ( data.paramDatas === currentSection && data.paramDatas ) {
                        completionCmdData(data.paramDatas);
                    }
                }
            }
            completionCmdData(mugenData.cmd);

        }
        return completionItems;
    }
}