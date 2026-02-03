# OOP Fundamentals

## Question 1: What is Object-Oriented Programming (OOP)?

### conceptual building

Object-Oriented Programming (OOP) is a programming paradigm where we design software around **objects** instead of only functions and logic.

An **object** represents a real-world entity.
It contains:

- **Data** → properties / variables
- **Behavior** → methods / functions

OOP focuses on:

- grouping related data + behavior together
- making code reusable
- making systems easier to maintain and scale

Core idea:

> Program = interaction between objects

---

### related code snippet with comment and explanation = example

```js
// Defining a class (blueprint)
class User {
  constructor(name, age) {
    // properties (data)
    this.name = name;
    this.age = age;
  }

  // method (behavior)
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Creating an object from the class
const user1 = new User("Tanish", 22);

// Using object behavior
console.log(user1.greet());
```

**Explanation**

- `class User` → blueprint
- `constructor` → initializes object data
- `user1` → real object created from class
- `greet()` → behavior tied to data

---

### short interview ready answer ok easy language

OOP is a programming style where we structure code using objects that contain both data and methods.
It helps in writing reusable, maintainable, and scalable code by modeling real-world entities.

---

## Question 2: What is the difference between Procedural Programming and Object-Oriented Programming?

### conceptual building

**Procedural Programming**

- Focuses on functions
- Data and functions are separate
- Program flows step-by-step
- Harder to maintain for large systems

**Object-Oriented Programming**

- Focuses on objects
- Data and methods are bundled together
- Program is interaction between objects
- Easier to scale and maintain

Key difference:

> Procedural = functions first
> OOP = objects first

---

### related code snippet with comment and explanation = example

```js
// Procedural approach
let balance = 1000;

function deposit(amount) {
  balance += amount;
}

deposit(500);
console.log(balance);
```

```js
// Object-Oriented approach
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.balance);
```

**Explanation**

- Procedural: data (`balance`) is global and exposed
- OOP: data is inside object and controlled via methods
- OOP gives better data safety and structure

---

### short interview ready answer ok easy language

Procedural programming works with functions and shared data, while OOP works with objects that combine data and behavior.
OOP is better for large applications because it improves structure, reusability, and maintainability.

## Question 3: What is Encapsulation?

### conceptual building

Encapsulation means **wrapping data and methods together** and **controlling access** to that data.

Core ideas:

- Data should not be directly accessible from outside
- Access should happen only through defined methods
- Protects object’s internal state from accidental misuse

In simple words:

> Hide internal data + expose only what is necessary

Benefits:

- Better data security
- Controlled modification
- Easier maintenance

---

### related code snippet with comment and explanation = example

```js
class BankAccount {
  constructor(balance) {
    // convention: underscore means "internal use"
    this._balance = balance;
  }

  // public method to read balance
  getBalance() {
    return this._balance;
  }

  // public method to update balance safely
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
}

const account = new BankAccount(1000);

// cannot directly control logic if accessed this way
// account._balance = -500;  // bad practice

// correct controlled access
account.deposit(500);
console.log(account.getBalance());
```

**Explanation**

- `_balance` → internal data
- `getBalance()` and `deposit()` → controlled access
- Object decides **how** data is read or modified

---

### short interview ready answer ok easy language

Encapsulation is the concept of hiding internal data and allowing access only through methods.
It helps protect data, enforce rules, and keep the object’s state consistent.

## Question 4: What is Polymorphism? Explain method overriding and overloading.

### conceptual building

Polymorphism means **one interface, multiple behaviors**.

Simple meaning:

> Same method name, different behavior depending on object or input.

Polymorphism allows:

- writing flexible code
- treating related objects in the same way
- changing behavior without changing caller code

Two common forms:

1. **Method Overriding** (runtime polymorphism)
2. **Method Overloading** (compile-time concept, limited in JS)

---

### related code snippet with comment and explanation = example

**Method Overriding**

```js
class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  // overriding parent method
  speak() {
    return "Dog barks";
  }
}

const a = new Animal();
const d = new Dog();

console.log(a.speak()); // Animal makes a sound
console.log(d.speak()); // Dog barks
```

**Explanation**

- Same method name `speak()`
- Different behavior based on object type
- Decided at runtime → runtime polymorphism

---

**Method Overloading (JS style)**

```js
class Calculator {
  add(a, b, c) {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.add(2, 3, 4)); // 9
```

**Explanation**

- JS does not support true method overloading
- Achieved using parameters check
- Same method behaves differently for inputs

---

### short interview ready answer ok easy language

