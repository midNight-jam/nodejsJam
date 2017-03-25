const fs = require('fs');

var sourceFile = fs.createReadStream('./genData.txt');

var destinationFile = fs.createWriteStream('./sink.txt');

sourceFile.on('data',function(chunk){
	console.log('chunk arrived');
	destinationFile.write(chunk);
});

sourceFile.on('end', function(chunk){
	console.log('ends');
	console.log(chunk);
});