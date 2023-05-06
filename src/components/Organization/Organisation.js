import Button from '../Button';
import './Organisation.css'
import Time from './Time/Time';

const Organization = (props) => {
    const filteringEmployees = (employees, time) => {
        const filteredEmployees = employees.filter(employee => employee.team === time);
        return filteredEmployees;
    }

    return (
        <section className="organisation">
            <div className="organisation__header">
                <h2 className="organisation__header__title">Minha Organização</h2>
                <Button class="toggle" showForm={props.showForm} />
            </div>
            {filteringEmployees(props.employees,"programacao").length > 0 && 
                <Time key="programacao" name="Programação" time="programacao" employees={filteringEmployees(props.employees,"programacao")} />
            }
            {filteringEmployees(props.employees,"front-end").length > 0 && 
            <   Time key="front-end" name="Front-End" time="front-end" employees={filteringEmployees(props.employees,"front-end")}/>
            }
            {filteringEmployees(props.employees,"datascience").length > 0 && 
                <Time key="datascience" name="Data Science" time="datascience" employees={filteringEmployees(props.employees,"datascience")}/>
            }
            {filteringEmployees(props.employees,"devops").length > 0 && 
                <Time key="devops" name="Devops" time="devops" employees={filteringEmployees(props.employees,"devops")}/>
            }
            {filteringEmployees(props.employees,"ux").length > 0 && 
                <Time key="ux" name="Ux e Design" time="ux" employees={filteringEmployees(props.employees,"ux")}/>
            }
            {filteringEmployees(props.employees,"mobile").length > 0 && 
                <Time key="mobile" name="Mobile" time="mobile" employees={filteringEmployees(props.employees,"mobile")}/>
            }
            {filteringEmployees(props.employees,"inovacao").length > 0 && 
                <Time key="inovacao" name="Inovação e Gestão" time="inovacao" employees={filteringEmployees(props.employees,"inovacao")}/>
            }
        </section>
    )
}

export default Organization;