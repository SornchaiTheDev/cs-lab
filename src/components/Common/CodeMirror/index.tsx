import { ReactNode, useEffect } from 'react'
import useCodemirror from '@/components/Common/CodeMirror/hooks/useCodemirror'
import { useAppSelector } from '@/store/hooks'
import { EditorState } from '@codemirror/state'
import { ghcolors, materialDark, materialDarkCode } from '@/themes'
import clsx from 'clsx'

interface Props {
    value?: string
    onChange?: (code: string) => void
    onKeyDown?: (key: KeyboardEvent) => void
    height: string
    width?: number
    children?: ReactNode
    readonly?: boolean
    readOnlyRanges?: (
        targetState: EditorState
    ) => Array<{ from: number | undefined; to: number | undefined }>
    variant?: 'problem' | 'lesson'
    customFontSize?: number
    className?: string
}

function CodeMirror({
    value,
    onChange,
    onKeyDown,
    width,
    height,
    children,
    readonly,
    readOnlyRanges,
    variant = 'problem',
    customFontSize,
    className,
}: Props) {
    const { fontSize, tabSize, theme } = useAppSelector(
        (state) => state.userSettings
    )

    const _fontSize = customFontSize ? customFontSize : fontSize

    const codeMirrorTheme =
        theme === 'dark'
            ? variant === 'problem'
                ? materialDarkCode
                : materialDark
            : ghcolors

    const { editorRef, editorView } = useCodemirror({
        initialDoc: value,
        onChange,
        onKeyDown,
        tabSize,
        readonly,
        readOnlyRanges,
        theme: codeMirrorTheme,
    })

    useEffect(() => {
        if (!editorView || value === undefined) return
        const doc = editorView.state.doc.toString()
        if (doc !== value)
            editorView.dispatch(
                editorView.state.update({
                    changes: { from: 0, to: doc.length, insert: value },
                })
            )
    }, [editorView, value])

    return (
        <div
            ref={editorRef}
            style={{
                width,
                height,
                fontSize: _fontSize,
            }}
            className={clsx('bg-white dark:bg-secondary-1', className)}
        >
            {children}
        </div>
    )
}

export default CodeMirror
