// Problem 5: Write a Program to use a callback function

function greet(name, callback) {
  callback(`Hello, ${name}!`);
}

greet("Tanish", function (message) {
  console.log(message);
});
