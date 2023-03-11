export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) { // constructorに型指定しない
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}
let taro = new Person('taro', 30);
console.log(taro.profile());
