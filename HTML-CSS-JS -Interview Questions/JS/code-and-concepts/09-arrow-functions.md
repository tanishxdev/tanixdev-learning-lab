# **9. What are Arrow Functions and how do they differ from Regular Functions?**

This question is actually about **three things**:

1. `this`
2. `arguments`
3. `new`

---

## **1. What is an arrow function?**

Arrow function is a shorter way to write a function:

```js
function add(a, b) {
  return a + b;
}
```

Arrow version:

```js
const add = (a, b) => a + b;
```

But arrow functions are **not just syntax sugar**.
They behave differently.

---

## **2. Biggest difference – `this`**

Regular function:

```js
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Tanish
```

Arrow function:

```js
const user = {
  name: "Tanish",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // undefined
```

Why?

Because:

> Arrow functions do NOT have their own `this`.

They copy `this` from where they were written (lexical scope).

---

## **3. Why arrow functions exist**

To solve this problem:

```js
const user = {
  name: "Tanish",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user.greet(); // undefined
```

Fix with arrow:

```js
const user = {
  name: "Tanish",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

user.greet(); // Tanish
```

Arrow took `this` from `greet`.

---

## **4. `arguments` difference**

Regular function:

```js
function test() {
  console.log(arguments);
}

test(1,2,3); // works
```

Arrow:

```js
const test = () => {
  console.log(arguments);
};

test(1,2,3); // error
```

Arrow functions don’t have `arguments`.

Use:

```js
(...args) => { }
```

---

## **5. `new` difference**

Regular function:

```js
function Person(name) {
  this.name = name;
}

const p = new Person("Tanish");
```

Arrow:

```js
const Person = (name) => {
  this.name = name;
};

new Person("Tanish"); // ❌ Error
```

Arrow functions cannot be constructors.

---

## **6. When to use what**

| Use case        | Arrow | Regular |
| --------------- | ----- | ------- |
| Callbacks       | Yes   | Yes     |
| Object methods  | No    | Yes     |
| Constructors    | No    | Yes     |
| Need own `this` | No    | Yes     |

---

## **7. Interview one-liner**

> “Arrow functions are shorter functions that don’t have their own `this`, `arguments`, or `prototype`, and they inherit `this` from their surrounding scope.”

---
