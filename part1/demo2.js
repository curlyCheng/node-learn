var http = require('http');
function showHtml(request,response){
	response.writeHead(200,{"Content-type":"text/html"});
	response.write('<html><head><title>Node.js Test</title></head><body><div style="text-align:center">Nice to meet you ,Node!</div></body></html>');
	response.end();
}
http.createServer(showHtml).listen("3000","127.0.0.1");
