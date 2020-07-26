// TypeScriptではClassをこう使う


class Person {
  name: string;

  // constructor → 予約後
  constructor(initName: string) {
    this.name = initName;
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}`)
  }
}
const jack = new Person('Jack');
jack.greeting();


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


// Classを型として使う

