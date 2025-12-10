// 3. Creating Objects Using a Constructor Function

// Constructor function (blueprint)
function Vehicle(name, maker, engine) {
    // // 'this' refers to the new object being created
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}

// Create an object using new keyword
let car = new Vehicle("GT", "BMW", "Petrol");

// Print the object
console.log(car);

// Access properties
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);

// Change properties
car.engine = "Diesel";
console.log(car.engine);

// When to use?
// When you want to create many objects of same structure.

// 4. Creating Objects Using Object Literals {}

let person = {
    username: "John",
    age: 21,
    isMarried: false
};

console.log(person);
console.log(person["username"]);

// adding properties
person.isDevloper = true;
console.log(person);


// 5. Adding Methods to an Object
// Methods are functions inside obects.

let person2 = {
    username: "Doe",
    age: 21,
    isMarried: false,
    greet: function() {
        console.log(`Hello ${this.username}`);
    }
};

person2.greet();

// 6. Creating Objects Using Object.create()
const coder = {
    isStudying: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};

// 'me' inherits from coder
const me = Object.create(coder);

me.name = 'Smith';
me.isStudying = true;

me.printIntroduction();

// 7. Creating Objects Using ES6 Classes

class Vehicle2 {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

// Creating object
let car1 = new Vehicle2('GT', 'BMW', '1998cc');

console.log(car1);
