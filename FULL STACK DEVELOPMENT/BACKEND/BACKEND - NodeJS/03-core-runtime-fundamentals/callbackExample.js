function greet(name, callback) {
  console.log(`Hello, ${name}!`);

  // Invoke the callback function after greeting
  callback();
}

function sayGoodBye() {
  console.log("Goodbye!");
}

// Use the greet function with a callback
greet("Alice", sayGoodBye);

// DRY RUN (Step-by-Step):
// greet("Alice", sayGoodBye);
//
// STEP 1: Function Call
// - greet() is called with name="Alice" and callback=sayGoodBye
//
// STEP 2: Execute greet() body
// - console.log(`Hello, Alice!`);
// - Output: "Hello, Alice!"
//
// STEP 3: Invoke callback function
// - callback() is executed (which is sayGoodBye function)
//
// STEP 4: Execute sayGoodBye() body
// - console.log("Goodbye!");
// - Output: "Goodbye!"
//
// FINAL OUTPUT:
// Hello, Alice!
// Goodbye!
