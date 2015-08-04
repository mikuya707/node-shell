var commands=require('./commands.js');
var commandDirectory={
	cwd: commands.pwd,
	pwd: commands.pwd,
	date: commands.date,
	ls: commands.ls,
	echo: commands.echo,
	cat: commands.cat,
	head: commands.head,
	tail: commands.tail,
	wc: commands.wc
}
//Output a prompt

process.stdout.write('prompt >');
//var time = new date(UTC);
//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data){
	//data=process.argv[2];
	var cmd = data.toString().trim().split(" ");
	var args = cmd.slice(1);
	if(commandDirectory.hasOwnProperty(cmd[0])){
		commandDirectory[cmd[0]].apply(this, args);
	}else{
		process.stdout.write("You typed: " + cmd);
		process.stdout.write("\nprompt >");
	}
})