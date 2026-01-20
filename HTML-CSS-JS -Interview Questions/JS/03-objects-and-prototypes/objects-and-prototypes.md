# JavaScript Interview Questions and Answers

---

**Topic : JavaScript Objects and Prototypes**

---

## 16. How do you create an object in JavaScript?

---

### 1. Concept

An **object** in JavaScript is a collection of **key–value pairs**, where:

* Keys are **strings (or symbols)**
* Values can be **any data type** (including functions)

Objects are used to represent **real-world entities**, group related data, and model behavior.

JavaScript objects are **dynamic**:

* Properties can be added or removed at runtime

---

### 2. Creating an Object Using Object Literal (Most Common)

```javascript
const user = {
  name: "Tanish",
  age: 21,
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(user.name);      // Tanish
console.log(user.greet());   // Hello, Tanish
```

Explanation:

* `{}` creates a new object
* Properties are defined directly
* This is the **simplest and most used** way

---

### 3. Creating an Object Using `new Object()`

```javascript
const user = new Object();

user.name = "Tanish";
user.age = 21;

console.log(user);
```

Notes:

* Functionally same as object literal
* Rarely used in modern JavaScript
* Interviewers expect you to **prefer object literals**

---

### 4. Creating an Object Using a Constructor Function

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Tanish", 21);
const user2 = new User("Rahul", 22);

console.log(user1.name); // Tanish
```

Explanation:

* `new` creates an empty object
* `this` refers to that new object
* Constructor functions were common **before ES6 classes**

---

### 5. Creating an Object Using ES6 Classes

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const user = new User("Tanish", 21);
console.log(user.greet());
```

Important:

* Classes are **syntactic sugar** over constructor functions
* Under the hood, JavaScript still uses **prototypes**

---

### 6. Creating an Object Using `Object.create()`

```javascript
const userProto = {
  greet() {
    return "Hello";
  }
};

const user = Object.create(userProto);
user.name = "Tanish";

console.log(user.greet()); // Hello
```

Explanation:

* Creates a new object
* Sets the provided object as its **prototype**
* Useful for **prototypal inheritance**

---

### 7. Factory Function (Very Common in Functional Style)

```javascript
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, ${name}`;
    }
  };
}

const user = createUser("Tanish", 21);
console.log(user.greet());
```

Advantages:

* No `new`
* No `this` confusion
* Easier to test

---

### 8. Comparison Table (Interview Friendly)

| Method               | Uses `new` | Uses `this` | Common Today |
| -------------------- | ---------- | ----------- | ------------ |
| Object literal       | No         | Optional    | Very common  |
| `new Object()`       | Yes        | No          | Rare         |
| Constructor function | Yes        | Yes         | Legacy       |
| ES6 Class            | Yes        | Yes         | Very common  |
| `Object.create()`    | No         | No          | Advanced     |
| Factory function     | No         | No          | Very common  |

---

### 9. Common Interview Traps

```javascript
const user = {};
user.age = 21;
user.age = 22;
```

Objects are **mutable** by default.

To prevent modification:

```javascript
Object.freeze(user);
```

---

### 10. Interview-Ready Summary

Objects in JavaScript can be created using object literals, constructor functions, ES6 classes, `Object.create()`, or factory functions. Object literals are the most common and simplest approach. ES6 classes provide a cleaner syntax for constructor-based object creation, while `Object.create()` is used for prototypal inheritance. JavaScript objects are dynamic and mutable by default.

---

### 11. Quick Practice Interview Questions

1. What is the most common way to create an object?
2. Difference between constructor function and factory function?
3. What does `new` do internally?
4. Are JavaScript classes real classes?
5. When would you use `Object.create()`?
6. Can object properties be added at runtime?
7. How do you prevent object modification?

---

## 17. What are prototypes in JavaScript?

---

### 1. Concept

In JavaScript, **every object has an internal link to another object**, called its **prototype**.

This prototype is used for **property and method lookup**.

In simple words:

> If a property is not found on an object, JavaScript looks for it on the object’s prototype.

This mechanism is called **prototypal inheritance**.

---

### 2. Why Prototypes Exist

JavaScript does not use classical class-based inheritance internally.
Instead, it uses **objects inheriting from other objects**.

Prototypes allow:

* Method sharing
* Memory efficiency
* Dynamic inheritance

---

### 3. Prototype Chain (Very Important)

When accessing a property:

1. JavaScript checks the object itself
2. If not found → checks its prototype
3. Continues up the chain
4. Stops at `null`

```javascript
const obj = {};
```

Prototype chain:

```
obj → Object.prototype → null
```

---

### 4. Accessing the Prototype

#### Using `Object.getPrototypeOf()`

```javascript
const user = {};
console.log(Object.getPrototypeOf(user) === Object.prototype); // true
```

#### Using `__proto__` (Not Recommended)

```javascript
console.log(user.__proto__ === Object.prototype); // true
```

---

### 5. Function Prototypes (Constructor Functions)

Every function has a `prototype` property.

```javascript
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const user1 = new User("Tanish");
console.log(user1.greet()); // Hello Tanish
```

Explanation:

* `greet` is stored once in memory
* All instances share it via prototype

---

### 6. Prototypes with ES6 Classes

```javascript
class User {
  greet() {
    return "Hello";
  }
}

