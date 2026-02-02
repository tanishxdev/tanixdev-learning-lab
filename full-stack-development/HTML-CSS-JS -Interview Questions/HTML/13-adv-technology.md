# HTML Interview Questions and Answers
---

**Topic : Advanced HTML Technologies**

# 64. What are Web Components and how are they used?

## Complete Explanation

**Web Components** are a set of modern web standards that allow developers to create **reusable, encapsulated, custom UI components** that work natively in the browser without frameworks.

They solve a core frontend problem:

> Reusing UI logic and structure **without CSS or JS conflicts**.

Web Components are **framework-agnostic** and consist of **three main technologies**:

---

### 1. Custom Elements

Allow you to define **new HTML tags**.

Example:

```html
<user-card></user-card>
```

These elements have:

* Their own lifecycle
* Their own JavaScript logic

---

### 2. Shadow DOM

Provides **encapsulation**:

* Styles inside do not leak out
* External styles do not affect the component

This prevents CSS conflicts.

---

### 3. HTML Templates

Allow defining **HTML structures** that are not rendered immediately but can be cloned and reused.

---

### Why Web Components are Used

* Build reusable UI components
* Avoid CSS/JS global pollution
* Share components across projects
* Use without React, Angular, or Vue
* Long-term maintainability

---

### When to Use Web Components

* Design systems
* Component libraries
* Framework-independent widgets
* Micro-frontend architectures

---

## Code Example (with comments)

### Example: Simple Web Component

```html
<!DOCTYPE html>
<html>
<body>

<hello-card></hello-card>

<script>
  // Define a custom element
  class HelloCard extends HTMLElement {
    constructor() {
      super();

      // Attach shadow DOM
      const shadow = this.attachShadow({ mode: "open" });

      // Create internal HTML
      shadow.innerHTML = `
        <style>
          h2 {
            color: blue;
          }
        </style>
        <h2>Hello from Web Component</h2>
      `;
    }
  }

  // Register the custom element
  customElements.define("hello-card", HelloCard);
</script>

</body>
</html>
```

What is happening:

* `<hello-card>` is a custom HTML tag
* Shadow DOM isolates styles
* Component is reusable anywhere

---

## Short Answer Version

Web Components are a set of browser APIs that let you create reusable, encapsulated custom HTML elements using Custom Elements, Shadow DOM, and Templates.

---

# 65. What is Shadow DOM and how do you use it?

## Complete Explanation

**Shadow DOM** is a web standard that provides **encapsulation** for HTML, CSS, and JavaScript inside a component.
It creates a **separate DOM tree** that is isolated from the main (light) DOM.

Why this exists:

* Prevents CSS conflicts
* Avoids style leakage
* Makes components truly self-contained

In simple words:

> Shadow DOM hides a component’s internal structure and styles from the rest of the page.

---

### Problems Shadow DOM Solves

Without Shadow DOM:

* Global CSS can break components
* Component styles can affect the entire page
* Naming collisions happen

With Shadow DOM:

* Styles are scoped to the component
* DOM structure is private
* Predictable behavior

---

### Shadow DOM Modes

* `open` → JavaScript can access `shadowRoot`
* `closed` → Shadow DOM is inaccessible from outside

Best practice:

* Use `open` for debugging and maintainability

---

### Light DOM vs Shadow DOM

* **Light DOM** → Normal HTML written in the page
* **Shadow DOM** → Encapsulated DOM inside a component

---

## Code Example (with comments)

### Example 1: Creating and Using Shadow DOM

```html
<profile-card></profile-card>

<script>
  class ProfileCard extends HTMLElement {
    constructor() {
      super();

      // Attach Shadow DOM (open mode)
      const shadow = this.attachShadow({ mode: "open" });

      // Shadow DOM content
      shadow.innerHTML = `
        <style>
          p {
            color: green;     /* Scoped only to this component */
            font-weight: bold;
          }
        </style>

        <p>User Profile</p>
      `;
    }
  }

  customElements.define("profile-card", ProfileCard);
</script>
```

