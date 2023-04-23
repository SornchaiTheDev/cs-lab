import { useState } from 'react'
import { RiHistoryFill } from 'react-icons/ri'
import ListView from './ListView'
import EachHistory from './EachHistory'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { BsArrowLeft } from 'react-icons/bs'
import { setSelected } from '@/store/slices/historySlice'
import CodeMirror from '../../../Common/CodeMirror'
function History() {
    const { selected } = useAppSelector((state) => state.history)
    const dispatch = useAppDispatch()
    return (
        <div className="flex flex-col gap-6 h-full dark:text-ascent-1">
            {selected !== null ? (
                <button
                    onClick={() => dispatch(setSelected(null))}
                    className="self-start flex items-center gap-2"
                >
                    <BsArrowLeft /> ย้อนกลับ
                </button>
            ) : null}
            <div className="flex gap-2 items-center">
                <RiHistoryFill size="1.5rem" />
                <h3 className="text-xl font-semibold">ประวัติการส่ง</h3>
            </div>

            {selected === null ? <ListView /> : <EachHistory />}
        </div>
    )
}

export default History
