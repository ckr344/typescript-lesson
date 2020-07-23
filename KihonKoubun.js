"use strict";
// TypeScriptの基本構文まとめ
var hello1 = 'hello';
console.log(hello1);
// boolean型とnumber型とstring型を使う方法
// ①boolean型
var hasValueTrue = true;
var hasValueFalse = false;
// ②number型
var count = 10;
var float = 3.14;
var negative = -0.12;
// ③string型
var single = 'hello';
var double = "hello";
var back = "hello";
// それぞれhoverすることで型を確認できる
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 「型注釈」と「型推論」
// ①「型注釈」→ :boolean, number, stringの箇所
// ②「型推論」
var hasValueTrue1 = true;
var count1 = 10;
var single1 = 'hello';
// 型注釈を省略できる
// 基本的に「型推論」を使用する
// 「型注釈」は「型推論」が効かないときに使用する
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// オブジェクトに型を付ける方法
// 「型注釈」
var parson1 = {
    name: 'Jack',
    age: 21
};
// 「型推論」
var parson2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 配列に型をつけるArray型について
var fruits1 = ['Apple', 'Banana', 'Grape'];
var fruits2 = ['Apple', 'Banana', 'Grape'];
// 数字等、stringでない型が入ったらエラーになる
var fruits3 = ['Apple', 'Banana', 'Grape', 1];
// anyはどんな型でもいい
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Tuple型
// 決まった内容の配列を作る
// 配列に厳しく制限をかける
var book1 = ['business', 1500, false];
// 以下はエラー
// const book2: [string, number, boolean] = ['business', 1500, false, 2000];
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Enum
// 特定のまとまったグループのみを受け入れる列挙型を使う
// CoffeeSizeという型が生成される
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// coffee.size = 'SHORT' // Error
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// any型
var anything = true;
anything = 'hello';
anything = 100;
anything = ['hello', 33, true];
anything = {};
// stringとして定義しているものに対してもanyは入れることができる
var banana = 'banana';
banana = anything; // エラーにならない
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Union型
// 複数の型を扱う
// numberもstringも扱える
var unionType = 10;
// unionType.toUpperCase(); // エラーになる
unionType = 'hello';
unionType.toUpperCase(); // エラーにならない
// 配列
var unionTypes = [21, 'hello'];
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Literal型
// 特定の値のみを取り扱う
var apple1 = 'apple';
// const apple2: 'apple' = 'hello' // エラーになる
// apple以外は受け入れない
var apple3 = 3;
var apple4 = true;
// constを使うことでLiteral型に自動的になる
// letを使うと「型推論」ということになる
// enumのような使い方もできる
var clothSize = 'large';
var clothSize2 = 'large';
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 関数に型を適応させる
// パラメーターと戻り値に型が必要
function add(num1, num2) {
    return num1 + num2;
}
;
add(3, 2);
// パラメーターに型をつけないとanyになる（なるべく避ける）
// 戻り値にも型をつけるのが推奨
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 関数の戻り値にvoid型を使う方法
function sayHello() {
    console.log('Hello!');
}
// なにも返さないことを型として定義する
// 実際はundefinedが返ってくる
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// undefined型とnull型についての補足
var tmp1 = undefined;
// let tmp2: undefined = null; // Error
var tmpNull1 = null;
// let tmpNull2: null = undefined; // Error
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 関数型を使って、特定の関数のみを代入できる変数を作る
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// callback関数に型をつける
// cbは関数
// 第1引数は数字、第2引数は(num: number) => numberの形を持った関数として扱える
function doubleAddHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
;
doubleAddHandle(21, function (doubleNum) {
    return doubleNum;
});
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// unknown型
// 柔軟でanyよりも厳しい型を定義する
var unknownInput;
var anyInput;
var text;
// 以下全てエラーでない
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput; // Error
// anyだとエラーにならない
// unknownは入れれるのは入れれるが、使うときに注意が必要
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// never型
// 起こり得ない値の型を使用する
// 決してなにも返さない
function error(message) {
    throw new Error(message);
}
// undefinedも返さない
