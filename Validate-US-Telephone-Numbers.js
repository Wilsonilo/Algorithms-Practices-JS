/*
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
	var regEx = new RegExp('![0-9]', 'i');
	var regexFromFreed = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-validate-us-telephone-numbers/16090
	//var regExTwo = new RegExp('[-]', 'i');
	//var strNumbers = str.split(regEx)[0].replace(" ", "");
	var strClean = str.split(regEx)[0];
	//console.log(parseInt(strClean[0]));
	//Check for first number
	if (isNaN(strClean[0])){
		if (strClean[0] !== "("){
			return false;
		}
	}
	strClean = strClean.split("-").join("").split(" ").join("");
	console.log(strClean);
	
	if(strClean.length > 11 && strClean.length <= 13){
		if(strClean.length === 12){
			if(strClean[0] !== "(" || strClean[4] !== ")"){
				return false;
			}
		}
		if(strClean.length === 13){
			if(strClean[0] !== "1" || strClean[1] !== "(" || strClean[5] !== ")"){
				return false;
			}
		}
		
	}
	if (strClean.length < 10 || strClean.length > 13) {
		return false;
	}
	if (strClean.length === 11){
		if(strClean[0] !== "1"){
			return false;
		}
	}

	
	// Good luck!
	return true;
}



console.log(telephoneCheck("-1 (757) 622-7382"));