//Missing letters
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
	
	str = str.split("");
	var missingChar;
	
	//Look for Missing.
	for(var i = 0; i < str.length; i ++){
		if( i+1 < str.length){
			if(str[i].charCodeAt(0)+1 != str[i+1].charCodeAt(0)){
				missingChar = str[i].charCodeAt(0)+1;
			}
		}
	}
	
	//Set	
	if (missingChar !== undefined){
		missingChar = String.fromCharCode(missingChar);
	}
	return missingChar;
}

fearNotLetter("bcd");
