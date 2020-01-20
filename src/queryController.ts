/// <reference path="./typings/HttpRequest/index.d.ts" />

"use strict";

//C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src

import { EOL } from 'os';
import { extensions, ExtensionContext, Range, StatusBarAlignment, StatusBarItem, ViewColumn, window } from 'vscode';
import { ArrayUtility } from "C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/common/arrayUtility";
import * as Constants from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/common/constants';
// import { Logger } from '../logger';
// import { RestClientSettings } from '../models/configurationSettings';
//import { HttpRequest, SerializedHttpRequest } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/httpRequest';
//import { HttpResponse } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/httpResponse';
//import { RequestParserFactory } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/requestParserFactory';
//import { RequestVariableCacheKey } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/requestVariableCacheKey';
// import { RequestVariableCacheValue } from "../models/requestVariableCacheValue";
// import { trace } from "../utils/decorator";
//import { HttpClient } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/httpClient';
//import * as HttpClient from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/httpClient';
// import { PersistUtility } from '../utils/persistUtility';
// import { RequestStore } from '../utils/requestStore';
// import { RequestVariableCache } from "../utils/requestVariableCache";
import { Selector } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/selector';
//import { VariableProcessor } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/variableProcessor';
import { getCurrentTextDocument } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/workspaceUtility';
//import { HttpResponseTextDocumentView } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/views/httpResponseTextDocumentView';
// import { HttpResponseWebview } from '../views/httpResponseWebview';
//import * as jmespath from 'jmespath';

//import { ArrayUtility, getCurrentTextDocument, HttpClient, HttpRequest, HttpResponse, HttpResponseTextDocumentView, RequestParserFactory, Selector, SerializedHttpRequest } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/extension.js';

////import * as appInsights from "applicationinsights";

//const filesize = require('filesize');
//const uuidv4 = require('uuid/v4');

export class QueryController {
    // private readonly _restClientSettings: RestClientSettings = RestClientSettings.Instance;
    // private readonly _requestStore: RequestStore = RequestStore.Instance;
    // private _durationStatusBarItem: StatusBarItem;
    // private _sizeStatusBarItem: StatusBarItem;
//    private _httpClient: HttpClient;
    // private _webview: HttpResponseWebview;
//    private _textDocumentView: HttpResponseTextDocumentView;

    //public constructor(context: ExtensionContext, private readonly logger: Logger) {
    public constructor(context: ExtensionContext) {
        //this._durationStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        //this._sizeStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
//        this._httpClient = new HttpClient();
        // this._webview = new HttpResponseWebview(context);
        // this._webview.onDidCloseAllWebviewPanels(() => {
        //     this._durationStatusBarItem.hide();
        //     this._sizeStatusBarItem.hide();
        // });
//        this._textDocumentView = new HttpResponseTextDocumentView();
    }

