# PROJECT — Weight Converter (Vanilla JS, Logic-First)

**Tech constraint (LOCKED):**

- HTML + CSS + Vanilla JavaScript only
- No frameworks
- No libraries
- Focus = **logic, data flow, state**
- UI = simple, readable, not fancy

---

## 1. What is this project (Problem)

We want to build a **Weight Converter** where:

- User enters a number
- Selects **input unit** (kg, gram, pound)
- Sees converted values in other units
- Conversion happens **live** (on input change)
- No page reload
- No hardcoded output

This mimics:

- Real form logic
- Calculator systems
- Input → processing → output flow

---

## 2. Why this project exists (Why)

This project teaches **new thinking**, different from Accordion.

### JavaScript Core Concepts

- Reading user input
- Handling input events
- Type conversion (string → number)
- Mathematical logic
- Updating DOM dynamically

### Engineering Thinking

- Single source of truth
- Input-driven computation
- Clear separation:

  - input
  - logic
  - output

This is **how real calculators work**.

---

## 3. Mental Model (How to think)

Fix this in your head:

> User gives input
> JS reads value
> JS converts units
> JS updates output

Very important mindset:

- HTML does **not calculate**
- CSS does **not calculate**
- JavaScript does **all math + decisions**

---

## 4. High-level Decisions (Important)

### Decision 1 — How many inputs?

- ONE input field (number)
- ONE unit selector

Why?

- Cleaner logic
- Easier to scale
- Avoids duplication

---

### Decision 2 — How to show results?

- Multiple output fields (readonly)
- JS updates values

Why?

- Clear mapping
- Easy to debug
- Interview-friendly

---

### Decision 3 — When should conversion happen?

Two options:

1. Button click
2. Live conversion

We choose **LIVE conversion**.

Why?

- Teaches event handling properly
- Real UX pattern

---

## 5. Folder Structure (LOCKED)

```
weight-converter/
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

Same mindset as Accordion:

- HTML = structure
- JS = logic
- CSS = appearance

---

# STEP 1 — `index.html` (ONLY STEP 1)

We **STOP here** after this.

---

## 1. Why this file exists

`index.html` should:

- Define structure
- Contain inputs & placeholders
- Contain **NO calculation logic**

Think:

> HTML = input/output wires
> JS = brain

---

## 2. What this file must NOT do

- ❌ No math
- ❌ No inline JS
- ❌ No conversion formulas
- ❌ No hardcoded results

---

## 3. What this file WILL contain

- Heading
- Number input
- Unit selector
- Output containers
- Script + CSS links

---

## 4. Folder Reminder

```
weight-converter/
└── index.html
```

---

## 5. `index.html` (FINAL — COPY PASTE)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Weight Converter - Vanilla JS</title>

    <!-- CSS -->
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <main class="app">
      <h1 class="app-title">Weight Converter</h1>

      <!-- Input Section -->
      <section class="input-section">
        <!-- Weight input -->
        <input type="number" id="weight-input" placeholder="Enter weight" />

        <!-- Unit selector -->
        <select id="unit-select">
          <option value="kg">Kilogram (kg)</option>
          <option value="g">Gram (g)</option>
          <option value="lb">Pound (lb)</option>
        </select>
      </section>

      <!-- Output Section -->
      <section class="output-section">
        <p>Kilograms: <span id="kg-output">0</span></p>
        <p>Grams: <span id="g-output">0</span></p>
        <p>Pounds: <span id="lb-output">0</span></p>
      </section>
    </main>

    <!-- JavaScript -->
    <script src="./js/script.js"></script>
  </body>
</html>
```

---

## 6. Engineering Takeaways (IMPORTANT)

- Inputs and outputs are **clearly separated**
- No assumptions about logic
- JS will fully control behavior
- This scales to currency, length, temperature converters

Interview line later:

> “My HTML only defines inputs and outputs. JavaScript handles all conversion logic and updates the UI dynamically.”

---

# STEP 2 — JavaScript Mental Model (NO CODE YET)

