# PROJECT 4 — Vowel Counter (Vanilla JavaScript)

**Tech constraint (LOCKED):**

- HTML + CSS + Vanilla JavaScript only
- No frameworks
- No libraries
- Focus = **string logic, loops, conditions**
- UI = simple, clean, dark

---

## 1. What is this project (Problem)

We want to build a **Vowel Counter** where:

- User types text into an input
- JavaScript counts **vowels**
- Output shows:

  - total vowel count

- Updates **live** while typing
- Case-insensitive (`A` = `a`)

This mimics:

- Text processing
- Interview string questions
- Real-time validation logic

---

## 2. Why this project exists (Why)

This project teaches **core JS thinking**, not UI.

### JavaScript Concepts You’ll Learn

- String traversal
- Loops
- Conditions
- Case handling
- Real-time event handling

This is **foundational** for:

- parsing
- validation
- compiler-like thinking

---

## 3. Mental Model (LOCK THIS)

Think like this:

> Text = sequence of characters
> JavaScript checks **each character**
> If character is a vowel → count it

Nothing magical.

---

## 4. High-level Decisions (Important)

### Decision 1 — How to detect vowels?

Two approaches:

1. Multiple `if` conditions
2. Check inside a vowel set

We choose **vowel set**:

```
a e i o u
```

Why?

- Cleaner
- Scalable
- Interview-friendly

---

### Decision 2 — Case sensitivity?

We choose:

- Convert input to **lowercase**
- Then check vowels

Why?

- Avoid duplicate logic
- Cleaner comparisons

---

### Decision 3 — When to count?

- On every keystroke (`input` event)

Live feedback = better logic practice.

---

## 5. Folder Structure (LOCKED)

```
vowel-counter/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

Same structure again → brain focuses on logic.

---

# STEP 1 — `index.html` (ONLY STEP 1)

We **STOP after this**.

---

## 1. Role of `index.html`

- Structure only
- Input + output
- No counting logic
- No JS inside HTML

HTML is **dumb** by design.

---

## 2. What this file must NOT do

- ❌ No loops
- ❌ No vowel logic
- ❌ No inline JS
- ❌ No hardcoded counts

---

## 3. What this file WILL contain

- Heading
- Text input / textarea
- Output placeholder
- CSS + JS links

---

## 4. `index.html` (FINAL — COPY PASTE)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Vowel Counter - Vanilla JS</title>

    <!-- CSS -->
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <main class="app">
      <h1 class="app-title">Vowel Counter</h1>

      <!-- Input Section -->
      <section class="input-section">
        <textarea
          id="text-input"
          placeholder="Type your text here..."
          rows="5"
        ></textarea>
      </section>

      <!-- Output Section -->
      <section class="output-section">
        <p>Total Vowels: <span id="vowel-count">0</span></p>
      </section>
    </main>

    <!-- JavaScript -->
    <script src="./js/script.js"></script>
  </body>
</html>
```

---

## 5. Engineering Takeaway

- HTML only defines **where data comes from and goes**
- JS will:

  - read text
  - process characters
  - update output

Interview line later:

> “My HTML only provides a text input and an output placeholder. All string processing logic lives in JavaScript.”

---

## STOP POINT (MANDATORY)

Before we move on, confirm:

- Folder structure correct?
- No JS logic in HTML?
- Only input + output present?

---

# STEP 2 — Vowel Counting Mental Model (NO CODE)

This step is **pure thinking**.
If this is clear, the code will be simple and bug-free.

---

## 1. What exactly is the problem?

Input:

- A **string** (text typed by user)

Output:

- A **number** (how many vowels are present)

Key point:

> We are **not modifying** the string.
> We are **reading and analyzing** it.

---

## 2. How JavaScript “sees” text

A string is **not magic**.
It is just a **sequence of characters**.

Example input:

```
"Hello World"
```

JavaScript sees it as:

```
H  e  l  l  o     W  o  r  l  d
```

So the only correct way to solve this is:

> Look at **each character one by one**

---

## 3. What is a vowel? (Define clearly)

For this project:

```
a, e, i, o, u
```

Important decisions:

- Case-insensitive
  → `A` and `a` are both vowels
- No accents (`á`, `é`) for now (keep scope clean)

---

## 4. Core Strategy (LOCK THIS)

### Step-by-step thinking

1. Take the input text
2. Convert it to **lowercase**
3. Start a counter at `0`
4. Go through **each character**
5. If character is a vowel → increment counter
6. After loop ends → show counter

That’s it.
No shortcuts.

---

## 5. Why convert to lowercase first?

Bad approach:

```js
if (char === "a" || char === "A" || char === "e" || char === "E" ...)
```

Problems:

- Ugly
- Repetitive
- Bug-prone

Good approach:

```text
"HELLo" → "hello"
```

Now you only check:

```
a e i o u
```

Cleaner logic.

---

## 6. How do we “check” vowels?

We need a **reference set**.

Mental model:

```
vowels = "aeiou"
```

For each character:

- Ask: “Is this character inside `aeiou`?”

This is:

- readable
- interview-friendly
- scalable

---

