/*
	Translate the provided string to pig latin.

	Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

	If a word begins with a vowel you just add "way" to the end.

	Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
	
	//Firs lets get that the first letter
	var i,j,addedWord,vowelAtIndex;
	var vowels = ["a","e","i", "o", "u"];
	var letters = str.split("");
	
	//lets check if is a consonant or not
	for(j=0; j < letters.length; j++){
		for(i = 0; i < vowels.length; i++){
			if(vowels[i] == letters[j]){
				if(vowelAtIndex === undefined){
					vowelAtIndex = j;
					break;
			    }
			}
		}
	}
	
	addedWord = str.slice(0, vowelAtIndex);
	str = str.slice(vowelAtIndex, str.length);

	if(vowelAtIndex === 0){
		str = str + "way";
	} else {
		str = str + addedWord + "ay";
	}

	return str;
}

translatePigLatin("glove");