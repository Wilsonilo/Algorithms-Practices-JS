//FreeCodeCamp Challengue
//Repeat a string repeat a string
//Wilson Muñoz

function repeatStringNumTimes(str, num) {
 var strinfinal = "";

  if(num < 1){
    
    strinfinal = "";
 
  } else {
    
    for(var i = 0; i < num; i++){
       
      strinfinal = strinfinal+str;
        
      
    }
    
  }
  return strinfinal;
}

repeatStringNumTimes("abc", 3);