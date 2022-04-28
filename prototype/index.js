/***
 * JavaScript 面向对象编程的设计：prototype 原型
 * JavaScript 没有类，只有对象，可以通过配置对象的原型，指定该对象继承自哪一个对象
 */

var robot = {
  name: 'Robot',
  height: 1.6,
  run: function () {
    console.log(this.name + 'is running...');
  }
}
// 指定 小明 继承自 robot
var xiaoming = {name: '小明'};
xiaoming.__proto__ = robot;
console.log(xiaoming);
xiaoming.run(); // 小明 is running...

// javascript 不建议直接修改一个对象的 __proto__ 来改变一个对象的原型。
// 通过 Object.create() 创建一个新对象，并且指定原型为某个对象
var xiaoming2 = Object.create(robot);
xiaoming2.name = '小明2';
console.log(xiaoming2); 

// 当我们用 obj.xxx 访问一个对象的属性时，JavaScript 引擎先在当前对象上查找该属性，
// 如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到 Object.prototype 对象，
// 最后，如果还没有找到，就只能返回 undefined。
// Array 对象的原型链是：arr -> Array.prototype -> Object.prototype -> null
// Array.prototype 中定义了 indexOf(), shift() 方法，所以 Array 对象能直接调用这些方法

// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.toString = () => {console.log(this.name + ' ' + this.age);}
}
// 如此便定义了一个构造函数