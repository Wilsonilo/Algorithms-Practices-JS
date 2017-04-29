//Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/


function diffArray(arr1, arr2) {
	var newArr = [];

	//First append all elements
	newArr = newArr.concat(arr1, arr2);
	console.log(newArr);

	//filter
	newArr = newArr.filter(function(element){
		return arr1.indexOf(element) < 0 || arr2.indexOf(element) < 0;
	})


	console.log(newArr);
	// Same, same; but different.
	return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
