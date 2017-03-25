const http = require('http');	// using http module
// creating the http server
const fs = require('fs');
const server = http.createServer((request, response) => {
	response.writeHead(200,{'Content-Type':'text/plain'});
	// all the i/o in node is async thus below willn not block no matter how big is the file
	fs.readFile('./index.js',function(err,data){
		response.end(data);
	});
	
	// blokcing version of readFile
	var data = fs.readFileSync('./index.js');
	console.log(data);
});

server.listen(8000); // port to listen at