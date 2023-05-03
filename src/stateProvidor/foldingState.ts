import * as vscode from 'vscode';

export class StateFoldingRangeProvidor implements vscode.FoldingRangeProvider {
    provideFoldingRanges(document: vscode.TextDocument, context: vscode.FoldingContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.FoldingRange[]> {
        const stateFoldingRanges: vscode.FoldingRange[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            const textLine = document.lineAt(i);
            const stateDefRegex = /^\[statedef\s*-?[0-9]+\]/i;
            if(textLine.text.match(stateDefRegex)) {
                for (let j = i+1; j < document.lineCount; j++) {
                    const textLine2 = document.lineAt(j);
                    if(stateDefRegex.test(textLine2.text) || j === document.lineCount-1) {
                        stateFoldingRanges.push(new vscode.FoldingRange(i, (j === document.lineCount-1) ? j : j-1, vscode.FoldingRangeKind.Region));
                        break;
                    }
                }
            }
        }
        return stateFoldingRanges;
    }
}