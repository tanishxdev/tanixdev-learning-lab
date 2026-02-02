// Rule 1: Global Context

console.log(this);
console.log(typeof this); // WHAT is logged here?

// Browser → window
// Strict mode → undefined

// Rule 2: Regular Function Call

function show() {
  console.log(this);
}
show(); // WHAT is logged here?

// Browser → window
// Strict mode → undefined

// Rule 3: Method Call (Object)

const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // WHAT is logged here?

// Common Interview Trap (Very Important)

const user2 = {
  name: "Bob",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

user2.greet();

// WHAT is logged here?
// Answer: undefined (or error in strict mode)

// Explanation: In the inner function, 'this' does not refer to 'user2' because it's a regular function call. Hence, 'this' defaults to the global object (or undefined in strict mode).

// WHAT is regular function call?
// A function that is not called as a method of an object.

// means the function is called without any context object, like in show() above.
