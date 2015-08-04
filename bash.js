//Output a prompt
process.stdout.write('prompt >');
//var time = new date(UTC);
//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data){
	var cmd = data.toString().trim();
	if(cmd == 'pwd'){
		process.stdout.write(process.cwd());
	} else if (cmd == 'date'){
		console.log(Date());
	}
	else{
		process.stdout.write("You typed: " + cmd);
		process.stdout.write('\nprompt > ');
	}
})