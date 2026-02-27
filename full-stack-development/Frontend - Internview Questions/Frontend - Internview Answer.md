## **Topic 1: Web Fundamentals & Browser Basics (14 Questions)**

---

# 1. What is the role of a browser in a web application?

## Concepts

A browser is the **client-side runtime environment** of a web application.

It acts as a bridge between:

User ↔ Browser ↔ Server

Its core responsibilities:

1. Sends HTTP requests to servers
2. Receives HTML, CSS, JS, images
3. Parses HTML → builds DOM
4. Parses CSS → builds CSSOM
5. Executes JavaScript using JS engine
6. Renders pixels on screen
7. Handles user interactions (click, input, scroll)
8. Enforces security (Same-Origin Policy, sandboxing)

Important:

Browser is NOT just a viewer.
It is an execution engine for frontend applications.

Without browser:

- No rendering
- No JS execution
- No interactivity

---

## Code Example

### Example 1: HTML Rendering

```html
<h1>Hello</h1>
<p>World</p>
```

Browser:

- Parses HTML
- Builds DOM
- Renders text

---

### Example 2: JavaScript Execution

```html
<button onclick="alert('Clicked')">Click</button>
```

Browser:

- Binds event
- Executes JS
- Updates UI

---

### Example 3: Network Request

```js
fetch("/api/users");
```

Browser:

- Sends HTTP request
- Receives response
- Makes data available to JS

---

## Interview-Ready Answer

A browser acts as the client runtime of a web application. It fetches resources from the server, parses HTML and CSS, executes JavaScript, renders the UI, handles user interactions, and enforces security rules.

---

# 2. What happens internally when a browser loads a webpage?

## Concepts

When you enter a URL, browser follows a pipeline:

### Step-by-step flow:

1. URL parsing
2. DNS lookup → get server IP
3. TCP connection
4. HTTP request sent
5. Server returns HTML
6. HTML parsing → DOM
7. CSS parsing → CSSOM
8. DOM + CSSOM → Render Tree
9. Layout (calculate size & position)
10. Paint (draw pixels)
11. JS execution (can modify DOM)

Important:

- CSS is render-blocking
- JS can be parser-blocking
- DOM changes can trigger reflow or repaint

---

## Code Example

### Example 1: Blocking JS

```html
<script src="app.js"></script>
```

- HTML parsing stops
- JS executes
- Then parsing resumes

---

### Example 2: Deferred JS

```html
<script src="app.js" defer></script>
```

- HTML parsing continues
- JS runs after DOM ready

---

### Example 3: DOM Update

```js
document.body.style.background = "red";
```

- May trigger repaint

---

## Interview-Ready Answer

When a browser loads a webpage, it resolves the URL, sends an HTTP request, receives HTML, builds the DOM and CSSOM, combines them into a render tree, calculates layout, paints pixels on screen, and executes JavaScript while handling updates dynamically.

---

# 3. What is the difference between a website and a web application?

## Concepts

Website:

- Mainly informational
- Static or minimal interaction
- Content-focused

Web Application:

- Interactive
- Stateful
- Business logic heavy
- User-driven actions

Key differences:

| Feature     | Website     | Web Application |
| ----------- | ----------- | --------------- |
| Interaction | Minimal     | High            |
| State       | Mostly none | Complex         |
| Logic       | Server-side | Client + Server |
| Example     | Blog        | Gmail           |

---

## Code Example

### Static Website

```html
<h1>About Us</h1>
<p>Company info</p>
```

---

### Web Application

```html
<input id="name" /> <button onclick="save()">Save</button>
```

```js
function save() {
  localStorage.setItem("name", document.getElementById("name").value);
}
```

---

## Interview-Ready Answer

A website primarily delivers static or informational content, while a web application allows users to interact, manage state, and execute business logic within the browser.

---

# 4. What is the DOM and why does it exist?

## Concepts

DOM = Document Object Model

It is an in-memory tree representation of HTML created by the browser.

HTML (text) → Parsed → DOM (objects in memory)

Why DOM exists:

- Allows JavaScript to interact with the page
- Enables dynamic updates
- Provides a structured tree model

Important:

HTML is static text.
DOM is live, mutable object structure.

DOM exists in RAM and is destroyed on refresh.

---

## Code Example

### Accessing DOM

```js
document.getElementById("title");
```

---

### Modifying DOM

```js
document.querySelector("h1").innerText = "Updated";
```

---

### Creating Element

```js
const div = document.createElement("div");
document.body.appendChild(div);
```

---

## Interview-Ready Answer

The DOM is a tree-like in-memory representation of HTML created by the browser so that JavaScript can read, modify, and dynamically update the page.

