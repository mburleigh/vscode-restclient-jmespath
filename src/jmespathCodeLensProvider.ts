// https://vscode.rocks/codelens/

'use strict';

import { CodeLens, CodeLensProvider, Command, Range, TextDocument } from 'vscode';
import { Selector } from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/utils/selector';
import * as Constants from 'C:/Users/mburleigh/.vscode/extensions/humao.rest-client-0.23.0/dist/src/common/constants';

export class JmespathCodeLensProvider implements CodeLensProvider {
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

        return blocks;
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