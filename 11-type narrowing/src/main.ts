import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning
function repeatThree(value: number | string): string {
  if (typeof value === 'number') {
    return value.toString().repeat(3);
  }
  return value.repeat(3);
}

console.log(repeatThree(3));

const printLetters = (word?: string): void => {
  if (word) {
    for (let char of word) console.log(char);
  } else {
    console.log('沒有輸入文字');
  }
};

printLetters('Hello');
printLetters();

// 平等縮小範圍
function point(x: string | number, y: string | number): void {
  if (x === y) {
    console.log(typeof x);
  }
}

// 使用 In 運算符縮小範圍
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  episode: number;
  episodeDuration: number;
}

function getTime(viedo: Movie | TVShow): void {
  if ('episode' in viedo) {
    console.log(viedo.episode * viedo.episodeDuration, 'tvShow');
  } else {
    console.log(viedo.duration, 'movie');
  }
}
getTime({
  title: 'movie',
  duration: 3,
});

getTime({
  title: 'tvShow',
  episode: 2,
  episodeDuration: 0.5,
});

// Instanceof Narrowing 縮小實例
function printFullDate(date: string | Date): void {
  if (date instanceof Date) {
    console.log(date.toLocaleDateString(), 'date');
  } else {
    console.log(new Date(date).toLocaleDateString(), 'string');
  }
}

printFullDate(new Date());
printFullDate(new Date().toString());

class User {
  constructor(public userName: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(item: User | Company): void {
  // if ('userName' in item) {
  //   console.log(item.userName);
  // } else {
  //   console.log(item.name);
  // }

  if (item instanceof User) {
    console.log(item.userName);
  } else {
    console.log(item.name);
  }
}

// Narrowing With The In Operator 類型謂詞
interface Cat {
  name: string;
  color: string;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).color !== undefined;
}

function makeNoise(animal: Cat | Dog): void {
  if (isCat(animal)) {
    console.log('Meow');
  } else {
    console.log('Woof');
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}

type FarmAnimal = Rooster | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal): void {
  switch (animal.kind) {
    case 'pig': {
      console.log('Oink');
      break;
    }
    case 'cow': {
      console.log('Moo');
      break;
    }
    case 'rooster': {
      console.log('crow');
      break;
    }
    default:
      // Exhaustiveness Checks With Never
      const _exhaustiveCheck: never = animal;
      console.log(_exhaustiveCheck);
  }
}

getFarmAnimalSound({
  name: 'pig',
  weight: 5,
  age: 3,
  kind: 'pig',
});
