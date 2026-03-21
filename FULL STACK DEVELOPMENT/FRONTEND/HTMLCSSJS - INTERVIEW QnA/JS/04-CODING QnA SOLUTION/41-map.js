const arr = [1, 2, 3, 4, 5];

const squareArr = arr.map(function square(num) {
  return num * num;
});

console.log(squareArr); // Output: [1, 4, 9, 16, 25]
