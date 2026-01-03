# PROJECT 1 — Accordion (Vanilla JS, Static Data)

**Tech constraint (LOCKED):**

* HTML + CSS + Vanilla JavaScript only
* No frameworks
* No libraries
* Focus = **JavaScript logic & thinking**
* UI = simple, clean, readable

---

## 1. What is this project (Problem)

We want to build an **Accordion UI** where:

* Clicking a question opens its answer
* Clicking again closes it
* Only **one item opens at a time** (important logic)
* Data is **NOT hardcoded in HTML**
* Data comes from a **separate JS file**

This mimics:

* FAQs
* Settings panels
* Interview-style UI logic
* Real production patterns (data + UI separation)

---

## 2. Why this project exists (Why)

This project teaches you:

### JavaScript Core Concepts

* DOM selection & manipulation
* Event handling
* State management (open / close)
* Conditional logic
* Data-driven UI rendering

### Engineering Thinking

* Separation of concerns
* Folder structure
* Data → Logic → UI flow
* Scalability (easy to add more items)

This is **NOT** about CSS tricks.
This is about **thinking + logic**.

---

## 3. Mental Model (How to think)

Think like this:

> “HTML is an empty container.
> JavaScript reads data.
> JavaScript creates UI.
> JavaScript controls behavior.”

Accordion logic in simple words:

* There are multiple items
* Only one item can be open
* Clicking an item:

  * If it’s closed → open it & close others
  * If it’s open → close it

So we need:

* A way to **know which item is active**
* A way to **update UI accordingly**

---

## 4. High-level Decisions (Important)

### Decision 1: Where will data live?

**Separate file**

Reason:

* Real apps never hardcode data in HTML
* Easy to change data without touching logic

---

### Decision 2: How will UI be created?

**JS-generated HTML**

Reason:

* Teaches real JS DOM usage
* Avoids repetitive HTML
* Scales easily

---

### Decision 3: How will open/close be tracked?

Two options (we’ll choose one):

1. Track active index in JS
2. Use CSS classes + JS logic

We’ll use **CSS class + JS control** (clean & readable).

---

## 5. Folder Structure (VERY IMPORTANT)

This is how a **real beginner-friendly project** should look:

```
accordion-project/
│
├── index.html
│
├── css/
│   └── style.css
│
├── data/
│   └── accordionData.js
│
├── js/
│   └── accordion.js
│
└── README.md
```

### Why this structure?

* `data/` → only data (no logic)
* `js/` → only logic
* `css/` → only styles
* `index.html` → structure only

This separation = **engineer mindset**

---

## 6. Data Design (Static Data File)

In `accordionData.js`, data will be like:

* Array of objects
* Each object:

  * id
  * title
  * content

Why?

* Mirrors API responses
* Industry-standard structure

Example (conceptual, not final code):

```js
[
  { id: 1, title: "Question 1", content: "Answer 1" },
  { id: 2, title: "Question 2", content: "Answer 2" }
]
```

---

## 7. Logic Flow (Step-by-step)

This is the **exact thinking flow** we’ll implement:

1. Load data from `accordionData.js`
2. Loop over data
3. Create accordion items dynamically
4. Attach click event to each header
5. On click:

   * Close all items
   * Open clicked item
6. Toggle logic if same item clicked again

No shortcuts.
No magic.

---

## 8. Common Beginner Mistakes (You’ll avoid these)

* Writing all HTML manually
* Mixing data & logic in one file
* Using inline `onclick`
* Hardcoding answers
* Overusing CSS for logic
* Not handling “close others” case

We’ll handle all of these **cleanly**.

---

## 9. What You’ll Learn After This Project

After Project 1, you’ll clearly understand:

* How JS controls UI
* How data-driven UI works
* How to structure small projects
* How interviewers expect you to think

This project alone is **interview-discussable**.

---

## 10. NEXT STEPS (IMPORTANT)

### Step 1

`index.html`
– clean structure
– no logic
– placeholders only

### Step 2

`accordionData.js`
– static data
– explained object-by-object

### Step 3

`accordion.js`
– full logic
– line-by-line comments
– mental explanation before code

### Step 4