const user = new User();
```

Behind the scenes:

* Methods are stored on `User.prototype`
* Classes are **syntactic sugar**

---

### 7. Prototype Lookup Example

```javascript
const arr = [];

arr.push(10);
```

Lookup flow:

* `arr` does not have `push`
* JS checks `Array.prototype`
* Finds `push`
* Executes it

---

### 8. Common Interview Traps

```javascript
function Person() {}

Person.prototype.age = 20;

const p1 = new Person();
const p2 = new Person();

p1.age = 30;

console.log(p2.age); // 20
```

Why?

* `p1.age` creates its own property
* Prototype property remains unchanged

---

### 9. Prototype vs `__proto__` vs `prototype`

| Term                      | Meaning                          |
| ------------------------- | -------------------------------- |
| `prototype`               | Property of constructor function |
| `__proto__`               | Internal link to prototype       |
| `Object.getPrototypeOf()` | Standard way to access prototype |

---

### 10. Interview-Ready Summary

Prototypes are JavaScript’s mechanism for inheritance. Every object has a hidden internal link to another object called its prototype. When a property or method is not found on an object, JavaScript looks it up the prototype chain. Constructor functions and ES6 classes use prototypes to share methods efficiently across instances.

---

### 11. Quick Practice Interview Questions

1. What is a prototype in JavaScript?
2. What is the prototype chain?
3. Difference between `prototype` and `__proto__`?
4. How do classes use prototypes internally?
5. Why are prototypes memory efficient?
6. What happens when a property is not found?
7. How does JavaScript stop prototype lookup?

---

## 18. Explain prototypal inheritance

---

### 1. Concept

**Prototypal inheritance** is the mechanism by which **one object inherits properties and methods from another object via the prototype chain**.

In simple words:

> Objects in JavaScript inherit directly from other objects, not from classes.

When you access a property:

* JavaScript looks on the object itself
* If not found, it looks on its **prototype**
* This continues up the **prototype chain**

---

### 2. Why Prototypal Inheritance Exists

JavaScript was designed to be:

* Lightweight
* Flexible
* Object-based (not class-based internally)

Prototypal inheritance provides:

* Method sharing
* Memory efficiency
* Dynamic behavior at runtime

---

### 3. Basic Inheritance Using `Object.create()`

```javascript
const animal = {
  speak() {
    return "Animal speaks";
  }
};

const dog = Object.create(animal);

dog.bark = function () {
  return "Dog barks";
};

console.log(dog.speak()); // Animal speaks
console.log(dog.bark());  // Dog barks
```

Explanation:

* `dog` does not have `speak`
* JavaScript looks at `dog`’s prototype → `animal`
* Method is found and executed

This is **pure prototypal inheritance**.

---

### 4. Inheritance Using Constructor Functions

```javascript
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} speaks`;
};

function Dog(name) {
  this.name = name;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return "Bark";
};

const d = new Dog("Bruno");

console.log(d.speak()); // undefined speaks ❌ (see note)
console.log(d.bark());  // Bark
```

Fix (call parent constructor):

```javascript
function Dog(name) {
  Animal.call(this, "Dog");
  this.name = name;
}
```

Key points:

* `Object.create()` sets prototype chain
* `call()` copies parent properties

---

### 5. Inheritance Using ES6 Classes (Syntax Sugar)

```javascript
class Animal {
  speak() {
    return "Animal speaks";
  }
}

class Dog extends Animal {
  bark() {
    return "Dog barks";
  }
}

const d = new Dog();

console.log(d.speak()); // Animal speaks
console.log(d.bark());  // Dog barks
```

