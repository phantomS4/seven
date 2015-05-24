var arr = ['blue','red'];

(function(i,len,count,callback){
	for(;i < len; i++)
	{
	(function(i){
		setTimeout(function(){
			console.log(arr[i]);
			if(i===len-1){
				callback();

			}
		},1000);
	})(i);
}
})(0,arr.length,0,function(){
	console.log('finished!!');
});