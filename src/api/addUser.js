import env from '../env';

const addUser = async (obj) => {
  const payload = JSON.stringify(obj);
  const response = await fetch(`${env.api}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload
  });
  return response.json();
}

export default addUser;