CSS (only necessary styles)

### Step 5

README
– project explanation
– learning outcomes
– interview talking points

Say **YES** and we start Step 1.

Good. We move **step-by-step**.
Now **STEP 1 ONLY** — no JS logic yet.

---

# STEP 1 — `index.html`

**Goal:**
Create a **clean skeleton** that JavaScript will control later.
No data. No logic. No shortcuts.

---

## 1. Why this file exists

`index.html` should:

* Define **structure only**
* Act as a **container**
* Let JavaScript “inject” everything

Think like this:

> HTML = empty room
> JS = furniture + behavior

---

## 2. What this file must NOT do

* ❌ No accordion items hardcoded
* ❌ No inline JS
* ❌ No data
* ❌ No logic

If HTML contains questions/answers → **bad design**

---

## 3. What this file WILL contain

* Page wrapper
* Heading
* One empty container where accordion items will be injected
* CSS + JS file links

---

## 4. Folder reminder (where this file lives)

```
accordion-project/
└── index.html
```

---

## 5. `index.html` (FINAL, COPY-PASTE READY)

```html
<!DOCTYPE html>
<!--
DOCTYPE tells the browser:
Use HTML5 rules.
Avoid quirks mode.
-->

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!--
    Ensures proper character encoding.
    Prevents text breaking.
    -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--
    Makes layout responsive on mobile devices.
    -->

    <title>Accordion Project - Vanilla JS</title>

    <!-- CSS file -->
    <link rel="stylesheet" href="./css/style.css" />
  </head>

  <body>
    <!--
    Main wrapper for the entire page.
    Keeps layout organized.
    -->
    <main class="app">
      <!-- Page heading -->
      <h1 class="app-title">FAQ Accordion</h1>

      <!--
      Accordion container
      IMPORTANT:
      - This will remain EMPTY in HTML
      - JavaScript will inject accordion items here
      -->
      <section id="accordion-container"></section>
    </main>

    <!--
    Data file:
    Contains static accordion questions & answers
    MUST load before main JS logic
    -->
    <script src="./data/accordionData.js"></script>

    <!--
    Main JavaScript logic file
    Handles:
    - Rendering UI
    - Click behavior
    - Open / close logic
    -->
    <script src="./js/accordion.js"></script>
  </body>
</html>
```

---

## 6. Key Engineering Takeaways (IMPORTANT)

* HTML is **dumb** by design
* UI will be **data-driven**
* JS controls everything
* This structure scales to real apps

Interview line you can say later:

> “My HTML is just a container. JavaScript renders and controls the accordion using external data.”

---

## 7. STOP POINT (DO NOT SKIP)

Before moving forward, ensure:

* Folder structure matches exactly
* File paths are correct
* No accordion items exist in HTML

---

### Next

👉 **STEP 2 — `data/accordionData.js`**

# STEP 2 — `data/accordionData.js`

**Goal:**
Design **clean, scalable static data** that behaves like a real API response.

---

## 1. Why this file exists

In real applications:

* Data comes from APIs
* UI should **not care** where data comes from

Here we simulate that using a **separate data file**.

Think like this:

> Data is independent.
> Logic consumes data.
> UI renders data.

---

## 2. What this file must NOT contain

* ❌ DOM access
* ❌ Event listeners
* ❌ UI logic
* ❌ HTML

This file is **data only**.

---

## 3. Data structure decision (IMPORTANT)

We will use:

* **Array** → because there are multiple items
* **Objects** → because each item has properties

Each accordion item will have:

* `id` → unique identifier
* `title` → clickable heading
* `content` → hidden/visible text

This mirrors **backend API JSON**.

---

## 4. Folder reminder

```
accordion-project/
└── data/
    └── accordionData.js
```

---

## 5. `accordionData.js` (FINAL, COPY-PASTE READY)

