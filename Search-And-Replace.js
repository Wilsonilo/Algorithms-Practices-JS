/*
	Perform a search and replace on the sentence using the arguments provided and return the new sentence.

	First argument is the sentence to perform the search and replace on.

	Second argument is the word that you will be replacing (before).

	Third argument is what you will be replacing the second argument with (after).

	NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
	//Explode 
	var stringArray = str.split(" ");
	var i,sanity;

	for(i = 0; i < stringArray.length; i++){

		if(stringArray[i] == before){
			
			sanity = 1;
			
			//Uppercase or Lowercase
			var characterOrigin = before.charAt(0);
			var characterAfter 	= after.charAt(0);

			//convert if neccesary
			if(characterOrigin != characterOrigin.toLowerCase() || characterAfter != characterAfter.toLowerCase()){
				
				var newCharacterAfter = after.split('');
				newCharacterAfter[0] = newCharacterAfter[0].toUpperCase();
				newCharacterAfter = newCharacterAfter.join('');
				after = newCharacterAfter;
			} 
			
			stringArray[i] = after;

		}
		
	}
	
	if(sanity != 1){
		return "This has a spelling error";
	}
	
	str = stringArray.join(" ");
	console.log(str);

	
	return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
