//409. Longest Palindrome

var longestPalindrome = function (s) {
  let charCount = {}; //
  let result = 0;
  let oddFound = false;
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === undefined) {
      charCount[s[i]] = 1;
    } else {
      charCount[s[i]]++;
    }
  }
  for (let key in charCount) {
    if (charCount[key] % 2 === 0) {
      result += charCount[key]; //if even, add to result
    } else {
      result += charCount[key] - 1; //if odd, add to result minus 1
      oddFound = true; //set oddFound to true
    }
  }
  return oddFound ? result + 1 : result;
};
