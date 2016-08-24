//FreeCodeCamp Challengue
//Chunky Monkey
//Wilson Muñoz


function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var i,j,temparray = [],chunk = size;
  for (i=0,j=arr.length; i<j; i+=chunk) {
    temparray.push(arr.slice(i,i+chunk));
  }
  
  
  console.log(temparray);
  
  return temparray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);