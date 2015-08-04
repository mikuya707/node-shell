var commands=require('./commands.js');
var commandDirectory={
	cwd: commands.pwd,
	pwd: commands.pwd,
	date: commands.date,
	ls: commands.ls
}
//Output a prompt
process.stdout.write('prompt >');
//var time = new date(UTC);
//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data){
	//data=process.argv[2];
	var cmd = data.toString().trim();
	if(commandDirectory.hasOwnProperty(cmd)){
		commandDirectory[cmd]();
	}else{
		process.stdout.write("You typed: " + cmd);
		process.stdout.write("\nprompt >");
	}
})