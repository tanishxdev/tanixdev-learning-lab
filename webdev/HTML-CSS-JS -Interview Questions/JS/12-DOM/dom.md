# JavaScript Interview Questions and Answers

---

**Topic : DOM**


## **84. What is the Document Object Model (DOM)?**

---

## **1. Concept**

The **Document Object Model (DOM)** is a **programming interface** that represents an HTML (or XML) document as a **tree of objects**, where each HTML element becomes a **node** that JavaScript can access and manipulate.

In simple words:

> **DOM = JavaScript’s way to see, read, and modify HTML**

Without the DOM, JavaScript **cannot interact with the webpage**.

---

## **2. Why the DOM Exists**

HTML by itself is **static**.

The DOM allows JavaScript to:

- Read HTML elements
- Change content and styles
- Add or remove elements
- Handle user interactions (clicks, input, scroll)

So the DOM is the **bridge between HTML and JavaScript**.

---

## **3. DOM as a Tree Structure (Very Important)**

Consider this HTML:

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

The DOM tree looks like:

```
Document
 └── html
     └── body
         ├── h1
         └── p
```

Key points:

- Every element is a **node**
- Text inside elements is also a **node**
- The browser creates this tree when the page loads

---

## **4. What Is the `document` Object?**

`document` is the **entry point** to the DOM.

```javascript
console.log(document);
```

Through `document`, JavaScript can:

- Access elements
- Create elements
- Remove elements
- Attach event listeners

Example:

```javascript
document.title = "New Title";
```

This directly updates the HTML `<title>`.

---

## **5. Types of DOM Nodes (Interview Favorite)**

| Node Type      | Description                                |
| -------------- | ------------------------------------------ |
| Document Node  | The entire page                            |
| Element Node   | HTML tags (`div`, `p`, `h1`)               |
| Text Node      | Text inside elements                       |
| Attribute Node | Attributes like `class`, `id` (conceptual) |
| Comment Node   | HTML comments                              |

Example:

```html
<p>Hello</p>
```

- `<p>` → Element node
- `Hello` → Text node

---

## **6. DOM vs HTML (Very Important Difference)**

| HTML                 | DOM                   |
| -------------------- | --------------------- |
| Static markup        | Live object structure |
| Written by developer | Created by browser    |
| Cannot change itself | Can be changed by JS  |
| File-based           | Memory-based          |

Interview line:

> “HTML is the source, DOM is the runtime representation.”

---

## **7. DOM Is Live (Key Interview Insight)**

When JavaScript changes the DOM:

```javascript
document.body.style.background = "black";
```

The browser:

1. Updates the DOM
2. Recalculates layout
3. Repaints the UI

That’s why **excessive DOM manipulation hurts performance**.

---

## **8. Real-World Examples of DOM Usage**

- Updating text after API call
- Showing/hiding modals
- Form validation
- Rendering lists dynamically
- Handling button clicks

Example:

```javascript
document.getElementById("msg").textContent = "Loaded";
```

---

## **9. Common Interview Traps**

### Trap 1: “DOM is part of JavaScript”

Incorrect.

Correct:

> DOM is provided by the **browser (Web APIs)**, not JavaScript itself.

---

### Trap 2: Confusing DOM with HTML

HTML is the file.
DOM is the **object model in memory**.

---

## **10. Interview-Ready Summary**

The Document Object Model (DOM) is a browser-provided programming interface that represents an HTML document as a tree of objects. It allows JavaScript to dynamically access, modify, add, or remove elements and content from a webpage. The DOM acts as a bridge between HTML and JavaScript and enables interactivity, dynamic updates, and event handling in web applications.

---

## **11. Quick Practice Interview Questions**

1. What is the DOM in simple terms?
2. Is the DOM part of JavaScript?
3. Why is the DOM called a tree structure?
4. What is the `document` object?
5. Difference between HTML and DOM?
6. Why is excessive DOM manipulation slow?
7. What happens internally when DOM changes?

---

## **85. How do you create, append, or remove an element from the DOM?**

---

## **1. Concept**

The DOM allows JavaScript to **dynamically change the page structure** at runtime.

This includes:

- Creating new HTML elements
- Adding them to the page
- Removing existing elements

This is the **foundation of dynamic UI** (lists, cards, modals, notifications).

---

## **2. Creating a DOM Element**

To create an element, we use:

```javascript
document.createElement(tagName);
```

Example:

```javascript
const div = document.createElement("div");
```

At this point:

- The element exists **only in memory**
- It is **not visible** on the page yet

---

## **3. Setting Content and Attributes**

### Adding text

```javascript
div.textContent = "Hello World";
```

