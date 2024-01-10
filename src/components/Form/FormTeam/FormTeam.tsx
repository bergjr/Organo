import "./FormTeam.css";
import TextField from "../../Input/Input";
import Button from "../../Button";
import { Fragment, useState } from "react";
import Input from "../../Input/Input";
import { ITime } from "../../../shared/interfaces/ITime";

interface FormTeamProps {
  onAddTeam: (newTeam: ITime) => void
}

const FormTeam = (props: FormTeamProps) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTeam = {
      id: Math.random().toString(),
      name: name,
      color: color,
    };
    props.onAddTeam(newTeam);
    console.log(newTeam);
  };
  return (
    <Fragment>
      <form onSubmit={event => onSave}>
        <h2>Informe o novo time</h2>
        <TextField
          valor={name}
          className="input-text"
          onChange={(valor) => setName(valor)}
          required={true}
          label="Time"
          placeholder="Digite o nome do time..."
        />
        <Input
          inputType="color"
          className="input-color"
          valor={color}
          label="Cor do Card"
          onChange={(valor) => setColor(valor)}
        />
        <Button className="submit"> Criar time</Button>
      </form>
    </Fragment>
  );
};

export default FormTeam;
