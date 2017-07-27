/*
	Fill in the object constructor with the following methods below:

	getFirstName()
	getLastName()
	getFullName()
	setFirstName(first)
	setLastName(last)
	setFullName(firstAndLast)
	Run the tests to see the expected output for each method.

	The methods that take an argument must accept only one argument and it has to be a string.

	These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
		
		/*Setters*/
		this.setFirstName = function(first){
			var current = firstAndLast.split(' ');
			current[0] = first;
			firstAndLast = current.join(' ');
			firstName = first;
		};
		this.setLastName = function(last){
			var current = firstAndLast.split(' ');
			current[1] = last;
			firstAndLast = current.join(' ');
			lastName = last;
		};
		this.setFullName = function(newfirstAndLast){
			firstAndLast = newfirstAndLast;
		};

		/*Getters*/
		// Complete the method below and implement the others similarly
		this.getFirstName = function() {
			return firstAndLast.split(' ')[0];
		};
		this.getLastName = function() {
			return firstAndLast.split(' ')[1];
		};
		this.getFullName = function() {
			return firstAndLast;
		};
		return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
