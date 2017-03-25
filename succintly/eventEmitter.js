"use strict";
const EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
// providing an event handler for newNumber Event
emitter.on('newNumber',function(n){
	console.log(n * 2);
});
// EventEmitter is synchornous
for(let i = 0; i < 10; i++){
	console.log('calling emit');	// Log happens every time before emmiting event
	emitter.emit('newNumber', i);
	// emitting the event 
}

// Async version
emitter.on('newNumberAsync',function(n){
	setImmediate(function(){	// setImmediate puts this function in the que, behind already present functions
		console.log(n * 2);
	});
});

for(let i = 0; i < 10; i++){
	console.log('calling emit newNumberAysnc');	// all logs happen in one go
	emitter.emit('newNumberAsync', i); // all the handlers are called from the event que after the thread has finished this loop
}

