import './Flex.css';
import {ReactNode} from 'react'


interface FlexProps {
    children: ReactNode
}
const Flex = ({children}: FlexProps) => {
    return (
        <section className="flex-container">
            {children}
        </section>
    )
}

export default Flex;