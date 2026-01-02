# JavaScript Interview Questions and Answers

---

**Topic : DOM Manipulation and Browser APIs**

---

## 26. How do you select DOM elements using JavaScript?

---

### 1. Concept

**DOM selection** means accessing HTML elements from JavaScript so you can **read, modify, or listen to events** on them.

In simple words:

> DOM selectors allow JavaScript to “grab” elements from the webpage.

All DOM selection methods are provided by the **Browser DOM API**.

---

### 2. Why DOM Selection Is Needed

Without selecting elements, JavaScript cannot:

* Change text or styles
* Handle user interactions
* Update UI dynamically

DOM selection is the **first step** in DOM manipulation.

---

### 3. Selecting a Single Element

#### 3.1 `document.getElementById()` (Old but Important)

```javascript
const title = document.getElementById("heading");
```

Key points:

* Selects by `id`
* Returns **one element**
* Very fast
* `id` must be unique

---

#### 3.2 `document.querySelector()` (Most Used)

```javascript
const title = document.querySelector("#heading");
```

Notes:

* Accepts **any CSS selector**
* Returns the **first matching element**
* Modern and flexible

---

### 4. Selecting Multiple Elements

#### 4.1 `document.getElementsByClassName()`

```javascript
const items = document.getElementsByClassName("item");
```

Important:

* Returns **HTMLCollection**
* Live collection (auto-updates)
* No array methods like `map`

---

#### 4.2 `document.getElementsByTagName()`

```javascript
const paragraphs = document.getElementsByTagName("p");
```

Notes:

* Returns HTMLCollection
* Mostly legacy usage

---

#### 4.3 `document.querySelectorAll()` (Most Important)

```javascript
const items = document.querySelectorAll(".item");
```

Key points:

* Returns **NodeList**
* Static (does not auto-update)
* Supports `forEach`

---

### 5. HTMLCollection vs NodeList (Interview Favorite)

| Feature       | HTMLCollection | NodeList         |
| ------------- | -------------- | ---------------- |
| Live          | Yes            | No               |
| Array methods | No             | Partial          |
| Returned by   | getElements*   | querySelectorAll |

---

### 6. Selecting Nested Elements

```javascript
const container = document.querySelector(".container");
const button = container.querySelector("button");
```

Why useful:

* Limits search scope
* Better performance
* Cleaner logic

---

### 7. Selecting by Attributes

```javascript
const input = document.querySelector('input[type="text"]');
```

CSS selector power works fully here.

---

### 8. Common Interview Traps

**Trap 1:** `querySelectorAll` returns an array
❌ Wrong
It returns a **NodeList**

---

**Trap 2:** `getElementById` works on classes
❌ Wrong
It works **only on id**

---

**Trap 3:** Live vs static confusion

* HTMLCollection → live
* NodeList → static

---

### 9. Best Practices

* Prefer `querySelector` / `querySelectorAll`
* Cache DOM selections
* Avoid repeated DOM queries in loops

---

### 10. Interview-Ready Summary

DOM elements can be selected in JavaScript using methods like `getElementById`, `getElementsByClassName`, and modern CSS-based selectors such as `querySelector` and `querySelectorAll`. `querySelector` methods are the most flexible and commonly used today, while understanding the difference between HTMLCollection and NodeList is important for interviews.

---

### 11. Quick Practice Interview Questions

1. Difference between `querySelector` and `querySelectorAll`?
2. What does `getElementById` return?
3. HTMLCollection vs NodeList?
4. Which DOM selector is most commonly used today?
5. Can `querySelectorAll` select by attribute?
6. Why is caching DOM elements important?
7. What happens if no element is found?


---

## 27. Explain event propagation in the DOM

---

### 1. Concept

**Event propagation** describes how an event travels through the DOM tree when an event occurs on an element.

In simple words:

> When you click an element, the event doesn’t stay there — it **travels through parent elements**.

