import * as vscode from 'vscode';
import { Data } from '../datas';
import * as os from 'os';

export const defData: Data[] = [
    {
        label: 'Info',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString('キャラの基本情報を定義します。').appendCodeblock([
            '[Info]',
            'Name =',
            'DisplayName =',
            'VersionDate =',
            'MugenVersion =',
            'Author =',
            'Pal.Defaults ='
        ].join(os.EOL), 'def'),
        snippet: new vscode.SnippetString([
            '[Info]',
            'Name = "$1"',
            'DisplayName = "$2"',
            'VersionDate = $CURRENT_MONTH,$CURRENT_DATE,$CURRENT_YEAR',
            'MugenVersion = 04,14,2002',
            'Author = "$3"',
            'Pal.Defaults = ${4:1}'
        ].join(os.EOL)),
        paramDatas: [
            {
                label: 'Name =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'キャラの名前を設定します。',
                    '設定した名前は`Name =`トリガーで参照されます。'
                ].join(os.EOL)).appendCodeblock('Name =', 'def'),
                snippet: new vscode.SnippetString('Name = "$1"')
            },
            {
                label: 'DisplayName =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('画面上に表示するキャラの名前を設定します。').appendCodeblock('DisplayName =', 'def'),
                snippet: new vscode.SnippetString('DisplayName = "$1"')
            },
            {
                label: 'VersionDate =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'キャラのバージョンを設定します。',
                    '書式は月,日,年(MM-DD-YYYY)。'
                ].join(os.EOL)).appendCodeblock('VersionDate =', 'def'),
                snippet: new vscode.SnippetString('VersionDate = $CURRENT_MONTH,$CURRENT_DATE,$CURRENT_YEAR')
            },
            {
                label: 'MugenVersion =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'キャラが動作するM.U.G.E.Nのバージョンを設定します。',
                    '書式は月,日,年(MM-DD-YYYY)。'
                ].join(os.EOL)).appendCodeblock('MugenVersion =', 'def'),
                snippet: new vscode.SnippetString('MugenVersion = 04,14,2002')
            },
            {
                label: 'Author =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'キャラの作者名を設定します。',
                    '設定した名前は`AuthorName =`トリガーで参照されます。'
                ].join(os.EOL)).appendCodeblock('AuthorName =', 'def'),
                snippet: new vscode.SnippetString('AuthorName = "$1"')
            },
            {
                label: 'Pal.Defaults =',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    'コンピューターが優先的に使うパレット番号を設定します。',
                    'Arcadeモードなどで使用されます。'
                ].join(os.EOL)).appendCodeblock('Pal.Defaults =', 'def'),
                snippet: new vscode.SnippetString('Pal.Defaults = "$1"')
            }
        ]
    },
    {
        label: 'Files',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString('キャラが使用するファイル情報を定義します。').appendCodeblock([
            '[Files]',
            'Sprite =',
            'Anim =',
            'Cmd =',
            'Cns =',
            'St =',
            'StCommon ='
        ].join(os.EOL), 'def'),
        snippet: new vscode.SnippetString(),
        paramDatas: [
            {
                label: 'Sprite',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('使用するスプライトファイルを設定します。',).appendCodeblock('Sprite =', 'def'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Anim',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('使用するアニメーションファイルを設定します。').appendCodeblock('Anim =', 'def'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Cmd',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('使用するコマンドファイルを設定します。').appendCodeblock('Cmd =', 'def'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Cns',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('キャラの基本データが定義された定数ファイルを設定します。').appendCodeblock('Cns =', 'def'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('使用するステートファイルを設定します。'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St0',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St1',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St2',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St3',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St4',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St5',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St6',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St7',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St8',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'St9',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用する追加のステートファイルを設定します。',
                    '`St0 =`から`St9 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'StCommon',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('キャラの基本ステートが定義されたファイルを設定します。'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal1',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal2',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal3',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal4',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal5',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal6',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal7',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal8',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal9',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal10',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal11',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Pal12',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString([
                    '使用するパレットファイルを設定します。',
                    '`Pal1 =`から`Pal12 =`まで設定できます。'
                ].join(os.EOL)),
                snippet: new vscode.SnippetString()
            }
        ]
    },
    {
        label: 'Arcade',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString('アーケードモード用のファイル情報を定義します。').appendCodeblock([
            '[Arcade]',
            'Intro.Storyboard =',
            'Ending.Storyboard ='
        ].join(os.EOL), 'def'),
        snippet: new vscode.SnippetString(),
        paramDatas: [
            {
                label: 'Intro.Storyboard',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('キャラのオープニングに使用するファイルを設定します。',).appendCodeblock('Intro.Storyboard =', 'def'),
                snippet: new vscode.SnippetString()
            },
            {
                label: 'Ending.Storyboard',
                kind: vscode.CompletionItemKind.Field,
                description: new vscode.MarkdownString('キャラのエンディングに使用するファイルを設定します。').appendCodeblock('Intro.Storyboard =', 'def'),
                snippet: new vscode.SnippetString()
            }
        ]
    }
]
