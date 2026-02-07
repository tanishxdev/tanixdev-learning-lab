// Find the largest number in an array in JavaScript.
function findLargest(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let largest = arr[0]; // Initialize largest with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if current element is greater
    }
  }

  return largest; // Return the largest number found
}

// Example usage:
const numbers = [3, 5, 7, 2, 8];
const largestNumber = findLargest(numbers);
console.log(largestNumber); // Output: 8

// You can also find the largest number using the built-in Math.max function:
function findLargestUsingMathMax(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }
  return Math.max(...arr); // Use the spread operator to pass array elements to Math.max
}

// Example usage:
const numbers1 = [3, 5, 7, 2, 8];
const largestNumber1 = findLargestUsingMathMax(numbers1);
console.log(largestNumber1); // Output: 8
