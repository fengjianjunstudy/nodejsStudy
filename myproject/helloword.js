var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("hello world");
})
app.listen("8000",function(){
console.log("hello world is listening port 8000") 
})