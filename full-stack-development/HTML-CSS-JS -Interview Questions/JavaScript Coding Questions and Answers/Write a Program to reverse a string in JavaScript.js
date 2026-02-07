function reversString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const inputString = "Hello, World!";
const reversed = reversString(inputString);
console.log(reversed); // Output: !dlroW ,olleH

// You can also reverse a string using recursion:

function reverseStringRecursively(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursively(str.substr(1)) + str.charAt(0);
  }
}

// Example usage:
const inputString1 = "Hello, World!";
const reversed1 = reverseStringRecursively(inputString1);
console.log(reversed1); // Output: !dlroW ,olleH

// 🩷 Alternatively, you can also use built-in methods to reverse a string in JavaScript:

function reverseStringUsingBuiltInMethods(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const inputString2 = "Hello, World!";
const reversed2 = reverseStringUsingBuiltInMethods(inputString2);
console.log(reversed2); // Output: !dlroW ,olleH
