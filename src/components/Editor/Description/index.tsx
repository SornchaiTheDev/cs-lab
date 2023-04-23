import Testcase from '../Testcase'
import Markdown from './Markdown'

function Loaded() {
    return (
        <>
            <div>
                <h1 className="text-xl font-bold dark:text-ascent-1">
                    09 Find a, b in which a*b=n and (a+b) is the lowest
                </h1>

                {/* Test case */}
                <div className='my-2'>
                    <Testcase status={['P', 'P', 'P', '-']} />
                </div>
                <Markdown />
            </div>
        </>
    )
}

export default Loaded
