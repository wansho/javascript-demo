/***
 * HTML 文档被浏览器解析后，就会生成一个 DOM 树，用 JavaScript 操作 DOM 进行 DOM 节点的增删改查
 * 常见的方法：
 * document.getElementById(id);
 * document.getElementsByTagName(tagName);
 * document.getElementsByClassName(className);
 * 
 */


/***
 * 注意，JavaScript 操作 DOM，要在 DOM 渲染完后，再执行
 */
window.onload=function(){
  // demos
  // 返回 id 为 test 的节点
  var test = document.getElementById('test');
  console.log(test)
  // 先定位 ID 为 test-table 的节点，再返回其内部所有 tr 节点
  document.getElementById('test-table').getElementsByTagName('tr');
  // 先定位 ID 为 test-dev 的节点，再返回其内部所有 class 包含 red 的节点
  document.getElementById('test-dev').getElementsByClassName('red');
  // 获取节点 test 下的所有直属子节点
  var cs = test.children;
  // 获取节点 test 下第一个，最后一个子节点
  var first = test.firstElementChild;
  var last = test.lastElementChild;

  // 更新 dom
  // 第一种方法，修改 innerHTML，innerHTML 会替换掉原来的所有子节点
  var p = document.getElementById('p-id');
  p.innerHTML = 'ABC';
  // 甚至可以直接嵌入一个 html 标签
  p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
  // 采用 innerHTML 会产生注入攻击，因此不建议使用
  // 第二种方法，采用 innerText 或 textContent，两者都会对字符串进行 HTML 编码，保证无法设置任何 HTML 标签。
  p.innerText = '<script>alert("Hi")</script>';

  // 修改 css，DOM 节点的 style 属性对应所有的 css 属性，可以直接获取或设置
  var tmp = document.getElementById('test');
  tmp.style.color = 'red';
  tmp.style.fontSize = '20px';

  // 插入 DOM，innerHTML 会替换掉原来所有的子节点，所以要用其他的方法插入新节点
  var js = document.getElementById('js');
  var list = document.getElementById('list');
  list.appendChild(js); // 把 js 这个节点摘下来，放到 list 节点的最后面
  // 创建一个新节点，再插入
  var haskell = document.createElement('p');
  haskell.innerHTML = 'Haskell';
  haskell.id = 'haskell';
  list.appendChild(haskell);
  // 动态创建一个 <> 节点，添加到 <head> 节点的末尾，这样就动态地给文档添加了新的 css 定义
  var d = document.createElement('style');
  d.setAttribute('type', 'text/css');
  d.innerHTML = 'p {color:red}';
  document.getElementsByTagName('head')[0].appendChild(d);
  // insertBefore 在指定节点前插入新节点，在 Python 节点之前，插入 haskell 节点
  var python = document.getElementById('python');
  list.insertBefore(haskell, python);

  // 删除节点
  // 获取到节点的父节点，然后调用 removeChild 方法删除节点
  var self = document.getElementById('java');
  var parent = self.parentElement;
  var removed = parent.removeChild(self);
  removed === self;
}