// module.exports={
// 	name:"xiaohua",
// 	age:18,
// 	getAge:function(){
// 		console.log(this.age)
// 	}
// }
module.exports=Person;
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype={
	constractor:"Person",
	getName:function(){
		console.log(this.name);
	},
	getAge:function(){
		console.log(this.age)
	}
}