```js
/*
This file contains ONLY static data.
No logic.
No DOM access.
No UI code.

Think of this as:
"Data coming from backend / API"
*/

const accordionData = [
  {
    id: 1,
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language used to add interactivity and logic to web pages. It runs in the browser and can also run on servers using environments like Node.js.",
  },
  {
    id: 2,
    title: "What is an Accordion UI?",
    content:
      "An accordion is a UI pattern where content is shown or hidden when a user clicks on a header. It helps organize information in a compact way.",
  },
  {
    id: 3,
    title: "Why use Vanilla JavaScript?",
    content:
      "Using Vanilla JavaScript helps you understand core concepts like DOM manipulation, event handling, and state management without relying on frameworks.",
  },
  {
    id: 4,
    title: "Can this data come from an API?",
    content:
      "Yes. In real applications, this data often comes from APIs. This file simulates that behavior so the UI logic remains the same.",
  },
];

/*
We do NOT export using ES modules here
because we are using plain script tags.

The variable 'accordionData' becomes global
and accessible inside accordion.js
*/
```

---

## 6. Engineering Thinking (Important)

Why this is **good design**:

* UI logic does not change if data source changes
* Easy to add/remove items
* Matches real-world API-driven apps
* Interview-friendly explanation

Interview line:

> “I separated my data from UI logic so the accordion can scale or switch to an API without changing the rendering code.”

---

## 7. STOP POINT (CHECKLIST)

Before moving ahead:

* File path is correct
* Variable name is exactly `accordionData`
* No DOM code exists in this file

---

### Next Step

👉 **STEP 3 — `js/accordion.js`**

---

# STEP 3 — `js/accordion.js`

**Goal:**

* Read data
* Create UI dynamically
* Control open / close behavior
* Maintain clean, scalable logic

No shortcuts. No magic.

---

## 1. Before Writing Code — Mental Model

Fix this in your head first:

* HTML gives us **one empty container**
* Data gives us **multiple accordion items**
* JavaScript will:

  1. Loop over data
  2. Create DOM elements
  3. Attach click logic
  4. Control open/close state

Accordion rule (LOCKED):

* Only **one item open at a time**
* Clicking an open item → closes it

---

## 2. Logic Breakdown (Step-by-step)

We will write code in this exact order:

1. Get accordion container from DOM
2. Loop over `accordionData`
3. For each item:

   * Create wrapper
   * Create header
   * Create content
4. Append everything to container
5. Add click event
6. On click:

   * Close all items
   * Toggle clicked item

---

## 3. Folder Reminder

```
accordion-project/
└── js/
    └── accordion.js
```

---

## 4. `accordion.js` (FULL CODE — COMMENTED LINE BY LINE)

```js
/*
This file handles:
- Rendering accordion UI
- Click behavior
- Open / close logic

It depends on:
- accordionData (from accordionData.js)
*/

// 1. Select the accordion container from HTML
const accordionContainer = document.getElementById("accordion-container");

/*
Safety check:
If container is not found, stop execution.
Prevents silent bugs.
*/
if (!accordionContainer) {
  throw new Error("Accordion container not found in HTML");
}

// 2. Function to create and render accordion items
function renderAccordion(data) {
  /*
  Loop through each accordion item from data
  */
  data.forEach((item) => {
    // Create main wrapper for one accordion item
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Create header (clickable part)
    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.textContent = item.title;

    // Create content (hidden/shown part)
    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.textContent = item.content;

    /*
    Click event on header
    Controls open / close behavior
    */
    header.addEventListener("click", () => {
      // Check if this item is already active
      const isActive = accordionItem.classList.contains("active");

      // Close all accordion items
      closeAllAccordions();

      /*
      If clicked item was NOT active,
      open it.
      If it WAS active, leave everything closed.
      */
      if (!isActive) {
        accordionItem.classList.add("active");
      }
    });

    // Append header and content to accordion item
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    // Append accordion item to main container
    accordionContainer.appendChild(accordionItem);
  });
}

// 3. Function to close all accordion items
function closeAllAccordions() {
  const allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach((item) => {
    item.classList.remove("active");
  });
}

// 4. Initial render call
renderAccordion(accordionData);
```

---

## 5. How Open / Close Works (VERY IMPORTANT)

There is **NO complex state variable**.

State is handled via:

```js
classList.contains("active")
```

Flow on click:

1. Check if clicked item is active
2. Close everything
3. If it was not active → open it

This avoids:

