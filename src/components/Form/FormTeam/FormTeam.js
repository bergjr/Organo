import './FormTeam.css'
import TextField from '../../Input/Input';

import Button from '../../Button';
import { Fragment, useState } from 'react';
import Input from '../../Input/Input';


const FormTeam = (props) => {

    const [name, setName] = useState('');
    const [color, setColor] = useState('#FFFFFF');
    
    const onSave = (event) => {
        event.preventDefault()
        const newTeam = {
            id: Math.random().toString(),
            name: name,
            color: color
        }
        props.onAddTeam(newTeam)
        console.log(newTeam)
    }
    return (
        <Fragment>
            <form onSubmit={onSave}>
                <h2>Informe o novo time</h2> 
                <TextField valor={name} className="input-text" onChange={(valor) => setName(valor)} required={true} label="Time" placeholder="Digite o nome do time..."  />
                <Input inputType="color" className="input-color" style={{bg: color }} valor={color} label="Cor do Card" onChange={(valor) => setColor(valor)}  />
                <Button class="submit"> Criar time</Button>
            </form>
        </Fragment>
    )        
}

export default FormTeam;