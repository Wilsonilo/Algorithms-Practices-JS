//Sum Positives numbers inside Array
//by Wilson Muñoz


function sumArray(arrayEnter){
  
  var sum = 0;
  
  for(var i = 0; i < arrayEnter.length; i++){
    
    if(arrayEnter[i] > 0){
       sum = sum + arrayEnter[i];
    }
  }
  
  if(sum === 0){
    return "Empty array";
  }
  
  return sum;
  
}
var arrayEnter = [2, 3, -3, 4, 5];
console.log(sumArray(arrayEnter));