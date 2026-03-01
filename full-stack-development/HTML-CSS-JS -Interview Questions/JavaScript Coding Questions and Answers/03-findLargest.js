// Approach 1: Iterative (for loop)

function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([10, 15, 5, 20, 45]));

// Approach 2: Using Math.max
function findLargestUsingMathMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
}
console.log(findLargestUsingMathMax([10, 15, 5, 20, 45]));
