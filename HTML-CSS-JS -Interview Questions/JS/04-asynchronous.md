# JavaScript Interview Questions and Answers

---

**Topic : Asynchronous JavaScript**

---

## 21. What is the Event Loop in JavaScript?

---

### 1. Concept

The **event loop** is the mechanism that allows JavaScript to handle **asynchronous operations** even though JavaScript is **single-threaded**.

In simple terms:

> The event loop decides **when asynchronous callbacks are executed** after synchronous code finishes.

JavaScript can handle timers, promises, and events **without blocking the main thread** because of the event loop.

---

### 2. Why the Event Loop Exists

JavaScript has:

* One call stack
* One main thread

If JavaScript waited for slow operations (API calls, timers), the UI would freeze.

So JavaScript:

* Sends async work to **Web APIs**
* Uses queues
* Uses the **event loop** to execute results later

---

### 3. Core Components

1. **Call Stack**

   * Executes synchronous code
   * Follows LIFO order

2. **Web APIs**

   * `setTimeout`, `fetch`, DOM events
   * Run outside the JS engine

3. **Macrotask Queue (Callback Queue)**

   * `setTimeout`
   * `setInterval`
   * DOM events

4. **Microtask Queue (Job Queue)**

   * `Promise.then`
   * `queueMicrotask`
   * `MutationObserver`

---

### 4. Event Loop Execution Order

1. Execute all synchronous code
2. Call stack becomes empty
3. Execute **all microtasks**
4. Execute **one macrotask**
5. Repeat continuously

---

### 5. Basic Synchronous Example

```javascript
console.log("Start");
console.log("Middle");
console.log("End");
```

**Output**

```
Start
Middle
End
```

All code runs directly in the call stack.

---

### 6. Event Loop with `setTimeout`

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

**Output**

```
Start
End
Timeout
```

Explanation:

* `setTimeout` callback goes to macrotask queue
* Executed only after call stack is empty

---

### 7. Event Loop with Promises

```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output**

```
Start
End
Promise
```

Explanation:

* Promise callbacks go to the microtask queue
* Microtasks run before macrotasks

---

### 8. Microtask vs Macrotask (Interview Favorite)

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output**

```
Start
End
Promise
Timeout
```

Rule:

> Microtasks always execute before macrotasks.

---

### 9. Common Interview Traps

* `setTimeout(0)` does **not** run immediately
* Promises are asynchronous but run **before timers**
* JavaScript is **single-threaded**, not multi-threaded

---

### 10. Interview-Ready Summary

The event loop enables JavaScript to execute asynchronous code without blocking the main thread. It works by executing synchronous code first, then processing microtasks like Promise callbacks, followed by macrotasks like timers. This mechanism allows JavaScript to remain responsive while handling asynchronous operations.

---

### 11. Quick Practice Interview Questions

1. Why is the event loop needed in JavaScript?
2. What is the difference between microtasks and macrotasks?
3. Why does `setTimeout(0)` run after synchronous code?
4. Where do Promises fit in the event loop?
5. Can the event loop be blocked?
6. Does Node.js also use an event loop?
7. What happens if the call stack never becomes empty?

---

## 22. Explain how callbacks work in JavaScript

---

### 1. Concept

A **callback** is a **function passed as an argument to another function**, which is executed **later**, usually after some operation completes.

In simple words:

> A callback tells JavaScript:
> “Call this function after your current task is done.”

Callbacks are the **foundation of asynchronous JavaScript**.

---

### 2. Why Callbacks Exist

JavaScript is single-threaded, so it cannot wait for:

* Timers
* API calls
* File operations

Callbacks allow JavaScript to:

* Start a task
* Continue executing other code
* Come back later with the result

---

### 3. Basic Callback Example (Synchronous)

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Tanish", sayBye);
```

**Output**

```
Hello Tanish
Goodbye
```

Explanation:

* `sayBye` is passed as a function
* It is executed inside `greet`

---

### 4. Callback in Asynchronous Code

```javascript
console.log("Start");

setTimeout(function () {
  console.log("Inside timeout");
}, 1000);

console.log("End");
```

