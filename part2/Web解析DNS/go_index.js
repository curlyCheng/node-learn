var url = require('url');
var fs = require('fs');
exports.goIndex = function(req,res){
	var path = __dirname + '/' +url.parse('index.html').pathname;
	//__dirname:go_index.js所在目录
	//url.parse:将字符串解析为url对象
	var page = fs.readFileSync(path);
	res.end(page);
};
