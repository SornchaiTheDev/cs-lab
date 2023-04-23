import WithNavbar from '@/HOC/WithNavbar'
import React from 'react'
import SideNav from './Navigation/SideNav'
import History from '../History'
import Settings from './Settings'
import { useAppSelector } from '@/store/hooks'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Navigation from './Navigation'

function NonMobile() {
    const menu = useAppSelector((state) => state.menu)

    return (
        <WithNavbar
            navbarChildren={<SideNav />}
            title="09 Find a, b in which a*b=n and (a+b) is the lowest | CS-LAB"
            className="fixed h-screen max-h-screen"
        >
            {menu.isHistoryOpen && <History />}
            {menu.isSettingsOpen && <Settings />}

            <div className="px-4 py-6 shadow-md flex flex-1 h-full overflow-hidden">
                <Navigation />
                <LeftPanel />
                <RightPanel />
            </div>
        </WithNavbar>
    )
}

export default NonMobile
