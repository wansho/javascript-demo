/***
 * 1. JavaScript 函数允许接收任意个参数
 * 2. JavaScript 的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
 * 3. 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript 默认有一个全局对象 window，全局作用域的变量实际上被绑定到 window 的一个属性
 * 4. JavaScript 脚本内定义的所有的函数，变量，实际上都是全局对象的属性
 */

// 非严格模式下，函数中的 this 指向 Window
function test(){
  console.log(this); // Window 对象
  this.count++;
}

test();
console.log(Window.count)

// 定义函数
function abs(x){
  if(x < 0){
    return -x;
  }
  return x;
}

// 定义一个匿名函数，并赋值给一个变量
var abs = function(x){
  if(x < 0){
    return -x;
  }
  return x;
}

// arguments 参数存储了函数调用时传入的参数
function argumentsTest(){
  console.log(arguments);
  for(let i = 0; i< arguments.length; i++){
    console.log(arguments[i]);
  }
}
// 即使函数没有参数，也会有一个 arguments 对象
argumentsTest(1, 2, 3, 4, 5); 

// rest 参数
function restTest(a, b, c, ...args){
  console.log(args);
}
restTest(1, 2); // undefined
restTest(1, 2, 3, 4, 5); // [4, 5]

// 变量作用域
function scopeTest(){
  var a = 1;
  function f(){
    console.log(a);
  }
  f();
}
// 因为 a 在函数内部，所以外部不能访问
// console.log(a); // undefined


// 变量提升
// JavaScript 的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
function foo() {
  var x = 'Hello, ' + y;
  console.log(x);
  var y = 'Bob';
}
foo();
// 实际上被 JavaScript 转换成了：
function foo() {
  var y; // 变量提升，此时 y 为 undefined;
  var x = 'Hello, ' + y;
  console.log(x);
  y = 'Bob';
}

// 全局变量 window。全局变量定义后，被绑定到 window 对象上
// 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript 默认有一个全局对象 window，全局作用域的变量实际上被绑定到 window 的一个属性
// JavaScript 脚本内定义的所有的函数，变量，实际上都是全局对象 window 的属性，abs 也是 window 的属性
// 这说明 JavaScript 实际上只有一个全局作用域。任何变量（函数也视为变量），如果没有在当前函数作用域中找到，
// 就会继续往上查找，最后如果在全局作用域中也没有找到，则报 ReferenceError 错误。
var demo = 1;
console.log(window.demo);
console.log(window.abs(-10));
console.log(window);
window.alert = function(){
  console.log('hello');
}
alert('fuck');

// namespace 命名空间
// 唯一的全局变量 MYAPP:
// 全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
// 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：
var MYAPP = {};
// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
// 把自己的代码全部放入唯一的名字空间 MYAPP 中，会大大减少全局变量冲突的可能。许多著名的 JavaScript 库都是这么干的：jQuery，YUI，underscore 等等。

// 局部作用域
function localScopeDemo(){
  for(var i = 0; i< 10; i++){
    console.log(i);
  }
  console.log(i); // 10 能访问到块级作用域中的 var 变量
}
localScopeDemo(); 
function localScopeDemo2(){
  for(let i = 0; i< 10; i++){
    console.log(i);
  }
  // console.log(i); // ReferenceError: i is not defined
}

// 定义常量，如果重新赋值后，会报错
const PI = 3.14;
// PI = 3.14159; // TypeError: Assignment to constant variable.


// 解构赋值
// 数组解构
let [a, [b, c]] = [1, [2, 3]]
console.log(a, b, c); // 1 2 3
let [firstNum, ...otherNum] = [1, 2, 3]
console.log(otherNum); // [2, 3]
// 只取第三个元素
let [, , d] = [1, 2, 3];
console.log(d); // 3
// 对象解构
let {foo2, bar2} = {foo2: 'aaa', bar2: 'bbb'};
console.log(foo2, bar2); // aaa bbb
let {foo3, bar3: {bar31}} = {foo3: 'aaa', bar3: {bar31: 'bbb'}};
console.log(foo3, bar31); // aaa bbb
// 对象解构时属性重命名
var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school'
};
// 把 passport 属性赋值给变量 id:
let {name, passport:id} = person;
console.log(name, id);
// 默认值
let {age, single=true} = person;
console.log(age, single); // 20 岁，默认单身
// 函数入参，解构赋值
function add([x=3, y=5]){
  return x + y;
}
console.log(add([1, 2])); // 3
console.log(add([1])); // 6
function add2({x=3, y=5}){
  return x + y;
}
console.log(add2({x: 1, y: 2})); // 3
console.log(add2({x: 1})); // 6

// 高阶函数
function pow(x){
  return x * x;
}
var arr = [1, 2, 3, 4, 5];
arr.map(pow); // [1, 4, 9, 16, 25]  
// reduce [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
arr.reduce((x, y) => x + y); // 15
// sort 也是一个高阶函数
[10, 20, 1, 2].sort() // [1, 10, 2, 20] array 的 sort 方法默认把所有元素先转换成 String 再排序。
arr.sort((x, y) => {
  if(x > y){
    return 1;
  }
  if(x < y){
    return -1;
  }
  return 0;
}); // [1, 2, 10, 20]
// 排序后，返回的是原对象，而不是新对象！
let newArr = arr.sort();
console.log(newArr === arr); // true

// every 高阶函数，等同于 Java 中的 allMatch
let arr2 = [1, 2, 3, 4, 5];
arr2.every( x => x > 0);  // true

// find 高阶函数，等同于 Java 中的 anyMatch，返回第一个符合条件的元素
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.find( x => x > 3)); // 4

// findIndex 高阶函数，和 find 类似，但是返回符合条件的元素的索引
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.findIndex( x => x > 3)); // 3，索引为 3 的元素

// forEach 高阶函数，等同于 Java 中的 forEach
let arr5 = [1, 2, 3, 4, 5];
arr5.forEach( x => console.log(x)); // 1 2 3 4 5

// 创建一个匿名函数并且立即执行
(function(x){return x * x})(5); // 25

// 闭包
// 在面向对象的程序设计语言里，比如Java和C++，要在对象内部封装一个私有变量，可以用private修饰一个成员变量。
// 在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。
// 在返回的对象中，实现了一个闭包，该闭包携带了局部变量x，并且，从外部代码根本无法访问到变量x。
// 换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
function create_counter(initial){
  var x = initial || 0;
  return {inc: function(){x += 1; return x;}};
}
var calc1 = create_counter();
console.log(calc1.inc()); // 1
console.log(calc1.inc()); // 2
var calc2 = create_counter(10);
console.log(calc2.inc()); // 11
console.log(calc2.inc()); // 12

// 箭头函数 
// 箭头函数可以看成是匿名函数的简写。
// 箭头函数还有一个特性：箭头函数内部的 this 总是指向词法作用域，也就是外层调用者 obj
var obj = {
  birth: 1995,
  getAge: function(){
    // 这里的 this 肯定指向 obj
    var b = this.birth;
    // 这里的函数的箭头函数中的 this，仍然指向 obj
    var fn = () => new Date().getFullYear() - this.birth;
    return fn();
  }
}