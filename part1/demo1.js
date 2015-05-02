var http = require('http');
function output(requset,response){
	response.writeHead(200,{"Content-type":"text/plain"});
	/*response.write("you are so good");
	response.end();*/
	response.end("you are so good");
}
http.createServer(output).listen("2000","127.0.0.1");