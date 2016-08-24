//FreeCodeCamp Challengue
//Check for Palindromes
//Wilson Muñoz


function palindrome(str) {
  
  var initial;
  var final;
  var ispalindrome = true;
  str = str.toLowerCase();
  str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi , '');
  str = str.replace(/\s/g, '');
  initial = str;
  final = str.split('').reverse().join('');

  
  if (initial != final){
    
    ispalindrome = false;
    
  }
  return ispalindrome;
}



palindrome("eye");