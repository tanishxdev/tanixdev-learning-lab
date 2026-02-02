// brute force
function sumArr1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// test
console.log(sumArr1([1, 2, 3, 4, 5]));

// better
function sumArr2(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  return arr.reduce((sum, current) => {
    const num = Number(current);

    if (isNaN(num)) {
      throw new Error(`Invalid array element: "${current}" is not a number`);
    }

    return sum + num;
  }, 0);
}

// test
console.log(sumArr2([1, 2, 3, 4, 5]));
