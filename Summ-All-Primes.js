/*
Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/


function sumPrimes(num) {

	var i = 2;
	var total = 0;
    var fibonaci = [];

	//Get those prime numbers
	while( i <= num){
		
		
		for(var w = 2; w <= num; w++){
			
			var check = i / w;
			if (check % 1 === 0){
				 
				if (check > 1){
					break;
				}
				
				fibonaci.push(i);
			}

		}
		i++;
	}
	
	//summit
	for (var fib in fibonaci){
		total += fibonaci[fib];
	}
	console.log(total);
	return total;
}

sumPrimes(977);
