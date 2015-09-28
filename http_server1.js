var http=require("http");
var server=new http.Server()
server.on("request",function(req,res){ 
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>hello world</h1>") 
	res.end("<p>end</p>")
})
server.listen(3001)