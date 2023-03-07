import axios from 'axios';
import _ from 'lodash';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function getTodosHandler(): Promise<void> {
  try {
    const { data } = await axios.get<Todo>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function getUsersHandler(): Promise<void> {
  try {
    const { data } = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsersHandler();
