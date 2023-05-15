import Button from '../Button';
import './Organisation.css'
import Time from './Time/Time';

const Organization = (props) => {
    const filteringEmployees = (employees, id) => {
        const filteredEmployees = employees.filter(employee => employee.teamId === id);
        return filteredEmployees;
    }

    return (
        <section className="organisation">
            <div className="organisation__header">
                <h2 className="organisation__header__title">Minha Organização</h2>
                <Button class="toggle" showForm={props.showForm} />
            </div>
            {
                props.teams.map(team => {
                    return(
                        filteringEmployees(props.employees, team.id).length > 0 &&
                            <Time key={team.class} onFavorite={props.onFavorite} onChangeTeamColor={props.onChangeTeamColor} name={team.name} onDelete={props.onDelete} team={team} employees={filteringEmployees(props.employees, team.id)} /> 
                    )
                })
            }
        </section>
    )
}

export default Organization;