export {};

let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3]; //非推奨オリジナル型の時に使う

let strings: string[] = ['こんにちは', 'おはよう', 'こんばんは']; 
let strings2: Array<string> = ['tokyo', 'osaka', 'fukuoka']; //非推奨オリジナル型の時に使う

let nijigenhairetu: number[][] = [
  [10, 100],
  [50, 500],
];

let hairetu:(number | boolean | string)[] = [1, false, 'japan']; //順番が変わったら許容されるのであまりよろしくない
// let profile: [string, number] = ['ham', 43]; //こっちを使う

console.log(
  numbers,
  numbers2,
  strings,
  strings2,
  hairetu,
  nijigenhairetu,
);