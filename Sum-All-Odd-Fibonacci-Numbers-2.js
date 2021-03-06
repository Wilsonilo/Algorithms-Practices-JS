/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {
	
	var currNumber 	= 1;
	var prevNum 	= 0;
	var sum 		= 0;

	while(currNumber <= num){
		
		if(currNumber % 2 !== 0){
			sum += currNumber;
		}

		var suma 	= prevNum + currNumber;
		prevNum 	= currNumber
		//console.log(prevNum);		// So this is the normal fibonaci, we filter on line 18.
		currNumber 	= suma;

	}

	console.log(sum);

}

sumFibs(1000);