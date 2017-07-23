/*
	Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

	The range will be an array of two numbers that will not necessarily be in numerical order.

	e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/


function smallestCommons(arr) {
	
	var top = 100;
	var low = arr.reduce(function(a, b) {
				return Math.min(a, b);
			});		
	var hig = arr.reduce(function(a, b) {
					return Math.max(a, b);
				});

	var found = true;
	var i = 1;
	var o = 1;	
	while(found){
		var arrFirst 	= low * i;
		var arrSecondS 	= hig * i;
		
		if (arrFirst >= hig * o) {
			
			var arrSecond 	= hig * o;
			
			//console.log("----")

//			for(i = 1; i <= low; i ++){
//				console.log(i, arrFirst / i, arrSecond / i); 
//			}
			flagFound = true
			for(j = low; j <= hig; j ++){
				if (arrFirst % j !== 0 || arrSecond % j !== 0) {
					flagFound = false;
					break;
				}
				//console.log(hig * o, j, arrFirst % j, arrSecond %  j); 
			}
			if (flagFound){
				return hig * o;
			}				
			//console.log(arrFirst, arrSecond, i, o);
			
							
			//Sanity
//			if (arrSecond > 100){
//				break;
//			}
			
			o += 1;
		}
		//console.log(low * i, hig * i);
 		i += 1;		
	}
	

	return 0;
}



console.log(smallestCommons([23,18]));
