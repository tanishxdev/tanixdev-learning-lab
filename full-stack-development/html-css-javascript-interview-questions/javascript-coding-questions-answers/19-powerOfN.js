function powerOfN(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

// recursive approach

function powerOfNRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * powerOfNRecursive(base, exponent - 1);
}

console.log(powerOfN(2, 3));
console.log(powerOfNRecursive(2, 3));
