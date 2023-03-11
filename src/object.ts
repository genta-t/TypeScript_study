export {};

let profile1: object = { name: 'ham '}; //良くない
profile1 = { year: 1779 };

let profile2: {
  name: string
} = { name: 'ham '};
profile2 = { name: 'nimo' };