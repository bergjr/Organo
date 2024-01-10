import { IEmployee } from "../../shared/interfaces/IEmployee";
import { ITime } from "../../shared/interfaces/ITime";
import Button from "../Button";
import "./Organisation.css";
import Time from "./Time/Time";

interface OrganizationProps {
  showForm: () => void;
  teams: ITime[];
  employees: IEmployee[];
  onFavorite: (id: string) => void;
  onChangeTeamColor: (id: string, color: string) => void;
  onDelete: (id: string) => void;
}

const Organization = (props: OrganizationProps) => {
  const filteringEmployees = (employees: IEmployee[], id: string) => {
    const filteredEmployees = employees.filter(
      (employee) => employee.teamId === id
    );
    return filteredEmployees;
  };

  return (
    <section className="organisation">
      <div className="organisation__header">
        <h2 className="organisation__header__title">Minha Organização</h2>
        <Button className="toggle" showForm={props.showForm} />
      </div>
      {props.teams.map((team) => {
        return (
          filteringEmployees(props.employees, team.id).length > 0 && (
            <Time
              key={team.id}
              onFavorite={props.onFavorite}
              onChangeTeamColor={props.onChangeTeamColor}
              onDelete={props.onDelete}
              teamName={team.name}
              teamColor={team.color}
              employees={filteringEmployees(props.employees, team.id)}
            />
          )
        );
      })}
    </section>
  );
};

export default Organization;
