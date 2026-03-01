# Callback — Simple Words

### Concept (Very Simple)

A **callback** is:

> A function that you give to another function, so that it can call it later.

That’s it.

You are **passing a function as an argument** to another function.

---

### Why Do We Need It?

Sometimes:

- We don’t know **when** something will finish.
- We want to run some code **after** something is done.

So we say:

> “When you're done, call this function.”

That function is the **callback**.

---

## Basic Example

### Example 1: Normal Function

```javascript
function sayHello() {
  console.log("Hello");
}

sayHello(); // directly calling
```

Here, we are calling the function directly.

---

## Now Callback Example

```javascript
function greet(name, callback) {
  console.log("Hi " + name);

  callback(); // calling the function we received
}

function sayBye() {
  console.log("Bye!");
}

greet("Tanish", sayBye);
```

---

### Step-by-Step What Happens

1. `greet("Tanish", sayBye)` is called
2. `name = "Tanish"`
3. `callback = sayBye`
4. Inside greet:
   - prints → "Hi Tanish"
   - then calls `callback()`

5. That runs `sayBye()`
6. prints → "Bye!"

---

### Output

```
Hi Tanish
Bye!
```

---

## Very Simple Real-Life Example

Imagine:

You order food.

You tell the restaurant:

> "When food is ready, call me."

That "call me" instruction = callback.

You gave them a function to run later.

---

## Real Use Case (Important)

Callbacks are used in:

- setTimeout
- API calls
- Reading files
- Event listeners
- Async programming

Example:

```javascript
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

Here:

- First argument = callback function
- It runs after 2 seconds

---

## One-Line Definition (Interview Ready)

> A callback is a function passed as an argument to another function that is executed later.

---

## Important Mental Model

JavaScript treats functions like values.

You can:

- Store them in variables
- Pass them as arguments
- Return them from functions

That’s why callbacks are possible.

---
