var bin = new Buffer([0x68]);
var str = bin.toString();
console.log(str);
var s = 'hello';
console.log(new Buffer(s,'utf-8'));