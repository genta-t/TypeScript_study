export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'atsushi';
  static lastName: string = 'ishida';

  static work() {
    //  'hey!! firstNameを追加したい。';
    return `hey!! ${this.firstName}`; //Meでもできるがthisと書く
  }
}

// let me = new Me();
// console.log(me.isProgrammer); 動的メンバー呼び出し

console.log(Me.isProgrammer); // 静的メンバーの呼び出し
console.log(Me.work()); // 静的メンバーの呼び出し