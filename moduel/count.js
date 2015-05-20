var i = 0;
function count()
{
	var j = 1;
	this.v = j++;
}
count.prototype.getValue=function(){
	return this.v;
}
// var p = new count();
// console.log(p.getValue());
exports.count=count;