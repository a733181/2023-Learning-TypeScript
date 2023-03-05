import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
class OldPlayer {
  readonly first: string;
  readonly last: string;
  // private # 私有，只能在內部使用
  private score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const player01 = new OldPlayer('gray', 'cat');

class NewPlayer {
  constructor(
    public first: string,
    public last: string,
    private _score: number,
    protected _life: number
  ) {
    this.printFullName();
  }
  private printFullName(): void {
    console.log(`${this.first} ${this.last}`);
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) throw new Error('小於0');
    this._score = newScore;
  }
}

const player02 = new NewPlayer('gray', 'cat', 1, 3);
console.log(player02.score);
// player02.score = -1;

class SuperPlayer extends NewPlayer {
  isAdmin: boolean = true;
  maxLife() {
    this._life = 100;
  }
}

interface Color {
  color: string;
}

interface Print {
  print(): void;
}

class Bike implements Color {
  constructor(public color: string) {}
}

const bike1 = new Bike('orange');
console.log(bike1);

class Jacket implements Color, Print {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log('print');
  }
}

const jacket01 = new Jacket('new', 'black');

// 抽象類 定義一個模式
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getTime(): number;
  hello() {
    console.log(`hello ${this.first}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private time: number) {
    super(first, last);
  }
  getTime(): number {
    return this.time;
  }
}

class PartTimeEmployee extends Employee {
  constructor(first: string, last: string, private time: number) {
    super(first, last);
  }
  getTime(): number {
    return this.time;
  }
}

const employee01 = new FullTimeEmployee('white', 'black', 8);
console.log(employee01.getTime());

const employee02 = new PartTimeEmployee('black', 'white', 4);

console.log(employee02.getTime());
