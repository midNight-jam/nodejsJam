var http = require('http');

var server  =http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.write('Hello from Server!!!\n');
	
	setInterval(function(){
		res.end('world!!!\n');		
	},2000);

});

server.listen(8000);
