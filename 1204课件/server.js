var http = require("http");
var i = 0;

//createServer这个方法创建了一个web服务器，里面有一个回调函数
//每次请求这个web服务器都会执行了里面代码，回调函数有两个参数，请求、响应
var server = http.createServer(function(req,res){
	//信号量增加
	i++;
	//范围
	if( i === 9){
		throw new Error("服务器受不了~");
	}
	
	console.log("游客来了~");
	res.end("hello node");
})

server.listen(8080);  //端口设置
console.log("server runing");
