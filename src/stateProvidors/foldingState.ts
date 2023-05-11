import * as vscode from 'vscode';
import { trimTextLine } from '../trimText';

export class StateFoldingRangeProvidor implements vscode.FoldingRangeProvider {
    provideFoldingRanges(document: vscode.TextDocument): vscode.ProviderResult<vscode.FoldingRange[]> {
        const stateFoldingRanges: vscode.FoldingRange[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            const text = trimTextLine(document.lineAt(i).text);
            if (text.match(/^\[statedef-?[0-9]+\]/i)) {
                for (let j = i+1; j < document.lineCount; j++) {
                    const text2 = trimTextLine(document.lineAt(j).text);
                    if (text2.match(/^\[statedef-?[0-9]+\]/i)) {
                        stateFoldingRanges.push(new vscode.FoldingRange(i, j-1));
                        break;
                    } else if (j === document.lineCount-1) {
                        stateFoldingRanges.push(new vscode.FoldingRange(i, j));
                        break;
                    }
                }
            }
        }
        return stateFoldingRanges;
    }
}