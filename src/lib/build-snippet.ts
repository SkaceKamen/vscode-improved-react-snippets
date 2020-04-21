import * as vscode from 'vscode';

export const buildSnippet = (name: string, snippet: string) => {
	const cmd = new vscode.CompletionItem(name);
	cmd.kind = vscode.CompletionItemKind.Snippet;
	cmd.insertText = new vscode.SnippetString(snippet);
	cmd.command = {
		command: `vscode-improved-react-snippets.import.${name}`,
		title: 'Import if needed'
	};
	return cmd;
};
