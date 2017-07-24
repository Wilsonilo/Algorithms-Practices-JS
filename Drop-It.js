/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

function dropElements(arr, func) {
	
	var endSlice;
	for (var i = 0; i < arr.length; i++){
			
		if (func(arr[i]) === false){
			if (endSlice < i || endSlice === undefined){
				endSlice = i;
			}
		} else {
			break;
		}
		
	}
	
	if (endSlice !== undefined) {
		arr = arr.slice(endSlice+1);
	} 	
	
	
	//console.log(endSlice, arr);
	return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});