function countVowels(str) {
  const vowels = "aeiouAEIOU";

  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3 -> e, o, o
console.log(countVowels("JavaScript is fun!")); // Output: 5 -> a, a, i, u, a

// TC: O(n) where n is the length of the input string
// SC: O(1) since we are using a constant amount of space for the vowels string and count variable
