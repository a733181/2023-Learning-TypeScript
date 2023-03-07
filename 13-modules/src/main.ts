import { add, sample as radnomSample } from './utils';
import User, { userHanlder } from './User';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
console.log(add(2, 2));
const user = new User('Tom', 'tom@email.com');
user.print();
userHanlder();
console.log(radnomSample([1, 3, 5, 7, 9]));
