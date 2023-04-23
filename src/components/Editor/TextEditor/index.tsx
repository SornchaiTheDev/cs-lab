import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React from 'react'
import CodeMirror from '../../Common/CodeMirror'
import Header from './Header'
import { setCode } from '@/store/slices/editorSlice'
import { specialKeyCode } from '@/utils'
import axios from 'axios'

function Editor() {
    const { code } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()

    const handleOnKeyDown = (key: KeyboardEvent) => {
        // if (!specialKeyCode.includes(key.key)) setstatus('saving')
    }

    return (
        <div
            className="rounded-xl flex-1 flex flex-col overflow-hidden bg-white dark:bg-secondary-1 border dark:border-secondary-2"
            style={{ minHeight: 200 }}
        >
            <Header />

            <CodeMirror
                variant="problem"
                value={code}
                onChange={(value) => dispatch(setCode(value))}
                onKeyDown={handleOnKeyDown}
                height="100%"
            />
        </div>
    )
}

export default Editor
