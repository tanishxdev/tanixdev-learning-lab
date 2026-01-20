# JavaScript Interview Questions and Answers

---

**Topic : Event Handling**

---

# **Event Handling**

## **36. How do you handle events in JavaScript?**

---

## **1. Concept**

**Event handling** in JavaScript is the mechanism by which JavaScript **responds to user actions or browser actions**.

An **event** is anything that happens in the browser, such as:

• clicking a button
• typing in an input
• submitting a form
• scrolling the page
• page loading

JavaScript allows us to **listen to these events** and **execute code when they occur**.

---

## **2. Core Idea (Interview Sentence)**

> JavaScript handles events by attaching **event listeners** to DOM elements, which execute callback functions when a specific event occurs.

---

## **3. Common Ways to Handle Events in JavaScript**

There are **three main approaches** (interviewers expect you to know all three, but prefer one).

---

### **Method 1: Inline HTML Event Handlers (Old, Not Recommended)**

```html
<button onclick="handleClick()">Click me</button>

<script>
  function handleClick() {
    console.log("Button clicked");
  }
</script>
```

Problems:
• mixes HTML and JS
• hard to maintain
• not scalable

Interview note:

> This method exists but should be avoided in production.

---

### **Method 2: DOM Property Event Handlers**

```html
<button id="btn">Click me</button>

<script>
  const btn = document.getElementById("btn");

  btn.onclick = function () {
    console.log("Button clicked");
  };
</script>
```

Limitations:
• only **one handler per event**
• new assignment overwrites old one

---

### **Method 3: `addEventListener()` (Modern & Recommended)**

```html
<button id="btn">Click me</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    console.log("Button clicked");
  });
</script>
```

Why this is preferred:
• supports multiple listeners
• better control
• supports capturing & bubbling
• clean separation of concerns

---

## **4. Event Listener Structure**

```javascript
element.addEventListener(eventType, callbackFunction);
```

Example:

```javascript
btn.addEventListener("click", () => {
  console.log("Clicked");
});
```

Explanation:
• `"click"` → event type
• callback → runs when event happens

---

## **5. Common Event Types (Interview Must-Know)**

| Category | Examples                                     |
| -------- | -------------------------------------------- |
| Mouse    | `click`, `dblclick`, `mouseover`, `mouseout` |
| Keyboard | `keydown`, `keyup`                           |
| Form     | `submit`, `change`, `input`, `focus`         |
| Window   | `load`, `scroll`, `resize`                   |

---

## **6. Accessing the Event Object**

Every event handler receives an **event object**.

```javascript
btn.addEventListener("click", function (event) {
  console.log(event);
});
```

Common properties:

| Property                  | Meaning                      |
| ------------------------- | ---------------------------- |
| `event.target`            | element that triggered event |
| `event.type`              | event name                   |
| `event.preventDefault()`  | stop default action          |
| `event.stopPropagation()` | stop bubbling                |

---

## **7. Real-World Example (Form Submit)**

```html
<form id="form">
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload
    console.log("Form submitted");
  });
</script>
```

---

## **8. Event Flow (High-Level Mention)**

Events flow in **three phases**:

1. Capturing phase
2. Target phase
3. Bubbling phase

(Default is **bubbling**, detailed next question)

---

## **9. Common Interview Traps**

### Trap 1: Forgetting `preventDefault()`

```javascript
form.addEventListener("submit", () => {
  // page reloads if preventDefault not used
});
```

---

### Trap 2: Using arrow functions without understanding `this`

Arrow functions change `this` behavior (covered later).

---

## **10. Interview-Ready Summary**

JavaScript handles events by attaching event listeners to DOM elements using `addEventListener()`. When an event such as a click, input, or submit occurs, the associated callback function executes. This approach allows clean, scalable, and maintainable interaction handling. Modern JavaScript applications rely heavily on event-driven programming to respond to user actions.

---

## **11. Quick Practice Interview Questions**

1. What is an event in JavaScript?
2. Difference between `onclick` and `addEventListener`?
3. Why is `addEventListener` preferred?
4. What is the event object?
5. Name common DOM events.
6. What happens if multiple listeners are added?
7. What is event bubbling (brief)?

---

## **37. What is event delegation and why is it useful?**

---

## **1. Concept**

