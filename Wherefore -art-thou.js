//Wherefore art thou
/*
	Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

	For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
	
	// What's in a name?
	var arr, props, values = [];
 	var i,j;
	//get props
	props = Object.keys(source);

	//Filter
	arr = collection.filter(function(element){
		var counter = 0;
		for(i=0;i < props.length; i++){
			if(element.hasOwnProperty(props[i]) && element[props[i]] == source[props[i]] ) {
				counter++;
				console.log(counter);

			}
		}
		if(counter == props.length){
			return element;

		}	

	});
		
	console.log(arr);
	return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
