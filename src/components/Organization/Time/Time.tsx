import Card from "./Card/Card";
import "./Time.css";
import hexToRgba from "hex-to-rgba";
import { IEmployee } from "../../../shared/interfaces/IEmployee";

interface TimeProps {
  teamName: string;
  teamColor?: any;
  key: string;
  onChangeTeamColor: (id: string, color: any) => void;
  onFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  employees: IEmployee[];
}

const Time = (props: TimeProps) => {
  const changeColor = (color: any) => {
    props.onChangeTeamColor(props.teamName, color);
  };

  return (
    <div
      className="time"
      style={{ backgroundColor: hexToRgba(props.teamColor, "0.4") }}
    >
      <input
        placeholder="color"
        type="color"
        value={props.teamColor}
        onChange={(event) => changeColor(event.target.value)}
        style={{ alignSelf: "flex-end", marginRight: "50px" }}
      />
      <h2 style={{ borderBottom: `4px solid ${props.teamColor}` }}>
        {props.teamName}
      </h2>
      <div className="time__cards">
        {props.employees.map((employee) => {
          return (
            <Card
              id={employee.id}
              onFavorite={props.onFavorite}
              colorCard={props.teamColor}
              onDelete={props.onDelete}
              key={employee.name}
              name={employee.name}
              team={employee.team}
              role={employee.role}
              image={employee.image}
              favorite={employee.favorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Time;
