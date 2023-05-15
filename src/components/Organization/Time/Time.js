import { useState } from 'react';
import Card from './Card/Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba';


const Time = (props) => {

    const changeColor = (color) => {
        props.onChangeTeamColor(props.team.id, color);
    }

    return (
        <div className="time" style={{backgroundColor: hexToRgba(props.team.color, '0.4')}}>
            <input value={props.team.color}  type="color" onChange={(event) => changeColor(event.target.value) } style={{alignSelf: 'flex-end', marginRight: '50px'}} />
            <h2 style={{borderBottom: `4px solid ${props.team.color}` }}>{props.name}</h2>
            <div className="time__cards">
                {props.employees.map(employee => { return (
                    <Card id={employee.id} onFavorite={props.onFavorite} colorCard={props.team.color} onDelete={props.onDelete} key={employee.name} name={employee.name} team={employee.team} role={employee.role} image={employee.image} favorite={employee.favorite}/>
                )})}
            </div>
        </div>
    )
}

export default Time