import React from 'react'
import CodeMirror from '../../Common/CodeMirror'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setInput } from '@/store/slices/editorSlice'
import Header from '../TextEditor/Header'

function Input() {
    const { input } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()
    return (
        <CodeMirror
            height="100%"
            value={input ? input : ''}
            onChange={(value) => dispatch(setInput(value))}
        />
    )
}

export default Input
