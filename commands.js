var fs = require('fs');
var request = require('request');
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
			var dataArr = data.match(/(.*\n)/g);
			//console.log(data.match(/(.*)$/));
			dataArr.push(data.match(/\n(.*)$/)[1]);

			//data = data.;
			for(var i = 0; i < Math.min(10, dataArr.length); i++){
				process.stdout.write(dataArr[i]);
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
			var dataArr = data.match(/(.*\n)/g);
			//console.log(data.match(/(.*)$/));
			dataArr.push(data.match(/\n(.*)$/)[1]);

			//data = data.;
			for(var i = Math.max(0, dataArr.length - 10); i < dataArr.length; i++){
				process.stdout.write(dataArr[i]);
			}
			//process.stdout.write();
			process.stdout.write("\n\nprompt >");
		});
	}	
}

module.exports.wc = function(){
	if(arguments[0]){
		fs.readFile(arguments[0], 'utf8', function(err, data){
			if(err) throw err;
			data = data.match(/(.*\n)/g);

			//data = data.;
			// for(var i = Math.max(0, data.length/2 - 10); i < data.length/2; i++){
			// 	process.stdout.write(data[i*2] +'\n');
			// }
			process.stdout.write((data.length+1).toString());
			process.stdout.write("\nprompt >");
		});
	}	
}

module.exports.curl = function(){
	if(arguments[0]){
		request(arguments[0], function(error,response,body){
			if(!error && response.statusCode === 200){
				console.log(body);
			}
			process.stdout.write("\nprompt >");
		});
	}
}