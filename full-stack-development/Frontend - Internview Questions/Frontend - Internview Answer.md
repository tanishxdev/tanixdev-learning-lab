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

# 1. What is semantic HTML and why is it important? _(Easy)_

## Concepts

Semantic HTML means using HTML elements that clearly describe the meaning and purpose of content.

Instead of generic tags like `<div>`, we use meaningful elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

Why semantic HTML is important:

1. Improves code readability
2. Helps screen readers understand structure
3. Improves SEO
4. Makes document structure predictable
5. Reduces need for excessive ARIA roles

Important:

Semantic tags describe purpose, not styling.

---

## Code Example

### Non-semantic structure

```html
<div class="header"></div>
<div class="menu"></div>
<div class="content"></div>
```

Meaning is unclear.

---

### Semantic structure

```html
<header></header>
<nav></nav>
<main></main>
<footer></footer>
```

Structure is clear immediately.

---

## Interview-Ready Answer

Semantic HTML uses meaningful elements that describe the purpose of content. It improves accessibility, SEO, maintainability, and helps both browsers and assistive technologies understand page structure.

---

# 2. Difference between `<div>` and semantic tags. _(Easy)_

## Concepts

`<div>`:

- Generic container
- No semantic meaning
- Used mainly for grouping or layout

Semantic tags:

- Have built-in meaning
- Describe purpose of content
- Improve accessibility and SEO

Key difference:

`<div>` = structure only
Semantic tag = structure + meaning

---

## Code Example

### Using div

```html
<div class="navigation"></div>
```

Browser does not know what it represents.

---

### Using semantic tag

```html
<nav></nav>
```

Browser understands this is navigation content.

---

## Interview-Ready Answer

A `<div>` is a generic container without meaning, while semantic tags like `<nav>`, `<header>`, and `<article>` describe the role of content and improve accessibility and SEO.

---

# 3. How does semantic HTML improve accessibility? _(Medium)_

## Concepts

Semantic HTML helps assistive technologies interpret content correctly.

Benefits:

1. Screen readers understand page structure
2. Users can navigate via landmarks
3. Clear heading hierarchy
4. Better keyboard navigation
5. Reduced reliance on ARIA

Example:

- `<nav>` tells screen reader this is navigation
- `<main>` tells this is primary content

Without semantics, screen readers must guess.

---

## Code Example

### Proper heading structure

```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

Screen reader understands hierarchy.

---

### Landmark structure

```html
<main>
  <article>
    <h2>Post</h2>
  </article>
</main>
```

Users can jump directly to main content.

---

## Interview-Ready Answer

Semantic HTML improves accessibility by providing structural meaning that screen readers and assistive tools use to interpret and navigate content effectively.

---

# 4. What is accessibility (a11y) in frontend development? _(Easy)_

## Concepts

Accessibility means building web applications that everyone can use, including people with disabilities.

Types of impairments:

- Visual
- Motor
- Hearing
- Cognitive

Core principles (WCAG):

1. Perceivable
2. Operable
3. Understandable
4. Robust

Accessibility includes:

- Keyboard navigation
- Screen reader support
- Proper contrast
- Semantic HTML

---

## Code Example

### Accessible button

```html
<button>Submit</button>
```

Keyboard accessible by default.

---

### Accessible image

```html
<img src="logo.png" alt="Company Logo" />
```

Alt text helps screen readers.

---

## Interview-Ready Answer

Accessibility in frontend means designing applications so that users with disabilities can perceive, understand, navigate, and interact with them effectively.

---

# 5. What are screen readers and how do they work? _(Medium)_

## Concepts

Screen readers are assistive software tools that read webpage content aloud.

They work by:

1. Reading the DOM structure
2. Interpreting semantic HTML
3. Using ARIA roles when needed
4. Following heading and landmark structure

They rely heavily on:

- Proper headings
- Labels
- Alt attributes
- ARIA states

Without semantic structure, output becomes confusing.

---

## Code Example

### Proper label association

```html
<label for="email">Email</label> <input id="email" type="email" />
```

Screen reader associates label with input.

---

### Missing alt (bad)

```html
<img src="photo.jpg" />
```

No description available.

---

## Interview-Ready Answer

Screen readers are assistive technologies that convert webpage content into speech. They rely on semantic HTML, proper labels, and ARIA attributes to interpret and navigate content accurately.

---

# 6. What is ARIA and when should it be used? _(Medium)_

## Concepts

ARIA = Accessible Rich Internet Applications.

It is a set of attributes that enhance accessibility when native HTML is not sufficient.

ARIA defines:

- Roles
- States
- Properties

Important rule:

Use semantic HTML first.
Use ARIA only when necessary.

ARIA does not change UI behavior.
It only improves interpretation for assistive technologies.

Common attributes:

- role
- aria-label
- aria-hidden
- aria-expanded

---

## Code Example

### Custom button

```html
<div role="button" tabindex="0">Click</div>
```

Makes div behave like button for screen readers.

---

### Expandable menu

```html
<button aria-expanded="false">Menu</button>
```

Screen reader knows state.

---

## Interview-Ready Answer

ARIA is a set of attributes used to enhance accessibility when native HTML semantics are insufficient. It defines roles and states to help assistive technologies understand custom UI components.

---

# 7. What are landmark roles in HTML? _(Medium)_

## Concepts

Landmark roles define major structural regions of a page.

They allow assistive technologies to navigate quickly.

Common landmark elements:

- `<header>`
- `<nav>`
- `<main>`
- `<aside>`
- `<footer>`

They create navigation shortcuts.

Example:

Users can jump directly to main content or navigation.

---

## Code Example

```html
<header></header>
<nav></nav>
<main></main>
<footer></footer>
```

Clear structural regions.

---

## Interview-Ready Answer

Landmark roles define important structural areas of a webpage, enabling screen readers and assistive tools to navigate efficiently between major sections.

---

# 8. Difference between block-level and inline elements. _(Easy)_

## Concepts

Block-level elements:

- Start on new line
- Take full width
- Can contain block and inline elements

Examples:

- `<div>`
- `<p>`
- `<section>`
- `<h1>`

Inline elements:

- Do not start on new line
- Take only necessary width
- Cannot contain block elements

Examples:

- `<span>`
- `<a>`
- `<strong>`

---

## Code Example

### Block

```html
<p>Hello</p>
<p>World</p>
```

Each appears on new line.

---

### Inline

```html
<span>Hello</span> <span>World</span>
```

Appears inline.

---

## Interview-Ready Answer

Block-level elements occupy full width and start on a new line, while inline elements take only necessary width and flow within surrounding content.

---

# 9. What is the purpose of the `<label>` tag? _(Easy)_

## Concepts

`<label>` associates descriptive text with form inputs.

Benefits:

1. Improves accessibility
2. Expands clickable area
3. Links input to screen reader output

Two association methods:

1. Using `for` attribute
2. Wrapping input inside label

---

## Code Example

### Using for

```html
<label for="email">Email</label> <input id="email" type="email" />
```

---

### Wrapping method

```html
<label>
  Email
  <input type="email" />
