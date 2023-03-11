export {};

class Person {
  constructor(public name: string, protected age: number) {} // 初期化まで行ってくれて呼び出しも出来る
}

const me = new Person('ham', 43);
console.log(me);