## 7. Event → Logic → UI flow (IMPORTANT)

Exactly like previous projects:

```
User types
   ↓
JS reads text
   ↓
JS counts vowels
   ↓
JS updates number in UI
```

No button.
Live feedback.

---

## 8. Edge Case Thinking (ENGINEER MODE)

Decide behavior **before coding**:

- Empty input → count = 0
- Only spaces → count = 0
- Numbers / symbols → ignored
- Mixed case → handled via lowercase
- Emojis → ignored automatically

No special handling needed beyond character check.

---

## 9. What variables will exist? (NO CODE)

Just conceptually:

- text input element
- output span element
- vowel reference (`"aeiou"`)
- counter
- loop variable

Each has **one responsibility**.

---

## 10. Interview-Level Explanation (LOCK THIS)

> “I convert the input string to lowercase, then iterate over each character.
> If the character exists in the vowel set, I increment a counter.
> This keeps the logic simple and case-insensitive.”

If you can explain this calmly → you understand.

---

## STOP POINT (MANDATORY)

Before moving ahead, confirm you understand:

- Why we loop character by character
- Why lowercase conversion is done first
- Why vowels are stored as a set/string
- Why logic runs on every input event

---

# STEP 3 — `js/script.js` (Vowel Counter Logic)

This is **pure string logic**.
No CSS.
No HTML changes.

Read slowly and connect it to the mental model you already locked.

---

## 1. What this file must do (CLEAR GOAL)

On **every keystroke**, JavaScript must:

1. Read the text
2. Convert it to lowercase
3. Loop through each character
4. Check if it’s a vowel
5. Count vowels
6. Update the UI

No stored state.
Recalculate every time.

---

## 2. Folder Reminder

```
vowel-counter/
└── js/
    └── script.js
```

---

## 3. `script.js` (FINAL — COPY PASTE, LINE BY LINE)

```js
/*
This file handles:
- Reading user text
- Counting vowels
- Updating the UI

Logic:
Loop through each character and check if it's a vowel
*/

// 1. Select DOM elements
const textInput = document.getElementById("text-input");
const vowelCountOutput = document.getElementById("vowel-count");

/*
Safety check (good engineering habit)
*/
if (!textInput || !vowelCountOutput) {
  throw new Error("Required DOM elements not found");
}

// 2. Core vowel counting function
function countVowels() {
  /*
  Read input text
  Convert to lowercase for case-insensitive comparison
  */
  const text = textInput.value.toLowerCase();

  /*
  Reference set of vowels
  */
  const vowels = "aeiou";

  /*
  Counter starts at 0 for every calculation
  */
  let count = 0;

  /*
  Loop through each character in the string
  */
  for (let char of text) {
    /*
    Check if character exists in vowel set
    */
    if (vowels.includes(char)) {
      count++;
    }
  }

  /*
  Update UI with final count
  */
  vowelCountOutput.textContent = count;
}

// 3. Attach LIVE event
textInput.addEventListener("input", countVowels);
```

---

## 4. WHY THIS CODE IS CORRECT (IMPORTANT)

### 1. No global state

- `count` resets on every run
- No stale data

### 2. Case-insensitive logic

- Lowercase conversion once
- No duplicate checks

### 3. Clean vowel check

```js
vowels.includes(char);
```

Readable and interview-approved.

---

## 5. Common Beginner Mistakes (You Avoided)

- ❌ Counting uppercase separately
- ❌ Using multiple `if (char === 'a' || ...)`
- ❌ Storing count globally
- ❌ Button-based counting
- ❌ Hardcoding values

---

## 6. Quick Dry Run (Mental)

Input:

```
Hello World
```

Lowercase:

```
hello world
```

Characters checked:

```
h e l l o   w o r l d
```

Vowels found:

```
e o o
```

Count:

```
3
```

UI updates live.

---

## 7. Interview Explanation (MEMORIZE)

> “I loop through each character of the input string and check whether it exists in a vowel set. I recalculate the count on every input event, which keeps the logic stateless and predictable.”

---

## STOP POINT (MANDATORY)

Before moving ahead, confirm:

- Code runs without errors
- Count updates live
- Uppercase/lowercase works
- You understand **why the loop is needed**

---

# STEP 4 — `css/style.css` (Dark · Centered · Eye-Comfortable)

Same visual philosophy you liked before:

- clean
- dark
- low eye strain
- **centered both horizontally & vertically**
- CSS only (JS untouched)

---

## Folder Reminder

```
vowel-counter/
└── css/
    └── style.css
```

---

## `style.css` (FINAL — COPY PASTE)

