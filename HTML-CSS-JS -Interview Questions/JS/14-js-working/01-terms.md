I will now enhance the provided video transcript into structured, clear, and concise technical notes, preserving any original headings you might have implied and adding depth, explanations, and examples.

Since you provided a raw transcript without explicit headings, I will structure it logically based on the content flow, using common section titles for this topic. The output will be in markdown format, ready for pasting into your master document.

---

## How JavaScript Executes Code: Event Loop, Call Stack, Queues

**Core Principle:** JavaScript is a **single-threaded, synchronous** language that uses an **event-driven model** and specific **APIs & queues** to handle asynchronous operations.

### 1. The Call Stack

- **Definition:** The call stack is a LIFO (Last-In, First-Out) stack data structure inside the JavaScript engine.
- **Purpose:** It tracks the execution context of currently running code (functions, global context).
- **Key Rule:** **For any JavaScript code to execute, it MUST be pushed onto the call stack.**
- **Critical Property:** **The call stack "waits for nothing."** It executes whatever is on top synchronously and immediately. It cannot pause for timers, network requests, etc.

### 2. Web APIs

- **Definition:** Features provided by the runtime environment (like a browser or Node.js), **not by the core JavaScript language itself.**
- **Examples:** `setTimeout()`, `setInterval()`, `fetch()`, DOM events (`click`, `load`), and **Promises**.
- **How it works:** When the call stack encounters an asynchronous Web API function (like `setTimeout`), it delegates that operation to the Web API environment and moves on.
  - Example: `setTimeout(callback, delay)` registers a timer in the Web API environment. The call stack continues executing the next line of code.

### 3. Queues (Callback Queue & Microtask Queue)

Asynchronous operations, once completed by Web APIs, place their _callback functions_ into queues to be sent back to the call stack for execution.

#### A. Task Queue (Callback Queue)

- **Purpose:** Holds callbacks from "macrotasks."
- **Sources:** Callbacks from `setTimeout`, `setInterval`, `setImmediate` (Node), and **DOM events**.
- **Nature:** Standard FIFO (First-In, First-Out) queue.

#### B. Microtask Queue

- **Purpose:** Holds callbacks from "microtasks." **It has a higher priority than the Task Queue.**
- **Sources:** Callbacks from **Promises** (`.then()`, `.catch()`, `.finally()`) and APIs like `queueMicrotask()` or `MutationObserver`.
- **Key Difference:** The event loop will **completely empty the Microtask Queue** before taking _a single task_ from the Task Queue.

### 4. The Event Loop

- **Definition:** A continuous monitoring process that coordinates the system.
- **Mechanism:** It constantly checks two conditions:
  1.  **Is the call stack empty?**
  2.  **Are there callbacks waiting in the queues?**
- **Execution Order (The Golden Rule):**
  1.  Execute all synchronous code in the call stack until it's empty.
  2.  **Then,** execute **all** callbacks currently in the **Microtask Queue** until it is completely empty.
  3.  **Then,** take **one** callback from the **Task Queue** and execute it.
  4.  Repeat from step 2.

### 5. Step-by-Step Code Walkthrough

#### Example 1: `setTimeout` with Delay

```javascript
console.log("Start");

setTimeout(function cb() {
  console.log("Callback from setTimeout");
}, 5000);

console.log("End");
```

**Internal Flow:**

1.  `console.log("Start")` is pushed, executed, popped. **Output: `Start`**
2.  `setTimeout` is encountered.
    - The `cb` function is registered with the **Web API** which starts a 5-second timer.
    - `setTimeout` itself finishes on the call stack.
3.  `console.log("End")` is pushed, executed, popped. **Output: `End`**
4.  Call stack is now empty. The 5-second timer runs in the background.
5.  After 5 seconds, the Web API moves the `cb` function to the **Task Queue**.
6.  The **Event Loop** sees the call stack is empty and a task is in the Task Queue.
7.  It moves `cb` to the call stack.
8.  `cb` executes, running `console.log("Callback from setTimeout")`. **Final Output: `Start`, `End`, `Callback from setTimeout`**

#### Example 2: `setTimeout` with Zero Delay

```javascript
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
```

**Output is still: `Start`, `End`, `Callback`**

- **Why?** Even with `0ms`, the `cb` callback is sent to the Web API, which immediately places it in the **Task Queue**. The Event Loop cannot move it to the call stack until the call stack is empty (i.e., after `console.log("End")` has run).

### 6. Microtask Queue Priority Demonstration

```javascript
console.log("Script Start");

setTimeout(function taskCallback() {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(function microtaskCallback() {
  console.log("Promise");
});

console.log("Script End");
```

**Output Order:**

1.  `Script Start`
2.  `Script End`
3.  `Promise`
4.  `setTimeout`

**Internal Flow:**

1.  Synchronous code runs. **Output: `Script Start`, `Script End`**.
2.  Call stack empties.
3.  **Microtask Queue Check:** The promise `.then()` callback is in the **Microtask Queue**. Event Loop executes it first. **Output: `Promise`**.
4.  **Task Queue Check:** Now the `setTimeout` callback is moved from the Task Queue to the call stack. **Output: `setTimeout`**.

### 7. Concept: Starvation of the Task Queue

- **Definition:** A situation where callbacks in the **Task Queue** are prevented from ever executing because the **Microtask Queue** is continuously replenished with new microtasks.
- **Cause:** If a microtask (like a resolved Promise) synchronously queues **another** microtask before yielding, the Event Loop will keep processing the Microtask Queue indefinitely.
- **Example:**

  ```javascript
  Promise.resolve().then(function recursiveMicrotask() {
    console.log("Microtask running...");
    // This queues ANOTHER microtask before finishing
    Promise.resolve().then(recursiveMicrotask);
  });

  setTimeout(() => {
    console.log("This will NEVER print (Starvation)");
  }, 0);
  ```

  - The `setTimeout` callback is stuck in the Task Queue forever because the Microtask Queue never empties.

- **Best Practice:** Avoid writing microtasks that spawn other microtasks in a tight, synchronous loop.
