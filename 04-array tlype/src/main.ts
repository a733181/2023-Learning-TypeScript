import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
const users: string[] = ['tom', 'john'];

const numbers: Array<number> = [];
numbers.push(1);

type Point = {
  x: number;
  y: number;
};

const points: Point[] = [];
points.push({ x: 1, y: 1 });

// 多維陣列
const board: string[][] = [['X'], ['O'], ['X']];
const demo: number[][][] = [[[1]]];

// 練習
const ages: number[] = [];
const gameBorards: string[][] = [];

type Product = {
  name: string;
  price: number;
};

const products: Product[] = [];
products.push({ name: 'one', price: 10 });
products.push({ name: 'two', price: 20 });

const getTotal = (): number => {
  return products.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
};

console.log(getTotal());
