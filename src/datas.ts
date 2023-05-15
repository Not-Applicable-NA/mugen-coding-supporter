import * as vscode from 'vscode';
import { cmdData } from './datas/cmd';
import { defData } from './datas/def';
import { triggerData } from './datas/trigger';

export interface Data {
    label: string;
    kind: vscode.CompletionItemKind;
    description: vscode.MarkdownString;
    snippet: vscode.SnippetString;
    detail?: string;
    paramDatas?: Data[];
};

export const mugenData: { [dataType: string]: Data[] } = {
    cmd: cmdData,
    def: defData,
    trigger: triggerData
}