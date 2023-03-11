export {};

let name: any = 'ham';

let length = (name as string).length; // こっちで書く。
// let length = (<string>name).length; <-非推奨

// length = 'foo';