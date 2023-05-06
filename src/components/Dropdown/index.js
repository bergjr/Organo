import './Dropdown.css';


const Dropdown = (props) => {
    const items = props.items;
    return (
        <div className="dropdown-container">
            <label>
                {props.label}
            </label>
            <select required className="dropdown" onChange={(event) => props.onChange(event.target.value)} value={props.valor}>
               {items.map(item => {
                    return (
                        <option key={item.name} value={item.class}>{item.name}</option>
                    )
               })}
            </select>
        </div>
    );
}

export default Dropdown;