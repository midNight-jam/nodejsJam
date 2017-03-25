// file : consumer.js

var user = require('./export_objects');
console.log(user.name);	// logs Jayam
console.log(user.getFullName());	// logs Jayam-Malviya
//console.log(user.tryMe());	// Logs undefined