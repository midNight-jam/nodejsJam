module.exports = eachAsync;
function eachAsync(collection, iterator, cb){
	
	var pending = collection.length;
	var calledBack = false;

	collection.forEach(function(elem){
		console.log(elem);
		iterator(elem,terminated);
	});

	function terminated(err){
		pending--;
		if(err){
			callback(err);
		}
		else if(!pending){
			callback();
		}
	}

	function callback(err){
			if(!calledBack){
			calledBack = true;
			cb(err);	
		}
		
	}
}
