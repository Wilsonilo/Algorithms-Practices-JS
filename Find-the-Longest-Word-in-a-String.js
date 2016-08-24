//FreeCodeCamp Challengue
//Find the Longest Word in a String
//Wilson Muñoz

function findLongestWord(str) {
  var arrayOfWords;
  var numberLetters = [];
  arrayOfWords = str.split(" ");
  
  for(i = 0; i < arrayOfWords.length; i++) {
      
     numberLetters.push(arrayOfWords[i].length);
    
  }
  
  return Math.max.apply(Math, numberLetters);
}