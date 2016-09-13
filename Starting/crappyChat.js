net = require('net');
sockets = [];
var server = net.createServer(function(socket){
	sockets.push(socket);
	socket.on('data',function(data){
		for(var i=0;i<sockets.length;i++){
		 if(sockets[i]===socket) continue;			
		 sockets[i].write(data);		
		}
	});
	socket.on('end',function(){
    	  sockets.delete(socket);	
	});

});

server.listen(8000);
