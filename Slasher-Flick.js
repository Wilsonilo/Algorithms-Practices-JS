//FreeCodeCamp Challengue
//Slasher Flick
//Wilson Muñoz


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArray = arr.slice(howMany);
  
  console.log(newArray);
  
  return newArray;
}

slasher([1, 2, 3], 2);