Important:

* `extends` uses prototypes internally
* JavaScript still uses prototype chain

---

### 6. Prototype Chain Visualization (Interview Explanation)

```
dog
 ↓
Dog.prototype
 ↓
Animal.prototype
 ↓
Object.prototype
 ↓
null
```

Property lookup follows this exact order.

---

### 7. Method Overriding

```javascript
class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Bark";
  }
}

const d = new Dog();
console.log(d.speak()); // Bark
```

Rule:

* Child method overrides parent method
* Parent method still exists in prototype chain

---

### 8. Common Interview Traps

```javascript
const parent = { value: 10 };
const child = Object.create(parent);

child.value = 20;

console.log(parent.value); // 10
console.log(child.value);  // 20
```

Why?

* Assignment creates a **new property on child**
* Prototype property remains unchanged

---

### 9. Difference: Classical vs Prototypal Inheritance

| Aspect           | Classical | Prototypal |
| ---------------- | --------- | ---------- |
| Inheritance unit | Class     | Object     |
| Flexibility      | Low       | High       |
| Runtime changes  | Hard      | Easy       |
| JS uses          | ❌         | ✅          |

---

### 10. Interview-Ready Summary

Prototypal inheritance is JavaScript’s core inheritance model where objects inherit directly from other objects via the prototype chain. When a property is not found on an object, JavaScript looks it up on its prototype and continues until `null`. Constructor functions and ES6 classes both rely on prototypes internally, making prototypal inheritance efficient and flexible.

---

### 11. Quick Practice Interview Questions

1. What is prototypal inheritance?
2. How does `Object.create()` work?
3. Difference between `extends` and prototypes?
4. Why do JavaScript classes still use prototypes?
5. How does method overriding work?
6. What happens when a property is not found?
7. Why is prototypal inheritance memory efficient?

---

## 19. What is the difference between object literals and constructor functions?

---

### 1. Concept

Both **object literals** and **constructor functions** are ways to **create objects** in JavaScript, but they differ in:

* How objects are created
* How memory is used
* How reusable the pattern is
* How inheritance works

Interviewers ask this to check your understanding of **object creation patterns** and **prototypes**.

---

### 2. Object Literal

Object literal creates **a single object directly** using `{}`.

```javascript
const user = {
  name: "Tanish",
  age: 21,
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(user.greet()); // Hello, Tanish
```

Key characteristics:

* Simple and readable
* Best for **single objects**
* Methods are **recreated for each object** if duplicated manually

---

### 3. Constructor Function

Constructor functions are used to **create multiple similar objects** using `new`.

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

const user1 = new User("Tanish", 21);
const user2 = new User("Rahul", 22);

console.log(user1.greet());
console.log(user2.greet());
```

Key characteristics:

* Blueprint-style object creation
* Uses `this` and `new`
* Methods are shared via **prototype**

---

### 4. Memory Difference (Very Important)

#### Object Literal (if duplicated manually)

```javascript
const user1 = {
  greet() {}
};

const user2 = {
  greet() {}
};
```

* `greet` exists **twice in memory**

---

#### Constructor Function

```javascript
User.prototype.greet = function () {};
```

* `greet` exists **once**
* Shared by all instances
* More memory efficient

---

### 5. Reusability and Scalability

| Aspect                         | Object Literal | Constructor Function |
| ------------------------------ | -------------- | -------------------- |
| Creates multiple objects       | ❌              | ✅                    |
| Uses prototype                 | ❌              | ✅                    |
| Memory efficient               | ❌              | ✅                    |
| Easy syntax                    | ✅              | ❌                    |
| Suitable for modeling entities | ❌              | ✅                    |

---

### 6. `new` Keyword Behavior (Constructor Only)

When using `new`:

1. Empty object is created
2. `this` points to that object
3. Prototype is linked
4. Object is returned automatically

Object literals **do not use `new`**.

---

### 7. When to Use Which

**Use Object Literals when:**

* You need a one-off object
* Config objects
* Simple data structures

**Use Constructor Functions when:**

* Creating many similar objects
* You need inheritance
* Memory efficiency matters

---

### 8. ES6 Classes Context

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

Note:

* Classes are **syntactic sugar** over constructor functions
* Same prototype behavior internally

---

### 9. Common Interview Trap

```javascript
function User(name) {
  this.name = name;
  return { role: "admin" };
}

