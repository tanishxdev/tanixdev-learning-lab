// Approach 1 — Brute Force (Remove Falsy Values by Building New Array)
function removeFalsyValuesBrute(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

const testArr1 = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];
console.log(removeFalsyValuesBrute(testArr1)); // Output: [1, 2, 3, 'hello']

// Approach 3 — Optimal (filter with Boolean)
function removeFalsyValuesOptimal(arr) {
  return arr.filter(Boolean);
}

const testArr2 = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];
console.log(removeFalsyValuesOptimal(testArr2)); // Output: [1, 2, 3, 'hello']
