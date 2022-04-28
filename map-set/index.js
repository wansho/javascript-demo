/***
 * 1. 为什么要引入 map
 * JavaScript 的默认对象表示方式 {}可 以视为其他语言中的 Map 或 Dictionary 的数据结构，即一组键值对。
 * 但是 JavaScript 的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。
 * 为了解决这个问题，最新的 ES6 规范引入了新的数据类型 Map。
 * 
 * 2. 
 */

// map
let map = new Map();
map.set(1, 3);
console.log(map)
console.log(map.has(1)); // true，是否存在 key 1
console.log(map.get(1)); // 3
console.log(map.delete(1)); // true

// new map
map = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(map); // Map(3) {"a" => 1, "b" => 2, "c" => 3}

// set
let set = new Set([1, 2, 3, 4, 5]);
console.log(set.add(6)); // Set(6) {1, 2, 3, 4, 5, 6}
set.delete(2);
console.log(set); // Set(5) {1, 3, 4, 5, 6}