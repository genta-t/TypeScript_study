export {};

abstract class Animal {
  abstract cry(): string; // 呼び忘れ防止
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}