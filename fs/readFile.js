var fs = require('fs');

function read(dst)
{
	fs.readFile(dst,function(err,data){
		if(err) throw err;

		console.log(data.toString());
	});
}

function main(argv)
{
	read(argv[0]);
}

main(process.argv.slice(2));
