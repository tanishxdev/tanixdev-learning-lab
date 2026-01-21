# Accordion UI

## Project Overview

This project is a **data-driven Accordion UI** built using:

- HTML
- CSS (dark mode only)
- Vanilla JavaScript

No frameworks.
No libraries.
No shortcuts.

The goal of this project is **not UI beauty**, but **JavaScript logic, decision-making, and engineering mindset**.

---

## Problem Statement

Build an accordion where:

- Clicking a question opens its answer
- Clicking the same question again closes it
- Only **one accordion item can be open at a time**
- Accordion items are **not hardcoded in HTML**
- Data comes from a **separate JavaScript file**

This pattern is commonly used in:

- FAQs
- Settings panels
- Dashboards
- Interview UI questions

---

## Tech Constraints (Locked)

- HTML + CSS + Vanilla JavaScript only
- No frameworks
- No libraries
- CSS handles only styling (dark mode)
- JavaScript handles only logic
- HTML is structure only

---

## Folder Structure

```
01-accordion/
├── index.html
├── css/
│   └── style.css
├── data/
│   └── accordionData.js
├── js/
│   ├── accordion.js
│   └── script.js
├── README.md
└── story.md
```

### Why this structure?

- `index.html` → structure only
- `data/` → static data (simulates API response)
- `js/` → logic only
- `css/` → styling only
- `story.md` → step-by-step reasoning & dry run

This separation mirrors **real production applications**.

---

## How the Project Works (High Level)

1. HTML provides an **empty container**
2. JavaScript reads data from `accordionData.js`
3. JavaScript dynamically creates accordion items
4. JavaScript controls open/close behavior
5. CSS reacts to JavaScript state using classes

Each layer has **one responsibility**.

---

## Data Design

Data lives in `data/accordionData.js` as an array of objects:

```js
{
  id: number,
  title: string,
  content: string
}
```

Why this design?

- Matches backend API responses
- Easy to scale
- UI logic does not change if data source changes

---

## JavaScript Logic (Core Idea)

Accordion behavior is controlled using **CSS classes as state**.

### Key Rule

- `.active` class = open
- No `.active` class = closed

### Click Logic (Plain English)

1. Check if the clicked item is already open
2. Close all accordion items
3. If clicked item was closed → open it
4. If clicked item was open → leave everything closed

There is **no global state variable**.

State lives in the DOM itself.

---

## Why This Logic Is Clean

- No index tracking
- No boolean flags
- No complex state management
- DOM is the source of truth

This approach is:

- Easy to debug
- Easy to explain
- Interview-friendly

---

## CSS Responsibility

CSS does **not** control logic.

CSS only:

- Applies dark mode styling
- Hides content by default
- Shows content when `.active` class exists

JavaScript never touches styles directly.

---

## Key Engineering Decisions

- UI is generated dynamically
- Data is separated from logic
- Logic is separated from styling
- State is handled via class toggling
- HTML remains intentionally minimal

---

## Common Beginner Mistakes Avoided

- Hardcoding accordion items in HTML
- Using inline `onclick`
- Mixing data and logic
- Tracking active index manually
- Letting CSS control logic

---

## How to Run

1. Open `index.html` in a browser
2. No build step required
3. No dependencies

---

## What This Project Demonstrates

- DOM manipulation
- Event handling
- State management via classes
- Data-driven UI rendering
- Clean project structure
- Real-world engineering mindset

---

## Interview Talking Point (One-Liner)

> “I built a data-driven accordion where JavaScript dynamically renders the UI and controls state using CSS classes, keeping logic and presentation cleanly separated.”

Below is a **short, crisp step list** you can keep at the top of `story.md` or README for quick revision.

---

# PROJECT 1 — ACCORDION (STEP SUMMARY)

### STEP 1 — `index.html` (Structure)

- Created a clean HTML skeleton
- Added only a heading and an empty accordion container
- No data, no logic, no hardcoded items
- Purpose: give JavaScript a place to inject UI

---

### STEP 2 — `accordionData.js` (Data)

- Designed static accordion data as an array of objects
- Each item has `id`, `title`, and `content`
- No DOM access, no logic
- Purpose: simulate real API-driven data

---

### STEP 3 — Logic Thinking (No Code)

- Defined accordion behavior in plain English
- Decided to use CSS classes as state (`active`)
- Finalized open/close rules (only one open at a time)
- Purpose: build mental model before coding

