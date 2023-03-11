export {};

let name = 'atsushi';

name = 'ham';

let nickname = 'ham' as const;
nickname = 'ham';

let profile = {
  name: 'atsushi',
  height: 178,
} as const;

// profile.name = 'ham';
// profile.height = 180;