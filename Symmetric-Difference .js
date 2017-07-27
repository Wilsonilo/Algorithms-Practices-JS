/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/


function sym(args) {
	var finalArgs = [];
	for(var i=0;i<arguments.length;i++){
		
		var check = [];
		arguments[i].filter(function (num){
			console.log(num,finalArgs);
			if(!check.includes(num)){
				check.push(num);
			}
		});
		
		check.filter(function(num) {
			if(!finalArgs.includes(num)){
				finalArgs.push(num);
			} else {
				var indexOf = finalArgs.indexOf(num);
				finalArgs.splice(indexOf, 1);
			}
		});
		//console.log(check);		
	}
		
	finalArgs  = finalArgs.sort();
	//console.log(arguments.length, finalArgs)
	return finalArgs;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));