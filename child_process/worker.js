var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
	var pathname = req.url;
	req.on('data',function(chunck){
		res.write(chunck);
	});
	req.on('end',function(){
		console.log('hello');
		res.end('fisnied'+querystring.parse(pathname));
	});
}).listen(3000,function(){

	console.log('running on port 3000!!');
});