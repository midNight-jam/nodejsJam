module.exports = mapAsync;
function mapAsync(collection, map, cb){
	
	var pending = collection.length;
	var calledBack = false;
	var results = [];
	
	collection.forEach(function(elem,index){
		map(elem,terminating(index));
	});

	function terminating(index){
		return function(err, result){
			pending--;
			if(err){
				callback(err);
			}
			
			else{
				results[index] = result;
				if(!pending){
					callback(null,results);	
				}
			}		
		};
	}

	function callback(err,results){
			if(!calledBack){
			calledBack = true;
			cb(err,results);	
		}
		
	}
}
