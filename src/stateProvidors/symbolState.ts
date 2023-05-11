import * as vscode from 'vscode';
import { trimTextLine } from '../trimText';

export class StateSymbolProvidor implements vscode.DocumentSymbolProvider {
    provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {
        const stateDefSymbols: vscode.DocumentSymbol[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            const text = trimTextLine(document.lineAt(i).text);
            if (text.match(/^\[statedef-?[0-9]+\]/i)) {
                for (let j = i+1; j < document.lineCount; j++) {
                    const text2 = trimTextLine(document.lineAt(j).text);
                    if (text2.match(/^\[statedef-?[0-9]+\]/i) || j === document.lineCount-1) {
                        const stateDefRange = new vscode.Range(
                            new vscode.Position(i, 0),
                            new vscode.Position(
                                (j === document.lineCount-1) ? j : j-1,
                                document.lineAt(j).text.length
                            )
                        );
                        const stateDefSymbol = new vscode.DocumentSymbol(
                            document.lineAt(i).text,
                            'StateDef',
                            vscode.SymbolKind.Class,
                            stateDefRange,
                            document.lineAt(i).range
                        );
                        stateDefSymbol.children = getStateControllerSymbol(document, stateDefRange);
                        stateDefSymbols.push(stateDefSymbol);
                        break;
                    }
                }
            }
        }
        return stateDefSymbols;
    }
}

function getStateControllerSymbol(document: vscode.TextDocument, range: vscode.Range): vscode.DocumentSymbol[] {
    const stateControllerSymbols: vscode.DocumentSymbol[] = [];
    for (let i = range.start.line; i <= range.end.line; i++) {
        const text = trimTextLine(document.lineAt(i).text);
        if(text.match(/^\[state[^def].*\]/i)) {
            let stateControllerName = '';
            const stateControllerNameRegex = /(?<=^type=).+/i;
            for (let j = i; j <= range.end.line; j++) {
                const text2 = trimTextLine(document.lineAt(j).text);
                const stateControllerNameMatch = text2.match(stateControllerNameRegex);
                if(stateControllerNameMatch){
                    stateControllerName = stateControllerNameMatch[0];
                    break;
                }
            }
            for (let j = i+1; j <= range.end.line; j++) {
                const text2 = trimTextLine(document.lineAt(j).text);
                if(text2.match(/^\[state[^def].*\]/i) || j === range.end.line) {
                    const stateControllerRange = new vscode.Range(
                        new vscode.Position(i, 0),
                        new vscode.Position(
                            (j === range.end.line) ? j : j-1,
                            document.lineAt(j).text.length
                        )
                    );
                    
                    const stateControllerSymbol = new vscode.DocumentSymbol(
                        stateControllerName,
                        'StateController',
                        vscode.SymbolKind.Function,
                        stateControllerRange,
                        document.lineAt(i).range
                    );
                    stateControllerSymbols.push(stateControllerSymbol);
                    break;
                }
            }
        }
    }
    return stateControllerSymbols;
}