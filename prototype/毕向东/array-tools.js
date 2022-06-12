/**
 * 给 Array 增加新方法
 * 在 Array 的原型上加方法，这样 array 的所有对象都能用到这个方法
 */
Array.prototype.getMax = function() {
  var max = this[0];
  for(var x=1; x<this.length; x++){
    if(this[x] > max){
      max = this[x];
    }
  }
  return max;
}

var demo = [1,2,3,4,5];
console.log('demo', demo);
/**
 * document 
 */
document.write(demo.getMax());