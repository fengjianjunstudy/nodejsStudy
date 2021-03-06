/****
	module dependencies
*/
var fs=require("fs");
var stdin=process.stdin,
	stdout=process.stdout;
var path=process.cwd();

fs.readdir(path,function(err,files){ 
	console.log(" ");
	if(!files.length){ 
		return console.log(' \033[31m No files to show!\033[39m\n');
	}
	var stats=[];
	function file(i){
		var filename=files[i];
		fs.stat(__dirname+"/"+filename,function(err,stat){
			stats[i]=stat;
			if(stat.isDirectory()){ 
				console.log(' ' + i + ' \033[36m' + filename + '/\033[39m');
			}else{ 
				console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
			} 
			i++;
			if(i===files.length){ 
				read();
			}else{ 
				file(i)
			}
		})
	}
	function read(){ 
		console.log(" ");
		stdout.write(' \033[33mEnter your choice : \033[39m');
		stdin.resume();
		stdin.setEncoding("utf-8");
		stdin.on("data",option);
	}
	function option(data){ 
		var filename=files[Number(data)];
		if(!filename){ 
			stdout.write(' \033[mEnter your choice : \033[39m');
			//stdin.resume();
		}else if(stats[Number(data)].isDirectory()){ 
			fs.readdir(__dirname+"/"+filename,function(err,files){
				console.log(" ");
				console.log("files_length"+files.length);
				files.forEach(function(file){
					console.log(" - "+file)
				});
				console.log(" ")

			})
		}else{ 
			fs.readFile(__dirname+"/"+filename,"utf-8",function(err,data){ 
				console.log(" ");
				console.log('\033[90m' + data.replace(/(.*) /g, ' $1') + '\033[39m');
			})
		}
	}
	function readfile(err,data){ 
		console.log(" ")
		console.log(data.replace(/(.*)/g," $1"))
	}
	file(0);
})