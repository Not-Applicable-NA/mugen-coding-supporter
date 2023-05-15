import * as vscode from 'vscode';
import { Data, mugenData } from "../datas";
import { trimTextLine } from '../trimText';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

export class DefCompletionItemProvidor implements vscode.CompletionItemProvider {
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
            
            const completionDefData = (datas: Data[]) => {
                for (const data of datas) {                    
                    if (!data.snippet.value) {
                        if ( data.label === 'Files' ) {
                            data.snippet.appendText(`[Files]${os.EOL}`);
                            ['Sprite', 'Anim', 'Cmd', 'Cns', 'St', 'StCommon'].map((file, index) => {
                                data.snippet.appendText(`${file} = `).appendChoice(getWorkspaceFiles(document), index+1).appendText(os.EOL);
                            });
                        } else if ( data.label === 'Arcade' ) {
                            data.snippet.appendText(`[Arcade]${os.EOL}`);
                            ['Intro.Storyboard', 'Ending.Storyboard'].map((file, index) => {
                                data.snippet.appendText(`${file} = `).appendChoice(getWorkspaceFiles(document), index+1).appendText(os.EOL);
                            });
                        }
                        for (const file of ['Sprite', 'Anim', 'Cmd', 'Cns', 'St', 'St0', 'St1', 'St2', 'St3', 'St4', 'St5', 'St6', 'St7', 'St8', 'St9', 'StCommon', 'Pal1', 'Pal2', 'Pal3', 'Pal4', 'Pal5', 'Pal6', 'Pal7', 'Pal8', 'Pal9', 'Pal10', 'Pal11', 'Pal12', 'Intro.Storyboard', 'Ending.Storyboard']) {
                            if ( data.label === file ) {
                                data.label = `${file} =`;
                                data.snippet.appendText(`${file} = `).appendChoice(getWorkspaceFiles(document));
                                break;
                            }
                        }
                    }
                    const completionItem: vscode.CompletionItem = new vscode.CompletionItem(data.label, data.kind);
                    completionItem.insertText = data.snippet;
                    completionItem.documentation = data.description;
                    completionItems.push(completionItem);
                    if ( data.paramDatas === currentSection && data.paramDatas ) {
                        completionDefData(data.paramDatas);
                    }
                }
            }
            completionDefData(mugenData.def);

        }
        return completionItems;
    }
}

function getWorkspaceFiles(document:vscode.TextDocument): string[] {
    const currentWorkspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
    if (!currentWorkspaceFolder) {
        return [];
    }
    const paths: string[] = [];
    const fileSearch = (folderPath: string) => {
        for (const object of fs.readdirSync(folderPath)) {
            const objPath = path.join(folderPath, object);
            const objStats = fs.statSync(objPath);
            if (objStats.isFile()) {
                paths.push(vscode.workspace.asRelativePath(objPath, false));
            } else if (objStats.isDirectory()) {
                if (path.basename(objPath) !== '.git') {
                    fileSearch(objPath);
                }
            }
        }
    }
    fileSearch(currentWorkspaceFolder.uri.fsPath);
    return paths;
}