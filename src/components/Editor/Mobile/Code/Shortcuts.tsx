import React from 'react'

function Shortcuts() {
    return (
        <div className="z-50 fixed bottom-[4.6rem] w-full h-14 bg-white dark:bg-[#1E1E1F] flex items-center justify-around dark:text-white">
            <button onClick={() => {}} className="text-2xl">
                =
            </button>
            <button onClick={() => {}} className="text-2xl">
                {'{ }'}
            </button>
            <button onClick={() => {}} className="text-2xl">
                ( )
            </button>
            <button onClick={() => {}} className="text-2xl">
                [ ]
            </button>
            {/* <button onClick={() => {}} className="text-2xl"></button> */}
        </div>
    )
}

export default Shortcuts
