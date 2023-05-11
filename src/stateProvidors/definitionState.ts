import * as vscode from 'vscode';
import { trimTextLine } from '../trimText';
import { getAllFileUris } from '../uri';
import * as path from 'path';
import * as os from 'os';

export class StateDefinitionProvidor implements vscode.DefinitionProvider {
    provideDefinition(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]> {
        return (async (): Promise<vscode.Location[] | undefined> => {
            const stateDefLocation: vscode.Location[] = [];
    
            const stateNoRange: vscode.Range | undefined = document.getWordRangeAtPosition(position);
            const currentWorkspaceFolder: vscode.WorkspaceFolder | undefined = vscode.workspace.getWorkspaceFolder(document.uri);
            if (!stateNoRange || !currentWorkspaceFolder) {
                return undefined;
            }

            const currentWorkspaceFileUris: vscode.Uri[] = await getAllFileUris(currentWorkspaceFolder.uri, '.git');
            for (const fileUri of currentWorkspaceFileUris) {
                if (path.extname(fileUri.fsPath).match(/(sff|air|snd|act)/i)) {
                    continue;
                }
                const textlines: string[] = (await vscode.workspace.fs.readFile(fileUri)).toString().split(os.EOL);
                for (let i = 0; i < textlines.length; i++) {
                    const text = trimTextLine(textlines[i]);
                    if (text === '') {
                        continue;
                    } else if (text.match(new RegExp(`\\[statedef${document.getText(stateNoRange)}\\]`, 'i'))) {
                        stateDefLocation.push(
                            new vscode.Location(fileUri, new vscode.Position(i, 0))
                        );
                    }
                }
            }
            return stateDefLocation;
        })();
    }
}