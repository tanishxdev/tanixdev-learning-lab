function arrayUppercase(arr) {
  const uppercaseArr = [];

  for (let i = 0; i < arr.length; i++) {
    uppercaseArr[i] = arr[i].toUpperCase();
  }
  return uppercaseArr;
}
function arrayUppercaseMap(arr) {
  return arr.map((x) => x.toUpperCase());
}

console.log(arrayUppercase(["hello", "world"])); // Output: ["HELLO", "WORLD"]
console.log(arrayUppercaseMap(["hello", "world"])); // Output: ["HELLO", "WORLD"]
