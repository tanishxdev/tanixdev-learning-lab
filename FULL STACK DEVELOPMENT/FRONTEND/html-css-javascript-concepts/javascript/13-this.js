// 4. Object Method Context : When a function is called as a method of an object, the keyword this refers to the object that is calling the method.

// In simple words:

// this points to who is calling the function
// In object.method(), this === object

// Define an object named `person`
const person = {
  // Property: name
  name: "Alice",

  // Property: age
  age: 30,

  // Method: greet
  // This function is called using person.greet()
  greet: function () {
    // `this` refers to the object that called this method
    // Here, `this` === person
    console.log(`Hello, I'm ${this.name}`);
  },

  // Method: getInfo
  getInfo: function () {
    // Accessing object properties using `this`
    return `${this.name} is ${this.age} years old`;
  },
};

// Method call using the object
person.greet();
// Output: Hello, I'm Alice

console.log(person.getInfo());
// Output: Alice is 30 years old

// 5. Arrow Functions and this

// Most important rule:
// Arrow functions DO NOT have their own this.
// They inherit this from the surrounding scope.

const obj = {
  name: "Bob",
  regularMethod: function () {
    console.log("Regular:", this.name);

    const innerArrow = () => {
      // In arrow functions, `this` refers to the surrounding context
      console.log("Arrow inside regular:", this.name);
    };

    innerArrow();
  },

  arrowMethod: () => {
    // In arrow functions defined as object methods, `this` does NOT refer to the object
    console.log("Arrow Method:", this.name); // 'this' here is not obj
  },
};

obj.regularMethod(); // Regular: Bob
obj.arrowMethod(); // Arrow Method: undefined

// 6. Constructor Functions
// Concept

// When a function is called with new:

// A new empty object is created
// this points to that new object
// Properties are attached to it

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const person1 = new Person("Charlie", 25);
const person2 = new Person("Diana", 28);

person1.greet();
person2.greet();
