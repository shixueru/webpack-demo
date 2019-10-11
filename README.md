* npm init
* npm i rollup-plugin-node-resolve 
* npm i rollup-plugin-babel 
* npm i babel-plugin-external-helpers 
* npm i babel-preset-latest
* 配置 .babelrc
* 配置 rollup.config.js
* rollup功能单一，webpack功能强大



### 1.单线程
* 只有一个线程，只能做一件事
* 原因；避免DOM渲染的冲突
* 解决方案 - 异步


### 2.event-loop
* 时间轮询，js实现异步的具体解决方案
* 同步代码，直接执行
* 异步函数先放在异步队列中
* 待同步函数执行完毕，轮询执行异步队列的函数



### 3.vdom (用js模拟dom结构)
* 使用snabbdom核心函数如下：
* h('<标签名>', {...属性...}, [...子元素...])
* h('<标签名>', {...属性...}, '...') //生产vnode节点
* patch(container, vnode)
* patch(vnode, newVnode) // 渲染vnode节点


### 4.vdom使用Diff算法
* patch(container, vnode)
* patch(vnode, newVnode)



### 5.hybrid - 客户端和前端的混合开发
file协议：本地文件 快
https协议： 网络加载 慢
webview
优点：
体验更好，跟native体验基本一致；
可快速迭代，无需app审核
缺点：
开发成本高，联调、测试、查bug比较麻烦；
运维成本高；
适用场景：
hybrid：产品稳定功能，体验要求高，迭代频繁，适合产品型
h5:适合运营型



### 6.js和客户端通讯 - schema协议
通讯的基本形式：调用能力，传递参数，监听回调；


### 7.项目做过哪些性能优化？
减少 HTTP 请求数
减少 DNS 查询
使用 CDN
避免重定向
图片懒加载
减少 DOM 元素数量
减少 DOM 操作
使用外部 JavaScript 和 CSS
压缩 JavaScript 、 CSS 、字体、图片等
优化 CSS Sprite
使用 iconfont
字体裁剪
多域名分发划分内容到不同域名
尽量减少 iframe 使用
避免图片 src 为空
把样式表放在 中
把脚本放在页面底部


### 8.Vue 双向绑定实现原理？
通过 Object.defineProperty 实现的

### 9.深拷贝，防抖节流，compose 函数，apply，bind，call 

### 10.JavaScript ES6箭头函数
箭头函数不能被直接命名，不过允许它们赋值给一个变量；
箭头函数不能用做构造函数，你不能对箭头函数使用new关键字；
箭头函数也没有prototype属性；
箭头函数绑定了词法作用域，不会修改this的指向；
在箭头函数的函数体内使用的this,arguments,super等都指向包含箭头函数的上下文，箭头函数本身不产生新的上下文；
箭头函数的作用域也不能通过.call,.apply,.bind等语法来改变，这使得箭头函数的上下文将永久不变









