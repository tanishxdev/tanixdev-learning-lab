## Project — Jumping Letter Animation (Vanilla JavaScript)

### Before We Start (Important)

* We will go **step-by-step**
* Same **notes formatting** (`## → ### → ####`)
* Easy English
* Logic first, animation later
* After each step → I’ll **pause for confirmation**

---

## Step 0 — What Is Jumping Letter Animation? (Problem Understanding)

### What we want to build

* A **word / sentence** on screen
* Each **letter jumps up and down**
* Animation happens:

  * on hover **OR**
  * automatically (loop)
* Letters animate **individually**, not as a group

Example idea:

```
HELLO
H ↑   ↓
E   ↑   ↓
L     ↑   ↓
L       ↑   ↓
O         ↑   ↓
```

---

## Step 0.1 — Why This Project Exists (JS Learning Value)

### Core concepts you will learn

* String manipulation
* Looping through characters
* DOM creation dynamically
* `span` wrapping per letter
* Adding / removing CSS classes
* Basic animation timing logic

This project is **pure frontend thinking**.

---

## Step 0.2 — Tech Constraints (LOCKED)

### Rules

* HTML
* CSS
* **Vanilla JavaScript only**
* ❌ No libraries
* ❌ No GSAP
* ❌ No frameworks

Animation via:

* CSS keyframes
* JS class control

---

## Step 0.3 — Folder Structure (Same Discipline)

```
jumping-letter-animation/
│
├── index.html
├── style.css
└── script.js
```

---

## Step 0.4 — High-Level Logic (Mental Model)

### Think like this

```
Text
 ↓
Split into letters
 ↓
Wrap each letter in <span>
 ↓
Apply animation per span
```

JS does **text → spans**
CSS does **movement**

---

## Step 0.5 — Animation Strategy (No Magic)

### Two possible ways

1. **Hover-based** (easy)
2. **Auto loop with delay** (slightly advanced)

We will start with:
👉 **Hover-based animation** (clean foundation)

Later we can extend.

## Step 1 — HTML Structure (Text Holder Only)

### Goal of This Step

* Keep HTML **very minimal**
* Do NOT hardcode spans
* Let **JavaScript create letters**
* HTML only provides a **container**

---

## Step 1.1 — What HTML Do We Need?

### We only need:

* One container to hold text
* JS will fill it

So:

* ❌ No spans in HTML
* ❌ No animation in HTML

---

## Step 1.2 — `index.html`

### Complete HTML (Read comments)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Jumping Letter Animation</title>

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Main wrapper -->
    <div class="container">
      <!-- Text container (JS will fill letters here) -->
      <h1 id="text">JUMP</h1>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

## Step 1.3 — Why This HTML Is Designed This Way

### Why text is plain

```html
<h1 id="text">JUMP</h1>
```

Because:

* JS needs the **raw string**
* We will:

  * read this text
  * split it
  * replace it with spans

Hardcoding spans in HTML = ❌ bad practice.

---

## Step 1.4 — Mental Model (Lock This)

```
HTML → gives text
JS   → breaks text
CSS  → animates letters
```

Each layer has **one job only**.

---

## Step 2 — JavaScript: Split Text into Letters (Core Logic)

### Goal of This Step

* Read text from HTML
* Break it into **individual letters**
* Wrap each letter inside a `<span>`
* Put spans back into DOM
* **No animation yet**

This is the **most important logic step** of the project.

---

## Step 2.1 — Why We Need `<span>` Per Letter

### Problem

CSS animation works on **elements**, not on raw text.

### Solution

* Each letter must be:

  * its **own element**
  * independently animated

So we convert:

```
JUMP
```

Into:

```html
<span>J</span>
<span>U</span>
<span>M</span>
<span>P</span>
```

---

## Step 2.2 — Select the Text Element (`script.js`)

### DOM selection

```js
// Select the text element
const textElement = document.getElementById("text");
```

---

## Step 2.3 — Read Original Text

### Get text content

```js
// Read original text
const text = textElement.innerText;
```

#### Example

```
text = "JUMP"
```

Important:

* `innerText` gives **only text**
* No HTML, no spans

---

## Step 2.4 — Split Text into Letters

### Use `split("")`

```js
// Split text into individual characters
const letters = text.split("");
```

#### Result (Internally)

```js
["J", "U", "M", "P"]
```

Each item = **one character**

---

## Step 2.5 — Clear Original Text

### Why?

We will **rebuild content using spans**

```js
// Clear existing text
textElement.innerHTML = "";
```

---

## Step 2.6 — Create `<span>` for Each Letter

### Core loop logic

```js
letters.forEach(function (letter) {
  // Create a span element
  const span = document.createElement("span");

  // Set letter as span text
  span.innerText = letter;

  // Append span to text element
  textElement.appendChild(span);
});
```

---

## Step 2.7 — Full `script.js` (So Far)

```js
// Select the text element
const textElement = document.getElementById("text");

// Read original text
const text = textElement.innerText;

// Split text into letters
const letters = text.split("");

// Clear original text
textElement.innerHTML = "";

// Create span for each letter
letters.forEach(function (letter) {
  const span = document.createElement("span");
  span.innerText = letter;
  textElement.appendChild(span);
});
```

