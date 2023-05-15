import * as vscode from 'vscode';
import { Data } from '../datas';
import * as os from 'os';

export const cmdData: Data[] = [
    {
        label: 'Remap',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString([
            'キャラが使用するボタンの配置を変更します。',
            '省略可。'
        ].join(os.EOL)).appendCodeblock([
            '[Remap]',
            'x =',
            'y =',
            'z =',
            'a =',
            'b =',
            'c =',
            's ='
        ].join(os.EOL), 'cmd'),
        snippet: new vscode.SnippetString([
            '[Remap]',
            'x = ${1|x,y,z,a,b,c,s|}',
            'y = ${2|x,y,z,a,b,c,s|}',
            'z = ${3|x,y,z,a,b,c,s|}',
            'a = ${4|x,y,z,a,b,c,s|}',
            'b = ${5|x,y,z,a,b,c,s|}',
            'c = ${6|x,y,z,a,b,c,s|}',
            's = ${7|x,y,z,a,b,c,s|}'
        ].join(os.EOL))
    },
    {
        label: 'Defaults',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString('Commandパラメーターのデフォルト値を設定します。').appendCodeblock([
            '[Defaults]',
            'Command.time =',
            'Command.buffer.time ='
        ].join(os.EOL), 'cmd'),
        snippet: new vscode.SnippetString([
            '[Defaults]',
            'Command.time = ${1:15}',
            'Command.buffer.time = ${2:1}'
        ].join(os.EOL)),
        paramDatas: [
            {
                label: 'Command.time =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '`[Command]`セクションの`time =`のデフォルト値を設定します。',
                    '最小値は1。'
                ].join(os.EOL)).appendCodeblock('Command.time =', 'cmd'),
                snippet: new vscode.SnippetString('Command.time = ${1:15}')
            },
            {
                label: 'Command.buffer.time =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '`[Command]`セクションの`buffer.time =`のデフォルト値を設定します。',
                    '最小値は1、最大値は30。'
                ].join(os.EOL)).appendCodeblock('Command.buffer.time =', 'cmd'),
                snippet: new vscode.SnippetString('Command.buffer.time = ${1:1}')
            }
        ]
    },
    {
        label: 'Command',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString('コマンドを定義します。').appendCodeblock([
            '[Command]',
            'Name =',
            'Command =',
            'Time =',
            'Buffer.time ='
        ].join(os.EOL), 'cmd'),
        snippet: new vscode.SnippetString([
            '[Command]',
            'Name = "${1}"',
            'Command = ${2}',
            'Time = ${3}',
            'Buffer.time = ${4}'
        ].join(os.EOL)),
        paramDatas: [
            {
                label: 'Name =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'そのコマンドにつける名前を設定します。',
                    '大文字と小文字は区別されます。'
                ].join(os.EOL)).appendCodeblock('Name =', 'cmd'),
                snippet: new vscode.SnippetString('Name = ${1}')
            },
            {
                label: 'Command =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '定義したいコマンドを設定します。',
                    'ボタンや方向をカンマで区切って設定します。',
                    'それぞれのボタンや方向の前には、特殊な文字を入れることができます。'
                ].join(os.EOL)).appendCodeblock('Command =', 'cmd'),
                snippet: new vscode.SnippetString('Command = ${2}')
            },
            {
                label: 'Time =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'コマンドの入力猶予時間を設定します。',
                    '省略時、`[Defaults]`セクションの`Command.time =`が参照されます。'
                ].join(os.EOL)).appendCodeblock('Time =', 'cmd'),
                snippet: new vscode.SnippetString('Time = ${1}')
            },
            {
                label: 'Buffer.time =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'コマンド入力後の持続時間を設定します。',
                    '省略時、`[Defaults]`セクションの`Command.buffer.time =`が参照されます。',
                    '基本的には1を設定します。'
                ].join(os.EOL)).appendCodeblock('Buffer.time =', 'cmd'),
                snippet: new vscode.SnippetString('Time = ${1:1}')
            }
        ]
    }
]