import { useState, useRef, useEffect } from 'react'
import Code from './Code'
import Select from './Select'
import Input from '@/components/Editor/BottomBar/Input'
import Output from '@/components/Editor/BottomBar/Output'
import Header from '../../TextEditor/Header'
function Editor() {
    const [selected, setSelected] = useState<'code' | 'input' | 'output'>(
        'code'
    )
    const zoneRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={zoneRef} className="flex flex-col h-full rounded-md relative">
            <Select
                selected={selected}
                onSelect={(selected) => setSelected(selected)}
            />
            <div className="rounded-xl flex-1 flex flex-col overflow-hidden bg-white dark:bg-secondary-1 border dark:border-secondary-2">
                <Header onRun={() => setSelected('output')} />
                {selected === 'code' && <Code />}
                {selected === 'input' && <Input />}
                {selected === 'output' && <Output />}
            </div>
        </div>
    )
}

export default Editor