What this ensures:

* Green text applies only inside `<profile-card>`
* External CSS cannot change it

---

### Example 2: Proving Style Isolation

```html
<style>
  p {
    color: red;
  }
</style>

<p>Normal paragraph</p>
<profile-card></profile-card>
```

Result:

* Normal paragraph → red
* Shadow DOM paragraph → green

---

### Example 3: Accessing Shadow DOM (open mode)

```js
document
  .querySelector("profile-card")
  .shadowRoot
  .querySelector("p");
```

This works only if mode is `open`.

---

## Short Answer Version

Shadow DOM provides encapsulation by creating a private DOM tree for a component, preventing CSS and DOM conflicts and making components self-contained and reusable.

---


# 66. How do you create a custom HTML element?

## Complete Explanation

A **custom HTML element** is created using the **Custom Elements API**, which allows developers to define **new HTML tags** with their own behavior, lifecycle, and encapsulated logic.

Custom elements are a core part of **Web Components** and are used to build:

* Reusable UI components
* Framework-independent widgets
* Encapsulated functionality

---

### Steps to Create a Custom HTML Element

#### 1. Create a JavaScript class

* The class must extend `HTMLElement`
* This class defines the behavior of the element

#### 2. Define lifecycle methods (optional but important)

Common lifecycle callbacks:

* `connectedCallback()` → when element is added to DOM
* `disconnectedCallback()` → when element is removed
* `attributeChangedCallback()` → when observed attributes change

#### 3. Register the element

* Use `customElements.define()`
* Tag name **must contain a hyphen** (`-`)

---

### Rules (Interview Important)

* Custom tag names must be kebab-case
* Cannot redefine an existing HTML tag
* Must extend `HTMLElement` or its subclasses

---

## Code Example (with comments)

### Example 1: Basic Custom Element

```html
<user-greeting></user-greeting>

<script>
  // Step 1: Create class extending HTMLElement
  class UserGreeting extends HTMLElement {

    // Runs when element is added to the DOM
    connectedCallback() {
      this.innerHTML = "<p>Hello, User!</p>";
    }
  }

  // Step 2: Register the custom element
  customElements.define("user-greeting", UserGreeting);
</script>
```

---

### Example 2: Custom Element with Attributes

```html
<user-card name="Tanish"></user-card>

<script>
  class UserCard extends HTMLElement {

    // Observe attributes
    static get observedAttributes() {
      return ["name"];
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `<h3>Hello, ${this.getAttribute("name")}</h3>`;
    }
  }

  customElements.define("user-card", UserCard);
</script>
```

---

### Example 3: Custom Element with Shadow DOM

```js
class AlertBox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        div {
          border: 1px solid red;
          padding: 10px;
        }
      </style>
      <div>Warning message</div>
    `;
  }
}

customElements.define("alert-box", AlertBox);
```

---

## Short Answer Version

A custom HTML element is created by extending `HTMLElement`, defining its behavior in a class, and registering it using `customElements.define()` with a hyphenated tag name.

---

# 67. Explain HTML templates and their use cases.

## Complete Explanation

HTML templates are defined using the `<template>` tag and are used to **store reusable HTML markup that is not rendered immediately** when the page loads.

Key idea:

> Content inside `<template>` exists in the DOM but is **inactive** until explicitly cloned and inserted using JavaScript.

This is useful because:

* The browser does not render it
* Scripts inside it do not execute
* Styles inside it do not apply until used

---

### Why HTML Templates Exist

Without templates:

* Developers copy-paste HTML strings
* Risk of bugs and duplication
* Harder to maintain UI structures

With templates:

* Clean separation of structure and logic
* Safe DOM cloning
* Better performance than string-based HTML injection

---

### What `<template>` Contains

A `<template>` can contain:

* HTML elements
* Text
* Inline styles
* Any valid HTML

Accessed via:

* `template.content` (a DocumentFragment)

---

### Common Use Cases

* Reusable UI blocks (cards, list items)
* Rendering lists from API data
* Web Components internal structure
* Client-side rendering without frameworks

---

## Code Example (with comments)

### Example 1: Basic HTML Template

```html
<template id="card-template">
  <div class="card">
    <h3></h3>
    <p></p>
  </div>
