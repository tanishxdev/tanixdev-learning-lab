# 🧪 Example 1 — Sync vs Async

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
```

### Flow:

- `1` → Call Stack → print
- `setTimeout` → Web API
- `3` → Call Stack → print
- Timer done → Callback Queue
- Event Loop → move to stack
- `2` → print

### Output:

```
1
3
2
```

---

# 🧪 Example 2 — Zero delay timer

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### Mental model:

- B cannot run until stack is empty

### Output:

```
A
C
B
```

---

# 🧪 Example 3 — Promise only

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

### Flow:

- Sync → A, C
- Promise → Microtask Queue
- Event Loop → microtask runs

### Output:

```
A
C
B
```

---

# 🧪 Example 4 — Promise vs Timer

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

### Queues:

- Microtask → 3
- Task → 2

### Output:

```
1
4
3
2
```

---

# 🧪 Example 5 — Nested async

```js
setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
}, 0);

console.log("C");
```

### Output:

```
C
A
B
```

---

# 🧪 Example 6 — Multiple promises

```js
Promise.resolve().then(() => console.log("1"));
Promise.resolve().then(() => console.log("2"));
Promise.resolve().then(() => console.log("3"));

console.log("X");
```

### Output:

```
X
1
2
3
```

---

# 🧪 Example 7 — Multiple timers

```js
setTimeout(() => console.log("A"), 0);
setTimeout(() => console.log("B"), 0);
setTimeout(() => console.log("C"), 0);

console.log("X");
```

### Output:

```
X
A
B
C
```

---

# 🧪 Example 8 — Promise inside Promise

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
});

console.log("C");
```

### Output:

```
C
A
B
```

---

# 🧪 Example 9 — Timer inside Promise

```js
Promise.resolve().then(() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);
});

console.log("C");
```

### Output:

```
C
A
B
```

---

# 🧪 Example 10 — Promise inside Timer

```js
setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
}, 0);

console.log("C");
```

### Output:

```
C
A
B
```

---

# 🧠 Pattern You Should Start Seeing

### Rule 1:

```
All sync code first
```

### Rule 2:

```
Microtask Queue before Task Queue
```

### Rule 3:

```
Call Stack must be empty
```

---

# 🧠 Visual Thinking Pattern

```
SYNC → MICRO → TASK
```

Always.

---

# 🧠 Super Short Memory Line

> First sync, then promise, then timer.

---

# 🧪 Final Brain Trainer Example

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");

  setTimeout(() => console.log("4"), 0);
});

Promise.resolve().then(() => console.log("5"));

console.log("6");
```

### Think step-by-step:

Sync:

```
1, 6
```

Microtasks:

```
3, 5
```

Tasks:

```
2, 4
```

### Output:

```
1
6
3
5
2
4
```

---

# 🧠 Final Mental Formula

```
JS = sync engine
Async = Web APIs
Result → Queues
Event Loop = scheduler
Order = Sync → Microtask → Task
```
