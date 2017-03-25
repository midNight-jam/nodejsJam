function concat(a, b, callback){ 
	setTimeout(function(){ 
		var r = a + b;
		callback(r); 
		}, 0);
} 

function upper(a, callback){ 
	setTimeout(function(){ 
		var r = a.toUpperCase(); 
		callback (r); 
	}, 0); 
}

function decor(a, callback){ 
	setTimeout(function(){ 
		var r = '*' + a + '*' ;
		callback (r);
	}, 0);
}

// To Serialize These calls & make them Synchornous
// This is CallBackHell !!!
concat('hello','world', function(r1){
	upper(r1,function(r2){
		decor(r2,function(r3){
			console.log(r3);
		});
	});
});

// using arrow Shorter functions instead
concat('hello','world',
	r1 => {
		upper(r1, r2 => {
			decor(r2,r3 => {
				console.log(r3); // Logs *HellowWolrd*
			})
		})
	});
	
	
//Better way use Promises

function concatPromise(a,b){
	return new Promise(function(resolve){
		concat(a, b, resolve);
	});
}

function upperPromise(a){
	return new Promise(function(resolve){
		upper(a, resolve);
	});
}

function decorPromise(a){
	return new Promise(function(resolve){
		decor(a, resolve);
	});
}
console.log(" Now using Promise");
concatPromise('Star','Wars')
	.then(upperPromise.bind(this))
	.then(decorPromise.bind(this))
	.then(console.log); // the final function that you want to call