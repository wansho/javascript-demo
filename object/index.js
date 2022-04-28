/***
 * JavaScript 对象的键必须是字符串。
 */

let obj = {'a': 1, 'b': 2, 'c': 3};
for (let key in obj) {
  console.log(key + ': ' + obj[key]);
}