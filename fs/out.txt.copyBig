var fs = require('fs');

function copySmall(src,dst)
{
	fs.writeFileSync(dst,fs.readFileSync(src));
}
function copyBig(src,dst)
{
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function stat(src)
{
	fs.stat(src,function(err,stats){
		if(err) throw err;

		console.log("stats:"+stats);
		console.log("##################");
		console.log("stats"+JSON.stringify(stats));
	});
}
function main(argv)
{
	copySmall(argv[0],argv[1]);
	copyBig(argv[0],argv[1]+".copyBig");
	stat(argv[0]);
}


main(process.argv.slice(2));