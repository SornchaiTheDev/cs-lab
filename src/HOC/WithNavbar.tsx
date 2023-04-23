import Navbar from '@/components/Navbar'
import { forwardRef, LegacyRef, Ref, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    title: string
    children: ReactNode
    navbarRef?: Ref<HTMLDivElement>
    className?: string
    navbarChildren?: ReactNode
    hamburgerChild?: ReactNode
}

const WithNavbar: React.FC<Props> = forwardRef(
    (
        {
            children,
            title,
            className = '',
            navbarRef,
            navbarChildren,
            hamburgerChild,
        },
        ref: LegacyRef<HTMLDivElement>
    ) => (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div
                className={`flex flex-col w-full min-h-screen bg-white dark:bg-primary-1 ${className}`}
                ref={ref}
            >
                <Navbar
                    children={navbarChildren}
                    ref={navbarRef}
                    hamburgerChild={hamburgerChild}
                />
                {children}
            </div>
        </>
    )
)

WithNavbar.displayName = 'WithNavbar'

export default WithNavbar
