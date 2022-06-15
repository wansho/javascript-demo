'use strict';

function greet(name) {
    console.log('Hello' + ', ' + name + '!');
}

function hate(name){
    console.log('I hate ' + name + '!');
}

// 这里可以配置导出任何对象：object，function，array，甚至是某个变量
module.exports = {greet: greet, hate: hate};

/***
 * module 其实是一个对象
 * https://www.liaoxuefeng.com/wiki/1022910821149312/1023027697415616


var module = {
    id: 'hello',
    exports: {}
};
var load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }
    
    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};
var exported = load(module);
// 保存module:
save(module, exported);

 * 
 */