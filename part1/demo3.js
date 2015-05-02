/**
 * 注意fs.readFile方法的使用规则
 * 使用function(err,data)回调结果
 */
var fs = require('fs');
var http = require('http');
var path = require('path');

function getFileData(file,callback){
	fs.readFile(path.join(__dirname,file),{encoding:'utf-8'},function(err,data){
		if (err) throw err;
		callback(data);
	});
}
function returnData(file,callback){
	getFileData(file,function(data){
		setTimeout(function(){
			callback(data);
		},1000);
	});
}

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	returnData("index.conf",function(data){
		res.end(data);
	});
}).listen("4000","127.0.0.1");
