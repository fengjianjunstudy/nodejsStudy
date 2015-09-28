var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();

function fn1(arg1,arg2){
	console.log("someE",arg1,arg2); 
}
emitter.on("someE",fn1)
emitter.on("someE",function(arg1,arg2){
	console.log("someE1",arg1,arg2); 
})
emitter.once("someE",function(arg1,arg2){
	console.log("someE1",arg1,arg2); 
})

emitter.emit("someE","xiaoming","hello world")
emitter.removeListener("someE",fn1)
emitter.emit("someE","xiaohua","hello world")

