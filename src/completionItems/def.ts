import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

interface DefCompletionData {
    label: string,
    kind: vscode.CompletionItemKind,
    insertText: vscode.SnippetString,
    documentation: vscode.MarkdownString
};

export function getDefCompletionItems(document: vscode.TextDocument): DefCompletionData[] {
    return [
        {
            label: 'Info',
            kind: vscode.CompletionItemKind.Class,
            insertText: new vscode.SnippetString([
                '[Info]',
                'Name = "$1"',
                'DisplayName = "$2"',
                'VirsionDate = $CURRENT_MONTH,$CURRENT_DATE,$CURRENT_YEAR',
                'MugenVersion = 04,14,2002',
                'Author = "$3"',
                'Pal.Defaults = ${4:1}'
            ].join(os.EOL)),
            documentation: new vscode.MarkdownString('キャラの基本情報を定義します。').appendCodeblock([
                '[Info]',
                'Name =',
                'DisplayName =',
                'VirsionDate =',
                'MugenVersion =',
                'Author =',
                'Pal.Defaults ='
            ].join(os.EOL), 'def')
        },{
            label: 'Files',
            kind: vscode.CompletionItemKind.Class,
            insertText: ((): vscode.SnippetString => {
                const filesSnippet: vscode.SnippetString = new vscode.SnippetString(`[Files]${os.EOL}`);
                for (const fileType of ['Sprite', 'Anim', 'Cmd', 'Cns', 'St', 'StCommon', '', 'Pal1']) {
                    if (fileType !== '') {
                        filesSnippet.appendText(`${fileType} = `);
                        filesSnippet.appendChoice(getWorkspaceFileRelativePath(document));
                    }
                    filesSnippet.appendText(os.EOL);
                }
                return filesSnippet;
            })(),
            documentation: new vscode.MarkdownString('キャラが使用するファイル情報を定義します。').appendCodeblock([
                '[Files]',
                'Sprite =',
                'Anim =',
                'Cmd =',
                'Cns =',
                'St =',
                'StCommon =',
                '',
                'Pal1 ='
            ].join(os.EOL), 'def')
        },{
            label: `St${String(stCount(document))}`,
            kind: vscode.CompletionItemKind.Class,
            insertText: ((): vscode.SnippetString => {
                const filesSnippet: vscode.SnippetString = new vscode.SnippetString(`St${String(stCount(document))} = `);
                filesSnippet.appendChoice(getWorkspaceFileRelativePath(document));
                return filesSnippet;
            })(),
            documentation: new vscode.MarkdownString(`キャラが使用する追加のステートファイル情報を定義します。${os.EOL}最大St9まで設定できます。`)
        },{
            label: `Pal${String(palCount(document))}`,
            kind: vscode.CompletionItemKind.Class,
            insertText: ((): vscode.SnippetString => {
                const filesSnippet: vscode.SnippetString = new vscode.SnippetString(`Pal${String(palCount(document))} = `);
                filesSnippet.appendChoice(getWorkspaceFileRelativePath(document));
                return filesSnippet;
            })(),
            documentation: new vscode.MarkdownString(`キャラが使用する追加のステートファイル情報を定義します。${os.EOL}最大St9まで設定できます。`)
        },{
            label: 'Arcade',
            kind: vscode.CompletionItemKind.Class,
            insertText: ((): vscode.SnippetString => {
                const filesSnippet: vscode.SnippetString = new vscode.SnippetString(`[Arcade]${os.EOL}`);
                for (const fileType of ['Intro.Storyboard', 'Ending.Storyboard']) {
                    if (fileType !== '') {
                        filesSnippet.appendText(`${fileType} = `);
                        filesSnippet.appendChoice(getWorkspaceFileRelativePath(document));
                    }
                    filesSnippet.appendText(os.EOL);
                }
                return filesSnippet;
            })(),
            documentation: new vscode.MarkdownString('アーケードモード用のファイル情報を定義します。').appendCodeblock([
                '[Arcade]',
                'Intro.Storyboard =',
                'Ending.Storyboard ='
            ].join(os.EOL), 'def')
        }
    ];
}

function getWorkspaceFileRelativePath(document:vscode.TextDocument): string[] {
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

function stCount(document:vscode.TextDocument): number {
    const currentWorkspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
    if (!currentWorkspaceFolder) {
        return -1;
    }
    let count: number = 0;
    const stRegex: RegExp = /^st[0-9]/gi;
    const lines = fs.readFileSync(document.uri.fsPath).toString().split(os.EOL);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(stRegex)){
            count++;
        }
    }
    return count;
}

function palCount(document:vscode.TextDocument): number {
    const currentWorkspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
    if (!currentWorkspaceFolder) {
        return -1;
    }
    let count: number = 1;
    const palRegex: RegExp = /^pal1?[0-9]/gi;
    const lines = fs.readFileSync(document.uri.fsPath).toString().split(os.EOL);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(palRegex)){
            count++;
        }
    }
    return count;
}