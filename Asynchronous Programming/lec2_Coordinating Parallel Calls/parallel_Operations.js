module.exports = function composedCall(args,cb){

	var pending = 0;
	var results = [];
	var calledBack = false;

	//calls for simulating some ios with random wait
	//
	call1(args,resultsHandler());
	call2(args,resultsHandler());
	call3(args,resultsHandler());

function resultsHandler(){
	var order = pending;
	pending++;

	return function(err,result){
			pending--;
			if(err){
				callBack(err);
			}
			else{
				results[order] = result;
				if(!pending){
					finalCallBack(null,results);
				}
			}
	};
}


function finalCallBack(err,value){
		if(!calledBack){
			calledBack = true;
			cb(err,value);		
		}
	}
};

function call1(args,cb){
	setTimeout(cb,randomTimeout(),null,randomTimeout());
	//1st param si for error, 2nd is one we are sending
}


function call2(args,cb){
	setTimeout(cb,randomTimeout(),null,randomTimeout());
}

function call3(args,cb){
	setTimeout(cb,randomTimeout(),null,randomTimeout());
}

function randomTimeout(){
	return Math.floor(Math.random()*1e3);
}