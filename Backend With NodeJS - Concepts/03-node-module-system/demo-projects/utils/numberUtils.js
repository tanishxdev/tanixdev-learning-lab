function isEven(num) {
  return num % 2 === 0;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export { isEven, factorial };