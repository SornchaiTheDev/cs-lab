import { useEffect, useRef } from 'react'
import { minimalSetup } from 'codemirror'
import { EditorState, Compartment, Extension } from '@codemirror/state'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { python } from '@codemirror/lang-python'
import { closeBrackets } from '@codemirror/autocomplete'
import { searchKeymap } from '@codemirror/search'
import { bracketMatching, foldGutter, indentUnit } from '@codemirror/language'
import { indentWithTab, indentWithTabLess } from '../commands/indentWithTab'
import readOnlyRangesExtension from 'codemirror-readonly-ranges'

interface Props {
    onChange?: (value: string) => void
    onKeyDown?: (key: KeyboardEvent) => void
    tabSize?: number
    readonly?: boolean
    initialDoc?: string
    theme: Extension
    readOnlyRanges?: (
        targetState: EditorState
    ) => Array<{ from: number | undefined; to: number | undefined }>
}

const baseTheme = EditorView.baseTheme({
    '&': {
        height: '100%',
    },
    '&.cm-editor.cm-focused': {
        outline: 'none',
    },
    '&.cm-scroller': {
        fontFamily: `Consolas, 'Bitstream Vera Sans Mono', 'Courier New', Courier,
        monospace`,
    },
})

const _tabSize = new Compartment(),
    _indentUnit = new Compartment(),
    _readonly = new Compartment(),
    _readOnlyRanges = new Compartment(),
    _theme = new Compartment()

function useCodemirror({
    onChange,
    onKeyDown,
    tabSize,
    readonly,
    initialDoc,
    readOnlyRanges,
    theme,
}: Props): {
    editorRef: React.RefObject<HTMLDivElement>
    editorView: EditorView | undefined
} {
    const editorRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<EditorView>()
    useEffect(() => {
        if (!editorRef.current) return
        const state = EditorState.create({
            doc: initialDoc,
            extensions: [
                minimalSetup,
                lineNumbers(),
                closeBrackets(),
                bracketMatching(),
                foldGutter(),
                baseTheme,
                python(),
                keymap.of([
                    {
                        key: 'Tab',
                        preventDefault: true,
                        run: indentWithTab,
                    },
                    {
                        key: 'Shift-Tab',
                        preventDefault: true,
                        run: indentWithTabLess,
                    },
                    ...searchKeymap,
                ]),
                _theme.of(theme),
                _indentUnit.of(indentUnit.of(' '.repeat(2))),
                _tabSize.of(EditorState.tabSize.of(4)),
                _readonly.of(EditorState.readOnly.of(false)),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        if (onChange) onChange(update.state.doc.toString())
                    }
                }),
                EditorView.domEventHandlers({
                    keydown: (key) => onKeyDown && onKeyDown(key),
                }),
                _readOnlyRanges.of([]),
            ],
        })
        const view = new EditorView({
            state,
            parent: editorRef.current,
        })

        viewRef.current = view

        return () => view.destroy()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorRef])

    //  Tab Size Change Detect
    useEffect(() => {
        if (!viewRef.current || !tabSize) return
        viewRef.current.dispatch({
            effects: [
                _tabSize.reconfigure(EditorState.tabSize.of(tabSize)),
                _indentUnit.reconfigure(indentUnit.of(' '.repeat(tabSize))),
            ],
        })
    }, [viewRef, tabSize])

    //  Readonly Change Detect
    useEffect(() => {
        if (!viewRef.current || !readonly) return
        viewRef.current.dispatch({
            effects: _readonly.reconfigure(EditorState.readOnly.of(readonly)),
        })
    }, [viewRef, readonly])

    //  Readonly Ranges Change Detect
    useEffect(() => {
        if (!viewRef.current || !readOnlyRanges) return
        viewRef.current.dispatch({
            effects: _readOnlyRanges.reconfigure(
                readOnlyRangesExtension(readOnlyRanges)
            ),
        })
    }, [viewRef, readOnlyRanges])

    // theme change detect
    useEffect(() => {
        if (!viewRef.current || !theme) return
        viewRef.current.dispatch({
            effects: _theme.reconfigure(theme),
        })
    }, [viewRef, theme])

    return { editorRef, editorView: viewRef.current }
}

export default useCodemirror
