import { useEffect, useState } from 'react';

const List = ({ users }) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
        setListUsers(users);
      }, [users]);

  return (
    <ul>
    { listUsers.map(user => <li key={user.id}>{user.email}</li>) }
    </ul>
  )
}

export default List;