* Multiple open items
* State bugs
* Extra variables

---

## 6. Common Beginner Mistakes (Avoided Here)

* Using inline `onclick`
* Tracking index manually
* Forgetting to close other items
* Mixing data & DOM logic
* Hardcoding HTML

You avoided all of them.

---

## 7. Interview Explanation (You Should Be Able to Say This)

> “I render the accordion dynamically from data.
> On click, I close all items and toggle the clicked one using a CSS class.
> This keeps logic simple and scalable.”

---

## 8. STOP POINT — TEST NOW

At this stage:

* Accordion items will render
* Clicking headers will toggle logic
* Content visibility depends on CSS (next step)

Right now content may all appear — **that’s expected**.

---

### Next Step

👉 **STEP 4 — CSS (`style.css`)**

---

# Why everything is visible right now (IMPORTANT)

### What your JS has done correctly

* JavaScript **successfully rendered data**
* DOM creation is working
* Event listeners are attached
* Logic is ready

That’s why you see:

* All questions
* All answers
* In correct order

### What is missing (by design)

Right now:

* **CSS is not controlling visibility**
* No rule says “hide content by default”

JavaScript is only **adding/removing a class**:

```js
accordionItem.classList.add("active");
```

But **CSS has not been told what `active` means yet**.

So browser shows everything.

This separation is **good engineering**, not a bug.

---

# Mental Model (Lock this in)

* JavaScript decides **state** (open / close)
* CSS decides **appearance** (show / hide)

Right now:

* State logic exists
* Appearance rules do not

So → everything shows.

---

# STEP 4 — `css/style.css`

Now we define:

1. Default hidden state
2. Visible state when `.active` is present

Nothing fancy. Only what’s required.

---

## `css/style.css` (FINAL, CLEAN, COMMENTED)

```css
/*
Basic reset for predictable styling
*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*
Page wrapper
*/
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

.app-title {
  margin-bottom: 20px;
}

/*
Accordion item wrapper
*/
.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

/*
Clickable header
*/
.accordion-header {
  padding: 12px;
  background-color: #eee;
  cursor: pointer;
  font-weight: bold;
}

/*
Content section
IMPORTANT:
Hidden by default
*/
.accordion-content {
  padding: 12px;
  display: none;
  background-color: #fff;
}

/*
When accordion item is active,
show its content
*/
.accordion-item.active .accordion-content {
  display: block;
}
```

---

# What will happen AFTER this CSS

Now the flow becomes correct:

### Initial load

* All contents → hidden

### Click on a header

JS:

```js
accordionItem.classList.add("active");
```

CSS:

```css
.accordion-item.active .accordion-content {
  display: block;
}
```

Result:

* Only clicked item opens
* Others remain closed

### Click same item again

* JS removes `active`
* CSS hides content again

---

# Why this design is clean & scalable

* JS does **not touch styles**
* CSS does **not know logic**
* Each layer has one responsibility

Interview-level explanation:

> “JavaScript controls state using classes, and CSS handles visibility. This keeps logic and presentation cleanly separated.”

---

# Quick Checklist (Verify Now)

* Content hidden initially? YES
* Only one opens at a time? YES
* Clicking open item closes it? YES
* Data still comes from separate file? YES

You’ve just built a **real, production-style accordion**.

---

## Next Step (Optional but Recommended)

Next we can:

1. Add smooth open/close animation (still CSS only)
2. Improve accessibility (ARIA, keyboard support)
3. Refactor logic for reusability
4. Write a **README** explaining this project like an engineer
---

# DRY RUN — Accordion Project (Vanilla JS)

We will dry run using **ONE accordion item**, then extend to multiple.

---

## Initial Conditions (Before Page Load)

### Files involved

* `index.html` → empty container
* `accordionData.js` → data array
* `accordion.js` → logic
* `style.css` → hide/show rules

---

## STEP 0 — Browser loads the page

### HTML state

```html
<section id="accordion-container"></section>
```

* Container exists
* It is **empty**

---

## STEP 1 — `accordionData.js` loads

```js
const accordionData = [
  { id: 1, title: "What is JavaScript?", content: "..." },
  { id: 2, title: "What is an Accordion UI?", content: "..." },
  ...
];
```

