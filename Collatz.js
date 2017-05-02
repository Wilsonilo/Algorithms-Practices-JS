//Simple practice exercise based on the theory of the CS50.
//In the case of the C version intead of calling function
//We RETURN and call the function: return 1 + collatz(FORMULA)
var collatzNumber = 0;

function collatz(number){
	
	//base case
	if(number == 1){
		console.log("TRUE with " + collatzNumber + " callings.");
		return true;
	}
	

	//Recursive
	collatzNumber++;
	if( number % 2 == 0){
		collatz(number / 2);	
	} else {
		collatz(Math.floor((number * 3) + 1));	
	} 
	
}

collatz(50);