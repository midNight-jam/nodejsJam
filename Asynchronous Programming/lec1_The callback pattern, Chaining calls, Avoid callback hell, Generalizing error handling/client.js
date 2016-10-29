//
var operation = require('./parallel_Operations');
operation({some:'args'},function(err,result){
	if(err){
		console.error(err);
	}
	else{
		console.log('Successful result ', result);
	}
});