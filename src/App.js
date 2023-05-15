import { Fragment, useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import FormCard from './components/Form/FormCard/FormCard.js';
import Organisation from './components/Organization/Organisation';
import Flex from './components/UI/Flex/Flex';
import Form from './components/Form/Form';
import FormTeam from './components/Form/FormTeam/FormTeam';


function App() {
  
  
  const [showForm, setShowForm] = useState(false);
  
  const DUMMY_EMPLOYEES = [
    {
      id: '1', 
      name: 'Ubergue De Andrade',
      favorite: false,
      role: 'Programador',
      image: 'https://github.com/bergjr.png',
      teamId: '1'
    },
    {
      id: '2', 
      name: 'Carlos Aloberto',
      favorite: true,
      role: 'Senior Programador',
      image: 'https://github.com/carlosalberto.png',
      teamId: '1'
    },
    {
      id: '3', 
      name: 'Luiz Gustavo',
      favorite: false,
      role: 'Junior Programador',
      image: 'https://github.com/luiz.png',
      teamId: '2'
    },
    {
      id: '4', 
      name: 'Tulio',
      favorite: false,
      role: 'Programador',
      image: 'https://github.com/tulio.png',
      teamId: '2'
    },
    {
      id: '5', 
      name: 'Tulio',
      favorite: false,
      role: 'Programador',
      image: 'https://github.com/tulio.png',
      teamId: '4'
    },
    {
      id: '6', 
      name: 'Tulio',
      favorite: false,
      role: 'Programador',
      image: 'https://github.com/tulio.png',
      teamId: '3'
    },
    {
      id: '7', 
      name: 'Yara',
      favorite: false,
      role: 'Programadora',
      image: 'https://github.com/yara.png',
      teamId: '3'
    }

  ]


  const DUMMY_TEAMS = [
    {
      id: '1',
      name: 'Programação',
      class: 'programacao',
      color: '#57C278'
    },
    {
      id: '2',
      name: 'Front-End',
      class: 'front-end',
      color: '#82CFFA'
    },
    {
      id: '3',
      name: 'Data Science' ,
      class: 'datascience',
      color: '#A6D157'
    },
    {
      id: '4',
      name: 'Devops',
      class: 'devops',
      color: '#E06B69'
    },
    {
      id: '5',
      name: 'UX' ,
      class: 'ux',
      color: '#DB6EBF'
    },
    {
      id: '6',
      name: 'Mobile',
      class: 'mobile',
      color: '#FFBA05'
    } ,
    {
      id: '7',
      name: 'Inovação',
      class: 'inovacao',
      color: '#FF8A29'
    }
  ];

  const [employees, setEmployees] = useState(DUMMY_EMPLOYEES);
  const [teams, setTeams] = useState(DUMMY_TEAMS);

  const onFormToggle = () => {
    if (showForm) {
      setShowForm(false)
    }
    else {
      setShowForm(true)
    }
  }

  const onAddEmployee = (employee) => {
      // setEmployees(prevEmployees => {
      //   const updatedEmployees = [...prevEmployees]
      //   updatedEmployees.unshift(employee)
      //   return updatedEmployees;
      // })
      setEmployees([...employees, employee])
  }
  
  const onDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id ) )
  }

  const onAddTeam = (team) => {
    setTeams([...teams, team]);
  }

  const onFavorite = (id) => {
    setEmployees(employees.map(employee => {
      if(employee.id === id) {
        employee.favorite = !employee.favorite
      }
      return employee;
    }));
  }

  const onChangeTeamColor = (id, color) => {
      setTeams(teams.map(team => {
        if(team.id === id) {
          team.color = color;
        }
        return team;
      }));
  }

  return (
    <div>
      <Banner />
      
        <Fragment>
          <Flex>
            <Form>
              <FormCard onAddEmployee={onAddEmployee} teams={teams}/>
            </Form>
            {showForm &&
            <Form>
              <FormTeam onAddTeam={onAddTeam} /> 
            </Form>
            }  
          </Flex>
        </Fragment>
      
      <Organisation teams={teams} employees={employees} onFavorite={onFavorite} showForm={onFormToggle} onDelete={onDelete} onChangeTeamColor={onChangeTeamColor} />
      <Footer />
    </div>
  );
}

export default App;
