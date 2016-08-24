//FreeCodeCamp Challengue
//Seek and Destroy
//Wilson Muñoz

function destroyer(...arr) {
  
  
  var ArrayOfElements = arr[0];
  var countElements = arr.length -1;
  var otherElements = [];
  
  for(var i = 1; i <= countElements; i++){
    
      otherElements.push(arr[i]);
      
  }

  function filterstuff(value){
    if(otherElements.includes(value) === true){
      return false;
    } else {
      
      return true;
    }
    
  }
  
  if(countElements === 0){
      
      arr = ArrayOfElements;
    
  }else {
     
      
      ArrayOfElements = arr[0].filter(filterstuff);
    
  }
  
  return ArrayOfElements;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
