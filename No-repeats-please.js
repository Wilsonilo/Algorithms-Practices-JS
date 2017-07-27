/*
	Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

	For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/
/* ONLY PROBLEM OF ALL THE ALGORITHMS THAT I NEED IT SEE ASWER.

*/

function permAlone(str) {

	var dest 	= [];
	var arr 	= str.split("");
	var regex 	= /(.)\1+/g;
	
	 // Function to swap variables' content.
	function swap(index1, index2) {
		tmp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = tmp;
	}

	function permutate(int){
		if(int === 1){
			var element = arr.join("");
			dest.push(element);
		} else {
			for(var i = 0; i < int; i++){
				permutate(int-1);
				//console.log(int % 2);
				swap(int % 2 ? 0 : i, int - 1);
			}
			//console.log("---");		
		}
	}	

	permutate(arr.length);


	 // Filter the array of repeated permutations.
	 var filtered = dest.filter(function(string) {
			return !string.match(regex);
		}); 
	console.log(dest.length, filtered.length);

	// Return how many have no repetitions.
	return filtered.length;

}

permAlone('aaabb');