### Memory snapshot

```
accordionData → Array(4 objects)
```

* Data is now available globally
* No DOM changes yet

---

## STEP 2 — `accordion.js` loads

### Line 1

```js
const accordionContainer = document.getElementById("accordion-container");
```

### Result

```
accordionContainer → <section id="accordion-container"></section>
```

* Container found successfully
* No error thrown

---

## STEP 3 — `renderAccordion(accordionData)` is called

```js
renderAccordion(accordionData);
```

Function starts execution.

---

## STEP 4 — Enter `renderAccordion(data)`

```js
data.forEach((item) => {
```

Loop starts.

---

## DRY RUN — FIRST ITERATION (item = id:1)

### item =

```js
{
  id: 1,
  title: "What is JavaScript?",
  content: "JavaScript is a programming language..."
}
```

---

### Create wrapper

```js
const accordionItem = document.createElement("div");
accordionItem.classList.add("accordion-item");
```

DOM (not yet attached):

```
<div class="accordion-item"></div>
```

---

### Create header

```js
const header = document.createElement("div");
header.classList.add("accordion-header");
header.textContent = item.title;
```

DOM:

```
<div class="accordion-header">
  What is JavaScript?
</div>
```

---

### Create content

```js
const content = document.createElement("div");
content.classList.add("accordion-content");
content.textContent = item.content;
```

DOM:

```
<div class="accordion-content">
  JavaScript is a programming language...
</div>
```

---

### Attach click listener

```js
header.addEventListener("click", () => { ... });
```

* No execution yet
* Just **registering behavior**

---

### Append elements

```js
accordionItem.appendChild(header);
accordionItem.appendChild(content);
accordionContainer.appendChild(accordionItem);
```

DOM now becomes:

```html
<section id="accordion-container">
  <div class="accordion-item">
    <div class="accordion-header">What is JavaScript?</div>
    <div class="accordion-content">JavaScript is...</div>
  </div>
</section>
```

---

## STEP 5 — CSS kicks in (IMPORTANT)

```css
.accordion-content {
  display: none;
}
```

### Result

* Content is **hidden**
* Header is visible

User sees:

```
What is JavaScript?
```

---

## STEP 6 — User clicks the header

### Click handler runs

```js
const isActive = accordionItem.classList.contains("active");
```

At this moment:

```
accordionItem.classList = ["accordion-item"]
```

So:

```
isActive = false
```

---

### Close all accordions

```js
closeAllAccordions();
```

Inside:

```js
document.querySelectorAll(".accordion-item")
```

* Finds all accordion items
* Removes `active` from all
* Currently none have `active`

No visible change.

---

### Toggle logic

```js
if (!isActive) {
  accordionItem.classList.add("active");
}
```

Since `isActive === false`:

```
accordionItem.classList = ["accordion-item", "active"]
```

---

## STEP 7 — CSS reacts to state change

```css
.accordion-item.active .accordion-content {
  display: block;
}
```

Now content becomes **visible**.

User sees:

```
What is JavaScript?
JavaScript is a programming language...
```

---

## STEP 8 — User clicks SAME header again

### Click handler runs again

```js
const isActive = accordionItem.classList.contains("active");
```

Now:

```
isActive = true
```

---

### Close all accordions

```js
closeAllAccordions();
```

* Removes `active` from this item

DOM:

```
accordionItem.classList = ["accordion-item"]
```

---

### Toggle condition

```js
if (!isActive) { ... }
```

* Condition fails
* No class added

---

### CSS hides content again

Result:

```
Only header visible
```

---

## STEP 9 — User clicks another accordion item

Flow repeats:

* All items closed
* Clicked item opened
* Only **one open at a time**

---

# KEY INSIGHT (MOST IMPORTANT)

There is **NO global state variable**.

State lives here:

```js
element.classList.contains("active")
```

This is:

* Simple
* Scalable
* Bug-resistant

---

# FINAL ONE-LINE SUMMARY

> “On every click, we close all items, then open the clicked one only if it wasn’t already active. CSS controls visibility based on the `active` class.”

---