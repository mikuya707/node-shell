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
		fs.readFile(arguments[0], 'utf8', function(err, data){
			if(err) throw err;
			data = data.match(/(.*)/g);

			//data = data.;
			for(var i = 0; i < Math.min(10, data.length/2); i++){
				process.stdout.write(data[i*2]+'\n');
			}
			//process.stdout.write();
			process.stdout.write("\nprompt >");
		});
	}	
}

module.exports.tail = function(){
	if(arguments[0]){
		fs.readFile(arguments[0], 'utf8', function(err, data){
			if(err) throw err;
			data = data.match(/(.*)/g);

			//data = data.;
			for(var i = Math.max(0, data.length/2 - 10); i < data.length/2; i++){
				process.stdout.write(data[i*2] +'\n');
			}
			//process.stdout.write();
			process.stdout.write("\nprompt >");
		});
	}	
}

module.exports.wc = function(){
	if(arguments[0]){
		fs.readFile(arguments[0], 'utf8', function(err, data){
			if(err) throw err;
			data = data.match(/(.*)/g);

			//data = data.;
			// for(var i = Math.max(0, data.length/2 - 10); i < data.length/2; i++){
			// 	process.stdout.write(data[i*2] +'\n');
			// }
			process.stdout.write((data.length/2).toString());
			process.stdout.write("\nprompt >");
		});
	}	
}