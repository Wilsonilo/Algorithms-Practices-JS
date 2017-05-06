//Same Problem "Sorted Union"
//Made this code before the one on Sorted-Union.js
//But FreedCamp did not let me used it, i think because i was not using the method they wanted me to use.
//reduce()
//But i think using recursive is an option for another situation
var holder = [];

function uniteUnique(arr) {

	//Base case
	if(arguments.length === 1){
		for(var i = 0; i < arr.length; i++){	
			if(holder.indexOf(arr[i]) < 0){
				holder.push(arr[i]);
			}
		}
	//Recursive
	} else {
		for(var j = 0; j < arguments.length; j++){
			uniteUnique(arguments[j]);
		}
	}
	console.log(holder);
	return holder;
	
}
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
