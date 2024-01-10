import './Dropdown.css';
import { ITime
 } from '../../shared/interfaces/ITime';
interface DropdownProps {
    items: ITime[]
    label: string
    onChange: (value: string) => void
    valor: string  
}

const Dropdown = (props: DropdownProps) => {
    const items = props.items;
    return (
        <div className="dropdown-container">
            <label>
                {props.label}
            </label>
            <select required className="dropdown" onChange={(event) => props.onChange(event.target.value)} value={props.valor}>
                <option value="">Selecione uma opção...</option>
               {items.map(item => {
                    return (
                        <option key={item.name} value={item.id}>{item.name}</option>
                    )
               })}
            </select>
        </div>
    );
}

export default Dropdown;