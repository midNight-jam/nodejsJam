var eachAsync  =require('./each_async');
var messages = ['message 1','message 2','message 3'];

eachAsync(messages, send, doneFinalCB);

function doneFinalCB(err){
	if(err){
		console.error(err);
	}
	else{
		console.log('All the messages are sent.');
	}
}


function send(message, processedCB){
	var err = Math.random() > 0.8 ? new Error('whaaat') : null;
	setTimeout(processedCB,randomTimeout(),err);
}

function randomTimeout(){
	return Math.floor(Math.random()*1e3);
}