Polymorphism means the same method name can perform different behaviors.
Method overriding changes parent method behavior in child class, while method overloading means same method name with different parameters.

## Question 5: What is Inheritance? Name some types of inheritance.

### conceptual building

Inheritance means **one class acquiring properties and methods of another class**.

Simple idea:

> Child class reuses parent class code

Why we use inheritance:

- Code reusability
- Avoid duplication
- Create logical hierarchy

Relationship:

- Parent → base / super class
- Child → derived / sub class
- Child **is-a** Parent

---

### related code snippet with comment and explanation = example

```js
// Parent class
class Vehicle {
  start() {
    return "Vehicle started";
  }
}

// Child class inherits Vehicle
class Car extends Vehicle {
  drive() {
    return "Car is driving";
  }
}

const myCar = new Car();

console.log(myCar.start()); // inherited method
console.log(myCar.drive()); // own method
```

**Explanation**

- `extends` keyword creates inheritance
- `Car` automatically gets `Vehicle` methods
- Promotes reuse and clean hierarchy

---

**Types of Inheritance (conceptual)**

- Single inheritance → one parent, one child
- Multilevel inheritance → parent → child → grandchild
- Hierarchical inheritance → one parent, multiple children
- Multiple inheritance → multiple parents (not directly supported in JS classes)

---

### short interview ready answer ok easy language

Inheritance allows a class to reuse properties and methods of another class.
It helps in code reuse and building hierarchical relationships like parent and child classes.

## Question 6: What is Abstraction? Name some abstraction techniques.

### conceptual building

Abstraction means **hiding implementation details and showing only essential features**.

Simple idea:

> What to do, not how to do

User should:

- know **what** an object does
- not care **how** it does internally

Abstraction helps in:

- reducing complexity
- focusing on high-level design
- improving maintainability

---

### related code snippet with comment and explanation = example

```js
// Abstract-like base class
class Payment {
  pay(amount) {
    throw new Error("Method must be implemented");
  }
}

// Concrete class
class CreditCardPayment extends Payment {
  pay(amount) {
    return `Paid ${amount} using Credit Card`;
  }
}

// Another concrete class
class UpiPayment extends Payment {
  pay(amount) {
    return `Paid ${amount} using UPI`;
  }
}

function makePayment(paymentMethod) {
  // abstraction: caller doesn't know implementation
  console.log(paymentMethod.pay(500));
}

makePayment(new CreditCardPayment());
makePayment(new UpiPayment());
```

**Explanation**

- `Payment` defines **what** action is required
- Child classes define **how** it is done
- Caller uses common interface without caring about details

---

**Abstraction techniques**

- Abstract classes (via base class + method contract)
- Interfaces (conceptual in JS)
- Hiding logic behind functions / APIs

---

### short interview ready answer ok easy language

Abstraction is hiding internal implementation and exposing only required functionality.
It helps reduce complexity and allows code to depend on behavior instead of details.

## Question 7: What is a Class in OOP?

### conceptual building

A **class** is a **blueprint or template** used to create objects.

Simple idea:

> Class defines structure, object is the real thing

A class contains:

- Properties → data members
- Methods → behavior

Class itself does not use memory for data values.
Memory is allocated **only when object is created**.

---

### related code snippet with comment and explanation = example

```js
// Class definition (blueprint)
class Student {
  constructor(name, rollNo) {
    // properties
    this.name = name;
    this.rollNo = rollNo;
  }

  // method
  getDetails() {
    return `${this.name} - Roll No: ${this.rollNo}`;
  }
}

// Object creation from class
const s1 = new Student("Aman", 101);
console.log(s1.getDetails());
```

**Explanation**

- `class Student` → blueprint
- `constructor` → initializes object data
- `s1` → object created from class
- Class defines what object will have

---

### short interview ready answer ok easy language

A class is a blueprint that defines properties and methods of objects.
Objects are created from classes and represent real-world entities.

## Question 8: What is an Object in OOP?

### conceptual building

An **object** is a **real instance of a class**.

Simple idea:

> Class = blueprint
> Object = actual thing created from blueprint

An object:

- occupies memory
- holds real values of properties
- can call methods defined in the class

Multiple objects can be created from the same class, each with different data.

---

### related code snippet with comment and explanation = example

```js
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getRole() {
    return `${this.name} is a ${this.role}`;
  }
}

// objects created from same class
const user1 = new User("Rahul", "Admin");
const user2 = new User("Neha", "Editor");

console.log(user1.getRole());
console.log(user2.getRole());
```

**Explanation**

