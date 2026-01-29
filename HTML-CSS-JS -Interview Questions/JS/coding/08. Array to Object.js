// Approach 1 — Brute Force (Manual Assignment)

function convertArrayToObject(arr) {
  let result = {};

  // Manually assign each key-value pair
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].key] = arr[i].value;
  }

  return result;
}

const testArr1 = [
  { key: "name", value: "Alice" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

console.log(convertArrayToObject(testArr1));
// Output: { name: 'Alice', age: 30, city: 'New York' }

console.log(typeof convertArrayToObject(testArr1)); // Output: "object"

// Approach 2 — Better (Using forEach)
function convertArrayToObjectForEach(arr) {
  let result = {};

  arr.forEach((item) => {
    result[item.key] = item.value;
  });

  return result;
}

const testArr2 = [
  { key: "name", value: "Bob" },
  { key: "age", value: 25 },
  { key: "city", value: "Los Angeles" },
];

console.log(convertArrayToObjectForEach(testArr2));
// Output: { name: 'Bob', age: 25, city: 'Los Angeles' }

console.log(typeof convertArrayToObjectForEach(testArr2)); // Output: "object"

// Approach 3 — Optimal (Using reduce)
function convertArrayToObjectReduce(arr) {
  return arr.reduce((acc, item) => {
    acc[item.key] = item.value; 
    return acc;
  }, {});
}

const testArr3 = [
  { key: "name", value: "Charlie" },
  { key: "age", value: 28 },
  { key: "city", value: "Chicago" },
];

console.log(convertArrayToObjectReduce(testArr3));
// Output: { name: 'Charlie', age: 28, city: 'Chicago' }

console.log(typeof convertArrayToObjectReduce(testArr3)); // Output: "object"