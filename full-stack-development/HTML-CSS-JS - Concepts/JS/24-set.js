// creating Sets
const emptySet = new Set();
const numbersSet = new Set([1, 2, 3, 4, 5]);
const stringSet = new Set(["apple", "banana", "cherry"]);
const charSet = new Set("hello");

console.log(emptySet);
console.log(numbersSet);
console.log(stringSet);
console.log(charSet);

// adding,
numbersSet.add(6);
console.log(numbersSet);

// checking for existence
numbersSet.add(3); // duplicate, won't be added
console.log(numbersSet);

// deleting
numbersSet.delete(2);
console.log(numbersSet);

// clearing a set
const tempSet = new Set([1, 2, 3]);
tempSet.clear();
console.log(tempSet);

// iterating over a set
const fruits = new Set(["apple", "banana", "cherry"]);

// using for...of loop
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit}`);
});
