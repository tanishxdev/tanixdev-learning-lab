# CREATING OBJECTS IN JAVASCRIPT

**(Complete Notes with Theory + Intuition + Examples)**

JavaScript allows multiple ways to create objects.
Each method has its own use-case, behaviour, and performance characteristics.

---

# 1. Concept: What is an Object?

* An object is a **collection of key–value pairs**.
* Keys are property names (string or symbol).
* Values can be:

  * Primitive (string, number, boolean)
  * Object
  * Function (called a method)

Objects allow grouping **data + behaviour** together.

---

# 2. Why Do We Need Different Ways to Create Objects?

Because each method solves a different need:

| Method               | When used                       |
| -------------------- | ------------------------------- |
| Object Literal `{}`  | Quick creation, simple objects  |
| Constructor Function | Create multiple similar objects |
| Object.create()      | Prototype-based inheritance     |
| ES6 Classes          | Clean OOP-style syntax          |

---

# 3. Creating Objects Using a Constructor Function

(This is old-style OOP but still used in many codebases)

### Intuition

A constructor function behaves like a blueprint.
Using `new` creates new copies (instances) with their own property values.

### Example

```js
// Constructor function (blueprint)
function Vehicle(name, maker, engine) {
    // 'this' refers to the new object being created
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}

// Create an object using new keyword
let car = new Vehicle('GT', 'BMW', '1998cc');

// Access properties
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);
```

### Output

GT
BMW
1998cc

### Notes

* Constructor functions start with **capital letters** (convention).
* `new` keyword does 4 things automatically:

  1. Creates an empty object.
  2. Links object to prototype.
  3. Sets `this` to the new object.
  4. Returns the newly created object.

### When to use?

When you want to create **many objects of same structure**.

---

# 4. Creating Objects Using Object Literals `{}`

(Most common, simplest, fastest)

### Example

```js
let car = {
    name: 'GT',
    maker: 'BMW',
    engine: '1998cc'
};

console.log(car.name);       // dot notation
console.log(car['maker']);   // bracket notation
```

### Output

GT
BMW

### Adding new properties later

```js
car.brakesType = 'All Disc';
console.log(car);
```

### Output

{ name: 'GT', maker: 'BMW', engine: '1998cc', brakesType: 'All Disc' }

---

# 5. Adding Methods to an Object

Methods are functions inside objects.

### Example (method at creation)

```js
let car = {
    name: 'GT',
    maker: 'BMW',
    engine: '1998cc',
    
    start: function() {
        console.log('Starting the engine...');
    }
};

car.start();
```

### Add method later

```js
car.stop = function() {
    console.log('Applying Brake...');
};

car.stop();
```

### Output

Starting the engine...
Applying Brake...

### Notes

* Methods allow bundling behaviour with data
* Good for modelling real-world entities

---

# 6. Creating Objects Using `Object.create()`

This creates a new object using an existing object as a **prototype**.

### Intuition

Used for prototype-based inheritance.

### Example

```js
const coder = {
    isStudying: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};

// 'me' inherits from coder
const me = Object.create(coder);

me.name = 'Mukul';
me.isStudying = true;

me.printIntroduction();
```

### Output

My name is Mukul. Am I studying?: true

### Notes

* coder becomes the prototype of me
* me can access coder’s methods
* Very memory-efficient due to shared behaviour

---

# 7. Creating Objects Using ES6 Classes

Modern, cleaner syntax for constructor functions.

### Example

```js
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

// Creating object
let car1 = new Vehicle('GT', 'BMW', '1998cc');

console.log(car1.name);
```

### Output

GT

### Notes

* Syntactic sugar over prototype-based inheritance
* Clean, readable
* Best for building modular, large applications

---

# 8. Comparison of All Object Creation Methods

| Method               | Pros                 | Cons                          | Use Case                  |
| -------------------- | -------------------- | ----------------------------- | ------------------------- |
| Object Literal       | Fast, simple         | Not reusable for many objects | Small objects             |
| Constructor Function | Reusable, OOP-like   | Old syntax                    | Multiple object instances |
| Object.create()      | Best for inheritance | Less readable                 | Prototype-based designs   |
| ES6 Class            | Cleanest, modern     | Slightly abstract             | Large applications, OOP   |

---

# 9. Interview-Important Notes

1. `new` keyword performs object creation + prototype linking.
2. Constructor functions are the backbone of pre-ES6 OOP.
3. `Object.create()` is used for prototype inheritance.
4. Classes are syntactic sugar over prototypal inheritance.
5. Objects created from classes still use prototype chaining internally.

---

# 10. Mini Interview Questions

1. Difference between constructor function and class?
2. How does `Object.create()` work internally?
3. Why do we use `this` inside constructor functions?
4. How does prototype inheritance work?
5. Which is faster: object literal or constructor?
6. What happens when you call constructor without `new`?
7. Difference between method added in constructor vs prototype?

---