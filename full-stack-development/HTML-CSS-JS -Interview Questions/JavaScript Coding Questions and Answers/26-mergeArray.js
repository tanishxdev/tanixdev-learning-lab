// Approach 1: Using concat() method

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2); // This will merge the two arrays but won't sort them
  // return arr1.concat(arr2).sort((a, b) => a - b); // This will merge the two arrays and sort them in ascending order
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Approach 2: Using spread operator

function mergeArraysSpread(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArraysSpread([1, 2, 3], [4, 5, 6]));
