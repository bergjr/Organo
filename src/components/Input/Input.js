
import './Input.css';

const Input = (props) => {

    return (
        <div className="field-container">
            <label>{props.label}</label>
            <input value={props.valor} onChange={(evento) => props.onChange(evento.target.value)} required={props.required} className={props.className} type={props.inputType} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;