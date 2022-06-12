/**
 * js 面向对象的写法
 * 
 * 面向对象的三要素：封装，继承，多态
 * 
 * js 中的类定义，用函数来实现
 * 
 */

function Person(name, age){
  this.name = name;
  this.age = age;

  this.setName = function(name){
    this.name = name;
  }

  this.setAge = function(age){
    this.age = age;
  }

  this.getName = function(){
    return this.name;
  }

  this.getAge = function(){
    return this.age;
  }

  this.show = function(){
    console.log(this.name, this.age);
  }

  this.toString = function(){
    return 'Person[], name: ' + this.name + ', age: ' + this.age; 
  }
}

var p1 = new Person('zhangsan', 18);
p1.show();

var p2 = new Person('lisi', 19);
console.log(p2.toString())

/***
 * 下面给 Person 的所有对象，添加一些新方法
 * 用原型
 */

Person.prototype.show2 = function(){
  console.log(this.name, this.age, 'hehe');
}

p1.show2();