
import './TextField.css';

const TextField = (props) => {

    return (
        <div className="field-container">
            <label>{props.label}</label>
            <input value={props.valor} onChange={(evento) => props.onChange(evento.target.value)} required={props.required} className="button" type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default TextField;