### Adding HTML (use carefully)

```javascript
div.innerHTML = "<strong>Hello</strong>";
```

### Adding attributes

```javascript
div.id = "box";
div.className = "container";
```

Or using `setAttribute`:

```javascript
div.setAttribute("data-role", "card");
```

---

## **4. Appending an Element to the DOM**

To make the element visible, it must be attached to an existing node.

### Common append methods

```javascript
parent.appendChild(child);
```

Example:

```javascript
document.body.appendChild(div);
```

Now the element appears on the page.

---

### Modern methods (Preferred)

```javascript
parent.append(child); // append at end
parent.prepend(child); // append at start
```

Example:

```javascript
const p = document.createElement("p");
p.textContent = "New paragraph";

document.body.append(p);
```

---

## **5. Inserting at a Specific Position**

```javascript
parent.insertBefore(newNode, referenceNode);
```

Example:

```javascript
const li = document.createElement("li");
li.textContent = "Item";

const list = document.querySelector("ul");
list.insertBefore(li, list.firstChild);
```

---

## **6. Removing an Element**

### Modern way (Recommended)

```javascript
element.remove();
```

Example:

```javascript
const box = document.getElementById("box");
box.remove();
```

---

### Old way (Still asked in interviews)

```javascript
parent.removeChild(child);
```

Example:

```javascript
const parent = document.body;
const child = document.getElementById("box");

parent.removeChild(child);
```

---

## **7. Replacing an Element**

```javascript
parent.replaceChild(newNode, oldNode);
```

Example:

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "New";

const oldDiv = document.getElementById("old");
document.body.replaceChild(newDiv, oldDiv);
```

---

## **8. Full Example (Create → Append → Remove)**

```javascript
// Create
const button = document.createElement("button");
button.textContent = "Click Me";

// Append
document.body.append(button);

// Remove after 2 seconds
setTimeout(() => {
  button.remove();
}, 2000);
```

---

## **9. Performance & Best Practices (Interview Signal)**

- Create elements **once**
- Append using **DocumentFragment** for multiple nodes
- Avoid repeated DOM access inside loops

Example:

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  fragment.append(li);
}

document.querySelector("ul").append(fragment);
```

---

## **10. Interview-Ready Summary**

To manipulate the DOM, JavaScript creates elements using `document.createElement`, modifies their content or attributes, and inserts them into the document using methods like `append`, `appendChild`, or `prepend`. Elements can be removed using `element.remove()` or `parent.removeChild()`. These operations enable dynamic UI updates and are fundamental to modern web development.

---

## **11. Quick Practice Interview Questions**

1. Why doesn’t `createElement` show the element immediately?
2. Difference between `append` and `appendChild`?
3. When should `innerHTML` be avoided?
4. How do you remove an element safely?
5. What is `DocumentFragment` and why is it useful?
6. How do you replace a DOM node?

---

## **86. Describe different ways to find or access HTML elements in the DOM.**

---

## **1. Concept**

To manipulate or read HTML elements, JavaScript must **first locate them in the DOM**.

The DOM provides **multiple selection methods**, each designed for different use cases:

- By ID
- By class
- By tag
- By CSS selector
- By relationship (parent/child)

Interviewers look for:
• Correct method choice
• Performance awareness
• Modern vs legacy APIs

---

## **2. Selecting by ID (Fastest & Most Common)**

```javascript
document.getElementById("header");
```

Key points:

- Returns **a single element**
- IDs must be **unique**
- Very fast lookup

Example:

```html
<h1 id="title">Hello</h1>
```

```javascript
const title = document.getElementById("title");
```

---

## **3. Selecting by Class Name**

```javascript
document.getElementsByClassName("item");
```

Returns:

- **HTMLCollection** (live collection)

Example:

```html
<div class="item"></div>
<div class="item"></div>
```

```javascript
const items = document.getElementsByClassName("item");
```

Important:

- Updates automatically if DOM changes
- Does NOT support array methods directly

---

## **4. Selecting by Tag Name**

```javascript
document.getElementsByTagName("p");
```

Returns:

- **HTMLCollection**

Example:

```javascript
const paragraphs = document.getElementsByTagName("p");
```

Used when:

- You want all elements of a tag type

---

## **5. Selecting Using CSS Selectors (Modern & Powerful)**

### `querySelector` (Single Element)

```javascript
document.querySelector(".box");
```

- Returns **first matching element**
- Uses **CSS selector syntax**

Example:

```javascript
document.querySelector("#main h1");
```

---

### `querySelectorAll` (Multiple Elements)

```javascript
document.querySelectorAll(".item");
```