**Important:**
This step is **thinking only**.
No JavaScript code will be written here.

If the thinking is wrong, code will be wrong.
So we lock the mental model first.

---

## 1. What JavaScript is responsible for (CLEARLY)

JavaScript must handle **everything dynamic**:

- Read user input value
- Read selected unit
- Convert weight correctly
- Update all outputs
- Handle invalid / empty input

HTML and CSS will **never** do this.

---

## 2. Single Source of Truth (MOST IMPORTANT IDEA)

At any moment, there is **only ONE real value**.

That value is:

> “User-entered weight + selected unit”

Everything else is **derived** from it.

Example:

- User enters `10`
- Selects `kg`

Truth is:

```
10 kg
```

Now JS derives:

```
10 kg
10000 g
22.046 lb
```

If truth changes → outputs change.

---

## 3. Conversion Strategy (Decision)

We need a **clean, bug-free approach**.

### Option A (BAD)

Convert directly between every unit:

- kg → g
- kg → lb
- g → kg
- g → lb
- lb → kg
- lb → g

This creates:

- Too many formulas
- High chance of mistakes
- Poor interview design

❌ Reject this.

---

### Option B (GOOD — we choose this)

Convert everything through **one base unit**.

We choose:

> **Kilogram (kg) as base unit**

Why?

- Simple
- Common
- Clean math
- Industry approach

---

## 4. Base Unit Mental Flow (LOCK THIS)

No matter what user selects:

1. Convert input → **kg**
2. From kg → convert to:

   - kg
   - g
   - lb

3. Update UI

This means:

- Only **one conversion logic**
- No duplication
- Easy to debug

---

## 5. Conversion Rules (Conceptual, NOT CODE)

Just understanding, no syntax yet.

- grams → kg
  divide by 1000

- pounds → kg
  multiply by 0.453592

- kg → grams
  multiply by 1000

- kg → pounds
  divide by 0.453592

These will live **only in JS**, not HTML.

---

## 6. When should conversion run?

We want **live behavior**.

Conversion should run when:

- User types in input
- User changes unit

So JS must listen to:

- input event
- change event

No button needed.

---

## 7. Event → Logic → UI Flow (VERY IMPORTANT)

This is the exact pipeline:

```
User types / changes unit
        ↓
JS reads input value
        ↓
JS reads selected unit
        ↓
JS converts to base unit (kg)
        ↓
JS calculates all units
        ↓
JS updates output DOM
```

No step can be skipped.

---

## 8. Edge Case Thinking (ENGINEER MODE)

We must already think about this **before code**.

What if:

- Input is empty?
- Input is negative?
- Input is zero?
- Input is non-number?

Decision:

- Empty → show 0 in all outputs
- Negative → allow (weights can be negative in math)
- Non-number → JS naturally blocks via `type="number"`

---

## 9. Variables We Will Need (NO CODE)

Just naming in head:

- input element reference
- select element reference
- output element references
- function to convert to kg
- function to update UI

Nothing global messy.
Everything intentional.

---

## 10. Interview-Level Explanation (You should say later)

> “I treat the user input as a single source of truth.
> I convert it into a base unit first, then derive all other units from it.
> This avoids duplicated logic and makes the converter scalable.”

This sentence matters.

---

## STOP POINT (IMPORTANT)

Before moving forward, confirm that you understand:

- Why we use a base unit
- Why conversion happens on input/change
- Why logic lives only in JS
- Why we didn’t write code yet

---

# STEP 3 — `js/script.js` (CORE LOGIC, LINE BY LINE)

**This is the MOST IMPORTANT step.**
Everything you are learning about **thinking in JavaScript** is here.

No UI tricks.
No shortcuts.
Pure logic.

---

## 1. What this file will do (CLEAR GOAL)

`script.js` will:

1. Read input value
2. Read selected unit
3. Convert input → **base unit (kg)**
4. Convert kg → all units
5. Update UI
6. Re-run logic on every input change

---

## 2. Before Writing Code — Lock the Flow

