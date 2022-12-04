import { ReactNode } from 'react'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState, useRef, LegacyRef, forwardRef } from 'react'
import ProfileImage from './ProfileImage'
import Logo from '@/public/logo-CS37.png'
import Image from 'next/image'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useOnClickOutside } from 'usehooks-ts'
import Hamburger from './Hamburger'

interface Props {
    children?: ReactNode
    hamburgerChild?: ReactNode
}
const Navbar = forwardRef(
    ({ children, hamburgerChild }: Props, ref: LegacyRef<HTMLDivElement>) => {
        const { status, data: session } = useSession()
        const [isProfileClick, setIsProfileClick] = useState<boolean>(false)
        const router = useRouter()
        const settingRef = useRef<HTMLDivElement>(null)

        const handleSignOut = () => {
            signOut()
        }

        const handleClickSetting = () => {
            router.push('/settings')
        }

        const handleClickProfile = () => {
            setIsProfileClick(!isProfileClick)
        }

        useOnClickOutside(settingRef, handleClickProfile)

        return (
            <div
                ref={ref}
                className="w-full  border-b-[1px] bg-accent-3 border-gray-200 dark:border-gray-800 sticky top-0 z-40"
            >
                <div className="px-6 py-2 flex justify-between items-center">
                    <Hamburger children={hamburgerChild} />
                    <Link href={'/'}>
                        <a>
                            <Image
                                src={Logo}
                                layout="fixed"
                                width={40}
                                height={40}
                                alt="CS-37 Logo"
                            />
                        </a>
                    </Link>
                    {children}

                    <div>
                        <div className="flex w-full items-center gap-2 relative ">
                            <ProfileImage onClick={handleClickProfile} />
                            {isProfileClick && (
                                <div
                                    ref={settingRef}
                                    className="z-40 absolute w-[200px] bg-white dark:bg-zinc-800 rounded-lg shadow-md shadow-gray-100 dark:shadow-md dark:border-zinc-900 border border-gray-50 right-0 top-14 overflow-hidden p-2"
                                >
                                    {/* <button
                                        className="hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-between w-full"
                                        onClick={handleClickSetting}
                                    >
                                        <p>การตั้งค่า</p>
                                        <div className="p-2 rounded-full bg-gray-50">
                                            <IoSettingsOutline size="1.2rem" />
                                        </div>
                                    </button> */}
                                    <button
                                        className="hover:light:bg-gray-100  dark:text-white rounded-lg p-2 inline-flex items-center justify-between w-full"
                                        onClick={handleSignOut}
                                    >
                                        <p>ออกจากระบบ</p>
                                        <div className="p-2 rounded-full  dark:bg-zinc-800">
                                            <BsDoorOpen size="1.2rem" />
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)

Navbar.displayName = 'Navbar'

export default Navbar