# 🌱 JavaScript Internal Working (From Absolute Basics)

## First Truth (Very Important)

> JavaScript is **single-threaded**

Meaning:

- Only **one line** runs at a time
- Only **one function** runs at a time
- Only **one call stack**

So JS **cannot do two things together**.

---

# 🧠 Big Picture Mental Model

JavaScript system has **4 main parts**:

```
1) JS Engine
2) Web APIs (Browser/Node helpers)
3) Queues
4) Event Loop
```

We will understand each **slowly**.

---

# 1) JS Engine (Main Brain)

This is the **real JavaScript** part.

Inside JS Engine, only 2 things exist:

### ✅ Memory

Stores:

- variables
- functions
- objects

### ✅ Call Stack

Stores:

- which code is running
- which function is running
- order of execution

👉 **Only Call Stack can execute JS code**

Nothing else executes JS.

---

# 2) Creation Phase & Execution Phase

When a JS file runs, JS does 2 steps:

## Step 1: Creation Phase (Memory setup)

JS scans code and stores:

- variables
- functions

Example:

```js
console.log(a);
var a = 10;

function hello() {
  console.log("hi");
}
```

### In memory:

```
a = undefined
hello = function(){...}
```

---

## Step 2: Execution Phase (Run code line by line)

```js
console.log(a); // undefined
a = 10;
hello(); // hi
```

---

# 3) Call Stack (Execution Table)

Call Stack = working table

Rule:

> Whatever is on top runs first (LIFO)

Example:

```js
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();
```

Stack flow:

```
one()
two()
three()
```

Then:

```
three() done → pop
two() done   → pop
one() done   → pop
```

---

# ❗ Important Rule

> JS Engine can only run **sync code**

It cannot handle:

- timers
- fetch
- network
- events
- async tasks

So who handles them? 👇

---

# 4) Web APIs (Helper System)

Web APIs = **Browser / Node helpers**

They are **NOT JavaScript**
They are part of:

- Browser
- Node.js runtime

They handle:

- `setTimeout`
- `fetch`
- `DOM events`
- `Promises`
- network
- timers

👉 JS Engine says:

> "You handle async work, I will continue running sync code"

---

# 5) Queues (Waiting Lines)

When Web APIs finish work, they don’t send code to stack directly.

They put it in **queues**.

There are 2 queues:

---

## 🟢 Microtask Queue (High Priority)

Contains:

- `Promise.then`
- `catch`
- `finally`

👉 Promises always go here

---

## 🔵 Task Queue / Callback Queue (Low Priority)

Contains:

- `setTimeout`
- `setInterval`
- click events
- DOM events

👉 Timers and events go here

---

# 6) Event Loop (Controller / Manager)

Event Loop = manager

Its job:

```
If Call Stack is empty:
   First run Microtask Queue
   Then run Task Queue
Repeat forever
```

Priority:

```
Microtask Queue > Task Queue
```

---

# 🧠 Simple Mental Model

```
JS Engine = Brain
Call Stack = Work desk
Web APIs = Assistants
Queues = Waiting lines
Event Loop = Manager
```

Manager rule:

```
Desk empty?
→ VIP line first (Microtask)
→ Normal line next (Task Queue)
```

---

# 🔁 Full Flow (Simple Words)

```
JS runs sync code
↓
Async code sent to Web APIs
↓
Web APIs do the work
↓
Result goes to queues
↓
Event Loop checks
↓
Stack empty?
↓
Move task to stack
↓
Execute
```

---

# 🧪 Example 1 — Only Sync

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```
A
B
C
```

Reason: All sync → direct stack execution

---

# 🧪 Example 2 — setTimeout

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### Step-by-step:

1. A → Call Stack → print
2. setTimeout → Web API
3. C → Call Stack → print
4. Timer done → Task Queue
5. Event Loop → moves to stack
6. B prints

Output:

```
A
C
B
```

---

# 🧪 Example 3 — Promise vs Timer

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Flow:

Sync:

```
A, D
```

Queues:

```
Microtask → C
Task → B
```

Event loop:

```
Microtask first → C
Then task → B
```

Output:

```
A
D
C
B
```

---

# 🧪 Example 4 — Nested

```js
setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
}, 0);

console.log("C");
```

Flow:

```
C (sync)
A (timer)
B (promise)
```

Output:

```
C
A
B
```

---

# 🧠 Super Simple Summary

```
JS runs sync code
Async goes to Web APIs
Web APIs put result in queues
Event Loop schedules them
Microtask first
Task queue later
```

---

# 📌 Golden Rules (Easy Memory)

1. JS is single-threaded
2. Only Call Stack executes JS
3. Async is not JS work
4. Web APIs handle async
5. Promises → Microtask Queue
6. Timers → Task Queue
7. Event Loop controls order
8. Microtask always first
9. Stack must be empty

---

# ✅ Final One Line

> JavaScript runs sync code in the call stack, sends async work to Web APIs, Web APIs put results in queues, and the event loop moves them back to the call stack with promises having higher priority than timers.
