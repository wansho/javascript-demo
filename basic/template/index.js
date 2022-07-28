const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// replace 只替换第一个匹配项！

// replaceAll 可以替换所有匹配项，但是 IE 不兼容！
// 兼容 IE11
var operatorRegex = /[\+\-\(\)\*/]|(abs\(.+\))/ig;
var expression = 'e+f+g+abs(c)+abs(d)';
var absRegex = /abs\([a-z]\)/g;
var absPlaceholder = '!!!';
var absList = expression.match(absRegex)
expression = expression.split(absRegex).join(absPlaceholder);
var operatorList = ['+', '-', '*', '/', '(', ')']
for(var i=0; i<operatorList.length; i++){
  var operator = operatorList[i];
  expression = expression.split(operator).join(' ' + operator + ' ');
}
for(var j=0; j<absList.length; j++){
  expression = expression.replace(absPlaceholder, absList[j]);
}
expression = expression.trim()
console.log(expression)