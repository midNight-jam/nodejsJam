const fs = require('fs');

var sourceFile = fs.createReadStream('./genData.txt');

var destinationFile = fs.createWriteStream('./sink.txt');

// gets fired whenever a new chunk arrives
sourceFile.on('data',function(chunk){
	console.log('chunk arrived');
	destinationFile.write(chunk);
});

// gets fired when the stream/file ends
sourceFile.on('end', function(chunk){
	console.log('ends');
	console.log(chunk);
});