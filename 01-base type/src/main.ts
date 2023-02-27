import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
const title: string = 'titleName';
let number1: number = 1;
// number1 = '1';
let isTrue: boolean = true;
// isTrue = 'true';

// any type
let thing: any = 'hello';
thing = 1;
thing = true;
