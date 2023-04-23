import { Fragment } from 'react'
import { fakeLabs } from '@/__mock__'
import Item from '../Item'
import ScrollSpy from 'react-scrollspy'
import { OutlineI } from '@/interface/Outline'
import { useAppDispatch } from '@/store/hooks'
import { toggleHamburger } from '@/store/slices/menuSlice'
interface Props {
    outline: OutlineI[]
}
function Hamburger({ outline }: Props) {
    const dispatch = useAppDispatch()
    return (
        <div className="flex flex-col gap-3 p-4">
            {fakeLabs[0].problems.map(({ name, status }, index) => (
                <Fragment key={name}>
                    <Item name={name} status={status} active={index === 0} />
                </Fragment>
            ))}
        </div>
    )
}

export default Hamburger