Every time user interacts:

```
Read input
↓
If empty → reset outputs
↓
Convert input → kg
↓
Convert kg → g, lb
↓
Update DOM
```

This flow **never changes**.

---

## 3. Folder Reminder

```
weight-converter/
└── js/
    └── script.js
```

---

## 4. `script.js` (FINAL — COPY PASTE, STUDY LINE BY LINE)

```js
/*
This file handles:
- Reading user input
- Converting weight units
- Updating output values

HTML provides structure
JavaScript provides logic
*/

// 1. Select DOM elements (INPUTS)
const weightInput = document.getElementById("weight-input");
const unitSelect = document.getElementById("unit-select");

// 2. Select DOM elements (OUTPUTS)
const kgOutput = document.getElementById("kg-output");
const gOutput = document.getElementById("g-output");
const lbOutput = document.getElementById("lb-output");

/*
Safety check (good engineering habit)
*/
if (!weightInput || !unitSelect || !kgOutput || !gOutput || !lbOutput) {
  throw new Error("One or more DOM elements not found");
}

// 3. Core conversion function
function convertWeight() {
  /*
  Read input value.
  Input value comes as STRING.
  Convert it to NUMBER.
  */
  const inputValue = Number(weightInput.value);
  const selectedUnit = unitSelect.value;

  /*
  Handle empty input:
  If input is empty or invalid,
  show 0 everywhere and stop.
  */
  if (!weightInput.value) {
    kgOutput.textContent = 0;
    gOutput.textContent = 0;
    lbOutput.textContent = 0;
    return;
  }

  /*
  STEP 1: Convert input → base unit (kg)
  */
  let weightInKg;

  if (selectedUnit === "kg") {
    weightInKg = inputValue;
  } else if (selectedUnit === "g") {
    weightInKg = inputValue / 1000;
  } else if (selectedUnit === "lb") {
    weightInKg = inputValue * 0.453592;
  }

  /*
  STEP 2: Convert base unit → all units
  */
  const weightInGrams = weightInKg * 1000;
  const weightInPounds = weightInKg / 0.453592;

  /*
  STEP 3: Update UI
  Limit decimals for readability
  */
  kgOutput.textContent = weightInKg.toFixed(2);
  gOutput.textContent = weightInGrams.toFixed(2);
  lbOutput.textContent = weightInPounds.toFixed(2);
}

// 4. Attach events (LIVE conversion)
weightInput.addEventListener("input", convertWeight);
unitSelect.addEventListener("change", convertWeight);
```

---

## 5. MOST IMPORTANT PART — WHY THIS CODE IS GOOD

### No global state

State is **derived**, not stored.

### Single source of truth

Only this matters:

```
inputValue + selectedUnit
```

### Base unit strategy

All conversions pass through **kg**.

### Event-driven logic

No button.
User interaction → logic runs.

---

## 6. Common Beginner Mistakes (You Avoided)

- ❌ Writing math in HTML
- ❌ Using multiple input fields
- ❌ Duplicating conversion logic
- ❌ Button-only conversion
- ❌ Hardcoding outputs

You avoided all.

---

## 7. Dry Run (VERY SHORT, MENTAL)

User enters:

```
10
```

Selects:

```
lb
```

Flow:

```
inputValue = 10
selectedUnit = "lb"

weightInKg = 10 * 0.453592 = 4.53592

grams = 4535.92
pounds = 10
```

UI updates instantly.

---

## 8. Interview Explanation (MEMORIZE THIS)

> “I listen to input and unit change events.
> I convert the input into a base unit first, then derive all other units.
> This avoids duplicated logic and keeps the converter scalable.”

---

## STOP POINT (IMPORTANT)

Before we move ahead, confirm:

- Code runs without errors
- Conversion works for all units
- Logic makes sense to you
- You can explain **why base unit is used**

---

# STEP 4 — `css/style.css` (ONLY WHAT’S NECESSARY)

**Important rule (LOCKED):**
CSS is here to **support logic**, not distract from it.

