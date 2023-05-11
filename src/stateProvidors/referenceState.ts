import * as vscode from 'vscode';
import { trimTextLine } from '../trimText';
import { getAllFileUris } from '../uri';
import * as path from 'path';
import * as os from 'os';

export class StateReferenceProvidor implements vscode.ReferenceProvider {
    provideReferences(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Location[]> {
        return (async (): Promise<vscode.Location[] | undefined> => {
            const stateReferenceLocation: vscode.Location[] = [];

            const stateNoRange: vscode.Range | undefined = document.getWordRangeAtPosition(position);
            const currentWorkspaceFolder: vscode.WorkspaceFolder | undefined = vscode.workspace.getWorkspaceFolder(document.uri);
            if (!stateNoRange || !currentWorkspaceFolder) {
                return undefined;
            }

            // const stateReferenceRegex = new RegExp(`[^a-z0-9-]${document.getText(stateNoRange)}[^0-9]`, 'i');

            const currentWorkspaceFileUris: vscode.Uri[] = await getAllFileUris(currentWorkspaceFolder.uri, '.git');
            let flag: boolean = false;
            for (const fileUri of currentWorkspaceFileUris) {
                if (path.extname(fileUri.fsPath).match(/(sff|air|snd|act)/i)) {
                    continue;
                }
                const textlines: string[] = (await vscode.workspace.fs.readFile(fileUri)).toString().split(os.EOL);
                for (let i = 0; i < textlines.length; i++) {
                    const text = trimTextLine(textlines[i]);
                    if (text === '') {
                        continue;
                    } else if (text.match(new RegExp(`stateno=.*\\b${document.getText(stateNoRange)}\\b`, 'i'))) {
                        stateReferenceLocation.push(
                            new vscode.Location(fileUri, new vscode.Position(i, 0))
                        );
                    } else {
                        if (text.match(/(change|self|target)state/i)) {
                            flag = true;
                        } else if (text.match(/\[state/i)) {
                            flag = false;
                        } else {
                            if (flag && text.match(new RegExp(`value=.*\\b${document.getText(stateNoRange)}\\b`, 'i'))) {
                                stateReferenceLocation.push(
                                    new vscode.Location(fileUri, new vscode.Position(i, 0))
                                );
                            }
                        } 
                    }
                }
            }
            return stateReferenceLocation;
        })();
    }
}