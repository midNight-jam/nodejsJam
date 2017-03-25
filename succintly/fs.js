const fs = require('fs');
// Default Aysnchornous version
fs.readFile('./bind.html',function(err,data){
	console.log(data);
});

// Not preferred Synchronous version
const data = fs.readFileSync('./bind.html');
console.log(data);


const someData = "this data to file";
// writiing data to a file
fs.writeFile('./genData.txt',someData,function(err){
	if(err)
		console.log('some Error occured '+ err);
	else
		console.log('success ');
});

// watching for activity on files/folders
const watcher = fs.watch('.'); // watching the current directory
watcher.on('change', function(event, fileName){
	console.log('EventName : '+event +' , on file : '+fileName);
});

const path = require('path');
const currentPath = path.join('.','up.js');
console.log(currentPath); // logs current path "up.js"
const fullPath = path.join(__dirname, 'up.js');	// logs Full Path
console.log(fullPath);

const parts = path.parse('D:/_Darkspace/GIT/nodejsJam/succintly/up.js');
console.log(parts); // writes a JSON having properties as dir, extension, name etc


