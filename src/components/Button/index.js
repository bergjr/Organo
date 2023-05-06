import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.showForm} className={props.class}>{props.children}</button>
        </div>
    )
}

export default Button;