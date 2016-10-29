var fs = require('fs');
fs.readFile(__filename,{encoding:'utf8'},displayFileContent);
function displayFileContent (err,result){
	if(err){
		console.error(err);
	}
	else{
		console.log('File Content are \n\n\n%s\n',result);
	}
}