No animations.
No fancy UI.
Only clarity.

---

## 1. Why this file exists

CSS should:

- Make inputs readable
- Separate sections visually
- Improve usability
- NOT control logic

Think:

> JavaScript = brain
> CSS = presentation only

---

## 2. What this file must NOT do

- ❌ No logic
- ❌ No show/hide tricks
- ❌ No calculations
- ❌ No dependency on JS state

---

## 3. Folder Reminder

```
weight-converter/
└── css/
    └── style.css
```

---

## 4. `style.css` (FINAL — CLEAN & COMMENTED)

```css
/*
Basic reset
Keeps layout predictable
*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*
Page base styling
*/
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

/*
Main app wrapper
*/
.app {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
}

/*
Title
*/
.app-title {
  text-align: center;
  margin-bottom: 20px;
}

/*
Input section
*/
.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

/*
Input and select styling
*/
input,
select {
  flex: 1;
  padding: 8px;
  font-size: 14px;
}

/*
Output section
*/
.output-section p {
  margin-bottom: 8px;
  font-size: 14px;
}

/*
Output numbers
*/
.output-section span {
  font-weight: bold;
}
```

---

## 5. What Happens Now (IMPORTANT)

After this CSS:

- UI looks clean and readable
- Inputs are aligned
- Outputs are clearly visible
- Logic remains **unchanged**

This proves:

- CSS and JS are **independent**
- Logic does not depend on styling

---

## 6. Engineer Check (VERIFY)

Confirm:

- No logic in CSS
- No JS-related classes used
- Layout is readable
- Focus stays on JS behavior

---

## 7. Interview Line You Can Say

> “I kept CSS minimal and independent so the JavaScript logic remains the focus and is easy to reason about.”

---

Perfect choice.
A **dry run** is where logic actually gets locked in the brain.

---

# STEP 5 - DRY RUN — Weight Converter (Vanilla JS)

We will dry run **slowly**, **step-by-step**, exactly how the browser + JS behaves.

No guessing.
No skipping.

---

## Files involved (Context)

- `index.html` → inputs & outputs only
- `script.js` → logic
- `style.css` → appearance

JS logic lives in **`convertWeight()`**.

---

## CASE 1 — Page loads (Initial State)

### HTML state

```html
<input id="weight-input" value="" />
<select id="unit-select">
  kg (selected by default)
</select>

<span id="kg-output">0</span>
<span id="g-output">0</span>
<span id="lb-output">0</span>
```

### JavaScript state

- No function executed yet
- Outputs show `0` (default HTML)

Nothing happens until user interacts.

---

## CASE 2 — User types `10` (Unit = kg)

### User action

- Types `10` in input
- `input` event fires

```js
weightInput.addEventListener("input", convertWeight);
```

So `convertWeight()` runs.

---

### Step-by-step inside `convertWeight()`

#### Step 1 — Read input

```js
const inputValue = Number(weightInput.value);
```

- `weightInput.value` → `"10"` (string)
- `Number("10")` → `10` (number)

So:

```
inputValue = 10
```

---

#### Step 2 — Read unit

```js
const selectedUnit = unitSelect.value;
```

Default selected:

```
selectedUnit = "kg"
```

---

#### Step 3 — Empty check

```js
if (!weightInput.value) { ... }
```

- `weightInput.value` = `"10"`
- NOT empty → condition false

We continue.

---

#### Step 4 — Convert input → base unit (kg)

```js
let weightInKg;

if (selectedUnit === "kg") {
  weightInKg = inputValue;
}
```

So:

```
weightInKg = 10
```

---

#### Step 5 — Convert kg → other units

```js
const weightInGrams = weightInKg * 1000;
const weightInPounds = weightInKg / 0.453592;
```

So:

```
weightInGrams = 10000
weightInPounds ≈ 22.05
```

---

#### Step 6 — Update UI

```js
kgOutput.textContent = "10.00";
gOutput.textContent = "10000.00";
lbOutput.textContent = "22.05";
```

