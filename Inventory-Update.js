/*
	Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/


function updateInventory(arr1, arr2) {
	
	//Draw final object
	var result = arr1.reduce(function(acumulator, element){
		if(acumulator[element[1]] === undefined){
			acumulator[element[1]] = element[0];
		} else {
			acumulator[element[1]] += element[0];
		}
		return acumulator;
	}, {});
	arr2.reduce(function(acumulator, element){
			if(result[element[1]] === undefined){
				result[element[1]] = element[0];
			} else {
				result[element[1]] += element[0];
			}

			return acumulator;
		}, {});
	
	var resultArray = [];
	var resultKeys = Object.keys(result).sort();
	for(var i = 0; i < resultKeys.length; i ++){
		resultArray.push([result[resultKeys[i]], resultKeys[i]]);
	}
	//console.log(resultArray);

	// All inventory must be accounted for or you're fired!
	return resultArray;
}

// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
