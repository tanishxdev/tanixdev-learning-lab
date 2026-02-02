// In JavaScript, the scope of a variable is determined at compile time based on the physical structure of the code.

let x = 10; // Global scope

function outerFunction() {
  let y = 20; // Local scope of outerFunction

  function innerFunction() {
    console.log(x); // Accessing global variable
    console.log(y); // Accessing variable from outerFunction's scope
  }

  innerFunction();
}

outerFunction();

/*

// WHAT and WHY?

The output of the above code will be:
10
20

This happens because of lexical scoping. The innerFunction can access variables from its own scope, the scope of outerFunction, and the global scope. When innerFunction is defined, it "remembers" the environment in which it was created, allowing it to access variables like x and y even when called later.

*/

// Lexical vs Execution (Common Confusion)

function outer() {
  let a = 5;

  return function inner() {
    console.log(a);
  };
}

let innerFunc = outer();
innerFunc();

/*

// WHAT and WHY?

The output of the above code will be:
5

This is because of lexical scoping. The inner function retains access to the variable 'a' from its lexical scope (the scope in which it was defined) even after outer has finished executing. This demonstrates that functions in JavaScript form closures, capturing the surrounding state at the time of their creation.

*/

// Another Example with Shadowing

let z = 50; // Global scope

function shadowExample() {
  let z = 100; // Local scope shadows global z

  function display() {
    console.log(z); // Accessing local z
  }

  display();
}

shadowExample();

/*

// WHAT and WHY?

The output of the above code will be:
100

This occurs because of variable shadowing in lexical scoping. The local variable 'z' inside shadowExample shadows the global variable 'z'. When display is called, it accesses the nearest 'z' in its lexical scope, which is the local one with the value 100.

*/

// Interview Trap Example

let a = 100;
function test() {
  console.log(a);
}
function wrapper() {
  let a = 50;
  test();
}
wrapper(); // What will this output?

/*

// WHAT and WHY?
The output of the above code will be:
100

This is because of lexical scoping. The function test is defined in the global scope, where 'a' is 100. When test is called inside wrapper, it does not have access to the 'a' defined in wrapper's scope (which is 50) because functions in JavaScript are lexically scoped. Therefore, test refers to the 'a' in its own lexical scope, which is the global 'a' with the value 100.

*/
