const http = require('http');	// using http module
// creating the http server
const server = http.createServer((request, response) => {
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Hello from Http Server");
})

server.listen(8000); // port to listen at