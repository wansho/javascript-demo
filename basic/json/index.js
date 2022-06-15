/***
 * javascript object notation
 * number：和JavaScript的number完全一致；
 * boolean：就是JavaScript的true或false；
 * string：就是JavaScript的string；
 * null：就是JavaScript的null；
 * array：就是JavaScript的Array表示方式——[]；
 * object：就是JavaScript的{ ... }表示方式。
 * 并且，JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。
 * 注意：json 本身是一个字符串。
 */

// object 序列化为 json 字符串
var xiaoming = {
  name: '小明',
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  'middle-school': '\"W3C\" Middle School',
  skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
console.log(JSON.stringify(xiaoming));
// 加上参数，按照缩进进行序列化，缩进两个空格
console.log(JSON.stringify(xiaoming, null, 2));
console.log(JSON.stringify(xiaoming, null, '  '));
// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入 Array
console.log(JSON.stringify(xiaoming, ['name', 'skills'], 2));
// 还可以传入一个函数，用来筛选键值
console.log(JSON.stringify(xiaoming, function(key, value){
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}, 2));

// JSON 字符串反序列化成 object
let xiaomingJSON = JSON.stringify(xiaoming);
let xiaomingObject = JSON.parse(xiaomingJSON);
console.log(xiaomingObject);