**Output**

```
Start
End
Inside timeout
```

Explanation:

* Callback is registered
* JavaScript continues execution
* Callback runs later via event loop

---

### 5. Callback with Data (Very Common Pattern)

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Tanish" };
    callback(data);
  }, 1000);
}

fetchData(function (result) {
  console.log(result.name);
});
```

Explanation:

* Result is passed to callback
* This pattern was heavily used before Promises

---

### 6. Error-First Callbacks (Node.js Style)

```javascript
function readData(callback) {
  const error = null;
  const data = "File content";

  callback(error, data);
}

readData(function (err, data) {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log(data);
});
```

Rule:

* First argument → error
* Second argument → result

---

### 7. Callback Hell (Major Interview Topic)

```javascript
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);
```

Problems:

* Hard to read
* Hard to debug
* Hard to maintain

This is called **callback hell** or **pyramid of doom**.

---

### 8. How Callback Hell Was Solved

Callbacks led to:

* Promises
* async/await

Callbacks are still used, but **not chained deeply** anymore.

---

### 9. Common Interview Traps

**Trap 1:** Callback executes immediately
❌ Wrong
It executes **only when called**, not when passed.

**Trap 2:** Callbacks are always async
❌ Wrong
Callbacks can be **synchronous or asynchronous**.

**Trap 3:** Callbacks are obsolete
❌ Wrong
They are still used in:

* Event listeners
* Array methods (`map`, `filter`)
* Node.js APIs

---

### 10. Interview-Ready Summary

Callbacks are functions passed as arguments to other functions and executed later. They are used extensively in JavaScript to handle asynchronous operations like timers, events, and API calls. While powerful, callbacks can lead to deeply nested code known as callback hell, which is why Promises and async/await were introduced.

---

### 11. Quick Practice Interview Questions

1. What is a callback function?
2. Are callbacks always asynchronous?
3. What is callback hell?
4. Why do callbacks cause readability issues?
5. What is an error-first callback?
6. Where are callbacks still commonly used?
7. How did Promises improve callback-based code?

---

## 23. What are Promises and how do they manage asynchronous code?

---

### 1. Concept

A **Promise** is an object that represents the **eventual completion or failure** of an asynchronous operation.

In simple words:

> A promise is a placeholder for a value that will be available **now, later, or never**.

Promises help manage async code **without deeply nested callbacks**.

---

### 2. Why Promises Were Introduced

Callbacks caused problems:

* Callback hell
* Hard error handling
* Poor readability

Promises solve this by:

* Flattening async flow
* Centralizing error handling
* Making code more predictable

---

### 3. Promise States (Very Important)

A promise can be in **one of three states**:

1. **Pending**

   * Initial state
   * Neither fulfilled nor rejected

2. **Fulfilled**

   * Operation completed successfully

3. **Rejected**

   * Operation failed

Once settled (fulfilled or rejected), the state **cannot change**.

---

### 4. Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});
```

Explanation:

* `resolve` → success
* `reject` → failure
* Executor function runs immediately

---

### 5. Consuming a Promise (`then`, `catch`, `finally`)

```javascript
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  });
```

Explanation:

* `.then()` handles fulfillment
* `.catch()` handles rejection
* `.finally()` runs in all cases

---

### 6. Promise Chaining (Key Advantage)

```javascript
fetchUser()
  .then((user) => getOrders(user.id))
  .then((orders) => processOrders(orders))
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
```

Why this works:

* Each `.then()` returns a new promise
* Output flows to the next `.then()`

---

### 7. Promises and the Event Loop

```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output**

```
Start
End
Promise
```

Explanation:

* Promise callbacks go to the **microtask queue**
* Executed before timers

---

### 8. Error Handling in Promises

```javascript
Promise.resolve()
  .then(() => {
    throw new Error("Failed");
  })
  .catch((err) => {
    console.log(err.message);
  });