```css
/* ===============================
   Global Reset
   =============================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===============================
   Page Layout (Center Both Ways)
   =============================== */
body {
  font-family: Arial, sans-serif;
  background-color: #0f1115;
  color: #e5e7eb;

  min-height: 100vh;

  display: flex;
  align-items: center; /* vertical center */
  justify-content: center; /* horizontal center */
}

/* ===============================
   App Container
   =============================== */
.app {
  width: 100%;
  max-width: 420px;
  padding: 24px;

  background-color: #161a22;
  border-radius: 10px;

  border: 1px solid #232836;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* ===============================
   Title
   =============================== */
.app-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  color: #f9fafb;
}

/* ===============================
   Input Section
   =============================== */
.input-section {
  margin-bottom: 20px;
}

/* ===============================
   Textarea
   =============================== */
textarea {
  width: 100%;
  padding: 12px;
  font-size: 14px;

  background-color: #0f1320;
  color: #e5e7eb;

  border: 1px solid #2a2f3d;
  border-radius: 6px;
  outline: none;

  resize: none;
}

textarea:focus {
  border-color: #4f46e5;
}

/* ===============================
   Output Section
   =============================== */
.output-section {
  font-size: 15px;
  color: #cbd5e1;
}

.output-section span {
  font-weight: bold;
  color: #f9fafb;
}
```

---

## Why this CSS is **correct engineering**

### 1. Eye comfort

- No pure black (`#0f1115`)
- Muted contrast
- Easy for long typing sessions

### 2. Proper centering (industry pattern)

```css
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
```

No hacks. No absolute positioning.

### 3. Zero coupling with JS

- CSS does not care how vowels are counted
- JS does not care how UI looks

Clean separation.

---

## Interview Line (Short & Strong)

> “I kept the UI minimal and low-contrast for readability, and centered the layout using Flexbox while keeping all logic in JavaScript.”

---

## STOP POINT

At this stage, **Vowel Counter is complete**.

You now have:

- Weight Converter (math + base unit)
- Temperature Converter (formulas + offset)
- Vowel Counter (string + loops)

That’s **real core JS logic progress**.

---

# DRY RUN — Vowel Counter (Vanilla JS)

We will track:

- browser behavior
- JavaScript execution
- variable values
- UI updates

No skipping.

---

## Files Involved

- `index.html` → structure only
- `script.js` → logic
- `style.css` → appearance

Core function:

```js
countVowels();
```

---

## CASE 1 — Page Loads (Initial State)

### HTML state

```html
<textarea id="text-input"></textarea>

<span id="vowel-count">0</span>
```

### JavaScript state

- DOM elements selected
- No function executed yet
- Output shows `0`

Why?

- `countVowels()` runs **only on input event**

---

## CASE 2 — User types `"H"`

### User action

- Types `H`
- `input` event fires

```js
textInput.addEventListener("input", countVowels);
```

So `countVowels()` is called.

---

### Inside `countVowels()`

#### Step 1 — Read input

```js
const text = textInput.value.toLowerCase();
```

- `textInput.value` → `"H"`
- `.toLowerCase()` → `"h"`

So:

```
text = "h"
```

---

#### Step 2 — Vowel reference

```js
const vowels = "aeiou";
```

This never changes.

---

#### Step 3 — Initialize counter

```js
let count = 0;
```

So:

```
count = 0
```

---

#### Step 4 — Loop through characters

```js
for (let char of text)
```

Only one iteration:

```
char = "h"
```

---

#### Step 5 — Check vowel

```js
vowels.includes(char);
```

Is `"h"` inside `"aeiou"`?

```
false
```

So:

```
count stays 0
```

---

#### Step 6 — Update UI

```js
vowelCountOutput.textContent = count;
```

UI shows:

```
0
```

---

## CASE 3 — User types `"e"` → text becomes `"He"`

### Read input

```js
text = "he";
```

---

### Loop iterations

| char | vowel? | count |
| ---- | ------ | ----- |
| h    | ❌     | 0     |
| e    | ✅     | 1     |

---

### UI updates

```
Total Vowels: 1
```

---

## CASE 4 — User types `"llo"` → text `"Hello"`

Lowercase:

```
"hello"
```

Loop:

| char | vowel? | count |
| ---- | ------ | ----- |
| h    | ❌     | 0     |
| e    | ✅     | 1     |
| l    | ❌     | 1     |
| l    | ❌     | 1     |
| o    | ✅     | 2     |

UI shows:

```
2
```

---

## CASE 5 — User types space `" "` → `"Hello "`

Space:

```
" "
```

Check:

```js
vowels.includes(" ");
```

Result:

```
false
```

Count unchanged.

UI remains:

```
2
```

---

## CASE 6 — User types `"WORLD"` → `"Hello WORLD"`

Lowercase:

```
"hello world"
```

Loop checks:

Vowels found:

```
e, o, o
```

Count:

```
3
```

UI updates live.

---

## CASE 7 — User deletes everything (Empty input)

### Input value

```
""
```

Loop:

- No iterations
- `count` remains `0`

UI updates:

```
0
```

No special `if` needed — logic naturally handles it.

---

## MOST IMPORTANT DRY RUN INSIGHT

### Why this logic is clean

- `count` resets **every time**
- No previous value leaks
- Function is **pure** relative to input

This is **stateless logic**.

---

## FINAL MENTAL MODEL (LOCK THIS)

> “On every keystroke, I loop through the entire string and count vowels from scratch.”

Simple. Predictable. Bug-free.

---

## Interview One-Liner (GOLD)

> “I process the input string character by character and count vowels using a reference set, recalculating on every input event.”

---
