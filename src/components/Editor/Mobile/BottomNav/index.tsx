import clsx from 'clsx'
import {
    HiOutlineDocumentText,
    HiOutlineCommandLine,
    HiOutlineCog6Tooth,
} from 'react-icons/hi2'
import { RiHistoryFill } from 'react-icons/ri'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setMenu } from '@/store/slices/mobileMenuSlice'
import { menuType } from '@/interface/mobileMenu'
import { setSelected } from '@/store/slices/historySlice'

const menus = [
    {
        name: 'โจทย์',
        icon: <HiOutlineDocumentText size="1.5rem" />,
        id: 'problem',
    },
    { name: 'โค้ด', icon: <HiOutlineCommandLine size="1.5rem" />, id: 'code' },
    {
        name: 'ประวัติการส่ง',
        icon: <RiHistoryFill size="1.5rem" />,
        id: 'history',
    },
    {
        name: 'ตั้งค่า',
        icon: <HiOutlineCog6Tooth size="1.5rem" />,
        id: 'settings',
    },
]
function BottomNav() {
    const menu = useAppSelector((state) => state.mobileMenu)
    const { selected } = useAppSelector((state) => state.history)
    const dispatch = useAppDispatch()
    return (
        <div className="fixed bottom-0 left-0  bg-white dark:bg-[#1E1E1F] w-full dark:text-ascent-1 rounded-t-xl overflow-hidden">
            <div className="grid grid-cols-12 items-center">
                {menus.map(({ name, icon, id }, index) => {
                    return (
                        <button
                            onClick={() => {
                                dispatch(setMenu(id as menuType))
                                selected && dispatch(setSelected(null))
                            }}
                            key={name}
                            className={clsx(
                                'col-span-3 flex flex-col items-center pt-2 gap-2',
                                menu.selected === id &&
                                    'bg-ascent-1 dark:bg-[#232324]'
                            )}
                        >
                            {icon}
                            <h4 className='pb-1 text-sm'>{name}</h4>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default BottomNav
