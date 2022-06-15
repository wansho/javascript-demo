/***
 * 1. Array也是对象，而它的每个元素的索引被视为对象的 key
 */

let list = [{}, '2', 3, 4, 5];

// indexOf
console.log(list.indexOf(4));

// slice
console.log(list.slice(0, 3));
console.log(list.slice(1));

// unshift shift
list = [1,2,3,4,5];
// 队首入队
list.unshift(-1, 0);
console.log(list);
// 队首出队
list.shift();
console.log(list);

// sort
list = ['b', 'a', 'c'];
console.log(list.sort());

// reverse
console.log(list.reverse());

// splice
// 从 index 为 1 的地方，删除 2 个元素，返回删除元素组成的 list，是一个新的 list
list = ['a', 'b', 'c', 'd', 'e'];
let tmp = list.splice(1, 2); 
console.log(list); // ['a', 'd', 'e']
console.log(tmp); // ['b', 'c']
// 从 index 为 1 的地方，删除 0 个元素，插入 ['x', 'y']
list.splice(1, 0, 'x', 'y');
console.log(list); // ['a', 'x', 'y', 'd', 'e']

// concat，连接，返回一个新的 list
tmp = [1, 2, 3];
console.log(list.concat(tmp));

// join
console.log(list.join('-')); // a-x-y-d-e