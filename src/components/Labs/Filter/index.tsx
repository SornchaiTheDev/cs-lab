import { showType } from '@/interface/LabType'
import React, { useState, Dispatch, SetStateAction } from 'react'
import FilterBtn from './FilterBtn'

interface Props {
    show: number
    setShow: Dispatch<SetStateAction<showType>>
}

function Filter({ show, setShow }: Props) {
    return (
        <div className="flex flex-wrap items-center gap-2 my-10">
            <FilterBtn
                text="ทั้งหมด"
                isSelected={show === 0}
                onClick={() => setShow(0)}
            />
            <FilterBtn
                text="เปิดการส่งงาน"
                isSelected={show === 1}
                onClick={() => setShow(1)}
            />
            <FilterBtn
                text="อ่านอย่างเดียว"
                isSelected={show === 2}
                onClick={() => setShow(2)}
            />
        </div>
    )
}

export default Filter