Understanding event propagation is essential for:

* Event handling
* Debugging unexpected behavior
* Event delegation

---

### 2. Phases of Event Propagation

Event propagation has **three phases**:

1. **Capturing Phase**
2. **Target Phase**
3. **Bubbling Phase**

---

### 3. Capturing Phase (Top → Down)

* Event starts from the **root (document)**
* Travels **down to the target element**
* Rarely used directly

```javascript
element.addEventListener("click", handler, true);
```

The `true` enables capturing.

---

### 4. Target Phase

* Event reaches the **actual element**
* Both capturing and bubbling handlers can fire here

---

### 5. Bubbling Phase (Bottom → Up)

* Event bubbles **from target up to document**
* Default behavior in JavaScript
* Most event handlers rely on this phase

```javascript
element.addEventListener("click", handler);
```

---

### 6. Event Propagation Example

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

**Output (Click on button)**

```
Child clicked
Parent clicked
```

Reason:

* Target first
* Then bubbling to parent

---

### 7. Stopping Event Propagation

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child only");
});
```

Effect:

* Event does not bubble further

---

### 8. Event Delegation (Very Important Use Case)

Event delegation uses **bubbling**.

```javascript
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

Benefits:

* Better performance
* Works for dynamically added elements

---

### 9. Common Interview Traps

* Events bubble by default
* Capturing must be explicitly enabled
* `stopPropagation()` stops bubbling, not default action
* `stopPropagation()` ≠ `preventDefault()`

---

### 10. Capturing vs Bubbling (Quick Table)

| Aspect    | Capturing  | Bubbling    |
| --------- | ---------- | ----------- |
| Direction | Top → Down | Bottom → Up |
| Default   | No         | Yes         |
| Usage     | Rare       | Common      |

---

### 11. Interview-Ready Summary

Event propagation defines how events move through the DOM in three phases: capturing, target, and bubbling. By default, JavaScript uses event bubbling, where events propagate upward from the target element. Understanding propagation is crucial for handling events correctly and implementing patterns like event delegation.

---

### 12. Quick Practice Interview Questions

1. What is event propagation?
2. What are the three phases of event propagation?
3. What is event bubbling?
4. What is event capturing?
5. How do you stop event propagation?
6. What is event delegation?
7. Why is bubbling useful in real applications?


---

## 28. How do you prevent a form from submitting using JavaScript?

---

### 1. Concept

By default, when a form is submitted:

* The browser **reloads the page**
* Form data is sent to the server

To handle form submission using JavaScript (validation, API calls, SPA behavior), we must **stop the default browser action**.

In simple words:

> Preventing form submission means stopping the browser’s automatic reload behavior.

---

### 2. Why Prevent Default Form Submission

We prevent form submission to:

* Validate input before sending
* Submit data using `fetch` / AJAX
* Build Single Page Applications
* Show errors without page reload

---

### 3. Using `event.preventDefault()` (Most Important)

