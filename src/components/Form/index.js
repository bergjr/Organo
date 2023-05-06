import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import './Form.css';


const Form = (props) => {
    const items = [{name: 'Selecione um time', class: ''},
        {name:"Programação", class:"programacao"},
        {name:"Front-end", class:"front-end"},
        {name:"Data Science", class:"datascience"},
        {name:"UX e Design", class:"ux"},
        {name:"Devops", class:"devops"},
        {name: "Mobile", class: "mobile"},
        {name: "Inovação e Gestão", class: "inovacao"}
        ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const onSave =  (event) => {
       event.preventDefault();
       const employee = {
            name: nome,
            role: cargo,
            image: imagem,
            team: time
       }
       props.onAddEmployee(employee)
       setNome('')
       setCargo('')
       setImagem('')
       setTime('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField valor={nome} onChange={(valor) => setNome(valor)} required={true} label="Nome" placeholder="Digite seu nome..."  />
                <TextField valor={cargo} onChange={(valor) => setCargo(valor)} required={true} label="Cargo" placeholder="Digite seu cargo.." />
                <TextField valor={imagem} onChange={(valor) => setImagem(valor)} required={true} label="Imagem" placeholder="Informe o endereço da imagem..." />
                <Dropdown valor={time} label="Time" onChange={(valor) => setTime(valor)} items={items} />
                <Button class="submit"> Criar card </Button>
            </form>
        </section>
    );
}

export default Form; 