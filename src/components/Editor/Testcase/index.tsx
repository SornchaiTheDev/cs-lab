type Status = 'P' | '-' | 'S' | 'C'
interface Props {
    status: Status[]
}
function Testcase({ status }: Props) {
    return (
        <div className="flex items-center flex-wrap bg-gray-200 dark:bg-[#5C5C5C] text-black dark:text-ascent-1 rounded-lg py-1 px-2 w-fit font-bold text-sm mt-2">
            {status.map((s, index) => (
                <span key={index}>{s}</span>
            ))}
        </div>
    )
}

export default Testcase
