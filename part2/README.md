###part2###
---

###1.使用nodejs实现web版DNS解析###

###2.module.exports和exports###
总的来说，module.exports是帮中老大，exports是小弟。老大没出现，小弟说的属性方法代表老大。但是老大一发话，小弟说的就什么都不算

###3.Express初识###
輕量级Web框架
> 注意cd XXX & npm install 调入依赖库
> 以及在4.x版本，运行项目需在项目根目录下npm start,或调用端口配置文件./bin/www

目录结构：
- -bin
	-www 服务器端口配置文件
- -node_modules
	存放所有的项目依赖库。(例如jade,express,morgan等等)
- -public
	存放静态文件
	-images
	-javascripts
	-stylesheets
- -routes
	路由文件
- -views
	页面文件jade模板
- app.js
	入口文件
- package.json
	项目依赖配置及开发者信息
> 参考自[Nodejs开发框架Express3.0开发手记](http://blog.fens.me/nodejs-express3/)
