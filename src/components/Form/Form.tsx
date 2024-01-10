import {ReactElement} from 'react'
import './Form.css'



interface FormProps {
    children: ReactElement
}

const Form = ({children} : FormProps) => {
    return (
        <div className="form">
            {children}
        </div>    
    )
}

export default Form;