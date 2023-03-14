export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'ham',
  age: 43
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;
// type Readonly<T> = { readonly [P in keyof T]: T[P]; } ↑これのこと

const friend: PersonalDataType = {
  name: 'shigeru',
  age: 40,
}

// friend.age++;

console.log(friend);