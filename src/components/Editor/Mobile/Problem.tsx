import Badge from '@/components/Common/Badge'
import React from 'react'
import Testcase from '../Testcase'
import Markdown from '../Description/Markdown'
import { useAppSelector } from '@/store/hooks'
import { sortByKey } from '@/utils'
import BackArrow from '@/components/Common/BackArrow'

function Problem() {
    const { allHistory } = useAppSelector((state) => state.history)
    const latestHistory = sortByKey(allHistory, 'date', 'desc')[0]

    return (
        <div className="bg-white dark:bg-secondary-1 border dark:border-secondary-2 p-4 rounded-md">
            <BackArrow className="mb-4" />
            <Badge title="อ่านอย่างเดียว" />
            <div className="my-4">
                <h4 className="text-lime-600">
                    CS Python Lab 01 Input Process Output
                </h4>
                <h2 className="text-2xl dark:text-ascent-1 font-bold">
                    01 Find a, b in which a*b=n and (a+b) is the lowest
                </h2>
                <Testcase status={latestHistory ? latestHistory.status : []} />
            </div>

            <Markdown />
        </div>
    )
}

export default Problem
