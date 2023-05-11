import * as vscode from 'vscode';

export async function getAllFileUris(directoryUri: vscode.Uri, excludeDirectoryName?: string): Promise<vscode.Uri[]> {
    const FileUris: vscode.Uri[] = [];
    const getFiles = async (readDir: vscode.Uri) => {
        for (const entry of await vscode.workspace.fs.readDirectory(readDir)) {
            if (entry[0] === excludeDirectoryName && entry[1] === 2) {
                continue;
            } else {
                if (entry[1] === 2) {
                    await getFiles(vscode.Uri.joinPath(readDir, entry[0]));
                } else {
                    FileUris.push(vscode.Uri.joinPath(readDir, entry[0]));
                }
            }
        }
    }
    await getFiles(directoryUri);

    return FileUris;
}