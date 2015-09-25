var http=require("http");
http.createServer(function(){ 
	throw new Error("cuowu")
}).listen(3000);
