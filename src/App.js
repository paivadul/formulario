import React, {useState} from 'react'; //useState: da un valor inicial y permite modificar variables de estados
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {

  const [user, setUser] = useState({firstName:"", lastName:"", email:"", password:"", confirmPassword:""})

  return (
    <div className="App">
      <Form user={user} setUser={setUser}/>
      <Results user={user}/>
    </div>
  );
}

export default App;