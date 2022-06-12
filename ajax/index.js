/***
 * Asynchronous JavaScript and XML: 用JavaScript执行异步网络请求
 * AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。
 * 使用 AJAX 后，不需要刷新页面，就可以动态获取到数据
 */

function success(text){
  let textarea = document.getElementById('textarea');
  textarea.value = text;
}

function fail(code){
  var textarea = document.getElementById('textarea');
  textarea.value = 'Error: ' + code;
}

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  if(request.readyState === 4){
    if(request.status === 200){
      return success(request.responseText);
    }else{
      return fail(request.status);
    }
  }else{
    // http 请求还在继续
  }
}

request.open('GET', 'http://www.baidu.com');
request.send();

