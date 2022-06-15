function test(resolve, reject){
  var timeout = Math.random() * 2;
  log('set timeout to:' + timeout + ' seconds');
  setTimeout(function(){
    if(timeout < 1){
      log('call resolve');
      resolve('200 ok')
    }else{
      log('call reject');
      reject('timeout in ' + timeout + ' seconds');
    }
  }, timeout * 1000);
}

var p1 = new Promise(test);
// 传入 resolve 函数
var p2 = p1.then(function(result){
  console.log('成功: ' + result);
});
// 传入 reject 函数
var p3 = p2.catch(function(reason){
  console.log('失败: ' + reason);
})

var logging = document.getElementById('test-promise-log');
while(logging.children.length > 1){
  logging.removeChild(logging.children[logging.children.length - 1]);
}

function log(s){
  var p = document.createElement('p');
  p.innerHTML = s;
  logging.appendChild(p);
}
