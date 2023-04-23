import Button from './Button'
import { IoArrowBackOutline, IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineHistory } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/store/hooks'
import {
    toggleBottomBar,
    toggleHistory,
    toggleSettings,
} from '@/store/slices/menuSlice'

import { BsTerminal } from 'react-icons/bs'
function Buttons() {
    const { back } = useRouter()
    const dispatch = useAppDispatch()
    return (
        <div className="flex items-center gap-2">
            <Button
                tooltip="ย้อนกลับ"
                icon={<IoArrowBackOutline size="1.75rem" />}
                onClick={back}
            />

            <Button
                tooltip="Console"
                icon={<BsTerminal size="1.75rem" />}
                onClick={() => dispatch(toggleBottomBar())}
            />

            <Button
                tooltip="ประวัติการส่ง"
                icon={<AiOutlineHistory size="1.75rem" />}
                onClick={() => dispatch(toggleHistory())}
            />

            <Button
                tooltip="ตั้งค่า"
                icon={<IoSettingsOutline size="1.75rem" />}
                onClick={() => dispatch(toggleSettings())}
            />
        </div>
    )
}

export default Buttons
