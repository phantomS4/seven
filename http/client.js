var http = require('http');
var options ={
	hostname:'localhost',
	port:3000,
	path:'/upload',
	method:'POST',
	headers:{
		'Content-Type':'text/plain'
	}
};

var request = http.request(options,function(res){
		console.log(res.statusCode);
		res.on('data',function(chuck){
			console.log(chuck.toString());
		});
		res.on('end',function(){
			
		});
	});

	request.write('Hello World!!');
	request.end();