import Button from './Button'
type tab = 'input' | 'output'
interface Props {
    active: tab
    onClick: (item: tab) => void
}
function Navigation({ active, onClick }: Props) {
    return (
        <div className="flex border-b border-zinc-300 dark:border-secondary-2">
            {['input', 'output'].map((item) => (
                <Button
                    key={item}
                    title={item}
                    active={active === item}
                    onClick={() => onClick(item as tab)}
                />
            ))}
        </div>
    )
}

export default Navigation
