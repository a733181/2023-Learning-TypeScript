import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 1,
  y: 1,
};

// 唯讀 readyonly
// 可選?
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickName?: string;
  sayHi: () => string; // 方法
}

const user01: Person = {
  id: 0,
  first: 'BRENDEN',
  last: 'BUCKLEY',
  sayHi: () => 'Hello',
};

// 方法參數
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'blue',
  price: 99,
  applyDiscount(discount: number) {
    return Math.round(this.price * (1 - discount));
  },
};

console.log(shoes.applyDiscount(0.1));

// 擴展
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  bread: string;
  bark(): string;
}

const dog: Dog = {
  name: 'Dog',
  age: 5,
  bread: 'other',
  bark() {
    return 'Woof';
  },
};

// 繼承
interface ServiceDog extends Dog {
  job: string;
}

const serviceDog: ServiceDog = {
  name: 'name',
  age: 10,
  bread: 'other',
  bark() {
    return 'Woof';
  },
  job: 'job',
};

// 多重繼承
interface Person01 {
  name: string;
}

interface Emloyee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person01, Emloyee {
  level: number;
}

const user02: Engineer = {
  id: 0,
  name: 'name',
  email: 'email',
  level: 0,
};

// type 與 interface 差異
// interface 可以定義 物件 函式 陣列
// type 可以定義單一型別 範例: type color = 'red' | 'blue';
// interface 會合併 type 不行
// interface 可以繼承 type 不行
