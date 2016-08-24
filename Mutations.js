//FreeCodeCamp Challengue
//Mutations
//Wilson Muñoz


function mutation(arr) {
  
  var firstItem = arr.slice(0, 1);
  var secondItem = arr.slice(1, 2);
  
    firstItem = firstItem[0].toLowerCase();
    secondItem = secondItem[0].toLowerCase();
    secondItemReverse = secondItem.split("").reverse().join("");
    console.log(firstItem);
    console.log(secondItem);
    console.log(secondItemReverse);
    console.log(firstItem.includes(secondItem));
    
    var counteroftrue = 0;
    for(var i = 0; i < secondItem.length; i++){
        
        if(firstItem.includes(secondItem[i])){
  
             counteroftrue++;
          if(counteroftrue == secondItem.length){
                console.log("true");
                return true;
         }
        }
        
    }
  
  var secondItemNum = secondItem.length;
  var firsItembasedOnSecond = firstItem.substr(-secondItemNum);
    console.log(firstItem.indexOf(secondItem));
    console.log(firstItem.indexOf(secondItemReverse));
  if( firstItem.indexOf(secondItem) >= 0 || firstItem.indexOf(secondItemReverse) >= 0 || firstItem.indexOf(secondItem) !== -1){
        console.log("true");

    return true;
  } else {
        console.log("false");
    return false;
  }
  
}



mutation(["hello", "hey"]);