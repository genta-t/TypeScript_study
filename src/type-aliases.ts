export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

type Profile ={
  name: string;
  age: number;
};

const example1 = {
  name: 'ham',
  age: 43
};

type Profile2 = typeof example1;

const example2: Profile = {
  name: 'ham',
  age: 43
};