import * as vscode from 'vscode';
import * as os from 'os';
import * as fs from 'fs';

export async function generateNull() {

    const input = await vscode.window.showInputBox({
        'prompt': '生成したいNullステコンの数を入力してください',
        'validateInput': validateInteger
    });

    if (input !== undefined) {
        const fileUri = await vscode.window.showSaveDialog({
            'filters': {
                'States': ['st', 'cns']
            },
            'title': '名前を付けてステコンを保存',
        });
        if (fileUri !== undefined) {
            if (!fs.existsSync(fileUri.fsPath)) {
                vscode.window.showInformationMessage('生成中...');

                const initialize: Uint8Array = Buffer.from('');
                await vscode.workspace.fs.writeFile(fileUri, initialize);
                for (let i = 0; i < parseInt(input); i++) {
                    const content = await vscode.workspace.fs.readFile(fileUri);
                    const nullBuf: Uint8Array = Buffer.from(`[State ${i}]${os.EOL}Type=Null${os.EOL}Trigger1=0${os.EOL}`);
                    await vscode.workspace.fs.writeFile(fileUri, Buffer.concat([content, nullBuf]));
                }
                vscode.window.showInformationMessage('完了しました。');

                await vscode.window.showTextDocument(fileUri);

            } else {
                vscode.window.showErrorMessage('すでに存在しているファイルに上書きすることはできません。');
            }
        }
    }
}

function validateInteger(input: string) {
    const regex = /^[0-9]+$/;
    if (input.match(regex)) {
        return null;
    } else {
        return '整数値を入力してください';
    }
}