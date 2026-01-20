// Version 1

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// Version 2
function sumArray(arr) {
  // Step 1: Validate input
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // Step 2: Use reduce to accumulate sum
  return arr.reduce((accumulator, currentValue) => {
    // Step 3: Convert value to number (handles "2" → 2)
    const num = Number(currentValue);

    // Step 4: Validate number
    if (isNaN(num)) {
      throw new TypeError("Array must contain only numbers");
    }

    // Step 5: Add to total
    return accumulator + num;
  }, 0); // 0 handles empty array case
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);
