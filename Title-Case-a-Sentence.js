//FreeCodeCamp Challengue
//Title Case a Sentence
//Wilson Muñoz


function titleCase(str) {
  var arrayWords;
  
  arrayWords = str.split(" ");
  
  for(var i = 0; i < arrayWords.length; i++){
        
    arrayWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1).toLowerCase();
    
  }
  
  str = arrayWords.join(" ");
  
  console.log(str);
  
  return str;
}

titleCase("I'm a little tea pot");
