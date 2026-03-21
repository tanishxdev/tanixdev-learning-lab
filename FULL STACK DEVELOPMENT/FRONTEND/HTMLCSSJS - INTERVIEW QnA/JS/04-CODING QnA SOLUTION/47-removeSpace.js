function removeSpace(str) {
  let result = ""; // Initialize an empty string to store the result

  // Iterate through each character in the input string

  for (let char of str) {
    // If the character is not a space, add it to the result string
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}

// Example usage:
console.log(removeSpace("Hello World")); // Output: "HelloWorld"
console.log(removeSpace(" JavaScript is fun! ")); // Output: "JavaScriptisfun!"
