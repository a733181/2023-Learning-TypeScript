import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
let age: number | string = 24;
age = '24';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 1 };
coordinates = {
  lat: 1,
  long: 1,
};

// 聯合類型與函式
const printAge = (age: number | string): void => {
  console.log(age);
};
printAge(5);
printAge('10');

const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
};

console.log(calculateTax('$0.5', 3));
console.log(calculateTax(45, 0.6));

// 聯合類型與陣列
const stuff: (number | string)[] = [];
stuff.push(1);
stuff.push('1');

const coords: (Point | Loc)[] = [];
coords.push({ x: 1, y: 1 });
coords.push({
  lat: 1,
  long: 1,
});

// 文字類型 literal Type
const zero: 0 = 0;
const hi: 'hi' = 'hi';

let feeling: 'happy' | 'sad' = 'happy';
feeling = 'sad';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thrusday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let today: DayOfWeek = 'Wednesday';
today = 'Sunday';

// 練習
let heightScore: number | boolean;

const numberStuff: number[] | string[] = [];

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: 'ski' | 'snowboard';
  level: SkillLevel;
};

type Rgb = {
  r: number;
  g: number;
  b: number;
};

type Hsl = {
  h: number;
  s: number;
  l: number;
};

const colors: (Rgb | Hsl)[] = [];

const greet = (title: string | string[]): void => {
  if (typeof title === 'string') {
    console.log(`Hello ${title}`);
  } else {
    title.forEach((item: string) => {
      console.log(`Hello ${item}`);
    });
  }
};

greet('tom');
greet(['blue', 'green']);
