"use strict";
exports.__esModule = true;
var vscode_1 = require("vscode");
var jmespathCodeLensProvider_1 = require("./jmespathCodeLensProvider");
//import { MyCodeLensProvider } from './jmespathCodeLensProvider';
var queryController_1 = require("./queryController");
function activate(context) {
    console.log('Congratulations, your extension "vscode-restclient-jmespath" is now active!');
    //const logger = new Logger();
    //const queryController = new QueryController(context, logger);
    var queryController = new queryController_1.QueryController(context);
    context.subscriptions.push(vscode_1.commands.registerCommand('extension.runQuery', (function (document, range) { return queryController.run(range); })));
    var docSelector = {
        language: 'javascript',
        scheme: 'file'
    };
    var codelensProviderDisposable = vscode_1.languages.registerCodeLensProvider(docSelector, new jmespathCodeLensProvider_1.JmespathCodeLensProvider()
    //new MyCodeLensProvider()
    );
    context.subscriptions.push(codelensProviderDisposable);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode_1.commands.registerCommand('extension.helloWorld', function () {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode_1.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