---

# 5. What is the difference between DOM and HTML source code?

## Concepts

HTML Source:

- Raw text from server
- Static
- Cannot change after response

DOM:

- Parsed representation in memory
- Dynamic
- Can be modified by JS

Important:

DOM can differ from original HTML after JS runs.

DevTools shows DOM, not original HTML source.

---

## Code Example

### Original HTML

```html
<p>Hello</p>
```

---

### DOM Modification

```js
document.querySelector("p").innerText = "Hi";
```

HTML source remains same.
DOM changes.

---

## Interview-Ready Answer

HTML source code is the static markup sent by the server, while the DOM is the dynamic in-memory representation created by the browser that can be modified at runtime using JavaScript.

---

# 6. What is the rendering engine in a browser?

## Concepts

The rendering engine is responsible for converting HTML and CSS into visible pixels on the screen.

It performs:

1. HTML parsing → DOM
2. CSS parsing → CSSOM
3. DOM + CSSOM → Render Tree
4. Layout calculation (size & position)
5. Paint (draw pixels)

Different browsers use different engines:

- Chrome / Edge → Blink
- Firefox → Gecko
- Safari → WebKit

Rendering engine works closely with:

- JavaScript engine
- GPU (for compositing and painting)

Important:

Rendering engine does NOT execute JavaScript.
JS engine and rendering engine coordinate together.

---

## Code Example

### Example 1: Styling

```html
<p style="color:red">Hello</p>
```

Rendering engine:

- Applies CSS
- Decides final style
- Paints red text

---

### Example 2: Layout

```css
div {
  width: 50%;
}
```

Rendering engine:

- Calculates actual pixel width
- Based on parent container

---

### Example 3: Removing element

```js
element.style.display = "none";
```

Rendering engine:

- Updates render tree
- Triggers layout recalculation

---

## Interview-Ready Answer

The rendering engine converts HTML and CSS into visible content by building the render tree, calculating layout, and painting pixels on the screen. It works alongside the JavaScript engine to update the UI dynamically.

---

# 7. What is the critical rendering path?

## Concepts

Critical Rendering Path (CRP) is the sequence of steps the browser follows to render the first visible content.

Main stages:

1. Parse HTML → DOM
2. Parse CSS → CSSOM
3. DOM + CSSOM → Render Tree
4. Layout (Reflow)
5. Paint

Important rules:

- CSS is render-blocking
- JavaScript can be parser-blocking
- Optimizing CRP improves First Contentful Paint (FCP)

Goal:

Render visible content as fast as possible.

---

## Code Example

### Example 1: Render-blocking CSS

```html
<link rel="stylesheet" href="style.css" />
```

Browser waits for CSS before painting.

---

### Example 2: Blocking JS

```html
<script src="app.js"></script>
```

HTML parsing pauses until JS executes.

---

### Example 3: Optimized Script

```html
<script src="app.js" defer></script>
```

HTML parsing continues.
JS runs after DOM ready.

---

## Interview-Ready Answer

The critical rendering path is the sequence of steps a browser follows to convert HTML and CSS into visible pixels. Optimizing it reduces render-blocking resources and improves page load performance.

---

# 8. What is reflow and repaint in browsers?

## Concepts

Reflow (Layout):

- Browser recalculates size and position of elements.
- Expensive operation.
- Can affect many nodes.

Repaint:

- Browser redraws visual changes.
- Does not change layout.
- Cheaper than reflow.

Flow:

Reflow usually triggers repaint.
Repaint does not always trigger reflow.

Performance:

Frequent reflows cause UI jank.

---

## Code Example

### Reflow Example

```js
element.style.width = "300px";
```

Layout changes → Reflow + Repaint.

---

### Repaint Example

```js
element.style.color = "red";
```

Only visual change → Repaint.

---

### Forced Reflow

```js
element.style.width = "200px";
const height = element.offsetHeight;
```

Browser forced to calculate layout immediately.

---

## Interview-Ready Answer

Reflow occurs when the browser recalculates layout due to size or structural changes, while repaint occurs when visual properties change without affecting layout. Reflow is more expensive than repaint.

---

# 9. What triggers reflow vs repaint?

## Concepts

Reflow triggers:

- Changing width, height
- Changing margin, padding
- Adding/removing elements
- Changing display property
- Reading layout properties after writes

Repaint triggers:

- Changing color
- Changing background
- Changing visibility

Important:

Accessing layout properties after modifying styles causes forced synchronous reflow.

---

## Code Example

### Reflow

```js
element.style.margin = "20px";
```

---

### Repaint

