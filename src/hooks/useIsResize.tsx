import { useState, useEffect, RefObject } from 'react'

function useIsResize(ref: RefObject<any>) {
    const [isResize, setIsResize] = useState(false)

    const callback = (
        mutationList: MutationRecord[],
        observer: MutationObserver
    ) => {
        console.log('called')

        mutationList.forEach(function (mutation) {
            if (mutation.type === 'attributes') {
                console.log(mutation)
                setIsResize(true)
                setTimeout(() => {
                    setIsResize(false)
                }, 500)
            }
        })
    }

    useEffect(() => {
        const observer = new MutationObserver(callback)
        if (ref.current) {
            observer.observe(ref.current, { attributes: true })
        }
        return () => observer.disconnect()
    }, [ref])
    return isResize
}

export default useIsResize
