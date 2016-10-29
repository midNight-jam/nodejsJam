var mapAsync  =require('./map_async');
var messages = ['message 1','message 2','message 3'];
var index=0;
mapAsync(messages, send, doneFinalCB);

function doneFinalCB(err,results){
	if(err){
		console.error(err);
	}
	else{
		console.log('All the messages are sent. results ');
		console.log(results);
	}
}


function send(message, processedCB){
	var err = Math.random() > 0.8 ? new Error('whaaat') : null;
	var result = ++index;
	setTimeout(processedCB,randomTimeout(),err,result);
}

function randomTimeout(){
	return Math.floor(Math.random()*1e3);
}
