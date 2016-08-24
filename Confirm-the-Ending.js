//FreeCodeCamp Challengue
//Confirm the Ending
//Wilson Muñoz

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  if(target.length  ==  1) {
  
    if(target == str.substr(-1)){
    
      return true;
  
    } else {
    
      return false;
    }
    
  } else {
      
      var numberletters = target.length;
    
     if(target == str.substr(-numberletters)){
      
       return true;
  
      } else {
    
      return false;
      }
  }
  
}

confirmEnding("Bastian", "n");