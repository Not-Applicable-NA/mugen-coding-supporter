import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class StateReferenceProvidor implements vscode.ReferenceProvider {
    provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
        const stateReferenceLocation: vscode.Location[] = [];
        const stateNoRange = document.getWordRangeAtPosition(position);
        if (!stateNoRange) {
            return undefined;
        }

        const currentWorkspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri); 
        if (!currentWorkspaceFolder) {
            return undefined;
        }

        const stateReferenceRegex = new RegExp(`[^a-z0-9-]${document.getText(stateNoRange)}[^0-9]`, 'i');
        let flag = false;
        const fileSearch = (folderPath: string) => {
            for (const object of fs.readdirSync(folderPath)) {
                const objPath = path.join(folderPath, object);
                const objStats = fs.statSync(objPath);
                if (objStats.isFile()) {
                    const fileExt = path.extname(objPath).toLocaleLowerCase();
                    if (fileExt == ".cns" || fileExt == ".st" || fileExt == ".def" || fileExt == ".txt") {
                        const lines = fs.readFileSync(objPath).toString().split('\n');
                        for (let i = 0; i < lines.length; i++) {
                            if (lines[i].match(/^;/i)) {
                                continue;
                            }
                            if (lines[i].match(/stateno *=/i) && lines[i].match(stateReferenceRegex)) {
                                stateReferenceLocation.push(
                                    new vscode.Location(vscode.Uri.file(objPath), new vscode.Position(i, 0))
                                );
                                continue;
                            } else {
                                if (lines[i].match(/\[state /i)) {
                                    flag = false;
                                }
                                if (lines[i].match(/(change|self|target)state/i)) {
                                    flag = true;
                                }
                                if (flag && lines[i].match(/value *=/i) && lines[i].match(stateReferenceRegex)) {
                                    stateReferenceLocation.push(
                                        new vscode.Location(vscode.Uri.file(objPath), new vscode.Position(i, 0))
                                    );
                                    flag = false;
                                    continue;
                                }
                            }
                        }
                    }
                } else if (objStats.isDirectory()) {
                    fileSearch(objPath);
                }
            }
        }
        fileSearch(currentWorkspaceFolder.uri.fsPath);

        return stateReferenceLocation;
    }
}