```

Key rule:

> Any error inside `.then()` moves control to `.catch()`.

---

### 9. Promise Utility Methods

```javascript
Promise.all([p1, p2]);
Promise.race([p1, p2]);
Promise.allSettled([p1, p2]);
Promise.any([p1, p2]);
```

Use cases:

* `all` → all must succeed
* `race` → first settled
* `allSettled` → all results
* `any` → first fulfilled

---

### 10. Common Interview Traps

* Promises execute callbacks **asynchronously**
* Promise executor runs **synchronously**
* `.then()` always returns a promise
* Promise state is immutable once settled

---

### 11. Interview-Ready Summary

Promises are objects that represent the eventual result of an asynchronous operation. They help manage async code by avoiding callback hell, enabling chaining, and providing structured error handling. Promises use the microtask queue, allowing them to execute before macrotasks like timers.

---

### 12. Quick Practice Interview Questions

1. What problem do Promises solve?
2. What are the states of a Promise?
3. Does the Promise executor run synchronously or asynchronously?
4. Why does `.then()` return a promise?
5. How does error handling work in Promises?
6. Difference between `Promise.all` and `Promise.allSettled`?
7. Where do Promises fit in the event loop?


---

## 24. Explain async/await in JavaScript and how it differs from Promises

---

### 1. Concept

`async/await` is **syntactic sugar built on top of Promises** that allows writing asynchronous code in a **synchronous-looking style**.

In simple words:

> `async/await` lets you write async code that looks and behaves like normal step-by-step code, while still being non-blocking.

---

### 2. Why async/await Exists

Promises improved callbacks, but:

* Chaining `.then()` becomes hard to read
* Error handling is less intuitive
* Control flow looks fragmented

`async/await` solves this by:

* Making async code readable
* Using `try/catch` for errors
* Writing logic top-to-bottom

---

### 3. `async` Keyword

```javascript
async function getData() {
  return "Hello";
}
```

Important points:

* An `async` function **always returns a Promise**
* Returning a value = `Promise.resolve(value)`
* Throwing an error = `Promise.reject(error)`

```javascript
getData().then(console.log); // Hello
```

---

### 4. `await` Keyword

`await` pauses the execution of the **async function only** until the Promise settles.

```javascript
async function fetchData() {
  const data = await Promise.resolve("Data");
  console.log(data);
}

fetchData();
```

Explanation:

* `await` waits for the Promise
* JavaScript thread is **not blocked**
* Other code continues via event loop

---

### 5. Converting Promise Code to async/await

**Using Promises**

```javascript
fetchUser()
  .then((user) => fetchOrders(user.id))
  .then((orders) => console.log(orders))
  .catch((err) => console.log(err));
```

**Using async/await**

```javascript
async function loadData() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    console.log(orders);
  } catch (err) {
    console.log(err);
  }
}

