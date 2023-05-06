import Card from './Card/Card'
import './Time.css'


const Time = (props) => {
    return (
        <div className={`time time--${props.time}`}>
            <h2>{props.name}</h2>
            <div className="time__cards">
                {props.employees.map(employee => { return (
                    <Card key={employee.name} nome={employee.name} time={employee.team} cargo={employee.role} imagem={employee.image}/>
                )})}
            </div>
        </div>
    )
}

export default Time