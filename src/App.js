import Register from './components/Register';
import List from './components/List';
import { useState } from 'react';
import getUsers from './api/getUsers';

function App() {
  const [users, setUsers] = useState([]);
  useState(() => {
    getUsers().then(data => setUsers(data));
  }, [])
  return (
    <div className="App">
      <Register update={setUsers} />
      <List users={users}/>
    </div>
  );
}

export default App;
