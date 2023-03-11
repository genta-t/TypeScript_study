export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'ham',
  underTwenty: false,
};

// インデックスシグネチャーズの書き方
// { [ index: typeforIndex ]: typeFroValue }

profile.name = 'ham';
profile.age = 43;
profile.nationality = 'japan';