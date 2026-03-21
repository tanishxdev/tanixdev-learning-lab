function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// Example usage:
console.log(reverseWords("Hello World")); // Output: "World Hello"
console.log(reverseWords("JavaScript is fun!")); // Output: "fun! is JavaScript"

// TC: O(n) where n is the length of the input string, due to the split, reverse, and join operations
// SC: O(n) for storing the split array of words and the reversed array of words