const u = new User("Tanish");
console.log(u.name); // undefined
```

Why?

* Explicit return object overrides `this`

---

### 10. Interview-Ready Summary

Object literals are used to create single, simple objects directly, while constructor functions act as blueprints to create multiple similar objects using the `new` keyword. Constructor functions are more memory efficient because methods are shared through the prototype. Object literals are simpler and more readable, but constructor functions are preferred for scalable and reusable object creation.

---

### 11. Quick Practice Interview Questions

1. Difference between object literal and constructor function?
2. Which is more memory efficient and why?
3. What does `new` do internally?
4. Can object literals use prototypes?
5. Are ES6 classes different from constructor functions?
6. When should you prefer object literals?
7. What happens if a constructor returns an object?

---
## 20. How do you add or remove properties from an object?

---

### 1. Concept

JavaScript objects are **dynamic**, which means:

* You can **add properties**
* You can **update properties**
* You can **remove properties**
  at **runtime**, even after the object is created.

This flexibility is a core feature of JavaScript objects and is frequently tested in interviews.

---

### 2. Adding Properties to an Object

There are **two main ways** to add properties:

#### a) Dot Notation (Most Common)

```javascript
const user = {};

user.name = "Tanish";
user.age = 21;

console.log(user);
// { name: "Tanish", age: 21 }
```

Use when:

* Property name is known
* Property name is a valid identifier

---

#### b) Bracket Notation

```javascript
const user = {};

user["name"] = "Tanish";
user["user-role"] = "admin";

console.log(user);
```

Use when:

* Property name has spaces or hyphens
* Property name is dynamic

Example (dynamic key):

```javascript
const key = "email";
user[key] = "test@mail.com";
```

---

### 3. Updating Existing Properties

Adding and updating use **the same syntax**.

```javascript
const user = { age: 20 };

user.age = 21; // update
console.log(user.age); // 21
```

If the property exists → updated
If it does not exist → added

---

### 4. Removing Properties Using `delete`

The **`delete` operator** removes a property from an object.

```javascript
const user = {
  name: "Tanish",
  age: 21
};

delete user.age;

console.log(user);
// { name: "Tanish" }
```

Important:

* `delete` removes the property **completely**
* Accessing it later returns `undefined`

---

### 5. Difference: `delete` vs Setting to `undefined`

```javascript
const user = { age: 21 };

user.age = undefined;
console.log(user); // { age: undefined }

delete user.age;
console.log(user); // {}
```

Key difference:

* `undefined` → property still exists
* `delete` → property is removed

---

### 6. Checking if a Property Exists (Interview Follow-up)

#### Using `in` operator

```javascript
"age" in user; // true / false
```

#### Using `hasOwnProperty`

```javascript
user.hasOwnProperty("age");
```

Difference:

* `in` checks **prototype chain**
* `hasOwnProperty` checks **only the object itself**

---

### 7. Preventing Add/Remove Operations (Advanced)

#### `Object.seal()`

```javascript
Object.seal(user);

user.newProp = 1;  // ❌ not added
delete user.name; // ❌ not removed
```

* Can modify existing values
* Cannot add/remove properties

---

#### `Object.freeze()`

```javascript
Object.freeze(user);

user.age = 30;    // ❌ not changed
```

* No add
* No delete
* No update

---

### 8. Common Interview Traps

```javascript
const obj = {};

delete obj.nonExisting;
```

Result:

* No error
* Returns `true`

Another trap:

```javascript
delete "hello"; // true (does nothing)
```

`delete` only affects **object properties**, not variables declared with `let`, `const`, or `var`.

---

### 9. Interview-Ready Summary

In JavaScript, properties can be added or updated using dot notation or bracket notation. Properties are removed using the `delete` operator, which completely removes the key from the object. Setting a property to `undefined` does not remove it. JavaScript also provides methods like `Object.seal()` and `Object.freeze()` to restrict adding, deleting, or modifying object properties.

---

### 10. Quick Practice Interview Questions

1. How do you add a new property to an object?
2. Difference between dot and bracket notation?
3. What does the `delete` operator do?
4. Difference between deleting a property and setting it to `undefined`?
5. How do you check if a property exists?
6. What is the difference between `in` and `hasOwnProperty`?
7. Difference between `Object.seal()` and `Object.freeze()`?

---

You have completed **JavaScript Objects and Prototypes (16–20)**.

