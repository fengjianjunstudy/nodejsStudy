// var fs=require("fs");
// fs.readFile("/etc/passwd",function(err,data){
// 	if(err){ 
// 		return console.log(err)
// 	}
// 	console.log(data)
// })

// function c(){ 
// 	b();
// }
// function b(){
// 	a();
// }
// function a(){
// 	throw new Error("err")
// }
// c();


// function c(){ 
// 	b();
// }
// function b(){
// 	a();
// }
// function a(){
// 	setTimeout(function(){
// 		throw new Error("err");
// 	},1000)
// }
// c();

// console.log(process.title)
console.log(1)
process.nextTick(function(){
	console.log(3)
});
console.log(2)