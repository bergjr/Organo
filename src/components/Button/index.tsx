import { ReactElement } from 'react';
import './Button.css'
import React from 'react'

interface ButtonProps {
    children?: ReactElement | string
    className: string
    showForm?: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={props.showForm} className={props.className}>{props.children}</button>
        </div>
    )
}

export default Button;