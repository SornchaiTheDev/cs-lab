import { OutlineI } from '@/interface/Outline'

interface Props {
    values: OutlineI[]
}
function Outline({ values }: Props) {
    return (
        <div className="block md:hidden border-l-2 border-gray-200 px-2 w-full">
            <ul>
                {values.map(({ id, name }, i) => (
                    <li
                        key={id}
                        className={
                            i === 0 ? `text-gray-900 font-semibold` : undefined
                        }
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Outline
