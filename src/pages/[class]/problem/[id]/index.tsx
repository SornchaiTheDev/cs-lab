import { useEffect } from 'react'
import type { NextPageContext } from 'next'
import NonMobile from '@/components/Editor/NonMobile'
import Mobile from '@/components/Editor/Mobile'
import { useAppDispatch } from '@/store/hooks'
import { setTheme } from '@/store/slices/themeSlice'
import useDarkMode from '@/hooks/useDarkMode'

interface Props {
    test: string
    isMobile: boolean
}

const Device = ({ isMobile }: Props) => {
    const dispatch = useAppDispatch()
    const isDarkMode = useDarkMode()
    useEffect(() => {
        dispatch(setTheme(isDarkMode))
    }, [isDarkMode, dispatch])
    if (isMobile) return <Mobile />
    return <NonMobile />
}

export default Device

export async function getServerSideProps(context: NextPageContext) {
    const UA = context.req!.headers['user-agent']

    const isMobile = Boolean(
        UA!.match(
            /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
    )

    return {
        props: {
            test: 'YO!',
            isMobile,
        },
    }
}