Returns:

- **NodeList** (static)

Example:

```javascript
const buttons = document.querySelectorAll("button");
```

NodeList supports:

- `forEach`
- Iteration

---

## **6. HTMLCollection vs NodeList (Interview Favorite)**

| Feature               | HTMLCollection  | NodeList         |
| --------------------- | --------------- | ---------------- |
| Live                  | Yes             | No               |
| Array methods         | No              | Limited          |
| Returned by           | getElementsBy\* | querySelectorAll |
| Updates automatically | Yes             | No               |

---

## **7. Selecting Relative to an Element**

Instead of `document`, you can scope selection:

```javascript
const section = document.querySelector("section");
const button = section.querySelector("button");
```

This:

- Improves performance
- Avoids global searches

---

## **8. DOM Traversal Methods**

```javascript
element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;
```

Example:

```javascript
const item = document.querySelector(".item");
console.log(item.parentElement);
```

---

## **9. Real-World Best Practices**

- Prefer `querySelector` / `querySelectorAll`
- Cache DOM selections
- Avoid repeated lookups
- Scope selectors when possible

Bad:

```javascript
document.getElementById("btn");
document.getElementById("btn");
```

Good:

```javascript
const btn = document.getElementById("btn");
```

---

## **10. Common Interview Traps**

### Trap 1: Assuming NodeList is live

Wrong. It is static.

### Trap 2: Using `getElementsByClassName` and mutating DOM in loops

Can cause unexpected behavior.

---

## **11. Interview-Ready Summary**

JavaScript provides multiple ways to access HTML elements in the DOM, including `getElementById`, `getElementsByClassName`, `getElementsByTagName`, and modern selector-based methods like `querySelector` and `querySelectorAll`. While older methods return live HTMLCollections, modern APIs return static NodeLists and support CSS selectors, making them more flexible and safer for most use cases.

---

## **12. Quick Practice Interview Questions**

1. Difference between `getElementById` and `querySelector`?
2. What is a live collection?
3. Difference between NodeList and HTMLCollection?
4. Which method supports CSS selectors?
5. Why should DOM selections be cached?
6. How do you limit DOM search scope?

---

## **87. Explain the difference between `innerHTML` and `textContent`.**

---

## **1. Concept**

Both `innerHTML` and `textContent` are used to **read or update content** inside a DOM element, but they behave **very differently**.

Core difference:

> `innerHTML` works with **HTML markup**
> `textContent` works with **plain text only**

This question is often used to test:
• Security awareness
• Performance understanding
• DOM knowledge

---

## **2. `innerHTML`**

### What it does

- Gets or sets **HTML inside an element**
- Parses strings as **real HTML**
- Can create elements dynamically

Example:

```html
<div id="box"></div>
```

```javascript
const box = document.getElementById("box");
box.innerHTML = "<strong>Hello</strong>";
```

Result:

- `<strong>` tag is parsed
- Text appears bold

---

### Reading with `innerHTML`

```javascript
console.log(box.innerHTML);
// "<strong>Hello</strong>"
```

---

## **3. `textContent`**

### What it does

- Gets or sets **only text**
- HTML tags are treated as **plain text**
- Does NOT parse markup

Example:

```javascript
box.textContent = "<strong>Hello</strong>";
```

Result:

- User sees `<strong>Hello</strong>` literally
- No HTML parsing

---

### Reading with `textContent`

```javascript
console.log(box.textContent);
// "Hello"
```

(Only visible text, no tags)

---

## **4. Side-by-Side Comparison (Interview Friendly)**

| Feature       | `innerHTML`    | `textContent` |
| ------------- | -------------- | ------------- |
| Parses HTML   | Yes            | No            |
| Accepts tags  | Yes            | No            |
| Security risk | High (XSS)     | Safe          |
| Performance   | Slower         | Faster        |
| Use case      | Dynamic markup | Text updates  |

---

## **5. Security Implications (Very Important)**

### XSS Risk with `innerHTML`

```javascript
box.innerHTML = userInput;
```

If `userInput` contains:

```html
<script>
  alert("Hacked");
</script>
```

This **executes code**.

---

### Safe Alternative

```javascript
box.textContent = userInput;
```

Always safe for:

- User input
- API responses
- Form values

Interview line:

> “`innerHTML` should never be used with untrusted data.”

---

## **6. Performance Difference**

- `innerHTML`
  - Parses HTML
  - Rebuilds DOM nodes

- `textContent`
  - Direct text replacement
  - No parsing

Therefore:

> `textContent` is **faster and safer**.

---

## **7. Real-World Usage Guidelines**

Use `textContent` when:

