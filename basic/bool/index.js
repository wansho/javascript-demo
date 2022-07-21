// JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true。

if(null){
  console.log(true);
}else{
  console.log(false);
}

if(undefined){
  console.log(true);
}else{
  console.log(false);
}

if(0){
  console.log(true);
}else{
  console.log(false);
}

if(NaN){
  console.log(true);
}else{
  console.log(false);
}

if(''){
  console.log(true);
}else{
  console.log(false);
}

if([]){
  console.log(true);
}else{
  console.log(false);
}

// || &&
var a = 1;
console.log(
  (a > 0 || a === 2) && 4
) // 4 前面满足条件，则最后直接返回值