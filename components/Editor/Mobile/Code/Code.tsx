import React from 'react'
import CodeMirror from '@/components/Common/CodeMirror'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCode } from '@/store/slices/editorSlice'

function Code() {
    const { code } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()

    const handleOnKeyDown = (key: KeyboardEvent) => {
        // if (!specialKeyCode.includes(key.key)) setstatus('saving')
    }

    return (
        <CodeMirror
            variant="problem"
            value={code}
            onChange={(value) => dispatch(setCode(value))}
            onKeyDown={handleOnKeyDown}
            height="100%"
        />
    )
}

export default Code
