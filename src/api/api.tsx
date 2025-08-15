import axios from 'axios';

export type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export async function fetchUsers(): Promise<User[]>{
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
}
