import { commands, extensions, ExtensionContext, languages, Range, TextDocument, window } from 'vscode';
import { JmespathCodeLensProvider } from './jmespathCodeLensProvider';
//import { MyCodeLensProvider } from './jmespathCodeLensProvider';
import { QueryController } from './queryController';

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "vscode-restclient-jmespath" is now active!');

	//const logger = new Logger();

	// let restClientExt = extensions.getExtension('humao.rest-client');
	// if (restClientExt)
	// {
	// 	//let importedApi = restClientExt.exports;
	// 	//console.log('xxx');
	// }
	// else
	// {

	// }

	//const queryController = new QueryController(context, logger);
	const queryController = new QueryController(context);

	context.subscriptions.push(commands.registerCommand('extension.runQuery', ((document: TextDocument, range: Range) => queryController.run(range))));

	let docSelector = {
		language: 'javascript',
		//language: "http",
		scheme: 'file'
	};
	let codelensProviderDisposable = languages.registerCodeLensProvider(
		docSelector,
		new JmespathCodeLensProvider()
		//new MyCodeLensProvider()
	);
	context.subscriptions.push(codelensProviderDisposable);





	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}