##Part1###
---

###1. Node.js特点###

Java，PHP等对每个HTTP请求产生一个线程，假设每个线程需要2MB内存消耗，那么8GB的服务器，只能同时承受4000个并发请求，从而导致服务器开销大。

而Node.js使用的是事件驱动机制，即一个HTTP对应在Node.js进程引擎中运行的事件，并非创建新的线程，可以节约服务器资源。

###2. Node.js适用情况###

Node.js的特长在于处理高并发请求。因此，在线游戏，实时聊天等开发过程中使用Node.js再好不过。

###3. 异步编程###

同步和异步

Node.js本身并非异步，其异步特征来源于使用异步函数（如setTimeout，readFile...），asyc.js和sycn.js相互对比，很好地体现了这个概念。

Node.js通过回调函数处理异步函数的执行结果，回调是一种阻塞式应用，与异步没有绝对的关联。

###4. 本章实践###

1. http://127.0.0.1:2000， 输出'you are so good'
2. http://127.0.0.1:3000， 显示一个任意的html页面数据
3. 编写returnData, getFileData方法，并调用fs.readFile方法，实现利用returnData调用getFileData，在getFileData中停留一秒后，打印出index.conf中的二进制数据
