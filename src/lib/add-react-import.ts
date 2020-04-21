import * as vscode from 'vscode';

export const addReactImport = (importName: string) => () => {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const document = editor.document;
    const importReact = 'import React';
    
    let allText = document.getText();

    const reactImportStart = allText.indexOf(importReact);
    if (reactImportStart >= 0) {
      const reactImportEnd = allText.indexOf('\n', reactImportStart);
      if (reactImportEnd >= 0) {
        const reactImportLine = allText.substr(reactImportStart, reactImportEnd);
        
        if (reactImportLine.indexOf(importName) < 0) {
          let newImportLine = reactImportLine;

          const additionalImports = reactImportLine.indexOf('{');
          if (additionalImports >= 0) {
            newImportLine = reactImportLine.substr(0, additionalImports + 1)
              + ` ${importName},`
              + reactImportLine.substr(additionalImports + 1);
          } else {
            newImportLine = reactImportLine.substr(0, importReact.length)
              + `, { ${importName} }`
              + reactImportLine.substr(importReact.length);
          }

          editor.edit(editBuilder => {
            editBuilder.replace(
              new vscode.Range(
                document.positionAt(reactImportStart),
                document.positionAt(reactImportStart + reactImportLine.length)
              ),
              newImportLine
            );
          });
        }
      }
    }
  }
};