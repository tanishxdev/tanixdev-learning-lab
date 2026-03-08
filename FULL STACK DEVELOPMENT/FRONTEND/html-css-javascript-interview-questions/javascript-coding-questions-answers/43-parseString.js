// parse : JSON.parse() is a method in JavaScript that takes a JSON string and converts it into a JavaScript object. It is commonly used to parse data received from a server or to convert a JSON string into a usable format within your code.
// stringify : JSON.stringify() is a method in JavaScript that takes a JavaScript object and converts it into a JSON string. It is commonly used to prepare data for sending to a server or to convert a JavaScript object into a format that can be easily stored or transmitted.

// Example of JSON.parse()
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John
console.log(jsonObject.age); // Output: 30
console.log(jsonObject.city); // Output: New York

// Example of JSON.stringify()
const person = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
};

const jsonStr = JSON.stringify(person);
console.log(jsonStr); // Output: {"name":"Alice","age":25,"city":"Los Angeles"}
