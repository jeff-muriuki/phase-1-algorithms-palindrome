function isPalindrome(word) {
  // Write your algorithm here
  const formattedStr= word.toLowerCase()
  return formattedStr=== formattedStr.split('').reverse().join('');
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
