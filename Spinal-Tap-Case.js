//Spinal Tap Case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
*/


function spinalCase(str) {
	str = str.replace(/([A-Z])/g, replacer); //Work Uppercase scenario
	str = str.replace(/\s|_/g, "-"); // Work space or underscore scenario
	str = str.replace(/(--)/g, "-"); //check for double implementation

	console.log(str);
	return str;
}

function replacer(match, p1, offset, string){
	if(match != string[0]){
		if(match == "-"+match.toUpperCase()){
			return match;
		}
		if(match == match.toUpperCase()){
			return "-"+match.toLowerCase();
		}
	} else {
		return match.toLocaleLowerCase();
	}
}
spinalCase('This Is Spinal Tap');
