"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
//C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src
var os_1 = require("os");
var vscode_1 = require("vscode");
//import { ArrayUtility } from "C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/common/arrayUtility";
var Constants = require("C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/common/constants");
// import { Logger } from '../logger';
// import { RestClientSettings } from '../models/configurationSettings';
//import { HttpRequest, SerializedHttpRequest } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/httpRequest';
//import { HttpResponse } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/httpResponse';
//import { RequestParserFactory } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/requestParserFactory';
//import { RequestVariableCacheKey } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/models/requestVariableCacheKey';
// import { RequestVariableCacheValue } from "../models/requestVariableCacheValue";
// import { trace } from "../utils/decorator";
//import { HttpClient } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/httpClient';
// import { PersistUtility } from '../utils/persistUtility';
// import { RequestStore } from '../utils/requestStore';
// import { RequestVariableCache } from "../utils/requestVariableCache";
//import { Selector } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/selector';
//import { VariableProcessor } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/variableProcessor';
//import { getCurrentTextDocument } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/workspaceUtility';
//import { HttpResponseTextDocumentView } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/views/httpResponseTextDocumentView';
// import { HttpResponseWebview } from '../views/httpResponseWebview';
var jmespath = require("jmespath");
//import { RequestController } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/controllers/requestController';
var extension_1 = require("C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/extension");
////import * as appInsights from "applicationinsights";
//const filesize = require('filesize');
//const uuidv4 = require('uuid/v4');
var QueryController = /** @class */ (function () {
    //public constructor(context: ExtensionContext, private readonly logger: Logger) {
    function QueryController(context) {
        //this._durationStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        //this._sizeStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        this._httpClient = new extension_1.HttpClient();
        // this._webview = new HttpResponseWebview(context);
        // this._webview.onDidCloseAllWebviewPanels(() => {
        //     this._durationStatusBarItem.hide();
        //     this._sizeStatusBarItem.hide();
        // });
        this._textDocumentView = new extension_1.HttpResponseTextDocumentView();
    }
    //@trace('Request')
    QueryController.prototype.run = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, document, selectedText, pipeIndex, jmesQuery, lines, httpRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = vscode_1.window.activeTextEditor;
                        document = extension_1.getCurrentTextDocument();
                        if (!editor || !document) {
                            return [2 /*return*/];
                        }
                        selectedText = extension_1.Selector.getRequestText(editor, range);
                        if (!selectedText) {
                            return [2 /*return*/];
                        }
                        pipeIndex = selectedText.indexOf('|');
                        if (!(pipeIndex > -1)) return [3 /*break*/, 2];
                        jmesQuery = selectedText.substring(pipeIndex + 1).trim();
                        selectedText = selectedText.substring(0, pipeIndex - 1).trim();
                        lines = selectedText.split(Constants.LineSplitterRegex).filter(function (l) { return !Constants.CommentIdentifiersRegex.test(l); });
                        if (lines.length === 0 || lines.every(function (line) { return line === ''; })) {
                            return [2 /*return*/];
                        }
                        // remove file variables definition lines and leading empty lines
                        selectedText = extension_1.ArrayUtility.skipWhile(lines, function (l) { return Constants.FileVariableDefinitionRegex.test(l) || l.trim() === ''; }).join(os_1.EOL);
                        // variables replacement
                        //selectedText = await VariableProcessor.processRawRequest(selectedText);
                        vscode_1.window.showInformationMessage('request = ' + selectedText);
                        vscode_1.window.showInformationMessage('query = ' + jmesQuery);
                        httpRequest = new extension_1.RequestParserFactory().createRequestParser(selectedText).parseHttpRequest(selectedText, document.fileName);
                        if (!httpRequest) {
                            return [2 /*return*/];
                        }
                        //if (requestVariable) {
                        //    httpRequest.requestVariableCacheKey = new RequestVariableCacheKey(requestVariable, document.uri.toString());
                        //}
                        return [4 /*yield*/, this.runCore(httpRequest, jmesQuery)];
                    case 1:
                        //if (requestVariable) {
                        //    httpRequest.requestVariableCacheKey = new RequestVariableCacheKey(requestVariable, document.uri.toString());
                        //}
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        vscode_1.window.showInformationMessage('No query detected');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QueryController.prototype.runCore = function (httpRequest, jmesQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var response, activeColumn, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this._httpClient.send(httpRequest)];
                    case 1:
                        response = _a.sent();
                        // check cancel
                        // if (this._requestStore.isCancelled(<string>requestId)) {
                        //     return;
                        // }
                        //this.clearSendProgressStatusText();
                        //this.formatDurationStatusBar(response);
                        //this.formatSizeStatusBar(response);
                        //this._sizeStatusBarItem.show();
                        // if (httpRequest.requestVariableCacheKey) {
                        //     RequestVariableCache.add(httpRequest.requestVariableCacheKey, new RequestVariableCacheValue(httpRequest, response));
                        // }
                        try {
                            activeColumn = vscode_1.window.activeTextEditor.viewColumn;
                            // const previewColumn = this._restClientSettings.previewColumn === ViewColumn.Active
                            //     ? activeColumn
                            //     : ((activeColumn as number) + 1) as ViewColumn;
                            //this.EvaluateJMESPathExpression(response, jmesQuery, previewColumn);
                            this.EvaluateJMESPathExpression(response, jmesQuery, activeColumn);
                        }
                        catch (reason) {
                            //this.logger.error('Unable to preview response:', reason);
                            vscode_1.window.showErrorMessage(reason);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        // check cancel
                        // if (this._requestStore.isCancelled(<string>requestId)) {
                        //     return;
                        // }
                        // if (error.code === 'ETIMEDOUT') {
                        //     error.message = `Please check your networking connectivity and your time out in ${this._restClientSettings.timeoutInMilliseconds}ms according to your configuration 'rest-client.timeoutinmilliseconds'. Details: ${error}. `;
                        // } else if (error.code === 'ECONNREFUSED') {
                        //     error.message = `Connection is being rejected. The service isn’t running on the server, or incorrect proxy settings in vscode, or a firewall is blocking requests. Details: ${error}.`;
                        // } else if (error.code === 'ENETUNREACH') {
                        //     error.message = `You don't seem to be connected to a network. Details: ${error}`;
                        // }
                        //this.clearSendProgressStatusText();
                        //this._durationStatusBarItem.text = '';
                        //this.logger.error('Failed to send request:', error);
                        vscode_1.window.showErrorMessage(error_1.message);
                        return [3 /*break*/, 4];
                    case 3: return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QueryController.prototype.EvaluateJMESPathExpression = function (response, query, column) {
        try {
            var result = jmespath.search(JSON.parse(response.body), query);
            this._textDocumentView.renderContent(JSON.stringify(result, null, 1), 'json', column);
        }
        catch (err) {
            var errorMessage = err.name + ": " + err.message;
            vscode_1.window.showErrorMessage(errorMessage);
        }
    };
    QueryController.prototype.dispose = function () {
        //this._durationStatusBarItem.dispose();
        //this._sizeStatusBarItem.dispose();
        //this._webview.dispose();
    };
    return QueryController;
}());
exports.QueryController = QueryController;
