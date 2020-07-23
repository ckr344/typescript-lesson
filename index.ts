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

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 「型注釈」と「型推論」
// ①「型注釈」→ :boolean, number, stringの箇所
// ②「型推論」
let hasValueTrue1 = true;
let count1 = 10;
let single1 = 'hello';
// 型注釈を省略できる
// 基本的に「型推論」を使用する
// 「型注釈」は「型推論」が効かないときに使用する

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

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

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 配列に型をつけるArray型について
const fruits1 = ['Apple', 'Banana', 'Grape']
const fruits2: string[] = ['Apple', 'Banana', 'Grape']
// 数字等、stringでない型が入ったらエラーになる
const fruits3: any[] = ['Apple', 'Banana', 'Grape', 1]
// anyはどんな型でもいい

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// Tuple型
// 決まった内容の配列を作る
// 配列に厳しく制限をかける
const book1: [string, number, boolean] = ['business', 1500, false];
// 以下はエラー
// const book2: [string, number, boolean] = ['business', 1500, false, 2000];

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// Enum
// 特定のまとまったグループのみを受け入れる列挙型を使う

// CoffeeSizeという型が生成される
enum CoffeeSize {
  SHORT= 'SHORT',
  TALL= 'TALL',
  GRANDE= 'GRANDE',
  VENTI= 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;
// coffee.size = 'SHORT' // Error

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// any型
let anything: any = true;
anything = 'hello';
anything = 100;
anything = ['hello', 33, true];
anything = {};

// stringとして定義しているものに対してもanyは入れることができる
let banana = 'banana';
banana = anything; // エラーにならない

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// Union型
// 複数の型を扱う
// numberもstringも扱える
let unionType: number | string = 10;
// unionType.toUpperCase(); // エラーになる
unionType = 'hello';
unionType.toUpperCase(); // エラーにならない

// 配列
let unionTypes: (number | string)[] = [21, 'hello'];

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// Literal型
// 特定の値のみを取り扱う
const apple1: 'apple' = 'apple'
// const apple2: 'apple' = 'hello' // エラーになる
// apple以外は受け入れない

const apple3: 3 = 3;
const apple4: true = true;

// constを使うことでLiteral型に自動的になる
// letを使うと「型推論」ということになる

// enumのような使い方もできる
let clothSize: 'small' | 'medium' | 'large' = 'large';

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// typeエイリアス
// 複雑な型を変数のように扱う
type ClothSize = 'small' | 'medium' | 'large';
let clothSize2: ClothSize = 'large'

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 関数に型を適応させる
