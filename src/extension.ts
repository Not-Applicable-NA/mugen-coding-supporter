// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as providors from './providorIndex';
import { generateNull } from './commands/generateNull';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const stateFileProviders: vscode.Disposable[] = [
		vscode.languages.registerFoldingRangeProvider(
			[{ 'scheme' : 'file', 'language' : 'state' }],
			new providors.StateFoldingRangeProvidor()
		),
		vscode.languages.registerDocumentSymbolProvider(
			[{ 'scheme' : 'file', 'language' : 'state' }],
			new providors.StateSymbolProvidor()
		),
		vscode.languages.registerDefinitionProvider(
			[{ 'scheme' : 'file', 'language' : 'state' }],
			new providors.StateDefinitionProvidor()
		),
		vscode.languages.registerReferenceProvider(
			[{ 'scheme' : 'file', 'language' : 'state' }],
			new providors.StateReferenceProvidor()
		)
	];
	for (const stateFileProvider of stateFileProviders) {
		context.subscriptions.push(stateFileProvider);
	}

	const completions: vscode.Disposable[] = [
		vscode.languages.registerCompletionItemProvider(
			[{ 'scheme' : 'file', 'language' : 'def' }],
			new providors.DefCompletionItemProvidor()
		),
		vscode.languages.registerCompletionItemProvider(
			[{ 'scheme' : 'file', 'language' : 'cmd' }],
			new providors.CmdCompletionItemProvidor()
		),
		vscode.languages.registerCompletionItemProvider(
			[{ 'scheme' : 'file', 'language' : 'state' }],
			new providors.TriggerCompletionItemProvidor()
		)
	];
	for (const completion of completions) {
		context.subscriptions.push(completion);
	}

	const generateNullCommand = vscode.commands.registerCommand(
		'extension.generateNull', generateNull
	);	
	context.subscriptions.push(generateNullCommand);
	
}

// This method is called when your extension is deactivated
export function deactivate() {}
