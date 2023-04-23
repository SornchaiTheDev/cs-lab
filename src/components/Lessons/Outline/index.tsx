import Item from './Item'
import { fakeLabs } from '@/__mock__'

function Outline() {
    return (
        <div className="text-gray-400">
            {fakeLabs[0].problems.map(({ name, status }, index) => (
                <Item
                    key={name}
                    name={name}
                    status={status}
                    active={index === 0}
                />
            ))}
        </div>
    )
}

export default Outline
