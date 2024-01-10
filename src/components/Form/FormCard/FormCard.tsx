import { Fragment, useState } from "react";
import Button from "../../Button";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import './FormCard.css';
import { IEmployee} from "../../../shared/interfaces/IEmployee";
import { ITime } from "../../../shared/interfaces/ITime";

interface IFormCardProps {
    onAddEmployee: (employee: IEmployee) => void
    teams: ITime []
}

const FormCard = (props: IFormCardProps) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('')

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       const employee = {
            id: Math.random().toString(), 
            name: nome,
            role: cargo,
            image: imagem,
            teamId: time
       }
       props.onAddEmployee(employee)
       setNome('')
       setCargo('')
       setImagem('')
       setTime('')
    }

    return (
        <Fragment>  
            <form onSubmit={onSave}>
                <h2>Preencha os campos a seguir com as informações do empregado.</h2> 
                <Input valor={nome} inputType="text" className="input-text" onChange={(valor) => setNome(valor)} required={true} label="Nome" placeholder="Digite seu nome..."  />
                <Input valor={cargo} inputType="text" className="input-text" onChange={(valor) => setCargo(valor)} required={true} label="Cargo" placeholder="Digite seu cargo.." />
                <Input valor={imagem} inputType="text" className="input-text" onChange={(valor) => setImagem(valor)} required={true} label="Imagem" placeholder="Informe o endereço da imagem..." />
                <Input valor={imagem} inputType="date" className="input-text" onChange={(valor) => setImagem(valor)} required={true} label="Data" placeholder="dd/mm/aaaa" />
                <Dropdown valor={time} label="Time" onChange={(valor) => setTime(valor)} items={props.teams} />
                <Button className="submit"> Criar card </Button>
            </form>    
        </Fragment>
    );
}

export default FormCard; 