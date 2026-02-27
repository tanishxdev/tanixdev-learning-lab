function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([10, 15, 5, 20, 45]));
console.log(findLargest([10, 15, 5, 20, -45]));
console.log(findLargest([1, 1, 1, 1, 1, 1]));
console.log(findLargest([0, 0, 0, 0, 0, 0]));
console.log(findLargest([-5, -1, -10, -50]));
