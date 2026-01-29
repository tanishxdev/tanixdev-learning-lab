// Approach 1 — Brute Force
function sumArray(arr) {
  let sum = 0;

  // Loop through each element once
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // accumulate sum
  }

  return sum;
}

const arr = [1, 2, 3, 4, 5];
const sum = sumArray(arr);
console.log(sum); // Output: 15

// Approach 3 — Optimal (Using reduce)

function sumArrayOptimal(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const optimalSum = sumArrayOptimal(arr);
console.log(optimalSum); // Output: 15
