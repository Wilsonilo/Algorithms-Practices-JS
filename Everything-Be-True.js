/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
	
	for(var i=0; i<collection.length;i++){
		if (collection[i][pre] === undefined || collection[i][pre] === null || collection[i][pre] === 0 || String(collection[i][pre]) === ""){
			
			return false;

		}
		
		if( Number.isNaN(collection[i][pre])) {
			return false;
		}

	}
		
	// Is everyone being true?
	return true;
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));