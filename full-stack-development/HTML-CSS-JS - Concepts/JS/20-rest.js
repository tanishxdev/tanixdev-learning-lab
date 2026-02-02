// spread operator

// with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combine = [...arr1, ...arr2];
console.log(combine);

const copyOfArr1 = [...arr1];
console.log(copyOfArr1);

const extendedArr1 = [...arr1, 4, 5, ...arr2];
console.log(extendedArr1);

// spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const objectMerged = { ...obj1, ...obj2 };
console.log(objectMerged);

// spread with function
function sum(a, b, c) {
  return a + b + c;
}
const args = [1, 2, 3];
console.log(sum(...args));

// built in function
const nums = [5, 2, 8, 1, 9];
console.log(Math.max(...nums));
console.log(Math.min(...nums));

// REST
function multiply(multiplier, ...numbers) {
  return numbers.map((n) => n * multiplier);
}

console.log(multiply(2, 1, 2, 3, 4)); // [2, 4, 6, 8]
