var fs=require("fs");
console.log(new Date())
var stream=fs.createReadStream("Wildlife.wmv");
stream.on("data",function(chunk){
	console.log(new Date())
	console.log(chunk) 
})
stream.on("end",function(chunk){ 
	console.log(new Date()+"end");
	console.log(chunk)
})