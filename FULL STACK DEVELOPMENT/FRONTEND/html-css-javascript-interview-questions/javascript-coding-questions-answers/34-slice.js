// slice() method — Extracts a portion of a string and returns a new string

// Syntax:
// string.slice(start, end)

// Parameters:

// start — Index where extraction begins
// end (optional) — Index where extraction ends (not included). If omitted, extracts to the end
// Key points:

// Does NOT modify the original string
// Uses zero-based indexing
// Negative numbers count from the end
// Examples:

const word = "hello";

word.slice(1); // "ello" (from index 1 to end)
word.slice(0, 4); // "hell" (from index 0 to 3)
word.slice(1, 4); // "ell" (from index 1 to 3)
word.slice(-3); // "llo" (last 3 characters)
word.slice(0, -1); // "hell" (everything except last character)

// EXAMPLE GET Last element
const arr = [1, 2, 3, 4, 5];

arr.slice(-1); // [5] (last element as an array)
arr.slice(-1)[0]; // 5 (last element as a number)

getLastElement(arr); // 5 (using the getLastElement function from 37-getLastElement.js)
