import WithNavbar from '@/HOC/WithNavbar'
import React from 'react'
import BottomNav from './BottomNav'
import { useAppSelector } from '@/store/hooks'
import Problem from './Problem'
import Code from './Code'
import History from './History'
import Settings from './Settings'
import Sidebar from '@/components/Lessons/Outline/Sidebar'

function Mobile() {
    const menu = useAppSelector((state) => state.mobileMenu)

    return (
        <WithNavbar
            // hamburgerChild={<Outline className="p-4" />}
            title="09 Find a, b in which a*b=n and (a+b) is the lowest | CS-LAB"
            className="fixed h-screen max-h-screen"
        >
            <Sidebar />
            <div className="p-4 overflow-y-scroll mb-16 w-full h-full">
                {menu.selected === 'problem' ? <Problem /> : null}
                {menu.selected === 'code' ? <Code /> : null}
                {menu.selected === 'history' ? <History /> : null}
                {menu.selected === 'settings' ? <Settings /> : null}

                <BottomNav />
            </div>
            {/* <Shortcuts /> */}
        </WithNavbar>
    )
}

export default Mobile