- Updating text
- Showing messages
- Displaying user input

Use `innerHTML` when:

- Injecting known-safe markup
- Rendering templates
- Controlled UI rendering

---

## **8. Common Interview Traps**

### Trap 1: Saying they are the same

They are **not**.

### Trap 2: Using `innerHTML` everywhere

Shows lack of security awareness.

---

## **9. Interview-Ready Summary**

`innerHTML` allows reading and writing HTML markup inside an element and parses strings as HTML, which makes it powerful but risky due to security concerns like XSS. `textContent` works only with plain text, does not parse HTML, and is safer and faster. In practice, `textContent` should be preferred unless HTML rendering is explicitly required.

---

## **10. Quick Practice Interview Questions**

1. Why is `innerHTML` risky?
2. What is XSS?
3. Which one is faster and why?
4. When should `textContent` be preferred?
5. Can `innerHTML` create DOM elements?
6. What happens if HTML tags are passed to `textContent`?

---

## **88. How do you handle DOM events in a memory-efficient way?**

---

## **1. Concept**

Handling DOM events in a **memory-efficient way** means:

- Avoiding unnecessary event listeners
- Preventing memory leaks
- Ensuring event handlers are not duplicated or orphaned

This is critical in:

- Large applications
- Single Page Applications (SPAs)
- Dynamic lists (tables, cards, feeds)

Interviewers are checking:
• Performance awareness
• Cleanup discipline
• Event system understanding

---

## **2. The Core Problem (Why Memory Issues Happen)**

Bad pattern:

```javascript
buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
```

Problems:

- Too many listeners
- List grows → memory grows
- Removed elements may still keep listeners

---

## **3. Event Delegation (Most Important Answer)**

### What is Event Delegation?

Event delegation means:

> Attach **one event listener** to a **common parent**, and handle events for all children using event bubbling.

---

### How Event Bubbling Helps

DOM events **bubble up** from child → parent.

So instead of:

```javascript
li.addEventListener("click", handler);
```

We do:

```javascript
ul.addEventListener("click", handler);
```

---

### Example (Memory-Efficient)

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```javascript
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
```

Benefits:

- Only **one listener**
- Works for **dynamically added elements**
- Lower memory usage

---

## **4. Removing Event Listeners Properly**

Always remove listeners when:

- Component unmounts
- Element is removed
- Page transitions happen

```javascript
element.removeEventListener("click", handler);
```

Important rule:

> You must pass the **same function reference**.

Bad:

```javascript
element.removeEventListener("click", () => {});
```

This does nothing.

---

## **5. Avoid Inline Event Handlers**

Bad:

```html
<button onclick="handleClick()">Click</button>
```

Why bad:

- Hard to remove
- Pollutes global scope
- Not scalable

Interview-safe statement:

> “Inline handlers are avoided in modern applications.”

---

## **6. Use Passive Event Listeners (Performance Bonus)**

For scroll/touch events:

```javascript
window.addEventListener("scroll", handler, { passive: true });
```

Benefits:

- Improves scrolling performance
- Prevents blocking UI thread

---

## **7. Use Once Option When Possible**

```javascript
button.addEventListener("click", handler, { once: true });
```

Listener:

- Runs once
- Automatically removed
- Prevents leaks

---

## **8. Cleanup in Frameworks (Real-World Signal)**

In SPAs:

- React → cleanup in `useEffect`
- Vue → `beforeUnmount`
- Vanilla JS → manual cleanup

Example:

```javascript
function setup() {
  window.addEventListener("resize", onResize);
}

function cleanup() {
  window.removeEventListener("resize", onResize);
}
```

---

## **9. Common Interview Traps**

### Trap 1: “Just use addEventListener”

Incomplete answer.

Correct:

> Use event delegation + cleanup.

---

### Trap 2: Forgetting to remove listeners

Leads to:

- Memory leaks
- Duplicate handlers
- Unexpected behavior

---

## **10. Interview-Ready Summary**

To handle DOM events in a memory-efficient way, I use event delegation to minimize the number of event listeners by attaching a single listener to a parent element. I also ensure proper cleanup of event listeners using `removeEventListener`, avoid inline handlers, and use options like `once` and `passive` when appropriate. This approach reduces memory usage, improves performance, and prevents memory leaks, especially in dynamic or single-page applications.

---

## **11. Quick Practice Interview Questions**

1. What is event delegation?
2. Why does event delegation save memory?
3. What is event bubbling?
4. Why must function references match in `removeEventListener`?
5. What are passive event listeners?
6. How do event listeners cause memory leaks?
7. How do you clean up listeners in SPAs?

---
