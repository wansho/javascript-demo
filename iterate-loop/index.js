/***
 * 1. 为什么引入 for ... of
 * 遍历 Array 可以采用下标循环，遍历 Map 和 Set 就无法使用下标。为了统一集合类型，ES6 标准引入了新的 iterable 类型，Array、Map 和 Set 都属于 iterable 类型。
 * 具有 iterable 类型的集合可以通过新的 for ... of 循环来遍历。
 * 注意：object 对象不是 iterable 类型，不能使用 for ... of 循环。
 */

let list = [1, 2, 3, 4, 5];
let set = new Set(list);
let obj = {a: 1, b: 2, c: 3};

// 无限循环
for(;;){
    let i = list.indexOf(4);
    if(i === -1){
        break;
    }
    list.splice(i, 1);
    console.log(list);
}

// for ... in 把一个对象的所有属性依次循环出来
for(let key in obj){
  console.log(key + ': ' + obj[key]);
}
// array 也是对象，其属性是数组的索引
for(let i in list){
  console.log(typeof i); // 得到的属性值，是 String 类型，这个很坑！！！
  console.log(i + ': ' + list[i]);
}

// for of 
let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let item of map) {
  // item 是一个 array，item[0] 是 key，item[1] 是 value
  console.log(item[0] + ': ' + item[1]);
}

// forEach iterable 类型的对象，都可以 forEach 遍历
map.forEach((value, key, map) => { console.log(key + ': ' + value); });
list.forEach((value, index, list) => { console.log(index + ': ' + value); });
set.forEach((value, sameValue, set) => { console.log(value); });
