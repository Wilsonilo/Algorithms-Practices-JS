//FreeCodeCamp Challengue
//Truncate a string
//Wilson Muñoz

function truncateString(str, num) {
  
  
  var newString = str.substr(0, num);
  console.log(newString);
  var newStringWithPoints = str.substr(0, num) + "...";
    console.log(newStringWithPoints);

  
  
  var NumberOfStringLength = newStringWithPoints.split(" ").join("");
 
  console.log(NumberOfStringLength.length);
  if(NumberOfStringLength.length > num && num > 3){
    
    str = newStringWithPoints.substr(0, num-3)+ "...";
  
  } else if(num <= 3){

    str = newStringWithPoints;
  
  } else {
    

    
    str = str;
  }
  console.log(str);
  return str;
}


truncateString("A-tisket a-tasket A green and yellow basket", 11);