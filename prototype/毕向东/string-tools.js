/***
 * 给 String 添加新方法 trim
 * 
 */

String.prototype.trim = function(){
  var from, to;
  for(let i=0; i<this.length; i++){
    let chr = this[i];
    if(chr === ' '){
      continue;
    }
    from = i;
    break;
  }
  for(let i=this.length-1; i>=0; i--){
    let chr = this[i];
    if(chr === ' '){
      continue;
    }
    to = i + 1;
    break;
  }
  return this.substring(from, to);
}

var demo = '  nihao  ';
document.write(demo.trim());
