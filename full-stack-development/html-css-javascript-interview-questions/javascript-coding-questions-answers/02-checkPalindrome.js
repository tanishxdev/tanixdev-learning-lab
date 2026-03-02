// Approach 1: Using reverse method

function checkPalindrome(str) {
  const clearedStr = str.replace(/[^A-Za-z0-9]/, "").toLowerCase();
  const reversedStr = clearedStr.split("").reverse().join("");
  return clearedStr === reversedStr;
}
console.log(checkPalindrome("tanish"));
console.log(checkPalindrome("madam"));

// Approach 2: Two-pointer (loop)

function checkPalindromeTwoPointer(str) {
  const clearedStr = str.replace(/[^A-Za-z0-9]/, "").toLowerCase();
  let left = 0;
  let right = clearedStr.length - 1;

  while (left < right) {
    if (clearedStr[left] !== clearedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(checkPalindromeTwoPointer("tanish"));
console.log(checkPalindromeTwoPointer("madam"));
