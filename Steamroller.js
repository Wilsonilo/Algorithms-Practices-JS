/*
	Flatten a nested array. You must account for varying levels of nesting.
*/


function steamrollArray(arr) {
	
	var lengthFatherArray = arr.length;
	var finalArray = [];
	
	//Base case
	if (!Array.isArray(arr)){
		return arr;
	}
	
	
//	for(var i=0;i<arr.length;i++){
//		finalArray += steamrollArray(arr[i]);
//	}
	finalArray = arr.reduce(function(a, b) {
		return a.concat(steamrollArray(b));
	}, []);
	return finalArray;	
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