---

## Step 2.8 — Manual Check (Very Important)

### What you should see now

* Text still looks same: `JUMP`
* BUT:

  * Each letter is wrapped in `<span>`
  * Inspect in DevTools → you should see spans

### If text disappears

* Check `innerText` vs `innerHTML`
* Check loop execution

---

## Step 2.9 — Mental Model (Lock This)

```
Text
 ↓
Array of letters
 ↓
Loop
 ↓
Span per letter
 ↓
DOM updated
```

This pattern is **used everywhere**:

* typing effects
* text animations
* loaders
* fancy headings

---

## Step 3 — CSS: Jumping Animation (Core Visual Effect)

### Goal of This Step

* Add **jump animation** to each letter
* Animation should:

  * Move letter **up and down**
  * Be smooth
  * Not require JavaScript timing yet
* JS already prepared spans → CSS will animate them

---

## Step 3.1 — Basic Styling First (`style.css`)

### Container + text alignment

```css
/* Page setup */
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;
  background-color: #121212;
}

/* Wrapper */
.container {
  text-align: center;
}

/* Text holder */
#text {
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
}
```

---

## Step 3.2 — Make Letters Animatable

### Important rule

CSS transform **does not work well on inline text**.

So we must:
👉 convert each `span` to `inline-block`

```css
/* Each letter */
#text span {
  display: inline-block;
}
```

Without this:

* `transform: translateY()` won’t behave correctly

---

## Step 3.3 — Define Jump Animation (`@keyframes`)

### Jump animation logic

* Start at normal position
* Move up
* Come back down

```css
@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}
```

This is **pure CSS animation**.

---

## Step 3.4 — Trigger Animation on Hover

### Hover logic

* When user hovers over the text
* All letters jump

```css
#text:hover span {
  animation: jump 0.6s ease-in-out;
}
```

Now:

* Hover → letters jump once
* Mouse out → reset

---

## Step 3.5 — Current CSS (Complete So Far)

```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #121212;
}

.container {
  text-align: center;
}

#text {
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
}

#text span {
  display: inline-block;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

#text:hover span {
  animation: jump 0.6s ease-in-out;
}
```

---

## Step 3.6 — What You Should See Now

### On screen

* Word displayed in center
* Hover on word
* All letters jump **together**

This is **expected for now**.

---

## Step 3.7 — Important Limitation (Understand This)

### Current behavior

* All letters animate at same time
* Looks okay, but not “cool” yet

### Next step

👉 Add **delay per letter** so they jump **one by one**

This will require **JavaScript + CSS together**.

---

## Mental Model (Lock This)

```
JS → prepares spans
CSS → animates spans
Hover → triggers animation
```

No JS timing yet. Clean separation.

---

## Step 4 — Staggered Jump (One Letter After Another)

### Goal of This Step

* Make letters jump **one by one**
* Create wave-like animation
* Use **JS to control timing**
* Keep CSS simple

This is the step that makes animation look **professional**.

---

## Step 4.1 — Why CSS Alone Is Not Enough

### Problem with current CSS

```css
#text:hover span {
  animation: jump 0.6s ease-in-out;
}
```

* All spans animate **together**
* No delay control per letter

### Solution

* Add **delay per letter**
* Delay depends on **index**

JS knows index → CSS does not.

---

## Step 4.2 — Add CSS Class for Animation

### Update CSS (`style.css`)

```css
/* Jump animation class */
.jump {
  animation: jump 0.6s ease-in-out;
}
```

Now:

* Animation runs only when `.jump` class is added
* JS will add/remove this class

---

## Step 4.3 — Update JavaScript for Staggered Effect

### Replace your `script.js` with this

```js
// Select the text element
const textElement = document.getElementById("text");

// Read original text
const text = textElement.innerText;

// Split text into letters
const letters = text.split("");

// Clear original text
textElement.innerHTML = "";

// Store spans for later use
const spans = [];

// Create span for each letter
letters.forEach(function (letter) {
  const span = document.createElement("span");
  span.innerText = letter;
  textElement.appendChild(span);
  spans.push(span);
});

// Add hover event for staggered jump
textElement.addEventListener("mouseenter", function () {
  spans.forEach(function (span, index) {
    setTimeout(function () {
      span.classList.add("jump");
    }, index * 100); // delay per letter
  });
});

// Remove animation class after hover ends
textElement.addEventListener("mouseleave", function () {
  spans.forEach(function (span) {
    span.classList.remove("jump");
  });
});
```

---

## Step 4.4 — Explanation Line by Line (Important)

### Why we store spans

```js
const spans = [];
```

* We need access later
* DOM query every time is slower & messy

---

### Stagger logic

```js
index * 100
```

Example:

```
J → 0ms
U → 100ms
M → 200ms
P → 300ms
```

This creates **wave motion**.

---

### Why `mouseenter` / `mouseleave`

* `mouseenter` → triggers once
* `mouseover` → triggers repeatedly (bad here)

Cleaner control.