**Event delegation** is a technique where **instead of attaching event listeners to multiple child elements**, you attach **a single event listener to a common parent element** and handle events using **event bubbling**.

Core idea:

> Events bubble up from child → parent, so the parent can handle events for its children.

---

## **2. Why Event Delegation Exists (Interview Context)**

Problem without delegation:

• Too many event listeners
• Poor performance
• Dynamic elements don’t work automatically

Example problem:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

If you add a click listener to **each `<li>`**, you create multiple listeners.

Event delegation solves this.

---

## **3. How Event Delegation Works (Mechanism)**

Event flow:

1. User clicks on a child element
2. Event occurs on the child
3. Event **bubbles up** to the parent
4. Parent listener catches it
5. We identify the original target using `event.target`

---

## **4. Basic Event Delegation Example**

```html
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<script>
  const list = document.getElementById("list");

  list.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  });
</script>
```

Explanation:

• Only **one event listener**
• Clicking any `<li>` works
• `event.target` tells which item was clicked

---

## **5. Filtering Events (Important in Real Apps)**

You should always **check the target element**.

```javascript
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});
```

This avoids handling clicks from unintended elements.

---

## **6. Handling Dynamic Elements (Big Advantage)**

Without delegation:

```javascript
// This WILL NOT work for new items added later
li.addEventListener("click", handler);
```

With delegation:

```javascript
list.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    console.log(event.target.textContent);
  }
});
```

Now even dynamically added `<li>` elements work automatically.

---

## **7. Real-World Example (Todo List)**

```html
<ul id="todos"></ul>

<script>
  const todos = document.getElementById("todos");

  todos.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    }
  });
</script>
```

Benefits:
• works for items added later
• single listener
• scalable

---

## **8. Why Event Delegation is Useful (Interview Answer)**

Event delegation is useful because it:

• reduces memory usage
• improves performance
• handles dynamic content
• simplifies code
• avoids multiple listeners

This is critical in large applications.

---

## **9. Common Interview Traps**

### Trap 1: Confusing `event.target` vs `event.currentTarget`

```javascript
event.target; // element that was clicked
event.currentTarget; // element with the listener
```

---

### Trap 2: Assuming delegation works without bubbling

Delegation **only works because of event bubbling**.

If bubbling is stopped, delegation breaks.

---

## **10. Interview-Ready Summary**

Event delegation is a technique where a single event listener is attached to a parent element to handle events from its child elements using event bubbling. By leveraging `event.target`, it allows efficient handling of multiple or dynamically added elements, reduces memory usage, and improves performance in large applications.

---

## **11. Quick Practice Interview Questions**

1. What is event delegation?
2. Why does event delegation work?
3. Difference between `event.target` and `event.currentTarget`?
4. How does event bubbling relate to delegation?
5. Why is delegation better for dynamic elements?
6. Can delegation work if bubbling is stopped?
7. Where is event delegation commonly used?

---

## **38. How do you add and remove an event listener from an element?**

---

## **1. Concept**

In JavaScript, events are handled by **registering** and **unregistering** event listeners on DOM elements.

The modern and recommended API is:

• `addEventListener()` → to attach a listener
• `removeEventListener()` → to detach a listener

This gives **full control** over event lifecycle and memory usage.

---

## **2. Adding an Event Listener**

### Syntax

```javascript
element.addEventListener(eventType, callback, options);
```

• `eventType` → event name (`click`, `submit`, etc.)
• `callback` → function executed on event
• `options` → optional (capture, once, passive)

---

### Basic Example

```html
<button id="btn">Click</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    console.log("Button clicked");
  });
</script>
```

This attaches a **click listener** to the button.

---

## **3. Removing an Event Listener**

### Syntax

```javascript
element.removeEventListener(eventType, callback, options);
```

⚠ **Important rule (Interview Favorite)**
The callback function **must be the same reference** used in `addEventListener`.

---

### Correct Way (Using Named Function)

```html
<button id="btn">Click</button>

<script>
  const btn = document.getElementById("btn");

  function handleClick() {
    console.log("Clicked");
  }

  btn.addEventListener("click", handleClick);

  // later
  btn.removeEventListener("click", handleClick);
</script>
```

Why this works:
• same function reference
• browser can identify and remove it

---

## **4. Wrong Way (Common Interview Trap)**

