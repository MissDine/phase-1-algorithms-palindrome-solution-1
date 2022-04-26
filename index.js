function isPalindrome(word) {
  // Write your algorithm here
  let wordToCheck  = word.toLowerCase()
  let toCompare = wordToCheck.split('').reverse().join('')
  let Bool; 
  if(wordToCheck === toCompare){
    Bool = true;
  } else {
    Bool = false
  }
  return Bool
}

/* 
  Add your pseudocode here
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  I need to make an isPalindrome function that returns either true or false. When the input string i
  s the same forwards and backwards, I should return true. 
  That means that if the input string is the same after I reverse
  it, I should return true. For instance, "wow" in reverse is also
  "wow", and "racecar" in reverse is also "racecar", so my solution should return true for these cases.
   "is" in reverse is "si", so my solution should return false for this case. 
   While eye should return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("sees"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("is"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;