- `User` class is reused
- `user1` and `user2` are different objects
- Each object has its own data
- Methods are shared via class definition

---

### short interview ready answer ok easy language

An object is an instance of a class that represents a real-world entity.
It holds actual data and can use the methods defined in its class.

## Question 9: How do access specifiers work and what are they typically?

### conceptual building

Access specifiers control **who can access class properties and methods**.

Purpose:

- protect internal data
- restrict direct access
- expose only required parts

Common access levels (conceptual):

- **Public** → accessible everywhere
- **Private** → accessible only inside class
- **Protected** → accessible in class and subclasses

JavaScript behavior:

- Public → default
- Private → `#` syntax
- Protected → not directly supported (convention-based)

---

### related code snippet with comment and explanation = example

```js
class Employee {
  // private field
  #salary;

  constructor(name, salary) {
    this.name = name; // public
    this.#salary = salary;
  }

  // public method accessing private data
  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee("Ravi", 50000);

console.log(emp.name); // allowed
// console.log(emp.#salary);  // error: private field
console.log(emp.getSalary()); // controlled access
```

**Explanation**

- `name` → public by default
- `#salary` → private, not accessible outside
- Access to private data only via methods

---

### short interview ready answer ok easy language

Access specifiers define the visibility of class members.
They help protect data by controlling whether members are public, private, or protected.

## Question 10: Name some ways to overload a method.

### conceptual building

Method overloading means **same method name with different parameter lists**.

Purpose:

- improve readability
- provide flexible method usage
- same operation, different inputs

Language note:

- Many languages (Java, C++) support true overloading
- **JavaScript does NOT support true method overloading**
- In JS, overloading is achieved using logic inside the method

---

### related code snippet with comment and explanation = example

```js
class Printer {
  print(value1, value2) {
    // overloading by checking number of arguments
    if (value2 === undefined) {
      return `Printing single value: ${value1}`;
    }
    return `Printing two values: ${value1}, ${value2}`;
  }
}

const p = new Printer();

console.log(p.print("Hello"));
console.log(p.print("Hello", "World"));
```

**Other common overloading techniques (conceptual)**

- Different number of parameters
- Different parameter types
- Default parameters
- Rest parameters

---

### short interview ready answer ok easy language

Method overloading means using the same method name with different parameters.
In JavaScript, it is achieved by checking arguments or using default and rest parameters.

## Question 11: What is Cohesion in OOP?

### conceptual building

Cohesion refers to **how closely related the responsibilities of a class are**.

Simple idea:

> One class should do one well-defined job

High cohesion:

- class has a single clear purpose
- methods work on same data
- easy to understand and maintain

Low cohesion:

- class does many unrelated things
- hard to test and change

---

### related code snippet with comment and explanation = example

```js
// High cohesion example
class UserProfile {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}
```

```js
// Low cohesion example (bad design)
class UserManager {
  createUser() {}
  sendEmail() {}
  generateReport() {}
  processPayment() {}
}
```

**Explanation**

- `UserProfile` focuses only on user data
- `UserManager` handles unrelated responsibilities
- High cohesion leads to cleaner design

---

### short interview ready answer ok easy language

Cohesion measures how focused a class is on a single responsibility.
High cohesion is preferred because it makes code easier to maintain and understand.

## Question 12: What is Coupling in OOP?

### conceptual building

Coupling refers to **how much one class depends on another class**.

Simple idea:

> Less dependency = better design

Types:

- Tight coupling → classes heavily depend on each other
- Loose coupling → minimal dependency via interfaces or abstractions

Why low coupling is important:

- easier changes
- better testing
- more flexible system

---

### related code snippet with comment and explanation = example

```js
// Tightly coupled example
class MySQLDatabase {
  connect() {
    return "Connected to MySQL";
  }
}

class UserService {
  constructor() {
    // directly dependent on concrete class
    this.db = new MySQLDatabase();
  }
}
```

```js
// Loosely coupled example using abstraction
class Database {
  connect() {}
}

class MySQLDatabase extends Database {
  connect() {
    return "Connected to MySQL";
  }
}

class UserService {
  constructor(database) {
    // depends on abstraction, not concrete class
    this.db = database;
  }
}

const service = new UserService(new MySQLDatabase());
```

**Explanation**

- Tight coupling makes changes risky
- Loose coupling allows easy replacement
- Abstraction reduces dependency

---

### short interview ready answer ok easy language

Coupling shows how dependent one class is on another.
Low coupling is preferred because it makes systems flexible, testable, and easy to change.
