import HistoryItems from '../../History/HistoryItem'
import { useAppSelector } from '@/store/hooks'

function ListView() {
    const { allHistory } = useAppSelector((state) => state.history)
    return (
        <div className="flex flex-col gap-4 mt-2">
            <HistoryItems allHistory={allHistory} />
        </div>
    )
}

export default ListView
