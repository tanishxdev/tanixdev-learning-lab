function maxSubSum(arr) {
  let n = arr.length;
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < n; i++) {
    currSum += arr[i];

    if (currSum < 0) {
      currSum = 0;
    }

    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}
