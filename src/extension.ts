// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as stateProvidors from './stateProvidors';
import * as completionItems from './completionItems';
import { generateNull } from './generateNull';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const foldingRangeProvider = vscode.languages.registerFoldingRangeProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new stateProvidors.StateFoldingRangeProvidor()
	);
	context.subscriptions.push(foldingRangeProvider);

	const documentSymbolProvider = vscode.languages.registerDocumentSymbolProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new stateProvidors.StateSymbolProvidor()
	);
	context.subscriptions.push(documentSymbolProvider);

	const definitionProvider = vscode.languages.registerDefinitionProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new stateProvidors.StateDefinitionProvidor()
	);
	context.subscriptions.push(definitionProvider);

	const referenceProvider = vscode.languages.registerReferenceProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new stateProvidors.StateReferenceProvidor()
	);
	context.subscriptions.push(referenceProvider);

	const triggerCompletions = vscode.languages.registerCompletionItemProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new completionItems.triggerCompletionItemProvidor()
	);
	context.subscriptions.push(triggerCompletions);

	const generateNullCommand = vscode.commands.registerCommand(
		'extension.generateNull', generateNull
	);	
	context.subscriptions.push(generateNullCommand);
	
}

// This method is called when your extension is deactivated
export function deactivate() {}
