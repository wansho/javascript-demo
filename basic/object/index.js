/***
 * 1. JavaScript 对象的键必须是字符串。
 * 2. JavaScript 中的类，实际上就是对象，因为对象可以定义属性，也可以定义方法，this 就指向对象本身。
 */

// 对象的遍历
let obj = {'a': 1, 'b': 2, 'c': 3};
for (let key in obj) {
  console.log(key + ': ' + obj[key]);
}

/***
 * 批量修改对象的属性
 * 使用场景：前缀特别长的时候
 * with(document){}
 */
with(obj){
  a=2;
  b=3;
  c=4;
}
console.log('obj', obj);


// this
var xiaoming = {
  name: '小明',
  birth: 1995,
  age: function(){
    var y = new Date().getFullYear();
    // this 指向 xiaoming 这个对象，在方法内使用成员变量
    return y - this.birth;
  },
  age2: function(){
    // that 指向 xiaoming
    var that = this;
    function getAge(){
      var y = new Date().getFullYear();
      return y - that.birth;
    }
    return getAge();
  }
}
console.log(xiaoming.age()); // 27

// apply 函数调用，指定函数的 this 是谁，即方法被谁调用
var getAge = function (){
  var y = new Date().getFullYear();
  return y - this.birth;
}
// apply 的第一个参数是函数绑定的 this 对象，第二个参数是一个 array，用于传参
console.log(getAge.apply(xiaoming, [])); // 27
// call 函数调用，与 apply 作用一样，唯一的区别是，第二个参数不是 array，是一个一个的参数
console.log(getAge.call(xiaoming, 1, 2, 3)); // 27

// 装饰器 统计代码一共调用了多少次 parseInt
var count = 0;
var oldParseInt = parseInt;
window.parseInt = function(){
  count++;
  // 这里的 arguments 存储的就是 function 传入的参数，所以我们不需要指定那么多参数
  return oldParseInt.apply(null, arguments);
}

/***
 * 对 object 进行遍历
 * Object.keys(obj) – returns all the keys of object as array
 * Object.values(obj) – returns all the values of the object as array
 * Object.entries(obj) – returns an array of [key, value]
 */
 