</template>

<div id="container"></div>

<script>
  // Select the template
  const template = document.getElementById("card-template");

  // Clone the template content
  const clone = template.content.cloneNode(true);

  // Fill data
  clone.querySelector("h3").textContent = "Product A";
  clone.querySelector("p").textContent = "In stock";

  // Append to DOM
  document.getElementById("container").appendChild(clone);
</script>
```

---

### Example 2: Rendering Multiple Items Using Template

```html
<template id="user-template">
  <li class="user"></li>
</template>

<ul id="users"></ul>

<script>
  const users = ["Aman", "Ravi", "Neha"];
  const template = document.getElementById("user-template");
  const list = document.getElementById("users");

  users.forEach(name => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".user").textContent = name;
    list.appendChild(clone);
  });
</script>
```

---

### Example 3: Template Inside Web Component

```js
const template = document.createElement("template");
template.innerHTML = `
  <style>
    p { color: blue; }
  </style>
  <p>Reusable content</p>
`;

class InfoBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
  }
}

customElements.define("info-box", InfoBox);
```

---

## Short Answer Version

HTML templates use the `<template>` tag to store inactive HTML that can be safely cloned and rendered later using JavaScript, making UI reuse efficient and clean.

---

# 68. How do you use server-sent events?

## Complete Explanation

**Server-Sent Events (SSE)** allow a server to **push real-time updates to the browser over a single long-lived HTTP connection**.
It is a **one-way communication** model: **server → client**.

Key idea:

> The browser opens a connection, and the server keeps sending updates whenever new data is available.

---

### When to Use Server-Sent Events

SSE is best suited for:

* Live notifications
* Real-time dashboards
* Stock prices
* News feeds
* Live logs
* Progress updates

It is **simpler than WebSockets** when you only need server-to-client updates.

---

### How Server-Sent Events Work (Flow)

1. Browser creates an `EventSource`
2. Browser sends a request to the server
3. Server keeps the connection open
4. Server sends data in a specific text format
5. Browser receives updates automatically

---

### SSE vs WebSockets (Interview Clarity)

* SSE → One-way (server → client)
* WebSockets → Two-way (client ↔ server)
* SSE → Uses HTTP
* WebSockets → Uses WebSocket protocol

---

### Server Response Format Rules

The server must:

* Set `Content-Type: text/event-stream`
* Send data using `data:` prefix
* End messages with `\n\n`

---

## Code Example (with comments)

### Example 1: Client-Side (HTML + JavaScript)

```html
<!DOCTYPE html>
<html>
<body>

<h2>Live Notifications</h2>
<div id="messages"></div>

<script>
  // Create a connection to the server
  const eventSource = new EventSource("/events");

  // Listen for messages
  eventSource.onmessage = function (event) {
    const msgDiv = document.getElementById("messages");

    // Append new message from server
    msgDiv.innerHTML += `<p>${event.data}</p>`;
  };

  // Handle errors
  eventSource.onerror = function () {
    console.error("Connection lost");
  };
</script>

</body>
</html>
```

---

### Example 2: Server-Side (Node.js – Express)

```js
const express = require("express");
const app = express();

app.get("/events", (req, res) => {
  // Required headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Send data every 3 seconds
  setInterval(() => {
    res.write(`data: Server time is ${new Date().toLocaleTimeString()}\n\n`);
  }, 3000);
});

app.listen(3000);
```

---

### Example 3: Closing the Connection

```js
// Client-side
eventSource.close();
```

---

### Limitations of Server-Sent Events

* Only server → client communication
* Limited browser support in very old browsers
* Not suitable for heavy bi-directional interaction

---

## Short Answer Version

Server-Sent Events allow servers to push real-time updates to the browser using a persistent HTTP connection, making them ideal for live notifications and dashboards where communication is one-way.
