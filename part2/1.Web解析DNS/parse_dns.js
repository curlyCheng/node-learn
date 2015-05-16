var querystring = require('querystring');
var dns = require('dns');
exports.parseDns = function(req,res){
	var postData = "";
	req.addListener('data',function(postDataChunk){
		postData += postDataChunk;
	});
	req.addListener('end',function(){
		var retData = getDns(postData,function(domain,addresses){
			res.end("<html><head><meta charset='utf-8'></head><body><div style='text-align:center'>Domain:"+domain+"<br>IP:"+addresses.join(',')+"</div></body></html>");
		});
	});

	function getDns(postData,callback){
		var domain = querystring.parse(postData).dns;
		//querystring.parse:将字符串转化为对象
		dns.resolve(domain,function(err,addresses){
			if(!addresses){
				addresses = ['不存在域名'];
			}
			callback(domain,addresses);
		});
		//dns.resolve:将域名(比如'google.com')按照参数rrtype所指定类型的解析结果放到一个数组中,回调函数接受两个参数：(err, addresses)
	}
}
