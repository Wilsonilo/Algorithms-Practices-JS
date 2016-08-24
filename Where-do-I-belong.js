//FreeCodeCamp Challengue
//Where do I belong
//by Wilson Muñoz

function getIndexToIns(arr, num) {
  var finalnum;
  arr = arr.sort();
  num = Math.round(num / 10) * 10;
  
   for(var i = 0; i < arr.length; i++){

     if(arr[i+1] !== undefined){
       
       
       if(num === arr[i+1] || num >= arr[i]){
         
         finalnum = i+1;
        
       }
       if(num === arr[i] || num <= arr[i]){
         
         finalnum = i;
        
       }
       
     }

      
   }
  
  return finalnum;
}

getIndexToIns([40, 60, 80, 90], 50);