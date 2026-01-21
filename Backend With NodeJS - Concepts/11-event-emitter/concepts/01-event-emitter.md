# Topic 11 Event Emitter

---

### **Concept**

**What is EventEmitter in Node.js?**

* The **EventEmitter** is part of Node.js’s **`events` module**, which provides a mechanism to **emit and listen for custom events**.
* Node.js architecture is **event-driven**, meaning it heavily relies on **events and callbacks** (like `request`, `data`, `close`, etc.) for asynchronous operations.
* You can use it to **build custom event systems**, **decouple logic**, and **handle real-time updates**.

Deeper mental model (very important):

* EventEmitter is Node’s **publish–subscribe system**.
* One part of the program **emits** an event.
* One or more parts **listen** to that event.
* The emitter does **not care who is listening**.

Think of it like:

```
Event happens
   ↓
Emitter emits event
   ↓
All listeners for that event run
```

This is the backbone of Node.js internals:

* HTTP server
* Streams
* File system
* Process lifecycle

---

### **Why EventEmitter?**

| Need                         | Explanation                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Event-driven programming** | Handle asynchronous actions by triggering and responding to events.              |
| **Custom Events**            | Build your own “emitters” for app logic like notifications or data updates.      |
| **Decoupled Communication**  | Allows modules to communicate without directly calling each other.               |
| **Core Foundation**          | Core Node features like `http`, `fs`, and `streams` use EventEmitter internally. |

Expanded reasoning:

* Without EventEmitter:

  * modules must directly call each other
  * tight coupling increases
* With EventEmitter:

  * logic is separated
  * features become pluggable
  * code becomes scalable

Real backend intuition:

* Route emits event → logger listens
* DB emits event → analytics listens
* User emits event → notification listens

No direct dependency between them.

---

### **How It Works**

1. Import `EventEmitter` class from `events` module.
2. Create an instance of it.
3. Register a **listener** using `.on('eventName', callback)`.
4. Emit the event using `.emit('eventName', data)`.
5. The listener is triggered automatically when the event is emitted.

Execution flow clarity:

```
emitter.on()  → register listener
emitter.emit() → synchronous execution of listeners
```

Important internal detail:

* EventEmitter listeners run **synchronously**
* They run **in order of registration**
* `.emit()` does NOT create a new thread

This is a common interview trap.

---

### **Folder Setup**

```
event-demo/
│
└── app.js
```

Backend note:

* No framework needed
* EventEmitter is pure Node.js
* Same pattern works in:

  * CLI tools
  * servers
  * background jobs

---

### **Code Example 1: Basic EventEmitter**

```js
const EventEmitter = require('events');
```

Clarification:

* `events` is a **core module**
* No installation required

```js
const emitter = new EventEmitter();
```

Mental model:

* `emitter` is like a **radio station**
* Listeners tune in
* Emissions broadcast messages

```js
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to EventEmitter.`);
});
```

Key concept:

* `.on()` registers a listener
* Nothing executes yet

```js
emitter.emit('greet', 'Tanish');
```

Important:

* `.emit()` triggers listeners **immediately**
* Data flows from emitter → listeners

---

### **Code Example 2: Multiple Listeners**

```js
emitter.on('status', () => {
  console.log("Server started successfully...");
});
```

```js
emitter.on('status', () => {
  console.log("Database connected...");
});
```

Mental model:

* One event
* Many reactions

```js
emitter.emit('status');
```

Execution order guarantee:

* Listener 1 runs
* Listener 2 runs
* Order = registration order

This is deterministic behavior.

---

### **Code Example 3: Passing Data and Removing Listeners**

```js
const notifyUser = (user, msg) => {
  console.log(`Notification for ${user}: ${msg}`);
};
```

Key backend idea:

* Listeners are just functions
* You must keep reference to remove them

```js
emitter.on('notify', notifyUser);
```

```js
emitter.emit('notify', 'Tanish', 'You have a new message.');
```

Data passing model:

* `.emit(eventName, ...args)`
* Listener receives arguments directly

```js
emitter.removeListener('notify', notifyUser);
```

Critical backend rule:

* If you don’t remove unused listeners:

  * memory leaks
  * warning: `MaxListenersExceededWarning`

---

### **Code Example 4: Extending EventEmitter (Real-world Use)**

This is **how EventEmitter is used in production code**.

```js
class User extends EventEmitter {
```

Mental model:

* Your class **becomes an event source**
* Instances can emit events

```js
this.emit('login', username);
```

Design benefit:

* Login logic is separate
* Observers decide what to do

In `app.js`:

```js
user.on('login', ...)
user.on('logout', ...)
```

Backend intuition:

* Same `User` class
* Different listeners in different environments
* Zero code changes in core logic

---

### **Mini Project: Event-based Logger System**

**Goal:** Create a simple logger using custom events.

Why this is important:

* Logging should NOT be tightly coupled
* Event-based logging is flexible

```js
class Logger extends EventEmitter {
  log(message) {
    this.emit('log', message);
  }
}
```

Mental model:

* `log()` emits intent
* Listeners decide destination (file, console, cloud)

```js
logger.on('log', (msg) => {
```

This allows:

* Multiple log listeners
* Easy future extensions

```js
fs.appendFileSync(...)
```

Note:

* Sync used here only for simplicity
* Async version preferred in real systems

---

### **Dependencies**

* No external dependencies — uses built-in `events`, `fs`, and `path` modules.

Backend takeaway:

* EventEmitter is **core**
* Lightweight
* Extremely powerful

---

### **Notes**

* `EventEmitter` is central to Node.js’s **non-blocking architecture**.
* Use `.on()` to attach listeners and `.emit()` to trigger events.
* Use `.once()` to listen for an event only **once**.
* Always remove unnecessary listeners to prevent **memory leaks**.

Extra backend clarity:

* EventEmitter ≠ async by default
* It becomes async when:

  * combined with async handlers
  * used with streams / I/O

Real-world usage mapping:

* `http.Server` → `request`
* Streams → `data`, `end`, `error`
* Process → `exit`, `uncaughtException`

---

## Final Mental Model (Pin This)

```
EventEmitter = communication system
Emit = something happened
On = react to it
Decoupling = scalability
```
