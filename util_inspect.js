var util=require("util");
function Person(name,age){ 
	this.name=name;
	this.age=age;
	this.sayName=function(){ 
		console.log(this.name)
	}
}
Person.prototype.toString=function(){ 
	console.log("string");
}
var p=new Person("xiaoming",18);
console.log(util.inspect(p))
console.log(util.inspect(p,true))
