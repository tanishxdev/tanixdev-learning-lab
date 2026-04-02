# Chapter 5 — Event-Driven Architecture (Event Emitter)

---

# 1. Problem (Why this chapter exists)

Till now:

- You can handle async code
- You can build server

But internally Node works differently.

### ❌ Problem

How does Node:

- Handle multiple requests?
- Trigger actions when something happens?
- Stay non-blocking?

Example:

```text
User login → trigger email
File uploaded → trigger processing
Request comes → send response
```

How are these **events handled automatically**?

---

# 2. Concept (Core Idea)

## 🧠 Definition — Event-Driven Architecture

> System works based on **events (actions)** and **listeners (handlers)**

---

## 🧠 Definition — Event Emitter

> A core Node class that allows:

- Emitting events
- Listening to events

---

## 🧠 Real Life Analogy

```text
Doorbell rings → event
You open door → listener
```

---

# 3. Solution (How Node solves it)

Node uses:

```js
const EventEmitter = require("events");
```

This gives:

- `.on()` → listen to event
- `.emit()` → trigger event

---

# 4. Basic Example

---

## 📄 `event.js`

```javascript
// ================================
// event.js
// ================================

// Import EventEmitter
const EventEmitter = require("events");

// Create instance
const emitter = new EventEmitter();

// Create listener
emitter.on("greet", () => {
  console.log("Hello User!");
});

// Emit event
emitter.emit("greet");
```

---

## ▶️ Output

```text
Hello User!
```

---

# 5. Passing Data with Events

---

## 📄 Example

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener with data
emitter.on("userLogin", (username) => {
  console.log("User logged in:", username);
});

// Emit with data
emitter.emit("userLogin", "Tanish");
```

---

## 🧠 Output

```text
User logged in: Tanish
```

---

# 6. Multiple Listeners (Important)

---

## 📄 Example

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener 1
emitter.on("orderPlaced", () => {
  console.log("Order received");
});

// Listener 2
emitter.on("orderPlaced", () => {
  console.log("Sending confirmation email");
});

// Emit event
emitter.emit("orderPlaced");
```

---

## 🧠 Output

```text
Order received
Sending confirmation email
```

---

# 7. Real Backend Thinking

---

## 🧠 Example Flow

```text
User registers → event fired
↓
Send email
↓
Save log
↓
Send welcome message
```

---

## 📄 Code Example

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener 1
emitter.on("userRegistered", (user) => {
  console.log("Email sent to", user.email);
});

// Listener 2
emitter.on("userRegistered", (user) => {
  console.log("User saved in logs:", user.name);
});

// Emit event
emitter.emit("userRegistered", {
  name: "Tanish",
  email: "tanish@mail.com",
});
```

---

# 8. Once vs On (Important)

---

## 🧠 Difference

| Method | Behavior        |
| ------ | --------------- |
| on()   | runs every time |
| once() | runs only once  |

---

## 📄 Example

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Runs only once
emitter.once("login", () => {
  console.log("First login event");
});

emitter.emit("login");
emitter.emit("login");
```

---

## 🧠 Output

```text
First login event
```

---

# 9. Behind the Scenes (VERY IMPORTANT)

---

## 🧠 How Node uses events internally

```text
HTTP request comes → event
File read completes → event
Timer completes → event
```

Node does:

```text
Event Loop → listens → executes callbacks
```

---

## 🧠 Internal Flow

```text
Event emitted → stored in queue
↓
Event loop picks it
↓
Listener executes
```

---

# 10. Mini Practice (DO THIS)

---

## 📁 Same repo

Create:

```text
event.js
```

---

## 📄 Code

```javascript
// ================================
// Practice - Event System
// ================================

const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listener
emitter.on("paymentSuccess", (amount) => {
  console.log("Payment received:", amount);
});

// Listener
emitter.on("paymentSuccess", () => {
  console.log("Generating invoice...");
});

// Emit event
emitter.emit("paymentSuccess", 500);
```

---

# 11. Common Mistakes

---

### ❌ Emitting before listening

```js
emitter.emit("test"); ❌
emitter.on("test", () => {}); ❌
```

✔ Correct:

```js
emitter.on("test", () => {});
emitter.emit("test");
```

---

### ❌ Too many listeners (memory issue)

Node warning:

```text
MaxListenersExceededWarning
```

---

### ❌ Using events unnecessarily

Use events only when:

- Decoupling logic
- Multiple actions needed

---

# 12. Mental Model (VERY IMPORTANT)

```text
Event = something happened
Listener = what to do
Emitter = who triggers
```

---

## 🧠 Backend Thinking

```text
User Action → Event → Multiple Handlers
```

---

# 13. Final File (Production Style)

---

## 📄 `event.js`

```javascript
// ================================
// Chapter 5 - Event Driven System
// ================================

const EventEmitter = require("events");

// Create emitter
const emitter = new EventEmitter();

// Listener 1: send email
emitter.on("userSignup", (user) => {
  console.log("Sending email to:", user.email);
});

// Listener 2: log user
emitter.on("userSignup", (user) => {
  console.log("Logging user:", user.name);
});

// Listener 3: analytics
emitter.on("userSignup", () => {
  console.log("Updating analytics...");
});

// Simulate signup
function signupUser() {
  const user = {
    name: "Tanish",
    email: "tanish@mail.com",
  };

  // Emit event
  emitter.emit("userSignup", user);
}

// Call function
signupUser();
```

---

# 14. Interview Questions

1. What is EventEmitter?
2. What is event-driven architecture?
3. Difference between on and once?
4. How Node handles events internally?
5. What is event loop?
6. Why Node is non-blocking?
7. Can multiple listeners exist?
8. When should we use events?
9. What is emit?
10. Real-world use cases of events?

---

# ✅ Summary (Clear Thinking)

- Node works on **events**
- EventEmitter helps:
  - decouple logic
  - handle multiple actions

- Core idea:

```text
Something happens → trigger event → run listeners
```

---
