// 21. Write a Program to count the occurrences of a character in a string in JavaScript?
function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("Tanish", "a"));
console.log(countChar("hello world", "l"));

// Using a for loop

function countCharForLoop(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count += 1;
  }
  return count;
}

console.log(countCharForLoop("Tanish", "a"));
console.log(countCharForLoop("hello world", "l"));

//  22. Write a Program to convert Celsius to Fahrenheit in JavaScript?

function tempConverterCtoF(cel) {
  return (cel * 9) / 5 + 32;
}

console.log(tempConverterCtoF(0));
console.log(tempConverterCtoF(100));

//  23. Write a Program to convert Fahrenheit to Celsius in JavaScript?

function tempConverterFtoC(fah) {
  return ((fah - 32) * 5) / 9;
}

console.log(tempConverterFtoC(32));
console.log(tempConverterFtoC(212));

// 24. Write a Program to sort an array in Ascending Order in JavaScript?
function sortArrayAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // swap the elements
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArrayAsc([5, 2, 9, 1, 5, 6]));

// 25. Write a Program to sort an array in Descending Order in JavaScript?
function sortArrayDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        // swap the elements
        let temp = arr[i]; // store the value of arr[i] in a temporary variable
        arr[i] = arr[j]; // assign the value of arr[j] to arr[i]
        arr[j] = temp; // assign the value of temp (which is the original value of arr[i]) to arr[j]
      }
    }
  }
  return arr;
}

console.log(sortArrayDesc([5, 2, 9, 1, 5, 6]));
