import type { Person } from './type';

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  print(): void {
    console.log(this.username);
  }
}

export function userHanlder(): void {
  console.log('userHandler');
}