    //@trace('Request')
    public async run(range: Range) {
        const editor = window.activeTextEditor;
        const document = getCurrentTextDocument();
        if (!editor || !document) {
            return;
        }

        // Get selected text of selected lines or full document
        let selectedText = Selector.getRequestText(editor, range);
        if (!selectedText) {
            return;
        }

        //var test =  extensions.all;
        //let restClientExt = extensions.getExtension('humao.rest-client');

        // look for JMESPath query
        const pipeIndex = selectedText.indexOf('|');
        if (pipeIndex > -1) {
            var jmesQuery = selectedText.substring(pipeIndex + 1).trim();
            selectedText = selectedText.substring(0, pipeIndex - 1).trim();

            // parse request variable definition name
            //const requestVariable = Selector.getRequestVariableDefinitionName(selectedText);

            // remove comment lines
            const lines: string[] = selectedText.split(Constants.LineSplitterRegex).filter((l: string) => !Constants.CommentIdentifiersRegex.test(l));
            if (lines.length === 0 || lines.every(line => line === '')) {
                return;
            }

            // remove file variables definition lines and leading empty lines
            selectedText = ArrayUtility.skipWhile(lines, (l: string) => Constants.FileVariableDefinitionRegex.test(l) || l.trim() === '').join(EOL);

            // variables replacement
            //selectedText = await VariableProcessor.processRawRequest(selectedText);

            window.showInformationMessage('request = '+ selectedText);
            window.showInformationMessage('query = '+ jmesQuery);

            // parse http request
            // const httpRequest = new RequestParserFactory().createRequestParser(selectedText).parseHttpRequest(selectedText, document.fileName);
            // if (!httpRequest) {
            //     return;
            // }

            //if (requestVariable) {
            //    httpRequest.requestVariableCacheKey = new RequestVariableCacheKey(requestVariable, document.uri.toString());
            //}

//            await this.runCore(httpRequest, jmesQuery);
        }
        else
        {
            window.showInformationMessage('No query detected');
        }       
    }

//     private async runCore(httpRequest: HttpRequest, jmesQuery: string) {
//         //const requestId = uuidv4();
//         //this._requestStore.add(<string>requestId, httpRequest);

//         // clear status bar
//         //this.setSendingProgressStatusText();

//         // set http request
//         try {
// //            const response = await this._httpClient.send(httpRequest);

//             // check cancel
//             // if (this._requestStore.isCancelled(<string>requestId)) {
//             //     return;
//             // }

//             //this.clearSendProgressStatusText();
//             //this.formatDurationStatusBar(response);

//             //this.formatSizeStatusBar(response);
//             //this._sizeStatusBarItem.show();

//             // if (httpRequest.requestVariableCacheKey) {
//             //     RequestVariableCache.add(httpRequest.requestVariableCacheKey, new RequestVariableCacheValue(httpRequest, response));
//             // }

//             try {
//                 const activeColumn = window.activeTextEditor!.viewColumn;
//                 // const previewColumn = this._restClientSettings.previewColumn === ViewColumn.Active
//                 //     ? activeColumn
//                 //     : ((activeColumn as number) + 1) as ViewColumn;
                
//                 //this.EvaluateJMESPathExpression(response, jmesQuery, previewColumn);
// //                this.EvaluateJMESPathExpression(response, jmesQuery, activeColumn);
//             } catch (reason) {
//                 //this.logger.error('Unable to preview response:', reason);
//                 window.showErrorMessage(reason);
//             }

//             // persist to history json file
//             //const serializedRequest = SerializedHttpRequest.convertFromHttpRequest(httpRequest);
//             //await PersistUtility.saveRequest(serializedRequest);
//         } catch (error) {
//             // check cancel
//             // if (this._requestStore.isCancelled(<string>requestId)) {
//             //     return;
//             // }

//             // if (error.code === 'ETIMEDOUT') {
//             //     error.message = `Please check your networking connectivity and your time out in ${this._restClientSettings.timeoutInMilliseconds}ms according to your configuration 'rest-client.timeoutinmilliseconds'. Details: ${error}. `;
//             // } else if (error.code === 'ECONNREFUSED') {
//             //     error.message = `Connection is being rejected. The service isn’t running on the server, or incorrect proxy settings in vscode, or a firewall is blocking requests. Details: ${error}.`;
//             // } else if (error.code === 'ENETUNREACH') {
//             //     error.message = `You don't seem to be connected to a network. Details: ${error}`;
//             // }

//             //this.clearSendProgressStatusText();
//             //this._durationStatusBarItem.text = '';
//             //this.logger.error('Failed to send request:', error);
//             window.showErrorMessage(error.message);
//         } finally {
//             //this._requestStore.complete(<string>requestId);
//         }
//     }

//     private EvaluateJMESPathExpression(response: HttpResponse, query: string, column?: ViewColumn) {
//         try {
//             let result = jmespath.search(JSON.parse(response.body), query);
// //            this._textDocumentView.renderContent(JSON.stringify(result, null, 1), 'json', column);
//         } catch (err) {
//             let errorMessage = `${err.name}: ${err.message}`;
//             window.showErrorMessage(errorMessage);
//         }
//     }

    public dispose() {
        //this._durationStatusBarItem.dispose();
        //this._sizeStatusBarItem.dispose();
        //this._webview.dispose();
    }

    // private setSendingProgressStatusText() {
    //     this.clearSendProgressStatusText();
    //     this._durationStatusBarItem.text = `$(sync~spin) Waiting`;
    //     this._durationStatusBarItem.tooltip = 'Waiting Response';
    //     this._durationStatusBarItem.show();
    // }

    // private clearSendProgressStatusText() {
    //     this._sizeStatusBarItem.hide();
    // }

    // private formatDurationStatusBar(response: HttpResponse) {
    //     this._durationStatusBarItem.text = ` $(clock) ${response.elapsedMillionSeconds}ms`;
    //     this._durationStatusBarItem.tooltip = [
    //         'Breakdown of Duration:',
    //         `Socket: ${response.timingPhases.wait.toFixed(1)}ms`,
    //         `DNS: ${response.timingPhases.dns.toFixed(1)}ms`,
    //         `TCP: ${response.timingPhases.tcp.toFixed(1)}ms`,
    //         `FirstByte: ${response.timingPhases.firstByte.toFixed(1)}ms`,
    //         `Download: ${response.timingPhases.download.toFixed(1)}ms`
    //     ].join(EOL);
    // }

    // private formatSizeStatusBar(response: HttpResponse) {
    //     this._sizeStatusBarItem.text = ` $(database) ${filesize(response.bodySizeInBytes + response.headersSizeInBytes)}`;
    //     this._sizeStatusBarItem.tooltip = [
    //         'Breakdown of Response Size:',
    //         `Headers: ${filesize(response.headersSizeInBytes)}`,
    //         `Body: ${filesize(response.bodySizeInBytes)}`
    //     ].join(EOL);
    // }
}