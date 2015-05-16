var http = require("http"),
	url = require("url");
var router = require("./router");
http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	//url.parse:将字符串解析为url对象
	req.setEncoding("utf8");
	res.writeHead(200,{'Content-Type':'text/html'});
	router.router(req,res,pathname);
}).listen(3000,"127.0.0.1");
