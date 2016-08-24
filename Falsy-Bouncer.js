//FreeCodeCamp Challengue
//Falsy Bouncer
//Wilson Muñoz

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function filterEmpty(value){
    
 if(value === "" || value === false || value === "undefined" || value === 0 || value === null || value === undefined){      
      
     
       return false;
      
    } else {
      
     value = value.toString();
      
      if(value === "NaN"){
        
        return false;
      }
      
      return true;
    }
    
  }
  
  arr = arr.filter(filterEmpty);
  
  console.log(arr);
  
  return arr;
}

bouncer([7, "ate", "", false, 9]);
