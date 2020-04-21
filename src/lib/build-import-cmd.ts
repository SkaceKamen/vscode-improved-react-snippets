import * as vscode from 'vscode';
import { addReactImport } from './add-react-import';

export const buildImportCmd = (name: string) => {
	return vscode.commands.registerCommand(
		`vscode-improved-react-snippets.import.${name}`,
		addReactImport(name)
	);
};