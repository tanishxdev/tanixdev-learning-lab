// Primitive Data Types (Stored by Value)
let num1 = 42; // Number

let num2 = num1; // Copying the value

num2 = 100; // Changing num2 does not affect num1

/*

WHY?

In JavaScript, primitive data types (such as Number, String, Boolean, null, undefined, and Symbol) are stored directly in the variable's memory location. When you assign a primitive value to another variable, a copy of that value is made. Therefore, changes to the new variable do not affect the original variable.

memory Diagram:

num1 --> [ 42 ]
num2 --> [ 100 ]
*/

// Reference Data Types (Stored by Reference)
let obj1 = { name: "Alice" }; // Object

let obj2 = obj1; // Copying the reference

obj2.name = "Bob"; // Changing obj2 affects obj1

/*

WHY?

In JavaScript, reference data types (such as Objects, Arrays, and Functions) are stored by reference. When you assign an object to another variable, you are copying the reference (or address) of that object in memory, not the actual object itself. Therefore, changes made through one reference will affect the original object.

memory Diagram:

obj1 ─┐
      └──► { name: "Bob" }
obj2 ─┘

*/

// example

function update(users) {
  users.name = "Rahul";
}

let user1 = { name: "Tanish" };

update(user1);

/*

// WHAT and WHY?

After calling the update function, user1's name property will be "Rahul". This is because objects are passed by reference in JavaScript. When we pass user1 to the update function, we are passing a reference to the same object in memory. Therefore, any changes made to the object inside the function will reflect on the original object outside the function.
*/

console.log(user1.name); // Output: "Rahul"
