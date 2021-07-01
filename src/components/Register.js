import { useState } from 'react';
import addUser from '../api/addUser';
import getUsers from '../api/getUsers';

const Register = ({ update }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const nameOnChange = (e) => {
    setName(e.target.value);
  }
  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  }
  const register = () => {
    const payload = {
      firstName: name,
      email: email,
      password: password
    }
    addUser(payload).then(() => {
      getUsers().then(data => update(data));
    });
  }

  return (
    <div>
    <input onChange={(e) => nameOnChange(e)} type="text" />
    <input onChange={(e) => emailOnChange(e)} type="email" />
    <input onChange={(e) => passwordOnChange(e)} type="password" />
    <button onClick={register}>register</button>
    </div>
  )
}

export default Register;
