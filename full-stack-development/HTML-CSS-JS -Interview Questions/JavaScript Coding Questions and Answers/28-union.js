// Problem 28: Find the Union of Two Arrays in JavaScript

function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [3, 4, 5]));
