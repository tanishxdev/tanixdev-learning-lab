function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If num is divisible by any number between 2 and sqrt(num), it's not prime
  }

  return true; // If num is not divisible by any number, it's prime
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
