import * as vscode from 'vscode';
import * as os from 'os';

interface CmdCompletionData {
    label: string,
    kind: vscode.CompletionItemKind,
    insertText: vscode.SnippetString,
    documentation: vscode.MarkdownString
};

export const cmdCompletionItems: CmdCompletionData[] = [
        {
            label: 'Command',
            kind: vscode.CompletionItemKind.Class,
            insertText: new vscode.SnippetString([
                '[Command]',
                'Name = "$1"',
                'Command = "$2"',
                'Time = ${3:25}'
            ].join(os.EOL)),
            documentation: new vscode.MarkdownString('コマンドを定義します。').appendCodeblock([
                '[Command]',
                'Name =',
                'Command =',
                'Time ='
            ].join(os.EOL), 'cmd')
        }
];
