import { useRef } from 'react'
import BottomBar from '../BottomBar'
import Editor from '../TextEditor'

function RightPanel() {
    const zoneRef = useRef<HTMLDivElement>(null)

    return (
        <div
            style={{
                minWidth: 400,
            }}
            ref={zoneRef}
            className="flex-1 relative flex flex-col"
        >
            <Editor />
            <BottomBar zoneRef={zoneRef} />
        </div>
    )
}

export default RightPanel