```js
element.style.backgroundColor = "blue";
```

---

### Forced Reflow

```js
element.style.width = "300px";
console.log(element.offsetWidth);
```

Browser calculates layout immediately.

---

## Interview-Ready Answer

Reflow is triggered by layout-related changes such as size or structural updates, while repaint is triggered by visual-only changes like color. Accessing layout properties after style changes can force synchronous reflow.

---

# 10. What is the browser event loop at a high level?

## Concepts

JavaScript is single-threaded.

Event loop coordinates:

- Call Stack
- Web APIs
- Microtask Queue
- Macrotask Queue
- Rendering

High-level flow:

1. Execute synchronous code (call stack)
2. Process microtasks (Promises)
3. Process one macrotask (timers, events)
4. Render updates
5. Repeat

Purpose:

Prevent UI blocking and enable async behavior.

---

## Code Example

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Order:

A
D
C
B

---

## Interview-Ready Answer

The browser event loop manages JavaScript execution by running synchronous code first, then microtasks, then macrotasks, while allowing rendering between cycles to keep the UI responsive.

---

# 11. How does the browser handle JavaScript execution?

## Concepts

Browser JavaScript execution is:

- Single-threaded
- Non-blocking (via async model)

Components involved:

1. JS Engine (Call Stack)
2. Web APIs (Timers, Fetch, DOM events)
3. Microtask Queue
4. Macrotask Queue
5. Event Loop

Rendering happens between task cycles.

Microtasks always run before macrotasks.

---

## Code Example

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Execution:

Start
End
Promise
Timeout

---

## Interview-Ready Answer

The browser executes JavaScript using a single-threaded call stack. Asynchronous tasks are handled by browser APIs and queued. The event loop processes microtasks first, then macrotasks, ensuring non-blocking execution and smooth rendering.

---

# 12. What are browser storage mechanisms?

## Concepts

Browsers provide client-side storage options:

1. Cookies
2. localStorage
3. sessionStorage
4. IndexedDB
5. Cache Storage

Each serves different purposes:

- Authentication
- UI persistence
- Session state
- Offline support
- Performance caching

---

## Code Example

### localStorage

```js
localStorage.setItem("theme", "dark");
```

---

### sessionStorage

```js
sessionStorage.setItem("step", "2");
```

---

### Cookie

```js
document.cookie = "token=abc123; path=/;";
```

---

## Interview-Ready Answer

Browsers provide storage mechanisms such as cookies, localStorage, sessionStorage, IndexedDB, and cache storage, each designed for different use cases including authentication, persistent state, session data, and offline capabilities.

---

# 13. Difference between cookies, localStorage, and sessionStorage.

## Concepts

| Feature        | Cookies         | localStorage | sessionStorage |
| -------------- | --------------- | ------------ | -------------- |
| Size           | ~4KB            | ~5–10MB      | ~5–10MB        |
| Sent with HTTP | Yes             | No           | No             |
| Expiry         | Configurable    | Manual clear | On tab close   |
| Access         | Server + Client | Client only  | Client only    |

Key Points:

Cookies:

- Used for authentication
- Sent with every HTTP request

localStorage:

- Persistent
- Survives browser restart

sessionStorage:

- Tab-specific
- Cleared when tab closes

---

## Code Example

### Cookie

```js
document.cookie = "user=tan; max-age=3600;";
```

---

### localStorage

```js
localStorage.setItem("lang", "en");
```

---

### sessionStorage

```js
sessionStorage.setItem("formStep", "1");
```

---

## Interview-Ready Answer

Cookies are small pieces of data sent with every HTTP request and commonly used for authentication. localStorage stores persistent client-side data, while sessionStorage stores temporary data limited to a single browser tab session.

---

# 14. What is same-origin policy?

## Concepts

Same-Origin Policy (SOP) is a browser security rule.

Origin = protocol + domain + port

If any differ → considered different origin.

SOP prevents:

- Accessing another site’s DOM
- Reading cookies of another origin
- Fetching data without permission

Purpose:

Protect users from malicious websites stealing data.

Cross-origin access requires CORS headers.

---

## Code Example

### Blocked Request

```js
fetch("https://api.otherdomain.com/data");
```

Blocked unless server allows CORS.

---

### Allowed via CORS

Server header:

```
Access-Control-Allow-Origin: https://example.com
```

---

### Same Origin

```js
fetch("/api/user");
```

Always allowed.

---

## Interview-Ready Answer

Same-Origin Policy is a browser-enforced security rule that prevents scripts from one origin from accessing data or resources of another origin. It protects user data and can only be relaxed through mechanisms like CORS.

---
