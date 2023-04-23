import { useState, useEffect } from 'react'

interface BodyMutationRecord extends MutationRecord {
    target: Node & { className?: string }
}
function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const callback = (
        mutationList: BodyMutationRecord[],
        observer: MutationObserver
    ) => {
        mutationList.forEach(function (mutation) {
            mutation.target
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class'
            ) {
                setIsDarkMode(mutation.target.className === 'dark')
            }
        })
    }

    useEffect(() => {
        const observer = new MutationObserver(callback)
        observer.observe(document.querySelector('html')!, {
            attributes: true,
        })
        return () => observer.disconnect()
    }, [])
    return isDarkMode
}

export default useDarkMode