```javascript
btn.addEventListener("click", function () {
  console.log("Clicked");
});

btn.removeEventListener("click", function () {
  console.log("Clicked");
});
```

Why it fails:
• functions are different objects
• removal does nothing

---

## **5. Removing with Arrow Functions (Also Trap)**

```javascript
const handleClick = () => {
  console.log("Clicked");
};

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

This **works**, because the reference is preserved.

---

## **6. Using the `options` Parameter**

### `once` – auto remove after first execution

```javascript
btn.addEventListener("click", handleClick, { once: true });
```

The listener removes itself automatically.

---

### `capture` – capture phase

```javascript
btn.addEventListener("click", handleClick, true);
```

If you used `capture` while adding, you must use the same while removing.

---

## **7. Real-World Use Case (Memory Leak Prevention)**

```javascript
function openModal() {
  window.addEventListener("keydown", handleEscape);
}

function closeModal() {
  window.removeEventListener("keydown", handleEscape);
}

function handleEscape(e) {
  if (e.key === "Escape") closeModal();
}
```

Important in:
• SPAs
• modals
• dropdowns
• route changes

---

## **8. Alternative: Removing via `onclick` (Not Recommended)**

```javascript
btn.onclick = null;
```

Limitations:
• only works for DOM property handlers
• not scalable

---

## **9. Interview-Ready Summary**

Event listeners in JavaScript are added using `addEventListener()` and removed using `removeEventListener()`. To remove a listener, the same function reference used during registration must be provided. This mechanism is crucial for managing memory, preventing duplicate handlers, and cleaning up listeners in dynamic applications.

---

## **10. Quick Practice Interview Questions**

1. How do you add an event listener in JavaScript?
2. Why must the same function reference be used for removal?
3. Why does removing anonymous functions fail?
4. What does the `once` option do?
5. When should event listeners be removed?
6. Difference between `onclick` and `addEventListener`?
7. What happens if listeners are never removed?

---

## **39. Can you explain how `this` works in event handlers?**

---

## **1. Concept**

In JavaScript event handlers, **`this` refers to the element on which the event listener is attached** — **but only in normal functions**.

Key rule (interview gold):

> In event handlers, the value of `this` depends on **how the handler function is written**, not where it is written.

This makes `this` **context-sensitive** and a very common source of bugs.

---

## **2. `this` in Event Handlers (Normal Function)**

When using a **regular function**, `this` points to the **DOM element that received the event**.

```html
<button id="btn">Click</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    console.log(this); // <button>
  });
