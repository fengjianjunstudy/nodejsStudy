var fs=require("fs");
var path=process.cwd();
fs.readdir(path,function(err,files){ 
	files.forEach(function(file){ 
		if(/\.js/.test(file)){ 
			fs.watchFile(path+"/"+file,function(){ 
				console.log(" - "+file+" changed")
			})
		}
	});
})