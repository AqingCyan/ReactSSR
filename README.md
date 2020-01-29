# 如何构建React SSR呢？

![](https://img.shields.io/badge/language-React-blue.svg)
![](https://img.shields.io/badge/license-MIT-blueviolet.svg)
![](https://img.shields.io/badge/platform-chrome|firefox-orange.svg)

这是一个从零开始一步一步构建 React SSR 的学习笔记。基于：Express、React、React Router、Redux 等。

React 的功能就是把数据转化成用户界面，看到这个公式：

```js
UI = f(data)
```

既然对 React 而言，“吃”进去的是 data，“吐”出来的是 UI，那么，这个转化过程在浏览器端可以做，当然在服务器端也可以做，不同的是浏览端的效果是直接操作 DOM，服务器端没有 DOM 可言，所以是直接吐出 HTML 字符串。

## SSR 的意义

最近几年浏览器端框架很繁荣，以至于很多新入行的开发者只知道浏览器端渲染框架，都不知道存在服务器端渲染这回事，其实，网站应用最初全都是服务器端渲染，由服务器端用 PHP、Java 或者 Python 等其他语言产生 HTML 来给浏览器端解析。

相比于浏览器端渲染，服务器端渲染的好处是：

如果完全依赖于浏览器端渲染，那么服务器端返回的 HTML 就是一个空荡荡的框架和对 JavaScript 的应用，然后浏览器下载 JavaScript，再根据 JavaScript 中的 AJAX 调用获取服务器端数据，再渲染出 DOM 来填充网页内容，总共需要三个 HTTP 或 HTTPS 请求。

如果使用服务器端渲染，第一个 HTTP/HTTPS 请求返回的 HTML 里就包含可以渲染的内容了，这样用户第一时间就会感觉到“有东西画出来了”，这样的感知性能更好。

大部分网站都希望自己能够出现在搜索引擎的搜索页前列，这个前提就是网页内容要能够被搜索引擎的爬虫正确抓取到。虽然 Google 这样的搜索引擎已经可以检索浏览器端渲染的网页，但毕竟不是全部搜索引擎都能做到，如果搜索引擎的爬虫只能拿到服务器端渲染的内容，完全浏览器端渲染就行不通了。

即使对于 Google，网页性能也是搜索排名的重要指标，如果通过服务器端渲染提高网页性能，网页的排名更可能靠前。

## 适合阅读

如果你想了解 SSR，那么你需要具有 React 开发的能力，能基于 React 实现大部分页面。此外你还需要具有 node 开发 web服务端的经验。

## 参考

[React服务器渲染原理解析与实践](https://coding.imooc.com/class/276.html)

[React实战：设计模式与最佳实践](https://juejin.im/book/5ba42844f265da0a8a6aa5e9)
