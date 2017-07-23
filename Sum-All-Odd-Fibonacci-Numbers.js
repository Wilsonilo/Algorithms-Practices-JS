/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {
	
	var currNumber = 2;
	var prevNum = 0;
	var finalnum = 0;
	var summing = 0;
	var fibnaci = [1,1];
	var fibnacitwo = [1,1];
	while(currNumber <= num){
		
		var nextFib = fibnaci[currNumber-2] + fibnaci[currNumber-1];
		
		fibnaci.push(nextFib);

		if(nextFib % 2 !== 0){
			if (nextFib > num){
				for (i in fibnacitwo){
					finalnum += fibnacitwo[i];
				}
				break;
			}
        	fibnacitwo.push(nextFib);
		}
		currNumber ++;
	}
	console.log(finalnum);

}

sumFibs(1000);