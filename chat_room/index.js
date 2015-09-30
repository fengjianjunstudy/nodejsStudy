var net =require("net");
var count=0;
var server=net.createServer(function(connection){ //这个回调函数在有新的连接建立时被执行
	console.log()
	connection.write("welcome to "+count+"  please write your name and press enter:")
	count++;
	console.log("\033[90m  new connection!   \033[39m")
});
server.listen(3000,function(){ // listen 将服务器绑定在某个端口上
	console.log("\033[96m  server listening on   \033[39m")
})