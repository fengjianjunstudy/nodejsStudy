var net =require("net");
var count=0;
var clientList = [];
var server=net.createServer(function(connection){ //这个回调函数在有新的连接建立时被执行
	connection.write("welcome to "+count+"  please write your name and press enter:")
	count++;
	clientList.push(connection);
	console.log(clientList);
	console.log("\033[90m  new connection!   \033[39m");
	connection.on("data",function(data){
		for(var i=0;i<clientList.length;i++){
			if(connection !== clientList[i]){
				clientList[i].write(data.toString());
			}
		}
	});
});
server.listen(3000,function(){ // listen 将服务器绑定在某个端口上
	console.log("\033[96m  server listening on   \033[39m")
})