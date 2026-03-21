function firstNonRepeated(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1; // Count occurrences of each character
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // Return null if no non-repeated character is found
}

// Example: For the string "hello"

// First 'h':
// charCount['h'] = (undefined || 0) + 1 = 0 + 1 = 1
// charCount = { h: 1 }

// First 'e':
// charCount['e'] = (undefined || 0) + 1 = 0 + 1 = 1
// charCount = { h: 1, e: 1 }

// First 'l':
// charCount['l'] = (undefined || 0) + 1 = 0 + 1 = 1
// charCount = { h: 1, e: 1, l: 1 }

// Second 'l':
// charCount['l'] = (1 || 0) + 1 = 1 + 1 = 2
// charCount = { h: 1, e: 1, l: 2 }
