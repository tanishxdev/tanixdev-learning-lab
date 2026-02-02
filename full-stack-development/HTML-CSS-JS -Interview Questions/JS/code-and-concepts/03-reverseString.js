// brute force
function reverseString(str) {
  return str.split("").reverse().join("");
}

// test code
console.log(reverseString("hello"));

function reverseString(str) {
  // Step 1: Input validation
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Step 2: Initialize empty result string
  let reversed = "";

  // Step 3: Traverse string from end to start
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // Step 4: Return reversed string
  return reversed;
}

// test code
console.log(reverseString("hello"));