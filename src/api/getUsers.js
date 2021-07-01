import env from '../env';

const getUsers = async () => {
  const response = await fetch(`${env.api}/users`);
  return response.json();
}

export default getUsers;