---

## Step 4.5 — Full Mental Dry Run

### Hover happens

1. Mouse enters text
2. Loop starts
3. `setTimeout` schedules animation
4. Letters jump one by one

### Mouse leaves

1. Classes removed
2. Ready for next hover

---

## Step 4.6 — Common Mistakes (Watch These)

### Mistake 1

Not removing `.jump` class
→ animation won’t replay

### Mistake 2

Using `mouseover` instead of `mouseenter`
→ glitchy repeated animation

---

## Step 4.7 — What You Should See Now

* Hover text
* Letters jump **one by one**
* Smooth wave-like animation
* Repeats on every hover

---

## Complete Dry Run — Jumping Letter Animation (Start → End)

### Goal of This Dry Run

* See **exact execution order**
* Understand **who runs when**
* Remove animation “magic”
* Lock the mental model

---

## Phase 1 — Page Load (Browser Level)

### Step 1.1 — HTML Parsing

Browser loads `index.html` and finds:

```html
<h1 id="text">JUMP</h1>
```

At this moment:

* Text is **plain**
* No spans
* No animation

---

### Step 1.2 — CSS Applied

Browser loads `style.css`:

* Centers content
* Sets font size and color
* Defines:

  * `@keyframes jump`
  * `.jump` animation class

⚠️ No animation runs yet because:

* No element has `.jump` class

---

### Step 1.3 — JavaScript Starts (`script.js`)

#### DOM Selection

```js
const textElement = document.getElementById("text");
```

Result:

* `textElement` points to `<h1 id="text">JUMP</h1>`

---

## Phase 2 — Text Processing (JS Logic)

### Step 2.1 — Read Text

```js
const text = textElement.innerText;
```

Value:

```
text = "JUMP"
```

---

### Step 2.2 — Split into Letters

```js
const letters = text.split("");
```

Internal array:

```js
["J", "U", "M", "P"]
```

---

### Step 2.3 — Clear Original Text

```js
textElement.innerHTML = "";
```

DOM now:

```html
<h1 id="text"></h1>
```

Nothing visible yet.

---

### Step 2.4 — Create Spans

Loop runs 4 times:

#### Loop iteration breakdown

| Index | Letter | Action                    |
| ----- | ------ | ------------------------- |
| 0     | J      | `<span>J</span>` appended |
| 1     | U      | `<span>U</span>` appended |
| 2     | M      | `<span>M</span>` appended |
| 3     | P      | `<span>P</span>` appended |

Final DOM:

```html
<h1 id="text">
  <span>J</span>
  <span>U</span>
  <span>M</span>
  <span>P</span>
</h1>
```

JS also stores spans in array:

```js
spans = [spanJ, spanU, spanM, spanP];
```

---

## Phase 3 — Event Wiring (JS Preparation)

### Step 3.1 — Hover Events Attached

```js
textElement.addEventListener("mouseenter", ...)
textElement.addEventListener("mouseleave", ...)
```

Nothing runs yet.
JS is **waiting**.

---

## Phase 4 — User Interaction (Critical Phase)

### User Action

👉 Mouse enters the text area

---

## Phase 5 — Mouse Enter Logic (Animation Trigger)

### Step 5.1 — `mouseenter` fires

JS executes:

```js
spans.forEach(function (span, index) {
  setTimeout(function () {
    span.classList.add("jump");
  }, index * 100);
});
```

---

### Step 5.2 — Timers Scheduled

| Letter | index | Delay  |
| ------ | ----- | ------ |
| J      | 0     | 0 ms   |
| U      | 1     | 100 ms |
| M      | 2     | 200 ms |
| P      | 3     | 300 ms |

JS does **not block**.
It schedules timers and exits.

---

## Phase 6 — Animation Execution (CSS Takes Over)

### When timeout fires

Example for `U`:

```js
spanU.classList.add("jump");
```

CSS rule activates:

```css
.jump {
  animation: jump 0.6s ease-in-out;
}
```

Browser runs:

```
translateY(0)
↓
translateY(-20px)
↓
translateY(0)
```

Each letter animates **independently**.

---

## Phase 7 — Mouse Leave (Reset Phase)

### User moves mouse out

```js
textElement.addEventListener("mouseleave", ...)
```

JS executes:

```js
spans.forEach(span => span.classList.remove("jump"));
```

Result:

* All letters reset
* Ready for next hover

---

## Final Visual Outcome

### What user experiences

* Hover text
* Letters jump one by one
* Smooth wave animation
* Repeatable every hover

---

## Wrapper — Full Mental Model (Lock This Forever)

### Layer Responsibilities

#### HTML

* Provides raw text container

#### JavaScript

* Converts text → spans
* Controls timing
* Adds/removes classes

#### CSS

* Defines animation
* Executes movement

---

## One-Line Engineering Summary

> “JavaScript splits text into spans and controls animation timing, while CSS handles the actual movement via keyframes.”

---

## Common Interview Question (From This Project)

### Q: Why not do this only with CSS?

**Answer:**

> CSS cannot calculate per-letter delay dynamically. JavaScript is needed to control timing based on index.

---