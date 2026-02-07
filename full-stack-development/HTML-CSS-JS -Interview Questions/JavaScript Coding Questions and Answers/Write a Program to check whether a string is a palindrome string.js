// Write a Program to check whether a string is a palindrome string.

function checkPalindrom(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
const inputString = "naman";
const isPalindrome = checkPalindrom(
  inputString.replace(/[^A-Za-z0-9]/g, "").toLowerCase(),
);
console.log(isPalindrome); // Output: true

// You can also check for palindrome using a loop:

function checkPalindromeUsingLoop(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage:
const inputString1 = "naman";
const isPalindrome1 = checkPalindromeUsingLoop(inputString1);
console.log(isPalindrome1); // Output: true
