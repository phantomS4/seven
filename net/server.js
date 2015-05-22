var net = require('net');

net.createServer(function(conn){
	conn.on('data',function(chuck){
		        conn.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            '',
            'Hello World'
        ].join('\n'));
		        console.log(chuck.toString());
    });
}).listen(3000);