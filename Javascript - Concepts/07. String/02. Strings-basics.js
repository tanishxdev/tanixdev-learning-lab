// Create using Literals - Recommended

let s1 = 'single quote string';
let s2= "double quote string";

console.log(s1);
console.log(s2);

// Create using Constructor
let s3 = new String('string using constructor');
console.log(s3);

// Template Literals (String Interpolation)
let username = 'John';
let age = 30;
let message = `My name is ${username} and I'm ${age} years old.`;
console.log(message);

// Empty String
let emptyString = '';
console.log(emptyString);

// Multiline Strings (ES6 and later)
let multilineString = `Line 1
Line 2
Line 3`;
console.log(multilineString);

// Basic Operations on JavaScript Strings
let str1 = "Hello";
let str2 = "JavaScript";

// 1. Finding the length of a String
console.log("\nLength of the string:", str1.length);

// 2. String Concatenation
console.log("\nString concatenation:")
console.log(str1 + " " + str2);
console.log(str1.concat(" ", str2));
console.log(`${str1} ${str2}`);

// 3. Escape Characters
console.log("\n3. Escape Characters:");

let esc = "He said \"JavaScript is awesome\"";
console.log(esc);

let path = "C:\\Users\\Tanish\\Desktop";
console.log(path);

// 4. Breaking Long Strings
console.log("\n4. Breaking Long Strings:");

let longStr =
  "This is a very long string that can be " +
  "broken across multiple lines using concatenation.";

console.log(longStr);

let longStrTemplate = `
This is another long string
written across multiple lines
using template literals.
`;

console.log(longStrTemplate);

// 5. Find Substring of a String
console.log("\n5. Substring:");

console.log(str1.substring(0, 5)); 
console.log(str1.slice(0, 5)); 

// 6. Convert String to Uppercase and Lowercase
console.log("\n6. Case Conversion:");

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// 7. String Search in JavaScript
console.log("\n7. String Search:");
console.log(str1.indexOf("World"));   // returns index 7
console.log(str1.includes("Hello"));  // true
console.log(str1.startsWith("Hell")); // true
console.log(str1.endsWith("!"));      // true

// 8. String Replace in JavaScript
console.log("\n8. Replace:");

let text = "JavaScript is great. JavaScript is fun.";
console.log(text)
console.log(text.replace("JavaScript", "JS"));       // replaces first only
console.log(text.replaceAll("JavaScript", "JS"));    // replaces all (ES2021+)

// 9. Trimming Whitespace from String
console.log("\n9. Trim:");

let messy = "    JavaScript    ";
console.log("Original:", messy);
console.log("trim():", messy.trim());
console.log("trimStart():", messy.trimStart());
console.log("trimEnd():", messy.trimEnd())

// 10. Access Characters from String
console.log("\n10. Access Characters:");

console.log(str1[0]);           // 'H'
console.log(str1.charAt(1));    // 'e'
console.log(str1.at(-1));       // '!' last char

// 11. String Comparison in JavaScript
console.log("\n11. String Comparison:");

console.log("apple" === "apple");        // true
console.log("apple" > "banana");         // false (lexical order)
console.log("cat".localeCompare("dog")); // -1 (means cat < dog)

// 12. Passing JavaScript String as Objects
console.log("\n12. String Objects:");

let primitive = "Hello";
let objectStr = new String("Hello");

console.log(typeof primitive);  // string
console.log(typeof objectStr);  // object

console.log(primitive == objectStr);   // true (value compared)
console.log(primitive === objectStr);  // false (type differs)