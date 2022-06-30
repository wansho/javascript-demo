// let operatorRegex = /[\+\-]/;
// var test = 'a + b * 1 + c * 3';
// var result = test.split(operatorRegex);
// console.log(result);

var expression = '(a+b)*3+abs((c+d)/2)*1.2';
var operatorRegex2 = /[\+\-\(\)\*/]|(abs\(.+\))/ig;
function encloseWithSpace(match) {
  console.log('match', match);
  return ' ' + match + ' ';
}
expression = expression.replaceAll(operatorRegex2, encloseWithSpace);
expression = expression.trim();
console.log(expression);

var test = '     abc     ';
console.log(test.trim());
console.log(test.startsWith(' '))

// 提取子串
var execRegex = /abs\(([a-z])\)/;
console.log(execRegex.exec('abs(c)')[1]);

var abcRegex = /[a-z]/ig;
console.log(abcRegex.test('abcd'));

console.log(Number(1.1))
