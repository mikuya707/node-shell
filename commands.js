var fs = require('fs');
module.exports.pwd = function(){
	process.stdout.write(process.cwd());
	process.stdout.write("\nprompt >");
}

module.exports.date = function(){
	process.stdout.write(Date());
	process.stdout.write("\nprompt >");
}

module.exports.ls = function(){
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  files.forEach(function(file) {
	    process.stdout.write(file.toString() + "\n");
	  })
	  process.stdout.write("\nprompt >");
	});
}

module.exports.echo = function(){
	if(arguments[0]) process.stdout.write(arguments[0]);
	process.stdout.write("\nprompt >");
}

module.exports.cat = function(){
	if(arguments[0]){
		fs.readFile(arguments[0], String, function(err, data){
			if(err) throw err;
			process.stdout.write(data);
			process.stdout.write("\nprompt >");
		});
	}	
}

module.exports.head = function(){
	if(arguments[0]){
		fs.readFile(arguments[0], String, function(err, data){
			if(err) throw err;
			
			data=data.match(/^(.*\n{10}).*/);
			//process.stdout.write(data);
			process.stdout.write("\nprompt >");
		});
	}	
}