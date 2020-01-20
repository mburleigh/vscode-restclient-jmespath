// https://vscode.rocks/codelens/

'use strict';

// import { CancellationToken, CodeLens, CodeLensProvider, Command, Range, TextDocument } from 'vscode';
import { CodeLens, CodeLensProvider, Command, Range, TextDocument } from 'vscode';
//import * as Rest from 'C:\\Users\\mattb\\.vscode\\extensions\\humao.rest-client-0.22.2\\dist\\extension.js';
import { Selector } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/selector';
import * as Constants from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/common/constants';

export class JmespathCodeLensProvider implements CodeLensProvider {
    //public provideCodeLenses(document: TextDocument, token: CancellationToken): Promise<CodeLens[]> {
    async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
        const blocks: CodeLens[] = [];
        const lines: string[] = document.getText().split(Constants.LineSplitterRegex);
        const requestRanges: [number, number][] = Selector.getRequestRanges(lines);

        for (const [blockStart, blockEnd] of requestRanges) {
            const range = new Range(blockStart, 0, blockEnd, 0);
            const cmd: Command = {
                arguments: [document, range],
                title: 'Execute Query',
                command: 'extension.runQuery'
            };
            blocks.push(new CodeLens(range, cmd));
        }

        // let c: Command = {
        //     command: 'extension.helloWorld',
        //     title: 'Execute Query',
        // }
        // blocks.push(new CodeLens(new Range(0, 0, 0, 0), c));

        return blocks;
        // return Promise.resolve(blocks);

        // let c: Command = {
        //     command: 'extension.helloWorld',
        //     title: 'Insert console.log',
        // }

        // let topOfDocument = new Range(0, 0, 0, 0)
        // let codeLens = new CodeLens(topOfDocument, c)

        // return [codeLens]
    }
}

// export class MyCodeLensProvider implements CodeLensProvider {
//     async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
//         let topOfDocument = new Range(0, 0, 0, 0)

//         let c: Command = {
//             command: 'extension.helloWorld',
//             title: 'Insert console.log',
//         }

//         let codeLens = new CodeLens(topOfDocument, c)

//         return [codeLens]
//     }
// }