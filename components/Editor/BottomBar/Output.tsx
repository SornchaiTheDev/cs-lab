import { useAppSelector } from '@/store/hooks'
import CodeMirror from '../../Common/CodeMirror'
import Header from '../TextEditor/Header'

function Output() {
    const { output } = useAppSelector((state) => state.editor)

    return <CodeMirror height="100%" value={output ? output : ''} readonly />
}

export default Output
