// 浏览器提供的对象

// window 全局作用域（所有对象都在 window 内），也是浏览器窗口对象
console.log(window);
var abc = 1;
console.log(window.abc); // 1
console.log(window.innerWidth);
console.log(window.innerHeight);

// location url 信息
console.log(location);
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname)

// navigator 浏览器的元信息
console.log(navigator);
console.log(navigator.appName); // Netscape
console.log(navigator.language); // zh-CN
console.log(navigator.platform); // MacIntel
console.log(navigator.userAgent);

// screen 屏幕信息
console.log(screen);
console.log(screen.width); // 屏幕宽度 1512，以像素为单位
console.log(screen.height); // 982

// document DOM树的根节点
console.log(document);
console.log(document.title);
console.log(document.cookie);

// history 历史记录，history 已弃用