// Print numbers from 1 to 10 using a for loop.

console.log("print1To10");
function print1To10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

print1To10();

// Print even numbers between 1 and 50.
console.log("printEvenbetween1To50");
function printEvenbetween1To50() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenbetween1To50();

// Print numbers from 10 to 1 (reverse order).

console.log("printReverse1To10");
function printReverse1To10() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

printReverse1To10();

// Print the table of 5.
console.log("printTableOf5");
function printTableOf5() {
  for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
  }
}

printTableOf5();

// Calculate the sum of numbers from 1 to N (N given)
console.log("sunofN");
function sunofN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sunofN(5)); // 1 + 2 + 3 + 4 + 5 = 15

// Count how many numbers between 1 and 100 are divisible by 3.
console.log("countDivisibleBy3");
function countDivisibleBy3() {
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }
  console.log(count);
}

countDivisibleBy3(); // 1-10 : 3, 6, 9 = 3

// Print the characters of a string on separate lines.
console.log("charOfString");
function charOfString(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

charOfString("hello");

// Find the length of a string without using .length.
console.log("lengthOfString");
function lengthOfString(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  console.log(count);
}

lengthOfString("hello");

// Print the characters of a string in reverse order.
console.log("reverseCharOfString");
function reverseCharOfString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

reverseCharOfString("hello");

// Print all elements of an array using:
console.log("printElementOfArray");
function printElementOfArray(arr) {
  console.log("using for");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // using while

  console.log("using while");
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

printElementOfArray([1, 2, 3, 4, 5]);

// Print only positive numbers from an array.
console.log("onlyPositiveNumbers");
function onlyPositiveNumbers(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] > 0) {
      console.log(n[i]);
    }
  }
}

onlyPositiveNumbers([1, -2, 3, -4, 5]);
