import * as vscode from 'vscode';

export class StateSymbolProvidor implements vscode.DocumentSymbolProvider {
    provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {
        const stateDefSymbols: vscode.DocumentSymbol[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            const textLine = document.lineAt(i);
            const stateDefRegex = /^\[statedef\s*-?[0-9]+\]/i;
            const matchStateDef = textLine.text.match(stateDefRegex);
            if(matchStateDef) {
                const stateDefStartPosition = new vscode.Position(i, 0);
                for (let j = i+1; j < document.lineCount; j++) {
                    const textLine2 = document.lineAt(j);
                    if(stateDefRegex.test(textLine2.text) || j === document.lineCount-1) {
                        const stateDefEndPosition = new vscode.Position(
                            (j === document.lineCount-1) ? j : j-1,
                            textLine2.text.length
                        );
                        const stateDefRange = new vscode.Range(stateDefStartPosition, stateDefEndPosition);
                        const stateDefSymbol = new vscode.DocumentSymbol(matchStateDef[0], 'StateDef', vscode.SymbolKind.Class, stateDefRange, textLine.range);
                        stateDefSymbol.children = this.getStateControllerSymbol(document, stateDefRange);
                        stateDefSymbols.push(stateDefSymbol);
                        break;
                    }
                }
            }
        }
        return stateDefSymbols;
    }

    private getStateControllerSymbol(document: vscode.TextDocument, range: vscode.Range): vscode.DocumentSymbol[] {
        const stateControllerSymbols: vscode.DocumentSymbol[] = [];
        for (let i = range.start.line; i <= range.end.line; i++) {
            const textLine = document.lineAt(i);
            const stateControllerRegex = /^\[state\b\s*[^;]*\]/i;
            const matchStateController = textLine.text.match(stateControllerRegex);
            if(matchStateController) {
                const stateControllerStartPosition = new vscode.Position(i, 0);
                let stateControllerName = '';
                const stateControllerNameRegex = /(?<=^type\s*=\s*)[^\s;]+/i;
                for (let j = i; j <= range.end.line; j++) {
                    const textLine2 = document.lineAt(j);
                    const stateControllerNameMatch = textLine2.text.match(stateControllerNameRegex);
                    if(stateControllerNameMatch){
                        stateControllerName = stateControllerNameMatch[0];
                        break;
                    }
                }
                for (let j = i+1; j <= range.end.line; j++) {
                    const textLine2 = document.lineAt(j);
                    if(stateControllerRegex.test(textLine2.text) || j === range.end.line) {
                        const stateControllerEndPosition = new vscode.Position(
                            (j === range.end.line) ? j : j-1,
                            textLine2.text.length
                        );
                        const stateControllerSymbol = new vscode.DocumentSymbol(stateControllerName, 'StateController', vscode.SymbolKind.Function, new vscode.Range(stateControllerStartPosition, stateControllerEndPosition), textLine.range);
                        stateControllerSymbols.push(stateControllerSymbol);
                        break;
                    }
                }
            }
        }
        return stateControllerSymbols;
    }
}