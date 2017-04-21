/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
*/
function rot13(str) { // LBH QVQ VG!
	
 	var codex = {
		" " : " ",
		"A" : "N",
		"B" : "O",
		"C" : "P",
		"D" : "Q",
		"E" : "R",
		"F" : "S",
		"G" : "T",
		"H" : "U",
		"I" : "V",
		"J" : "W",
		"K" : "X",
		"L" : "Y",
		"M" : "Z",
		"N" : "A",
		"O" : "B",
		"P" : "C",
		"Q" : "D",
		"R" : "E",
		"S" : "F",
		"T" : "G",
		"U" : "H",
		"V" : "I",
		"W" : "J",
		"X" : "K",
		"Y" : "L",
		"Z" : "M",
		"!" : "!",
		"?" : "?",
		"." : "."
	};
	
	//Get lengith for loop
	var decodedString 	= "";
	var length 			= str.length;
	var stringExploded 	= str.split('');
	for(var i = 0; i < length; i++){
		var letterDecoded = codex[stringExploded[i]];
		decodedString 	= decodedString+letterDecoded;
	}
	//console.log(decodedString);
	return decodedString;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
