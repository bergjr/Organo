import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form';
import Organisation from './components/Organization/Organisation';


function App() {
  
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const onFormToggle = () => {
    if (showForm) {
      setShowForm(false)
    }
    else {
      setShowForm(true)
    }
  }

  const onAddEmployee = (employee) => {
      setEmployees([...employees, employee]);
  }
  
  return (
    <div>
      <Banner />
      {showForm && 
        <Form onAddEmployee={onAddEmployee} />
      }
      <Organisation employees={employees} showForm={onFormToggle} />
      <Footer />
    </div>
  );
}

export default App;
