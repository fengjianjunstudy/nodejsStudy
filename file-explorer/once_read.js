var fs=require("fs");
console.log(new Date())
fs.readFile("Wildlife.wmv",function(err,data){ 
	console.log(new Date());
	console.log(data)
})