function longestSubArrSumZero(arr) {
  let n = arr.length;

  let maxLength = 1; // at least one element
  let currLength = 1; // current length of subarray
  let sum = arr[0]; // initialize sum with first element

  // check if the first element is zero
  if (sum === 0) {
    maxLength = 1;
  }

  // iterate through the array
  for (let i = 1; i < n; i++) {
    sum += arr[i]; // update sum

    // if sum is zero, update maxLength
    if (sum === 0) {
      currLength = i + 1;

      // update maxLength if current length is greater
      if (currLength > maxLength) {
        maxLength = currLength;
      }
    }
  }

  // return the maximum length of subarray with sum zero
  return maxLength;
}

// test cases
console.log(longestSubArrSumZero([1, -1, 3, 2, -2, -3, 3]));
