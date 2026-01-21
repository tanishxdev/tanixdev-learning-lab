# 09. Common Mistakes & Interview Traps (Promises)

---

## 1. Thinking Promises Make Code Asynchronous ❌

### Mistake

Believing:

> “Using Promise automatically makes code async.”

### Reality

* **Promises do NOT make code async**
* They only **represent** async work

Example:

```js
new Promise((resolve) => {
  console.log("Hello");
  resolve();
});
console.log("World");
```

Output:

```
Hello
World
```

Why?

* Promise executor runs **synchronously**
* Only `.then()` callbacks are async (microtasks)

### Interview trap

**Q:** Does creating a Promise make code async?
**Answer:**
“No. Promise creation is synchronous; resolution handlers run asynchronously.”

---

## 2. Forgetting to Return a Promise in `.then()` ❌

### Mistake

```js
doTask()
  .then(() => {
    nextTask(); // not returned
  })
  .then(() => {
    console.log("Done");
  });
```

### Problem

* Chain breaks
* `nextTask()` runs but chain does not wait

### Correct way

```js
doTask()
  .then(() => {
    return nextTask();
  })
  .then(() => {
    console.log("Done");
  });
```

### Interview trap

**Q:** Why is `return` important in Promise chaining?
**Answer:**
“To ensure the next `.then()` waits for the returned Promise.”

---

## 3. Mixing Callbacks and Promises Incorrectly ❌

### Mistake

```js
fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
});
```

Inside Promise chain or async function.

### Problem

* Errors thrown inside callbacks:

  * are NOT caught by `.catch()`
  * are NOT caught by `try/catch`

### Correct approach

* Use:

  * Promisified APIs
  * `fs.promises`
  * manual Promise wrapper

### Interview trap

**Q:** Why doesn’t `try/catch` catch errors in callbacks?
**Answer:**
“Because callbacks run asynchronously outside the current call stack.”

---

## 4. Assuming `.catch()` Catches Everything ❌

### Mistake

Believing `.catch()` handles:

* async errors
* sync errors
* callback errors

### Reality

`.catch()` catches:

* Promise rejections
* errors thrown **inside `.then()`**

It does NOT catch:

* errors in non-promisified callbacks
* errors outside the Promise chain

### Interview trap

**Q:** What kind of errors does `.catch()` handle?
**Answer:**
“Promise rejections and errors thrown inside Promise handlers.”

---

## 5. Using `Promise.all()` Without Understanding Failure ❌

### Mistake

```js
Promise.all([task1(), task2(), task3()])
```

Assuming:

> “All results will come even if one fails.”

### Reality

* `Promise.all()` **fails fast**
* One rejection → entire Promise rejects

### Correct awareness

| Method             | Behavior                 |
| ------------------ | ------------------------ |
| Promise.all        | Fails on first rejection |
| Promise.allSettled | Waits for all results    |

### Interview trap

**Q:** Difference between `Promise.all` and `Promise.allSettled`?
**Answer:**
“`Promise.all` fails fast; `Promise.allSettled` waits for all Promises.”

---

## 6. Thinking `async/await` Replaces Promises ❌

### Mistake

Believing:

> “async/await is different from Promises.”

### Reality

* `async/await` is **syntax sugar**
* Promises still exist underneath

Example:

```js
async function test() {
  return 10;
}
```

Equivalent to:

```js
function test() {
  return Promise.resolve(10);
}
```

### Interview trap

**Q:** What does an async function return?
**Answer:**
“A Promise, always.”

---

## 7. Blocking the Event Loop with Promise Code ❌

### Mistake

Using heavy sync logic inside `.then()` or async function:

```js
.then(() => {
  while(true) {}
});
```

### Problem

* Blocks event loop
* Promises do not prevent blocking

### Correct understanding

* Promises manage **async flow**
* They do NOT fix CPU-heavy tasks

### Interview trap

**Q:** Can Promises prevent event loop blocking?
**Answer:**
“No. CPU-heavy synchronous code still blocks the event loop.”

---

## 8. Not Understanding Microtask Queue ❌

### Mistake

Assuming:

```js
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
```

Will run timeout first.

### Actual output:

```
promise
timeout
```

### Reason

* Promise callbacks → **microtask queue**
* `setTimeout` → **macrotask queue**
* Microtasks have higher priority

### Interview trap

**Q:** Why do Promise callbacks run before `setTimeout`?
**Answer:**
“Because Promises use the microtask queue, which runs before macrotasks.”

---

## 9. Forgetting Error Handling in Async/Await ❌

### Mistake

```js
await fs.readFile("missing.txt");
```

Without try/catch.

### Problem

* Unhandled Promise rejection
* Process may crash

### Correct way

```js
try {
  await fs.readFile("missing.txt");
} catch (err) {
  console.log(err.message);
}
```

### Interview trap

**Q:** How do you handle errors in async/await?
**Answer:**
“Using try/catch around awaited Promises.”

---

## 10. Overusing Promises Where Sync Code Is Enough ❌

### Mistake

Wrapping simple logic in Promises unnecessarily.

### Reality

* Promises are for:

  * I/O
  * timers
  * network
  * async operations

### Interview trap

**Q:** Should everything be written as a Promise?
**Answer:**
“No. Only asynchronous operations need Promises.”

---

## Final Interview One-Liners (Promises)

* Promise creation is synchronous
* `.then()` callbacks are async (microtasks)
* Always return Promises in chains
* `async/await` is built on Promises
* `Promise.all` fails fast
* Promises don’t prevent blocking
* Microtasks run before macrotasks
* Errors in callbacks bypass Promise chains
