//FreeCodeCamp Challengue
//Return Largest Numbers in Arrays
//Wilson Muñoz


function largestOfFour(arr) {
  
    var arrayLargestNumber = [];
    var largeNumber;
  
    for(var i = 0; i < arr.length; i++){
      
      largeNumber = Math.max.apply( Math, arr[i] );
      if(largeNumber){
        console.log(largeNumber);
        arrayLargestNumber.push(largeNumber);
        
      }
        
    }
  
  arr = arrayLargestNumber;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);