```html
<form id="myForm">
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

```javascript
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission prevented");
});
```

Explanation:

* `submit` event fires
* `preventDefault()` stops browser behavior
* JavaScript takes control

---

### 4. Using Inline `onsubmit` (Not Recommended)

```html
<form onsubmit="handleSubmit(event)">
```

```javascript
function handleSubmit(event) {
  event.preventDefault();
}
```

Notes:

* Works, but mixes HTML and JS
* Not recommended in modern codebases

---

### 5. Returning `false` (Legacy Approach)

```html
<form onsubmit="return false;">
```

Or:

```javascript
form.onsubmit = function () {
  return false;
};
```

Important:

* Works only in inline / old handlers
* Not reliable with `addEventListener`
* Avoid in modern JavaScript

---

### 6. Preventing Submission Conditionally

```javascript
form.addEventListener("submit", function (e) {
  if (form.username.value === "") {
    e.preventDefault();
    console.log("Username required");
  }
});
```

Use case:

* Client-side validation
* Prevent invalid submissions

---

### 7. `preventDefault()` vs `stopPropagation()`

| Method              | Purpose                        |
| ------------------- | ------------------------------ |
| `preventDefault()`  | Stops default browser behavior |
| `stopPropagation()` | Stops event bubbling           |

Important:

* `preventDefault()` does **not** stop bubbling
* `stopPropagation()` does **not** stop submission

---

### 8. Common Interview Traps

* `preventDefault()` must be called on the **event object**
* `return false` does not work with `addEventListener`
* Button `type="submit"` triggers form submission
* Button `type="button"` does **not** submit the form

---

### 9. Interview-Ready Summary

Form submission can be prevented in JavaScript using `event.preventDefault()` inside a submit event handler. This allows developers to control form behavior, perform validation, or submit data asynchronously without reloading the page. It is the standard and recommended approach in modern JavaScript.

---

### 10. Quick Practice Interview Questions

1. What does `preventDefault()` do?
2. Why is form submission prevented in SPAs?
3. Difference between `preventDefault()` and `stopPropagation()`?
4. Does `return false` work with `addEventListener`?
5. What is the default behavior of a submit button?
6. How do you conditionally prevent form submission?
7. Can a button trigger submission without `type="submit"`?

---


## 29. What are Web APIs in the context of JavaScript?

---

### 1. Concept

**Web APIs** are **browser-provided interfaces** that allow JavaScript to interact with features **outside the JavaScript engine**.

In simple words:

> Web APIs let JavaScript do things it cannot do by itself, like accessing the DOM, timers, network requests, and browser storage.

Important clarification:

* Web APIs are **not part of JavaScript (ECMAScript)**
* They are provided by the **browser environment**

---

### 2. Why Web APIs Exist

JavaScript alone can:

* Do calculations
* Manage variables
* Execute logic

JavaScript **cannot**:

* Access the DOM
* Make HTTP requests
* Set timers
* Handle browser events

Web APIs solve this gap by acting as a **bridge between JavaScript and the browser**.

---

### 3. JavaScript vs Browser (Very Important)

| JavaScript Engine | Browser Environment |
| ----------------- | ------------------- |
| Variables         | DOM API             |
| Functions         | Fetch API           |
| Loops             | Timer API           |
| Objects           | Web Storage API     |
| Promises          | Geolocation API     |

---

### 4. Common Web APIs (Interview Focus)

Some widely used Web APIs:

* **DOM API** → manipulate HTML elements
* **Fetch API** → make HTTP requests
* **Timer API** → `setTimeout`, `setInterval`
* **Web Storage API** → `localStorage`, `sessionStorage`
* **Geolocation API**
* **History API**
* **Console API**

---

### 5. Example: Timer Web API

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 1000);

console.log("End");
```

Explanation:

* `setTimeout` is a Web API
* Browser handles the timer
* Callback goes to the queue
* Event loop executes it later

---

### 6. Example: Fetch Web API

