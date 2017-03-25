const express = require('express');
const app = express();

app.get('/', uriLogger, function(req, res){
	res.send('Hello from Express');
});

/*similarly 
app.put()
app.post()
app.delete()
*/

// a middleware that intercepts each req & logs the request uri
function uriLogger(req, res, next){
	console.log('intercepted by middleware  '+req.originalUrl);
	next();
}

app.use(uriLogger);

app.listen(8000,function(){
	console.log('small app listening on port 8000');
});

