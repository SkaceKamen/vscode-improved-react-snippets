import * as vscode from 'vscode';
import { buildImportCmd } from './lib/build-import-cmd';
import { buildSnippet } from './lib/build-snippet';

export function activate(context: vscode.ExtensionContext) {
	const completionProvider = vscode.languages.registerCompletionItemProvider(
		['javascriptreact', 'typescriptreact'],
		{
			provideCompletionItems: () => {
				return [
					buildSnippet(
						'useState',
						'const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState})'
					),
					buildSnippet(
						'useMemo',
						'const ${1:variable} = useMemo(() => ${2:memo}, [${3:dependencies}])'
					),
					buildSnippet(
						'useEffect',
						'useEffect(() => {\n\t\t${1:effect}\n\t}, [${2:dependencies}])'
					),
					buildSnippet(
						'useRef',
						'const ${1:ref} = useRef<${2:any}>(${3:initialValue})'
					),
					buildSnippet(
						'useCallback',
						'const ${1:callback} = useCallback(() => ${2:callback}, [${3: dependencies}])'
					)
				];
			}
		}
	);

	context.subscriptions.push(
		completionProvider,
		buildImportCmd('useState'),
		buildImportCmd('useEffect'),
		buildImportCmd('useMemo'),
		buildImportCmd('useRef'),
		buildImportCmd('useCallback')
	);
}

export function deactivate() {}
