/***
 * 1. JavaScript 函数允许接收任意个参数
 * 2. JavaScript 的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
 * 3. 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript 默认有一个全局对象 window，全局作用域的变量实际上被绑定到 window 的一个属性
 * 4. JavaScript 脚本内定义的所有的函数，变量，实际上都是全局对象的属性
 */

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
PI = 3.14159; // TypeError: Assignment to constant variable.
