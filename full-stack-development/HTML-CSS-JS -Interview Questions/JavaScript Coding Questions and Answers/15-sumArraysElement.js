// Approach 1: Using for loop

function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15

// Approach 2: Using reduce

function sumArrayReducer(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}

console.log(sumArrayReducer([1, 2, 3]));
