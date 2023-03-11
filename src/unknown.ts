export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown); typeofを使って型を調べる
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}