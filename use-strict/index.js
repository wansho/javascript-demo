/***
 * use strict 
 * 开启严格模式，是一系列的限制，使得代码更加严格，并且更加安全
 * 
 * chrome 浏览器默认不开启 strict 模式
 * 
 * 注意："use strict" 只能用于脚本或者函数的开头，放在其他地方不生效！
 */

"use strict";

// 严格模式下，函数内的 this 指向 undefined
function test(){
  console.log(this);
}
test();

// 严格模式下，不先定义变量就赋值，就会报错
tmp = 'test';
console.log(tmp);

