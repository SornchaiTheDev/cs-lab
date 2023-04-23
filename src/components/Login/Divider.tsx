import React from 'react'

function Divider() {
    return (
        <div className="flex items-center w-1/2 gap-4">
            <div className="h-[2px] bg-secondary-2 w-full"></div>
            <h5 className="dark:text-ascent-1 text-sm">หรือ</h5>
            <div className="h-[2px] bg-secondary-2 w-full"></div>
        </div>
    )
}

export default Divider
