var parseDns = require('./parse_dns');
var Index = require('./go_index');
exports.router = function(req,res,pathname){
	switch(pathname){
		case "/parse":
			parseDns.parseDns(req,res);
			break;
		default:
			Index.goIndex(req,res);
	}
}
