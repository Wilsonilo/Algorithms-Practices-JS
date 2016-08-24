//Check if squares overlap
//Get the Area of the overlaping


//Vars
var rectA = {
  left:   10,
  top:    10,
  right:  30,
  bottom: 30
};

var rectB = {
  left:   20,
  top:    20,
  right:  50,
  bottom: 50
};


//function to check of they overlap
function overlap(rectA, rectB){
  
   
  return (rectA.left <= rectB.right &&
          rectB.left <= rectA.right &&
          rectA.top <= rectB.bottom &&
          rectB.top <= rectA.bottom)

}


//Get Area of overlaping
function area(rectA, rectB){
  
  var left = Math.max(rectA.left, rectB.left);
  var top = Math.min(rectA.top, rectB.top);
  var right = Math.min(rectA.right, rectB.right);
  var bottom = Math.max(rectA.bottom, rectB.bottom);
  
  
  if(left < right && bottom < top){
    
    console.log("therea is area")
    
  } else {
    
    return false
  }

}