var url = require('url');
var http = require('http');

http.createServer(function(req,res){
	//var tmp = req.url;
	console.log(url.parse(req.url));
	console.log('Hello World!!ss');
	res.end('hello');
}).listen(3000);

//console.log(url.parse('http://nqdeng.github.io/7-days-nodejs/#4.2.1'));