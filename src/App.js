import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login formSwitch={toggleForm} />
      ) : (
        <Register formSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
