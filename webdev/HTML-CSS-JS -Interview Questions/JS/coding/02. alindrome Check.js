// Approach 1 — Brute Force (Reverse & Compare)

function isPalindrome(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}

const testStr = "racecar";
const result = isPalindrome(testStr);
console.log(result); // Output: true

// Approach 2 — Better (Two Pointers)

function isPalindromeTwoPointers(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const testStr2 = "racecar";
const result2 = isPalindromeTwoPointers(testStr2);
console.log(result2); // Output: true

// Approach 3 — Optimal (Using Array Methods)
function isPalindromeOptimal(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const testStr3 = "racecar";
const result3 = isPalindromeOptimal(testStr3);
console.log(result3); // Output: true

