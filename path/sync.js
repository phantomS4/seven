var fs = require('fs');
var path = require('path');


function travel(dir,callback,finish)
{
	fs.readdir(dir,function(err,files){
		(function next(i){
			if(i<files.length)
			{
				var pathname = path.join(dir,files[i]);

				fs.stat(pathname,function(err,stats){
					if(stats.isDirectory()){
						travel(pathname,callback,function(){
							console.log("---------------------");
							next(i+1);
						});
					}
					else
					{
						callback(pathname,function(){
							//console.log("##################");
							next(i+1);
						});
					}
				});
			}
			else
			{
				finish&&finish();
			}
		}(0));
	});
}
function show(pathname,callback)
{
	console.log(pathname);
	callback();
}
function fin(){
	console.log("####################");
}
travel('../',show,fin);