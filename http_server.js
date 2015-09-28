var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>hello world</h1>") 
	res.end("<p>end</p>")
}).listen(3000)