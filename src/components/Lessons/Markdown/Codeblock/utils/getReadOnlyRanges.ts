import { EditorState } from '@codemirror/state'

export const getReadOnlyRanges = (
    targetState: EditorState,
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
): Array<{ from: number; to: number }> => {
    const ranges = readOnlyRanges.map((range, id) => {
        const { line, from, to } = range

        const lineStart = targetState.doc.line(line).from
        const lineEnd = targetState.doc.line(line).to

        return {
            from: from < 0 ? lineEnd + from : lineStart + from,
            to: to < 1 ? lineEnd + to : lineStart + to,
        }
    })

    return ranges
}
