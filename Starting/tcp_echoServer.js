var net = require('net');

var server =  net.createServer(function(socket){
		socket.write('Hello\n');
		socket.write('ECHO Server\n');
		socket.on('data',function(data){
			socket.write(data);		
		});	
	});

server.listen(8000);
