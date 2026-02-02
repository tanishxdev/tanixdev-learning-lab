// Approach 1 — Brute Force (Check All Divisors)

function isPrimeBrute(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Found a divisor, not prime
    }
  }
  return true; // No divisors found, is prime
}

const testNum1 = 7;
console.log(isPrimeBrute(testNum1)); // Output: true

// Approach 2 — Better (Check up to n/2)

function isPrimeBetter(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false; // Found a divisor, not prime
    }
  }
  return true; // No divisors found, is prime
}

const testNum2 = 5;
console.log(isPrimeBetter(testNum2)); // Output: true

// Approach 3 — Optimal (Check up to √n)

function isPrimeOptimal(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check for factors from 2 to √n
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false; // Found a divisor, not prime
    }
  }
  return true; // No divisors found, is prime
}

const testNum3 = 29;
console.log(isPrimeOptimal(testNum3)); // Output: true
