import * as vscode from 'vscode';
import * as os from 'os';
import * as fs from 'fs';

export async function generateNull() {

    const input = await vscode.window.showInputBox({
        'prompt': '生成したいNullステコンの数を入力してください。',
        'validateInput': validateInteger
    });

    if (input !== undefined) {
        const outputFolders = await vscode.window.showOpenDialog({
            "canSelectFiles": false,
            "canSelectFolders": true,
            "canSelectMany": false,
            "title": "ステコンの保存先を選択してください。",
        });
        if (outputFolders !== undefined && outputFolders[0]) {
            const folderUri = outputFolders[0];
            let fileUri: vscode.Uri = vscode.Uri.joinPath(folderUri, input + 'Null.st');
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
                vscode.window.showErrorMessage(fileUri.fsPath + '\nファイルがすでに存在しています。');
            }
        }
    }

    // vscode.window.showInputBox(
    //     {
    //         'title': '指定された数のNullステートコントローラーを生成します',
    //         'prompt': '生成したいNullステコンの数を入力してください',
    //         'validateInput': validateInteger
    //     }
    // ).then((input) => {
    //     if (input !== undefined) {
    //         const intValue = parseInt(input);
    //         if (vscode.window.activeTextEditor) {
    //             const folder = vscode.workspace.getWorkspaceFolder(vscode.window.activeTextEditor.document.uri);
    //             if (folder) {
    //                 const uri = vscode.Uri.parse(`untitled://${folder.uri.fsPath}/${input}null`);
    //                 const buf = Buffer.from(`${input}\n`);
    //                 vscode.workspace.fs.writeFile(uri, buf).then(() => {
    //                     vscode.window.showTextDocument(uri);
    //                 });
    //             }
    //         }
    //         // const buf = Buffer.from(`${input}\n`);
    //         // vscode.workspace.fs.writeFile(uri, buf).then(() => {
    //         //     vscode.window.showTextDocument(uri);
    //         // });
    //         // for (let i = 1; i <= intValue; i++) {
    //         //     const buf = Buffer.from(i.toString() + '\n', 'utf-8');
    //         //     vscode.workspace.fs.writeFile(uri, buf);
    //         // }
    //     }
    // });
}

function validateInteger(input: string) {
    const regex = /^[0-9]+$/;
    if (input.match(regex)) {
        return null;
    } else {
        return '整数値を入力してください';
    }
}