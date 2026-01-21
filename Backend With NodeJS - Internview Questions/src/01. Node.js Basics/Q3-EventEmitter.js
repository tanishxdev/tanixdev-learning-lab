/*
## Think Loud: EventEmitter (Real Example)

---

## 1. What problem am I solving?

**Problem in my head:**

> “I want different parts of my program to react when something happens, without tightly coupling them.”

Examples:

* user logged in
* file uploaded
* message received
* task completed

So I need:

* **event-based communication**
* **decoupling**
* **callback execution when something happens**

---

## 2. Which Node tool fits this problem?

Thinking:

* This is not HTTP
* Not file system
* This is **events**

Node already provides a core solution → `events` module.

So decision:

```js
const EventEmitter = require("events");
```

Mental model:

> “Node already has an event system. I should reuse it.”

---

## 3. What is an EventEmitter conceptually?

Before code, think like this:

```
Something happens
     ↓
Event is emitted
     ↓
All listeners for that event run
```

So I need:

1. An **emitter** (who announces events)
2. A **listener** (who reacts)
3. An **event name** (string key)

---

## 4. Creating the emitter

```js
const emitter = new EventEmitter();
```

Thinking:

> “This object can now emit events and listen to events.”

This is just an **event hub**.

---

## 5. Registering a listener (VERY IMPORTANT)

```js
emitter.on("greet", (name) => {
  console.log("Hello", name);
});
```

Think loud:

* `"greet"` → event name
* `.on()` → “when this event happens”
* callback → “this is what should run”

Mental rule:

> “I am NOT calling this function. Node will call it later.”

Nothing runs yet.

---

## 6. Emitting the event

```js
emitter.emit("greet", "Tanish");
```

Thinking:

* “An event named `greet` just happened”
* Node looks for all listeners of `"greet"`
* Passes `"Tanish"` as argument
* Executes callbacks

Flow in head:

```
emit("greet")
   ↓
find listeners
   ↓
execute callbacks
```

---

## 7. Is this asynchronous?

Important interview clarity:

* `emit()` itself is **synchronous**
* But the **event-driven pattern** is asynchronous in real systems
  (HTTP, streams, sockets, timers)

Interview-safe sentence:

> “EventEmitter enables event-driven architecture; in real apps these events are usually triggered asynchronously.”

---

## 8. Final mental execution flow

When code runs:

```
1. EventEmitter class loaded
2. emitter object created
3. Listener registered for "greet"
4. Event "greet" emitted
5. Callback executes
6. "Hello Tanish" printed
```

---

## 9. One-line interview narration (MEMORIZE)

> “EventEmitter allows different parts of a Node.js application to communicate using events. Listeners are registered using `.on()`, and events are triggered using `.emit()`, enabling decoupled, event-driven design.”

---

## Final Code (with comments)

```js
const EventEmitter = require("events");

// Create an event emitter instance
const emitter = new EventEmitter();

// Register a listener for the "greet" event
emitter.on("greet", (name) => {
  console.log("Hello", name);
});

// Emit the "greet" event with data
emitter.emit("greet", "Tanish");
```
*/

const EventEmitter = require("events");

// Create an event emitter instance
const emitter = new EventEmitter();

// Register a listener for the "greet" event
emitter.on("greet", (name) => {
  console.log("Hello", name);
});

// Emit the "greet" event with data
emitter.emit("greet", "Tanish");

// Output: Hello Tanish