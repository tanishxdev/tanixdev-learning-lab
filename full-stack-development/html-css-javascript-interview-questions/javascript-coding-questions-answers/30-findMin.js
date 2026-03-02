// Approach 1: Using for loop

function findMinimum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMinimum([5, 2, 9, 1, 5, 6])); // Output: 1

// Approach 2: Using Math.min() with spread
function findMinimumSpread(arr) {
  return Math.min(...arr);
}

console.log(findMinimumSpread([5, 2, 9, 1, 5, 6])); // Output: 1
