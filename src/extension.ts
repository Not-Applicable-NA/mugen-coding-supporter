// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { StateFoldingRangeProvidor } from './stateProvidor/foldingState';
import { StateSymbolProvidor } from './stateProvidor/symbolState';
import { StateDefinitionProvidor } from './stateProvidor/definitionState';
import { StateReferenceProvidor } from './stateProvidor/referenceState';
import { generateNull } from './generateNull';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const foldingRangeProvider = vscode.languages.registerFoldingRangeProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new StateFoldingRangeProvidor()
	);
	const documentSymbolProvider = vscode.languages.registerDocumentSymbolProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new StateSymbolProvidor()
	);
	const definitionProvider = vscode.languages.registerDefinitionProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new StateDefinitionProvidor()
	);
	const referenceProvider = vscode.languages.registerReferenceProvider(
		[{ "scheme" : "file", "language" : "state" }],
		new StateReferenceProvidor()
	);

	const generateNullCommand = vscode.commands.registerCommand(
		'extension.generateNull', generateNull
	);

	context.subscriptions.push(foldingRangeProvider, documentSymbolProvider, definitionProvider, referenceProvider, generateNullCommand);
	
}

// This method is called when your extension is deactivated
export function deactivate() {}