```javascript
fetch("/api/user")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Explanation:

* Browser handles network request
* JavaScript gets the result via Promise
* Uses microtask queue

---

### 7. Web APIs and the Event Loop

Flow:

1. JavaScript calls a Web API
2. Browser handles the task
3. Callback / Promise is queued
4. Event loop schedules execution

Important insight:

> Web APIs do not run inside the JavaScript engine.

---

### 8. Node.js vs Browser Web APIs

Node.js also provides APIs, but they are **not Web APIs**.

| Browser       | Node.js         |
| ------------- | --------------- |
| DOM API       | File System API |
| Fetch API     | `fs`, `http`    |
| Window object | Global object   |

---

### 9. Common Interview Traps

* Web APIs are **not JavaScript**
* `fetch` is a Web API, not part of ECMAScript
* JavaScript cannot access DOM without Web APIs
* Web APIs work with the event loop, not inside it

---

### 10. Interview-Ready Summary

Web APIs are browser-provided interfaces that allow JavaScript to interact with the outside world, such as the DOM, timers, and network requests. They are not part of the JavaScript language itself but are essential for building interactive web applications. Web APIs work alongside the event loop to enable non-blocking behavior.

---

### 11. Quick Practice Interview Questions

1. Are Web APIs part of JavaScript?
2. Why does JavaScript need Web APIs?
3. Is `fetch` a JavaScript feature or a Web API?
4. How do Web APIs work with the event loop?
5. Can JavaScript run Web APIs without a browser?
6. Difference between Web APIs and Node.js APIs?
7. Where do Web APIs execute?


---

## 30. How can you manipulate the browser history using JavaScript?

---

### 1. Concept

**Browser history manipulation** means controlling the URL and navigation state **without reloading the page**.

In simple words:

> JavaScript can change the URL, move back/forward, and manage navigation history programmatically.

This is done using the **History API**, which is a **Web API** provided by the browser.

---

### 2. Why Browser History Manipulation Is Needed

Modern web applications (SPAs) need to:

* Change URLs without page reload
* Handle back/forward buttons correctly
* Maintain navigation state
* Enable deep linking

Frameworks like React, Vue, and Angular rely heavily on this.

---

### 3. The History Object

The browser exposes a global object:

```javascript
window.history
```

It allows interaction with the session history of the tab.

---

### 4. Navigating Through History

#### 4.1 `history.back()`

```javascript
history.back();
```

* Same as clicking the browser back button
* Moves one step backward

---

#### 4.2 `history.forward()`

```javascript
history.forward();
```

* Same as forward button
* Moves one step forward

---

#### 4.3 `history.go(n)`

```javascript
history.go(-1); // back
history.go(1);  // forward
```

* Negative → backward
* Positive → forward

---

### 5. Changing URL Without Reload (Most Important)

#### 5.1 `history.pushState()`

```javascript
history.pushState({ page: "profile" }, "", "/profile");
```

What it does:

* Adds a new entry to history
* Changes the URL
* Does NOT reload the page

Used when navigating to a new route.

---

#### 5.2 `history.replaceState()`

```javascript
history.replaceState({ page: "login" }, "", "/login");
```

What it does:

* Replaces current history entry
* Does NOT add a new one
* Does NOT reload the page

Used for redirects or URL cleanup.

---

### 6. `pushState` vs `replaceState`

| Feature           | pushState | replaceState |
| ----------------- | --------- | ------------ |
| Adds new entry    | Yes       | No           |
| Changes URL       | Yes       | Yes          |
| Page reload       | No        | No           |
| Back button entry | Yes       | No           |

---

### 7. Handling Back / Forward Navigation

```javascript
window.addEventListener("popstate", (event) => {
  console.log(event.state);
});
```

Explanation:

* Fires when user navigates history
* Used to restore UI state

---

### 8. Common Interview Traps

* `pushState` does not trigger `popstate`
* `popstate` fires on back/forward navigation
* History API does not work across different domains
* URL changes do not mean page reload

---

### 9. History API vs Location Object

| History API  | Location Object        |
| ------------ | ---------------------- |
| No reload    | Reloads page           |
| SPA-friendly | Traditional navigation |
| State-based  | URL-based              |

---

### 10. Interview-Ready Summary

JavaScript can manipulate browser history using the History API. Methods like `pushState` and `replaceState` allow changing the URL without reloading the page, while `back`, `forward`, and `go` control navigation. This API is essential for single-page applications to manage routing and user navigation smoothly.

---

### 11. Quick Practice Interview Questions

1. What is the History API?
2. Difference between `pushState` and `replaceState`?
3. Does `pushState` reload the page?
4. When does the `popstate` event fire?
5. Why is History API important for SPAs?
6. Can history be manipulated across domains?
7. Difference between History API and Location object?


