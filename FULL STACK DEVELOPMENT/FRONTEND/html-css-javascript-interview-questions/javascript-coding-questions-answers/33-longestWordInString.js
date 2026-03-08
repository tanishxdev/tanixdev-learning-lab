function longestWordInString(str) {
  const words = str.split(" "); // Split the string into words

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // Update longestWord if the current word is longer
    }
  }

  return longestWord; // Return the longest word found
}

console.log(longestWordInString("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(longestWordInString("Hello world")); // Output: "Hello"