---

### Final UI result

```
Kilograms: 10.00
Grams:     10000.00
Pounds:    22.05
```

---

## CASE 3 — User changes unit to `g` (Input still = 10)

### User action

- Selects **Gram**
- `change` event fires

```js
unitSelect.addEventListener("change", convertWeight);
```

`convertWeight()` runs again.

---

### Inside function

#### Read values

```
inputValue = 10
selectedUnit = "g"
```

---

#### Convert to base unit

```js
weightInKg = inputValue / 1000;
```

So:

```
weightInKg = 0.01
```

---

#### Convert base → all units

```
grams = 10
pounds ≈ 0.022
```

---

### UI updates

```
Kilograms: 0.01
Grams:     10.00
Pounds:    0.02
```

---

## CASE 4 — User clears input (IMPORTANT EDGE CASE)

### User action

- Deletes input
- Input becomes empty string `""`
- `input` event fires

---

### Inside function

```js
if (!weightInput.value) {
  kgOutput.textContent = 0;
  gOutput.textContent = 0;
  lbOutput.textContent = 0;
  return;
}
```

So:

- All outputs reset to `0`
- Function **stops immediately**

No math runs.

---

### UI result

```
Kilograms: 0
Grams:     0
Pounds:    0
```

This prevents:

- `NaN`
- confusing values
- bugs

---

## CASE 5 — User enters `10`, unit = `lb`

### Read values

```
inputValue = 10
selectedUnit = "lb"
```

---

### Convert to base unit

```js
weightInKg = 10 * 0.453592;
```

So:

```
weightInKg = 4.53592
```

---

### Convert base → all

```
kg = 4.54
g  = 4535.92
lb = 10.00
```

---

### UI shows

```
Kilograms: 4.54
Grams:     4535.92
Pounds:    10.00
```

---

## MOST IMPORTANT DRY RUN INSIGHT

There is **NO stored state** like:

```js
let currentWeight;
```

Instead, every time:

- JS **recalculates from scratch**
- Uses input + unit
- Updates outputs

This is **stateless, predictable logic**.

---

## FINAL MENTAL MODEL (LOCK THIS)

> “On every input or unit change,
> I recompute everything from the base unit
> and update the UI.”

If you can say this **without looking**, you’ve learned the right thing.

---

dark theme
```
/* ================================
   Global Reset
================================ */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ================================
   Theme Variables (SaaS Feel)
================================ */
:root {
  --bg-main: #0b0f19;
  --bg-card: #121826;
  --border-soft: #1f2937;

  --text-primary: #e5e7eb;
  --text-secondary: #9ca3af;

  --accent: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.4);
}

/* ================================
   Page Base
================================ */
body {
  font-family: Inter, Arial, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-primary);
}

/* ================================
   App Card
================================ */
.app {
  max-width: 420px;
  margin: 80px auto;
  padding: 24px;

  background-color: var(--bg-card);
  border: 1px solid var(--border-soft);
  border-radius: 12px;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.02);
}

/* ================================
   Title
================================ */
.app-title {
  text-align: center;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}

/* ================================
   Input Section
================================ */
.input-section {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

/* ================================
   Inputs & Select
================================ */
input,
select {
  flex: 1;
  padding: 10px 12px;
  font-size: 14px;

  background-color: #0f172a;
  color: var(--text-primary);

  border: 1px solid var(--border-soft);
  border-radius: 8px;

  outline: none;
  transition: all 0.2s ease;
}

/* Focus effect (SaaS glow) */
input:focus,
select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-glow);
}

/* ================================
   Output Section
================================ */
.output-section p {
  display: flex;
  justify-content: space-between;

  padding: 10px 12px;
  margin-bottom: 10px;

  background-color: #0f172a;
  border: 1px solid var(--border-soft);
  border-radius: 8px;

  font-size: 14px;
  color: var(--text-secondary);
}

/* Highlight numbers */
.output-section span {
  color: var(--accent);
  font-weight: 600;
}
```
