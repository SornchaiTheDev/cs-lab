import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { FindAB } from '@/__mock__'
import 'katex/dist/katex.min.css'

function Markdown() {
    return (
        <div className="prose max-w-full dark:prose-headings:text-ascent-1 dark:text-ascent-1 dark:prose-code:text-ascent-1 dark:prose-strong:text-ascent-1">
            <ReactMarkdown
                remarkPlugins={[remarkGFM, remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                children={FindAB}
            />
        </div>
    )
}

export default Markdown
