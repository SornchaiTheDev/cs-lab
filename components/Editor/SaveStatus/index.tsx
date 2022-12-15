import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsCloudCheck } from 'react-icons/bs'
const SaveStatus = ({ status = 'saved' }: { status: 'saved' | 'saving' }) => {
    if (status == 'saving') {
        return (
            <div className="flex items-center gap-2 text-gray-700 dark:text-[#E0E2E8]">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span className="text-xs">กำลังบันทึก</span>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-2 text-gray-700 dark:text-[#E0E2E8]">
            <BsCloudCheck />
            <span className="text-xs">บันทึกแล้ว</span>
        </div>
    )
}
export default SaveStatus
