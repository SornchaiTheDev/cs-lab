import { ReactNode } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState, useRef, LegacyRef, forwardRef } from 'react'
import ProfileImage from './ProfileImage'
import Logo from '@public/logo-CS37.png'
import Image from 'next/image'
import { BsDoorOpen } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Hamburger from './Hamburger'
import ThemeToggle from './ThemeToggle'
import { useOnClickOutside } from 'usehooks-ts'
import { io } from 'socket.io-client'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    children?: ReactNode
    hamburgerChild?: ReactNode
}
const Navbar = forwardRef(
    ({ children, hamburgerChild }: Props, ref: LegacyRef<HTMLDivElement>) => {
        const { status, data: session } = useSession()
        const [isProfileClick, setIsProfileClick] = useState<boolean>(false)
        const profileRef = useRef<HTMLDivElement>(null)

        const router = useRouter()
        useOnClickOutside(profileRef, () => setIsProfileClick(false))
        const handleSignOut = () => {
            checkOut()
            router.replace('/login')
            // signOut()
        }

        const checkOut = () => {
            return new Promise((resolve, reject) => {
                try {
                    const socket = io('http://10.147.18.161:3000/socket')
                    socket.disconnect()
                } catch (e) {
                    reject(e)
                }
            })
        }

        const handleClickProfile = () => {
            setIsProfileClick(!isProfileClick)
        }

        return (
            <div
                ref={ref}
                className="w-full border-b bg-white dark:bg-[#212122] border-gray-200 dark:border-[#424A53]  sticky top-0 z-40"
            >
                <div className="px-6 py-2 flex justify-between items-center">
                    {/* <Hamburger children={hamburgerChild} /> */}
                    <Link href={'/'} className="rounded-full w-[40px] h-[40px]">

                        <Image
                            src={Logo}
                            width={40}
                            height={40}
                            alt="CS-37 Logo"
                        />

                    </Link>
                    {children}
                    <div ref={profileRef} className="">
                        <div className="flex items-center gap-2 relative rounded-full">
                            <ProfileImage onClick={handleClickProfile} />
                            <AnimatePresence>
                                {isProfileClick && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.9,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        transition={{ duration: 0.05 }}
                                        className="z-40 absolute w-[220px] bg-white dark:bg-zinc-800 rounded-lg shadow-md dark:shadow-md border-zinc-200 dark:border-zinc-900 border  right-0 top-14 overflow-hidden p-2"
                                    >
                                        <ThemeToggle />
                                        <button
                                            className="hover:light:bg-gray-100  dark:text-white hover:bg-ascent-1/20 rounded-lg p-2 flex items-center justify-between w-full"
                                            onClick={handleSignOut}
                                        >
                                            <p>ออกจากระบบ</p>
                                            <div className="p-2 rounded-full  dark:bg-zinc-800">
                                                <BsDoorOpen size="1.2rem" />
                                            </div>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
)

Navbar.displayName = 'Navbar'

export default Navbar
