var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/test")
var db=mongoose.connection;
db.on("err",function(){
    console.log("connection-error")
});
db.once("open",function(){
    var KittySchema=mongoose.Schema({
        name:String
    })
    KittySchema.methods={
        speak:function(){
            var greeting=this.name?"Meow name is "+this.name:"I dont have a name"
            console.log(greeting)
        }

    }
    var Kitten=mongoose.model("Kitten",KittySchema)
    var silence=new Kitten({name:"s1"})
    var silence1=new Kitten({name:"s2"})
    silence.save(function(err,silence){
        if(err){
            console.error(err)
        }else{
            console.log(silence)
            silence.speak();
        }
    })
    silence1.save(function(err,silence){
        if(err){
            console.error(err)
        }else{
            console.log(silence)
            silence.speak();
        }
    })
    Kitten.find({name:"s1"},function(err,kittens){
        if(err){
            console.error(err)
        }else{
            console.log(kittens)
        }
    })
})
/*
var Cat=mongoose.model("Cat",{name:String})
var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
});*/