loadData();
```

Result:

* Same behavior
* Cleaner control flow

---

### 6. Error Handling with async/await

```javascript
async function readData() {
  try {
    const result = await Promise.reject("Failed");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
```

Rule:

> Use `try/catch` instead of `.catch()`.

---

### 7. async/await and Event Loop

```javascript
console.log("Start");

async function test() {
  await Promise.resolve();
  console.log("Async");
}

test();
console.log("End");
```

**Output**

```
Start
End
Async
```

Explanation:

* `await` puts remaining code into microtask queue
* Same behavior as `.then()`

---

### 8. Parallel vs Sequential Execution (Important)

**Sequential (slow)**

```javascript
const a = await task1();
const b = await task2();
```

**Parallel (fast)**

```javascript
const [a, b] = await Promise.all([task1(), task2()]);
```

Interview insight:

* `await` does not automatically mean parallel execution

---

### 9. Differences: Promises vs async/await

| Aspect         | Promises           | async/await      |
| -------------- | ------------------ | ---------------- |
| Syntax         | `.then()` chaining | Sequential style |
| Readability    | Medium             | High             |
| Error Handling | `.catch()`         | `try/catch`      |
| Under the hood | Promises           | Promises         |
| Blocking       | Non-blocking       | Non-blocking     |

---

### 10. Common Interview Traps

* `await` works **only inside async functions**
* `async/await` does not block the main thread
* `async/await` is not faster than Promises
* Forgetting `try/catch` causes unhandled rejections

---

### 11. Interview-Ready Summary

`async/await` is a cleaner syntax built on top of Promises that allows writing asynchronous code in a synchronous style. It improves readability and error handling without changing how JavaScript works internally. Under the hood, async/await still uses Promises and the microtask queue.

---

### 12. Quick Practice Interview Questions

1. What does an async function return?
2. Does `await` block the JavaScript thread?
3. How is error handling different in async/await?
4. Can `await` be used outside async functions?
5. Is async/await faster than Promises?
6. How do you run async tasks in parallel?
7. How does async/await work with the event loop?


---

## 25. What is the Job Queue (or Microtask Queue)?

---

### 1. Concept

The **Job Queue**, also called the **Microtask Queue**, is a special queue used by JavaScript to execute **microtasks**.

In simple words:

> The job queue stores callbacks that must run **immediately after the current synchronous code**, before any timers or events.

Microtasks have **higher priority** than normal async tasks.

---

### 2. Why the Job Queue Exists

Not all async tasks are equal.

JavaScript needs some tasks to:

* Run **as soon as possible**
* Run **before timers**
* Maintain predictable behavior

So JavaScript separates async work into:

* **Microtasks** (Job Queue)
* **Macrotasks** (Callback Queue)

---

### 3. What Goes into the Job Queue

Examples of **microtasks**:

* `Promise.then`
* `Promise.catch`
* `Promise.finally`
* `queueMicrotask`
* `MutationObserver`

These do **not** go to the callback queue.

---

### 4. Execution Priority (Very Important)

Order of execution:

1. Call stack (synchronous code)
2. **Microtask queue (job queue)**
3. Macrotask queue (timers, events)

Rule:

> JavaScript empties the **entire microtask queue** before executing the next macrotask.

---

### 5. Basic Example

```javascript
console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
```

**Output**

```
Start
End
Microtask
```

Explanation:

* Promise callback goes to job queue
* Runs after synchronous code

---

### 6. Microtask vs Macrotask Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
```

**Output**

```
Start
End
Microtask
Macrotask
```

Explanation:

* Microtasks always run before macrotasks

---

### 7. Job Queue Starvation (Advanced Interview Point)

```javascript
function loop() {
  Promise.resolve().then(loop);
}
loop();
```

What happens:

* Microtasks keep scheduling microtasks
* Macrotasks never execute
* Event loop gets **starved**

Important insight:

> Too many microtasks can block timers and rendering.

---

### 8. `queueMicrotask()` Example

```javascript
queueMicrotask(() => {
  console.log("Microtask executed");
});
```

Notes:

* Explicitly schedules a microtask
* Preferred over `Promise.resolve().then()` for clarity

---

### 9. Job Queue vs Callback Queue

| Aspect          | Job Queue (Microtask) | Callback Queue (Macrotask) |
| --------------- | --------------------- | -------------------------- |
| Priority        | Higher                | Lower                      |
| Executes when   | After sync code       | After microtasks           |
| Examples        | Promises              | setTimeout, events         |
| Can starve loop | Yes                   | No                         |

---

### 10. Common Interview Traps

* Microtasks do **not** wait for timers
* Promise callbacks are **not macrotasks**
* Entire microtask queue runs before next task
* Overusing microtasks can freeze execution

---

### 11. Interview-Ready Summary

The job queue, or microtask queue, stores high-priority asynchronous callbacks such as Promise handlers. After synchronous code finishes, JavaScript executes all microtasks before moving on to macrotasks like timers. This priority system ensures predictable execution but can cause starvation if misused.

---

### 12. Quick Practice Interview Questions

1. What is the job queue in JavaScript?
2. What types of tasks go into the microtask queue?
3. Why do microtasks run before macrotasks?
4. What is microtask starvation?
5. How is `queueMicrotask` different from `setTimeout`?
6. Where do Promise callbacks execute?
7. Can microtasks block timers?


---