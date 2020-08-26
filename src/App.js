import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Component/Users/Users';
import Add from './Component/Add/Add';

function App() {
const [users, setUsers] = useState([]);
useEffect(() => {
  fetch("https://randomuser.me/api/?results=15")
  .then(res => res.json())
  .then(data => setUsers(data.results))
  .catch(error => console.log(error))
}, []);

const [add, setAdd] = useState([]);

const handleAddUser = (client) => {
  
  const newAdd = [...add, client];
  setAdd(newAdd);
}

  return (
    <div className="App">
      <header className="App-header">
        
    <div className="main-body">
    <div className="user-body">
          {
            users.map(user => <Users key={user.cell} users={user} handleAddUser={handleAddUser}></Users>)
          }
          </div>
          <div className='added-user'>
            <Add add={add}></Add>
          </div>
    </div>
      </header>
    </div>
  );
};

export default App;
