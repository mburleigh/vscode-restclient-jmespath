'use strict';

import { CancellationToken, CodeLens, CodeLensProvider, Command, Range, TextDocument } from 'vscode';
import * as Rest from 'C:\\Users\\mattb\\.vscode\\extensions\\humao.rest-client-0.22.2\\dist\\extension.js';

export class JmespathCodeLensProvider implements CodeLensProvider {
    public provideCodeLenses(document: TextDocument, token: CancellationToken): Promise<CodeLens[]> {
        const blocks: CodeLens[] = [];
        const lines: string[] = document.getText().split(Rest.Constants.LineSplitterRegex);
        const requestRanges: [number, number][] = Rest.Selector.getRequestRanges(lines);

        for (const [blockStart, blockEnd] of requestRanges) {
            const range = new Range(blockStart, 0, blockEnd, 0);
            const cmd: Command = {
                arguments: [document, range],
                title: 'Execute Query',
                command: ''
            };
            blocks.push(new CodeLens(range, cmd));
        }

        return Promise.resolve(blocks);
    }
}