/*
	Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

	If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

	For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

	Index	0	1	2	3	4
	Value	7	9	11	13	15
	Below we'll take their corresponding indices and add them.

	7 + 13 = 20 → Indices 0 + 3 = 3
	9 + 11 = 20 → Indices 1 + 2 = 3
	3 + 3 = 6 → Return 6
*/


function pairwise(arr, arg) {
	
	var indexUsed 		=[];
	var pairs 			=[];
	var elementsUsed 	=[];
	var counter 		= 0;
	
	if (arr.length === 0) {
		return 0;
	}

	function check(compareOne, compareTwo) {
		var numOne = arr[compareOne];
		var numTwo = arr[compareTwo];
		
		
		if((numOne + numTwo) == arg){
			
			if(!indexUsed.includes(compareOne) && !indexUsed.includes(compareTwo)){

				indexUsed.push(compareOne, compareTwo);
				counter += (compareOne + compareTwo);
				//console.log("index that work: ", [compareOne, compareTwo]);
			}


		} else {
		
			//console.log(numOne, numTwo);
		
		}

		
	}
	
	//Convert Array to Object to keep Track
	function compare(int){
		//console.log(int);
		if(int === arr.length-1){
			for(var i = 0; i < arr.length; i++){
				if(i !== int){
					check( i, int);
				}
			}
		}else {
			for(var o = 0; o < arr.length; o++){
				if(o !== int){
					check( o, int);
				}
			}
			compare(int+1);
		}

	}
	compare(0);

	//console.log(pairs, counter);

	return counter;
}

pairwise([1, 1, 1], 2);