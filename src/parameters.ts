export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('ham', 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['gloria', 76];

debugProfile(...profile);

type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;