import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
<input type="text" placeholder="username" class="username">
<button class="btn">Click Me</button>
`;

// learning
const colors: Array<number> = [];
const inputUserName = document.querySelector<HTMLInputElement>('.username')!;
const btn = document.querySelector<HTMLButtonElement>('.btn')!;

btn.addEventListener('click', () => {
  inputUserName.value = 'userName';
});

function identity<Type>(item: Type): Type {
  return item;
}

interface Cat {
  name: string;
  color: string;
}

console.log(identity<number>(7));
console.log(identity<string>('8'));
console.log(identity<Cat>({ name: 'name', color: 'color' }));

function getRandom<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);

  return list[randomIndex];
}

console.log(getRandom<number>([1, 3, 5]));
console.log(getRandom<string>(['a', 'b', 'c']));

const getNewRandom = <T>(list: T[]): T => {
  const randomIndex = Math.floor(Math.random() * list.length);

  return list[randomIndex];
};

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

console.log(merge({ first: 'first' }, { last: 'last' }));
const nameObject = merge({ first: 'first' }, { last: 'last' });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

console.log(printDoubleLength('123'));

// 默認型態
function makeEmptyArray<T = number>(): T[] {
  return [];
}

const numArray = makeEmptyArray();
const booleanArray = makeEmptyArray<boolean>();

// 編寫泛型類
interface Song {
  title: string;
  author: string;
}
interface Video {
  title: string;
  author: string;
  subtitle: string;
}

class VideoPlayList {
  videos: Video[] = [];
}
class SongPlayList {
  songs: Song[] = [];
}
class PlayList<T> {
  lists: T[] = [];
  add(item: T) {
    this.lists.push(item);
  }
}

const songs = new PlayList<Song>();
songs.add({
  title: 'title',
  author: 'author',
});

const videos = new PlayList<Video>();
videos.add({
  title: 'title',
  author: 'author',
  subtitle: 'subtitle',
});

console.log(songs);
console.log(videos);
