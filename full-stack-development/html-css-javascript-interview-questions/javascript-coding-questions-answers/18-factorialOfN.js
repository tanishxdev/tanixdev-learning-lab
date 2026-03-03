// Factorial of a number is the product of all positive integers less than or equal to that number. It is denoted by n! where n is the number. For example:
// 3!  = 3 * 2 * 1 = 6
//  7!  = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// recursive approach

function factorialRecursive(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorialRecursive(5)); // Output: 120