</script>
```

Explanation:

• event listener is attached to `btn`
• function is called by the browser
• browser sets `this` → element

---

## **3. Accessing Element Properties Using `this`**

```javascript
btn.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});
```

Here:
• `this` === `btn`
• clean and readable

This is a **very common interview example**.

---

## **4. `this` in Arrow Functions (Important Difference)**

Arrow functions **do NOT have their own `this`**.

They inherit `this` from their **lexical (outer) scope**.

```javascript
btn.addEventListener("click", () => {
  console.log(this);
});
```

Output:
• `window` (or `undefined` in strict mode)

Why?

• arrow functions don’t bind `this`
• browser does not set `this` for arrow callbacks

---

## **5. Comparison Table (Interview Favorite)**

| Handler Type     | Value of `this`              |
| ---------------- | ---------------------------- |
| Regular function | DOM element                  |
| Arrow function   | Lexical `this` (outer scope) |

---

## **6. Correct vs Incorrect Usage**

### ❌ Wrong (Expecting DOM element)

```javascript
btn.addEventListener("click", () => {
  this.style.color = "red"; // error
});
```

### ✅ Correct

```javascript
btn.addEventListener("click", function () {
  this.style.color = "red";
});
```

---

## **7. Using `event.target` (Alternative & Safer)**

Instead of relying on `this`, you can use `event.target`.

```javascript
btn.addEventListener("click", (event) => {
  event.target.style.color = "blue";
});
```

Why this is safer:
• works with arrow functions
• works with event delegation

---

## **8. `this` vs `event.target` (Very Important)**

| Property       | Meaning                      |
| -------------- | ---------------------------- |
| `this`         | element with listener        |
| `event.target` | element that triggered event |

In delegation:

```javascript
parent.addEventListener("click", function (e) {
  console.log(this); // parent
  console.log(e.target); // clicked child
});
```

---

## **9. Common Interview Traps**

### Trap 1: Arrow functions in handlers

Arrow functions break expected `this`.

---

### Trap 2: Nested functions inside handlers

```javascript
btn.addEventListener("click", function () {
  function inner() {
    console.log(this); // window
  }
  inner();
});
```

Fix using arrow function or variable capture.

---

## **10. Interview-Ready Summary**

In JavaScript event handlers, `this` refers to the DOM element on which the event listener is registered when using a regular function. Arrow functions do not have their own `this` and instead inherit it from the surrounding scope, which often results in `this` referring to the global object. Because of this behavior, regular functions or `event.target` are preferred in event handlers.

---

## **11. Quick Practice Interview Questions**

1. What does `this` refer to in an event handler?
2. Why does `this` behave differently in arrow functions?
3. Difference between `this` and `event.target`?
4. When should arrow functions be avoided in handlers?
5. How does `this` behave in event delegation?
6. What happens to `this` in strict mode?
7. Which is safer: `this` or `event.target`?

---


## **40. What is the difference between `event.preventDefault()` and `event.stopPropagation()`?**

---

## **1. Concept**

In JavaScript event handling, events have **two independent behaviors**:

1. **Default browser action**
2. **Event propagation (bubbling / capturing)**

These two methods control **different things**, which is why this question is a **very common interview trap**.

---

## **2. `event.preventDefault()`**

### What it does

`preventDefault()` **stops the browser’s default behavior** for an event.

It **does NOT stop the event from bubbling**.

---

### Common default browser actions

• Form submission (page reload)
• Anchor tag navigation
• Right-click context menu
• Checkbox auto-toggle

---

### Example: Prevent Form Submission

```html
<form id="form">
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted without reload");
  });
</script>
```

Explanation:

• browser normally reloads page
• `preventDefault()` blocks that

---

### Example: Prevent Link Navigation

```html
<a href="https://google.com" id="link">Go</a>

<script>
  const link = document.getElementById("link");

  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Navigation stopped");
  });
</script>
```

---

## **3. `event.stopPropagation()`**

### What it does

`stopPropagation()` **stops the event from moving up or down the DOM tree**.

It **does NOT stop default browser behavior**.

---

### Example: Bubbling Stop

```html
<div id="parent">
  <button id="child">Click</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child clicked");
  });
</script>
```

Output:

```
Child clicked
```

Explanation:

• event does not bubble to parent
• parent handler never runs

---

## **4. Key Difference (Interview Table)**

| Method              | Controls         | Stops default action | Stops bubbling |
| ------------------- | ---------------- | -------------------- | -------------- |
| `preventDefault()`  | Browser behavior | Yes                  | No             |
| `stopPropagation()` | Event flow       | No                   | Yes            |

---

## **5. Using Both Together (Very Common)**

```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
});
```

Use case:
• complex UI
• nested handlers
• modals, dropdowns

---

## **6. Special Case: `stopImmediatePropagation()` (Bonus)**

```javascript
e.stopImmediatePropagation();
```

This:
• stops bubbling
• stops **other listeners on same element**

Interview bonus if mentioned.

---

## **7. Common Interview Traps**

### Trap 1: Thinking preventDefault stops bubbling

❌ Wrong
They are independent.

---

### Trap 2: Thinking stopPropagation stops form submit

❌ Wrong
Default action still occurs.

---

## **8. Real-World Use Cases**

• Prevent form reload
• Prevent link navigation
• Stop click leaking to parent
• Dropdown & modal behavior
• Custom UI controls

---

## **9. Interview-Ready Summary**

`event.preventDefault()` stops the browser’s default action associated with an event, such as form submission or link navigation, without affecting event propagation. `event.stopPropagation()` prevents the event from bubbling or capturing through the DOM but does not stop the default browser behavior. Both methods are often used together to fully control event behavior in complex interfaces.

---

## **10. Quick Practice Interview Questions**

1. What does `preventDefault()` do?
2. What does `stopPropagation()` do?
3. Does `preventDefault()` stop bubbling?
4. Does `stopPropagation()` stop default action?
5. When should both be used together?
6. What is `stopImmediatePropagation()`?
7. Give a real-world use case for each.
