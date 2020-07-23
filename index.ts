let hello: string = 'hello';
console.log(hello);


// boolean型とnumber型とstring型を使う方法
// ①boolean型
let hasValueTrue: boolean = true;
let hasValueFalse: boolean = false;
// ②number型
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
// ③string型
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
// それぞれhoverすることで型を確認できる


// 「型注釈」と「型推論」
// ①「型注釈」→ :boolean, number, stringの箇所
// ②「型推論」
let hasValueTrue1 = true;
let count1 = 10;
let single1 = 'hello';
// 型注釈を省略できる
// 基本的に「型推論」を使用する
// 「型注釈」は「型推論」が効かないときに使用する


// オブジェクトに型を付ける方法
// 「型注釈」
const parson1: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}
// 「型推論」
const parson2 = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}


// 配列に型をつけるArray型について
const fruits1 = ['Apple', 'Banana', 'Grape']
const fruits2: string[] = ['Apple', 'Banana', 'Grape']
// 数字等、stringでない型が入ったらエラーになる
const fruits3: any[] = ['Apple', 'Banana', 'Grape', 1]
// anyはどんな型でもいい


// Tuple型
// 決まった内容の配列を作る
// 配列に厳しく制限をかける
const book1: [string, number, boolean] = ['business', 1500, false];
// 以下はエラー
const book2: [string, number, boolean] = ['business', 1500, false, 2000];


// Enum
// 特定のまとまったグループのみを受け入れる列挙型を使う