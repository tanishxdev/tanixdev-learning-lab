// 3. Basic Callback Example (Synchronous)
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Tanish", sayBye);

// 4. Callback in Asynchronous Code
console.log("Start");

setTimeout(function () {
  console.log("inside timeout");
}, 1000);

console.log("End");

// 4. Callback in synchronous Code

function sayHi() {
  console.log("Hi");
}

sayHi();

console.log("Bye");
