###Web解析DNS###

模块化：
1.main.js入口模块，创建http服务器，加载router模块
2.router.js路由处理模块，担任控制器的角色，依照客户端请求的数据分配处理行为，加载parse_dns模块和go_index模块
3.parse_dns.js域名解析模块
4.go_index.js首页展示模块，读取index.html页面字符数据，然后返回到客户端

> 关于querystring模块参考[node.js querystring类介绍](https://cnodejs.org/topic/549cd1598ade094b67f3fcb1)
> 关于url模块参考[url.parse方法说明](http://www.jb51.net/article/58354.htm)
