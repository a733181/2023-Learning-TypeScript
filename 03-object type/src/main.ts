import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning

function print(person: { firstName: string; lastName: string }): void {
  console.log(person);
}
print({ firstName: 'one', lastName: 'tow' });

let coordinate: { x: number; y: number } = {
  x: 10,
  y: 20,
};

function randomCoordinate(): { x: number; y: number } {
  return {
    x: Math.random() * 10,
    y: Math.random() * 20,
  };
}
console.log(randomCoordinate());

// 在調用 print 函數時傳入了一個帶有 age 屬性的對象，而函數 print 的參數類型定義只包含 firstName 和 lastName 屬性，因此 TypeScript 報錯。
// print({ firstName: 'one', lastName: 'tow', age: 10 });

// 是因為 TypeScript 的物件字面量的行為是比較寬鬆的。當你將物件傳遞給一個接受特定型別物件的函式時，TypeScript 只會檢查物件是否擁有需要的屬性，而不會檢查物件是否有多餘的屬性。因此，當你將具有額外屬性的物件傳遞給 print 函式時，TypeScript 不會報錯。
const singer = { firstName: 'one', lastName: 'tow', age: 10 };
print(singer);

type Point = {
  x: number;
  y: number;
};

function doublePoint(point: Point): Point {
  return { x: point.x, y: point.y };
}

console.log(doublePoint({ x: 1, y: 2 }));

// 崁套物件
type Song = {
  title: string;
  artist: string;
  numberStreams: number;
  credits: {
    producer: string;
    write: string;
  };
};

const theSong: Song = {
  title: 'title',
  artist: 'ar',
  numberStreams: 555,
  credits: {
    producer: 'producer',
    write: 'write',
  },
};

function paylout(song: Song): number {
  return (song.numberStreams / 1000) * 0.33;
}

function printSong(song: Song): void {
  console.log(song);
}

console.log(paylout(theSong));
printSong(theSong);

// 可選屬性
type NewPoint = {
  x: number;
  y: number;
  z?: number;
};

const newPoint1: NewPoint = {
  x: 1,
  y: 1,
};

const newPoint2: NewPoint = {
  x: 2,
  y: 2,
  z: 2,
};

// 唯讀修飾符
// 因為 'id' 為唯讀屬性，所以無法指派至 'id
type User = {
  readonly id: number;
  account: string;
};

const user: User = {
  id: 0,
  account: 'user01',
};

// user.id = 1;

//交叉點類型
type Circle = {
  radius: number;
};

type CircleColor = {
  color: string;
};

type CircleType = Circle & CircleColor;

const circle: CircleType = {
  radius: 4,
  color: 'yellow',
};

type x = {
  x: number;
};

type y = {
  y: number;
};

type ThreePoint = x &
  y & {
    z: number;
  };

const threePoint: ThreePoint = {
  x: 1,
  y: 1,
  z: 1,
};

// 練習
type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

// function getProfit(movie: Movie): number {
//   return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }

// function getProfit(movie: Movie): number {
//   const { budget, grossWorldwide } = movie.boxOffice;
//   return grossWorldwide - budget;
// }

function getProfit({ boxOffice: { budget, grossWorldwide } }: Movie): number {
  return grossWorldwide - budget;
}

//題目
const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};
const cats: Movie = {
  title: 'Cats',
  director: 'Tom Hooper',
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
console.log(getProfit(dune));
console.log(getProfit(cats));
