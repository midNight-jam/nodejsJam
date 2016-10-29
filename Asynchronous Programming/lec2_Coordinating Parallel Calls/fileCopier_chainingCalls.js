
var fs  = require('fs');
var path = require('path');
var dir = path.join(__dirname,'temp');
var source = __filename;
var target = path.join(dir,'target');

fs.mkdir(dir,wrapErrorHandling(makeDirCB));

function makeDirCB (){
	fs.readFile(source,{encoding:'utf8'},wrapErrorHandling(readFileCB));
};

function readFileCB (result) {
	var content = result;
	fs.writeFile(target,content,wrapErrorHandling(writeFileCB));
};

function writeFileCB(err, result){
	console.log('aldone');
};

/*
this is how the handleError function ig going to replace the method
fs.mkdir(dir, function(err,result){
		if(err){
				handleError(err);
		}
		else{
			makeDirCB(result);
		}
	});
*/

function wrapErrorHandling(fn){
	return function(err,result){
		if(err){
				handleError(err);
		}
		else{
			fn(result);
		}
	};
};

function handleError(err){
	console.error(err);
};

