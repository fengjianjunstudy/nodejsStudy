/****
	module dependencies
*/
var fs=require("fs");
//console.log(fs.readdirSync("."))
function async(err,files){ 
	console.log(files)
}
fs.readdir(".",async)