</label>
```

---

## Interview-Ready Answer

The `<label>` tag associates descriptive text with form inputs, improving accessibility, usability, and screen reader interpretation.

---

# 10. How does form accessibility work? _(Medium)_

## Concepts

Accessible forms require:

1. Proper labels
2. Keyboard accessibility
3. Clear error messages
4. Required indicators
5. ARIA roles if needed

Common issues:

- Using placeholder instead of label
- No error feedback
- No focus management

Errors should be announced to screen readers.

---

## Code Example

### Accessible input

```html
<label for="name">Name</label> <input id="name" type="text" required />
```

---

### Accessible error

```html
<span role="alert">Name is required</span>
```

Screen reader announces immediately.

---

## Interview-Ready Answer

Form accessibility ensures inputs are properly labeled, keyboard accessible, and provide clear feedback so assistive technologies can interpret and interact with them effectively.

---

# 11. What is tab order and focus management? _(Medium)_

## Concepts

Tab order defines the sequence in which elements receive keyboard focus when pressing Tab.

Default behavior:

- Follows DOM order
- Only focusable elements are included

Focusable elements:

- `<a href>`
- `<button>`
- `<input>`
- `<select>`
- `<textarea>`

`tabindex` values:

- `0` → Follows natural order
- `-1` → Focusable via JS only
- `>0` → Custom order (not recommended)

Focus management is important for:

- Modals
- SPAs
- Dropdowns
- Error handling

Poor focus management breaks accessibility.

---

## Code Example

### Making div focusable

```html
<div tabindex="0">Focusable</div>
```

---

### Programmatic focus

```js
document.getElementById("modal").focus();
```

---

## Interview-Ready Answer

Tab order determines how elements receive keyboard focus, usually based on DOM order. Focus management ensures users navigating via keyboard or screen readers can interact with dynamic components correctly.

---

# 12. How do browsers handle invalid HTML? _(Hard)_

## Concepts

Browsers are fault-tolerant.

They follow the HTML parsing algorithm defined in the specification.

Instead of throwing errors, browsers:

1. Auto-close missing tags
2. Fix invalid nesting
3. Insert missing elements like `<html>` or `<body>`
4. Ignore unknown tags but keep content

Goal:

Render something usable instead of breaking.

---

## Code Example

### Missing closing tag

```html
<p>Hello</p>
<p>World</p>
```

Browser auto-closes first `<p>`.

---

### Invalid nesting

```html
<p><div>Text</div></p>
```

Browser restructures DOM automatically.

---

## Interview-Ready Answer

Browsers use a fault-tolerant parsing algorithm to automatically correct invalid HTML by inserting missing tags, fixing nesting, and restructuring elements to build a valid DOM tree.

---

# 13. SEO vs accessibility – how are they related? _(Hard)_

## Concepts

SEO and accessibility both aim to make content understandable to machines.

SEO optimizes for search engines.
Accessibility optimizes for assistive technologies.

Shared foundations:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Structured content

Difference:

SEO focuses on ranking and discoverability.
Accessibility focuses on usability for people with disabilities.

---

## Code Example

### Structured content

```html
<main>
  <h1>Guide</h1>
  <section>
    <h2>Accessibility</h2>
  </section>
</main>
```

Good for bots and screen readers.

---

### Image alt

```html
<img src="logo.png" alt="Company Logo" />
```

Improves both accessibility and image SEO.

---

## Interview-Ready Answer

SEO and accessibility are related because both rely on semantic structure and meaningful content. While SEO improves search engine discoverability, accessibility ensures content is usable by assistive technologies. Proper semantic HTML benefits both.

---
