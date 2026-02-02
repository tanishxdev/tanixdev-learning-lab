// Approach 1 — Brute Force (All Pairs)
function maxDifferenceBruteForce(arr) {
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = arr[j] - arr[i];
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }

  return maxDiff;
}

const testArr1 = [2, 1, 5, 3];
console.log(maxDifferenceBruteForce(testArr1)); // Output: 4

// Approach 2 — Better (Sort First)
function maxDifferenceSort(arr) {
  if (arr.length < 2) return 0;

  const sortedArr = [...arr].sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1] - sortedArr[0];
}

const testArr2 = [2, 1, 5, 3];
console.log(maxDifferenceSort(testArr2)); // Output: 4

// Approach 3 — Optimal (Single Pass Min & Max)

function maxDifferenceOptimal(arr) {
  let min = arr[0];
  let max = arr[0];

  // Single traversal to find min and max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max - min;
}

const testArr3 = [2, 1, 5, 3];
console.log(maxDifferenceOptimal(testArr3)); // Output: 4
