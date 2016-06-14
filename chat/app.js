var http=require("http");
var fs=require("fs");
var url=require("url")
var path=require("path")
var clientui=fs.readFileSync(path.join(__dirname,"clientui.html"));
var Emulation=fs.readFileSync(path.join(__dirname,"EventSourceEmulation.js"));

var clients=[];
setInterval(function(){
	clients.forEach(function(client){
		client.write("$")
	});
},20000);

var server=new http.Server();
server.on("request",function(req,res){
	var urlObj=url.parse(req.url);
	if(urlObj.pathname ==="/"){

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(clientui);
		res.write("<script>"+Emulation+"</script>")
		
		res.end();
		return ;
	}else if(urlObj.pathname === "/unload"){
		console.log("chenggong")

	}else if(urlObj.pathname !== "/chat"){
		res.writeHead(404);
		res.end();
		return ;
	}

	if(req.method === "POST"){
		req.setEncoding("utf-8");
		var body="";
		req.on("data",function(chunk){
			body+=chunk;
			console.log(body)

		})
		req.on("end",function(){
			res.writeHead(200);
			res.end();

			clients.forEach(function(client){
				client.write(body);
			})
		})
	}else{

		res.writeHead(200,{"Content-Type":"text/event-stream"});
		res.write("data:Contented\n\n");
		req.connection.on("end",function(){
			clients.splice(clients.indexOf(res),1);
			res.end();
		})
		clients.push(res)
	}

})
server.listen(3000)