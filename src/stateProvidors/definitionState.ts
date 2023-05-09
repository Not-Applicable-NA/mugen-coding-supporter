import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

export class StateDefinitionProvidor implements vscode.DefinitionProvider {
    provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]> {
        const stateDefLocation: vscode.Location[] = [];
        const stateNoRange = document.getWordRangeAtPosition(position);
        if (!stateNoRange) {
            return undefined;
        }

        const currentWorkspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri); 
        if (!currentWorkspaceFolder) {
            return undefined;
        }

        const stateDefRegex = new RegExp(`^\\[statedef *${document.getText(stateNoRange)}\\]`, 'i');
        const fileSearch = (folderPath: string) => {
            for (const object of fs.readdirSync(folderPath)) {
                const objPath = path.join(folderPath, object);
                const objStats = fs.statSync(objPath);
                if (objStats.isFile()) {
                    const fileExt = path.extname(objPath).toLocaleLowerCase();
                    if (fileExt == ".cns" || fileExt == ".st" || fileExt == ".def" || fileExt == ".txt") {
                        const lines = fs.readFileSync(objPath).toString().split(os.EOL);
                        for (let i = 0; i < lines.length; i++) {
                            if (lines[i].match(stateDefRegex)){
                                stateDefLocation.push(
                                    new vscode.Location(vscode.Uri.file(objPath), new vscode.Position(i, 0))
                                );
                                break;
                            }
                        }
                    
                    }
                } else if (objStats.isDirectory()) {
                    fileSearch(objPath);
                }
            }
        }
        fileSearch(currentWorkspaceFolder.uri.fsPath);

        return stateDefLocation;
    }
}