---

### STEP 4 — `accordion.js` (JavaScript Logic)

- Read data and dynamically created accordion UI
- Attached click listeners to headers
- Implemented open/close logic using class toggling
- No styling or CSS dependency
- Purpose: control behavior and state cleanly

---

### STEP 5 — `style.css` (Dark Mode Styling)

- Applied dark mode styles
- Hid content by default
- Showed content only when `.active` class exists
- CSS reacts to JS state, never controls logic
- Purpose: visual clarity without logic coupling

---

### STEP 6 — Dry Run (Deep Understanding)

- Walked through page load → render → click → toggle
- Traced DOM changes and class toggling step-by-step
- Verified single-open-item rule
- Purpose: ensure logic is fully understood and explainable

---

### STEP 7 — `README.md` (Documentation)

- Explained project, decisions, and structure
- Documented logic, data flow, and learning outcomes
- Added interview-ready explanations
- Purpose: communicate thinking like an engineer

---

## ONE-LINE PROJECT FLOW

**HTML container → JS reads data → JS renders UI → JS toggles state → CSS reflects state**

---

# Accordion Project — Interview Q&A

## 1. What problem does this project solve?

**Answer:**
It implements an accordion UI where content expands and collapses on click, ensuring only one item is open at a time using clean JavaScript logic.

---

## 2. Why didn’t you hardcode accordion items in HTML?

**Answer:**
Hardcoding couples data with UI. I separated data into a JS file so the UI is data-driven and scalable, similar to how real APIs work.

---

## 3. How is data structured in your project?

**Answer:**
As an array of objects, where each object has `id`, `title`, and `content`. This mirrors real backend API responses.

---

## 4. How does JavaScript know which accordion is open?

**Answer:**
It checks for the presence of an `active` CSS class on the accordion item using `classList.contains("active")`.

---

## 5. Why did you use a CSS class for state instead of a variable?

**Answer:**
Using the DOM as the source of truth avoids syncing issues, reduces variables, and makes the logic simpler and more reliable.

---

## 6. Explain the open/close logic in simple words.

**Answer:**
On every click, I first close all accordion items. Then, if the clicked item was not already open, I open it.

---

## 7. How do you ensure only one accordion item is open at a time?

**Answer:**
Before opening any item, I remove the `active` class from all accordion items.

---

## 8. What happens when you click an already open item?

**Answer:**
It closes because all items are closed first, and since it was already active, it is not reopened.

---

## 9. What role does CSS play in this project?

**Answer:**
CSS only handles appearance—dark mode styling and showing/hiding content based on the `active` class. It does not control logic.

---

## 10. What would happen if CSS is removed?

**Answer:**
The accordion logic would still work. Items would still toggle the `active` class, but visibility would not change visually.

---

## 11. Why is separating data, logic, and UI important?

**Answer:**
It improves maintainability, readability, and scalability, and reflects real-world frontend architecture.

---

## 12. How is this project scalable?

**Answer:**
Adding new accordion items only requires updating the data file. No changes to HTML or JavaScript logic are needed.

---

## 13. Did you use event delegation? Why or why not?

**Answer:**
No. Since the number of items is small and created once, attaching listeners directly keeps logic simpler and clearer.

---

## 14. What JavaScript concepts are used here?

**Answer:**
DOM manipulation, event handling, classList operations, conditional logic, and data-driven rendering.

---

## 15. What common beginner mistakes did you avoid?

**Answer:**
Hardcoding HTML, using inline `onclick`, mixing data with logic, tracking state with extra variables, and letting CSS control behavior.

---

## 16. How would you add animation without changing JS?

**Answer:**
By adding CSS transitions to the content section based on the `active` class.

---

## 17. How would this change if data came from an API?

**Answer:**
Only the data source would change. The rendering and logic code would remain the same.

---

## 18. What is the time complexity of opening an accordion item?

**Answer:**
O(n), because all accordion items are looped over to remove the `active` class.

---

## 19. Why is O(n) acceptable here?

**Answer:**
Accordion lists are typically small, and this tradeoff keeps logic simple and bug-free.

---

## 20. Give a one-line explanation of this project.

**Answer:**
“I built a data-driven accordion using Vanilla JavaScript where state is managed via CSS classes and UI is rendered dynamically.”
