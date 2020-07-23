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
// パラメーターと戻り値に型が必要
function add(num1: number, num2: number): number {
  return num1 + num2
};
add(3, 2);
// パラメーターに型をつけないとanyになる（なるべく避ける）
// 戻り値にも型をつけるのが推奨

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 関数の戻り値にvoid型を使う方法
function sayHello(): void {
  console.log('Hello!');
}
// なにも返さないことを型として定義する
// 実際はundefinedが返ってくる

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// undefined型とnull型についての補足
let tmp1: undefined = undefined;
let tmp2: undefined = null;
let tmpNull1: null = null;
let tmpNull2: null = undefined;

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber = (num: number): number => num * 2;

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// callback関数に型をつける
// cbは関数
// 第1引数は数字、第2引数は(num: number) => numberの形を持った関数として扱える
function doubleAddHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum)
};

doubleAddHandle(21, doubleNum => {
  return doubleNum
});

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// unknown型
// 柔軟でanyよりも厳しい型を定義する
let unknownInput: unknown;
let anyInput: any;
let text: string;

// 以下全てエラーでない
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;

// text = unknownInput; // Error
// anyだとエラーにならない
// unknownは入れれるのは入れれるが、使うときに注意が必要

if (typeof unknownInput === 'string') {
  text = unknownInput
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// never型
// 起こり得ない値の型を使用する
// 決してなにも返さない
function error(message: string): never {
  throw new Error(message);
}
// undefinedも返さない