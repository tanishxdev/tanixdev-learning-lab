// brute force
function isPalindrom(str) {
  return str === str.split("").reverse().join("");
}

// test
console.log(isPalindrom("racecar"));

// better

function isPalindrome(str) {
  // Step 1: Input validation
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Step 2: Normalize string
  // - Convert to lowercase
  // - Remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 3: Two-pointer comparison
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  // Step 4: All characters matched
  return true;
}

// test
console.log(isPalindrome("Race car"));