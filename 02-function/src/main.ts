import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning

function square(num: number) {
  return num * num;
}

function hello(name: string) {
  return `hello ${name.toUpperCase()}`;
}

function toWork(name: string, age: number, isWork: boolean) {
  return `${name.toUpperCase()} age ${age} work ${isWork}`;
}

function sayHello(name: string = 'stranger') {
  return `${name.toUpperCase()} say hello`;
}

function square2(num: number): number {
  return num * num;
}

function square3(num: number): void {
  num * num;
}

function lessThanOne(num: number): number | string {
  if (num > 1) {
    return num.toString();
  } else {
    return num;
  }
}

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

const colors = ['red', 'orange', 'blue'];

colors.map((color) => color.toUpperCase());

// void 不返回任何東西
function print(msg: string): void {
  console.log(msg);
}

//never
// never 是一種表示“不可能發生”的類型，通常用於函數的返回值類型。
// 當函數拋出異常或無限循環時，函數將永遠不會返回值。
function makeError(msg: string): never {
  throw new Error(msg);
}

console.log(square(2));
console.log(hello('Tom'));
console.log(toWork('tom', 12, false));
console.log(sayHello());

// 練習
function toFor(name: string = 'you'): string {
  return `for ${name}`;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
