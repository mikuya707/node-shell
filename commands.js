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