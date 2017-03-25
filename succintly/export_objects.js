// file : export_object.js
module.exports = {
	name : 'jayam',
	lastName : 'malviya',
	getFullName : function(){
		tryMe();
		return this.name + '-' + this.lastName;
	}
};

// definition of a module
// When run whole file is evaluated but only the stuff that is assigned to module.exports 
// will be returned to the caller of require, other things will not be 
// present however as functions remeber other functions via scope chain 
// at the time of declaration, they could be still called, but via the 
// properties/method avaialable via module.exports

function tryMe(){
	console.log('would work only from inside of a function');
}