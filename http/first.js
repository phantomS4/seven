var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text-plain'});

	req.on('data',function(chuck){
		console.log(chuck.toString());
		res.write(chuck.toString());
	});
	res.writeHead(200,{'Content-Type':'text-plain'});
	req.on('end',function(){
		res.end('Hello world\n')
	});
}).listen(3000,function(){
	console.log("server is running on port 3000!");
});