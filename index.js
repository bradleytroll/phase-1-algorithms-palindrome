function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  1. Split the word into an array of letters
  2. Reverse the array
  3. Join the reversed array back into a string
  4. Compare the original word with the reversed word
  5. Return true if they are the same, otherwise return false
*/

/*
The function isPalindrome takes in one argument, a word. We then define reverseWord as a function that takes a word, splits it into an array of letters, reverses the letters, and rejoins them.
Then it returns a comparison of the original and new word to see if they are equal. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
