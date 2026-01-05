Perfect choice.
**Temperature Converter** is the **right next jump** after Weight Converter.

Why?
Because temperature conversion **breaks the simple multiply/divide mindset** and forces **real formula-based thinking**.

I’ll follow **the same discipline** again:

- step-by-step
- logic-first
- STOP after each step
- move forward **only after your confirmation**

---

# PROJECT 3 — Temperature Converter (Vanilla JavaScript)

**Tech constraint (LOCKED):**

- HTML + CSS + Vanilla JavaScript only
- No frameworks
- No libraries
- Focus = **thinking, formulas, state**
- UI = clean, readable, dark (like before)

---

## 1. What is this project (Problem)

We want to build a **Temperature Converter** where:

- User enters a number
- Selects input unit:

  - Celsius (°C)
  - Fahrenheit (°F)
  - Kelvin (K)

- Sees converted values in **all other units**
- Conversion happens **live**
- No reload
- No hardcoded outputs

This mimics:

- Scientific calculators
- Real-world formula-based systems
- Interview logic questions

---

## 2. Why this project exists (Why)

This project teaches **new logic**, not repetition.

### New Thinking You’ll Learn

- Non-linear conversions (not simple ratios)
- Formula-based transformations
- Cleaner abstraction
- Stronger mental models

Weight converter was:

> multiply / divide

Temperature converter is:

> formula + offset

That’s a **big upgrade**.

---

## 3. Mental Model (MOST IMPORTANT)

Fix this in your head:

> Temperature units are **NOT proportional**
> You **cannot** convert directly with one factor

So we must again use:

### ✅ Single Base Unit Strategy

We choose:

> **Celsius (°C) as base unit**

Why?

- Most formulas are simplest from Celsius
- Cleaner math
- Less bugs

---

## 4. Conversion Truth (Concept Only)

No code yet.

### To Base Unit (Celsius)

- From Celsius → already base
- From Fahrenheit →
  `(F − 32) × 5 / 9`
- From Kelvin →
  `K − 273.15`

---

### From Base Unit (Celsius)

- To Fahrenheit →
  `(C × 9 / 5) + 32`
- To Kelvin →
  `C + 273.15`

Every conversion **must pass through Celsius**.

---

## 5. High-level Decisions (LOCK THESE)

### Decision 1 — Inputs

- ONE number input
- ONE unit selector

Same discipline as before.

---

### Decision 2 — Outputs

- Show all units together
- Read-only display

---

### Decision 3 — When to convert

- On input
- On unit change

No button.

---

## 6. Folder Structure (LOCKED)

```
temperature-converter/
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

Same structure → less cognitive load → more logic focus.

---

# STEP 1 — `index.html` (ONLY STEP 1)

We stop after this.

---

## 1. Role of `index.html`

- Structure only
- Inputs + outputs
- No formulas
- No logic
- JS controls everything

---

## 2. What this file must NOT do

- ❌ No temperature formulas
- ❌ No inline JS
- ❌ No hardcoded values
- ❌ No calculations

---

## 3. What this file WILL contain

- Heading
- Temperature input
- Unit selector
- Output placeholders
- CSS + JS links

---

## 4. `index.html` (FINAL — COPY PASTE)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Temperature Converter - Vanilla JS</title>

    <!-- CSS -->
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <main class="app">
      <h1 class="app-title">Temperature Converter</h1>

      <!-- Input Section -->
      <section class="input-section">
        <input type="number" id="temp-input" placeholder="Enter temperature" />

        <select id="unit-select">
          <option value="c">Celsius (°C)</option>
          <option value="f">Fahrenheit (°F)</option>
          <option value="k">Kelvin (K)</option>
        </select>
      </section>

      <!-- Output Section -->
      <section class="output-section">
        <p>Celsius: <span id="c-output">0</span></p>
        <p>Fahrenheit: <span id="f-output">0</span></p>
        <p>Kelvin: <span id="k-output">0</span></p>
      </section>
    </main>

    <!-- JavaScript -->
    <script src="./js/script.js"></script>
  </body>
</html>
```

---

## 5. Engineering Takeaway (IMPORTANT)

- HTML is **dumb**
- Inputs & outputs are explicit
- JavaScript will own:

  - formulas
  - decisions
  - updates

Interview line later:

> “My HTML only defines inputs and outputs. All temperature formulas live in JavaScript using a base-unit strategy.”

---

# STEP 2 — Temperature Conversion Mental Model (NO CODE)

This step is **pure thinking**.
If this is clear, code will be trivial.
If this is fuzzy, code will break.

So slow down and lock this.

---

## 1. Why Temperature is DIFFERENT (Important Insight)

In **weight / length**:

```
multiply / divide
```

In **temperature**:

```
formula + offset
```

Example mistake beginners make:

> “Fahrenheit is just Celsius × something”

❌ Wrong.

Temperature units have **different zero points**.

That’s why this project is important.

---

## 2. Single Source of Truth (Again)

Just like weight converter:

At any moment, only **one thing is true**:

> “User-entered temperature + selected unit”

Everything else is **derived**.

---

## 3. Base Unit Strategy (LOCK THIS)

We again choose **ONE base unit**.

### Base unit = **Celsius (°C)**

Why Celsius?

- Simple formulas
- Clean math
- Industry standard in logic questions

This rule is LOCKED:

> **Every conversion goes → Celsius → other units**

No direct F ↔ K shortcuts.

---

## 4. Conceptual Conversion Flow (VERY IMPORTANT)

No syntax. Just logic.

```
User Input + Selected Unit
        ↓
Convert to Celsius (base)
        ↓
From Celsius → Fahrenheit
        ↓
From Celsius → Kelvin
        ↓
Update UI
```

This flow never changes.

---

## 5. Conversion Rules (UNDERSTAND, DON’T MEMORIZE)

### Step A — Convert input → Celsius

- If unit is **Celsius**
  → value stays same

- If unit is **Fahrenheit**
  → subtract 32, then scale

  ```
  (F − 32) × 5 / 9
  ```

- If unit is **Kelvin**
  → shift zero point

  ```
  K − 273.15
  ```

Key idea:

- Fahrenheit needs **offset + scaling**
- Kelvin needs **offset only**

---

### Step B — Convert Celsius → all units

From Celsius:

- To Fahrenheit

  ```
  (C × 9 / 5) + 32
  ```

- To Kelvin

  ```
  C + 273.15
  ```

Again:

- Fahrenheit = scale + offset
- Kelvin = offset only

---

## 6. Why NOT direct conversions?

Example bad idea:

```
F → K directly
```

Problems:

- More formulas
- More bugs
- Harder to explain in interview

Base-unit approach:

- F → C → K
- Clean
- Predictable
- Scalable

---

## 7. When should conversion run?

Same rule as before:

Conversion runs when:

- User types (input event)
- User changes unit (change event)

No button.

---

## 8. Edge Case Thinking (ENGINEER MODE)

Before code, we decide behavior:

- Empty input → show 0 everywhere
- Negative values → allowed (temperatures go below zero)
- Decimal values → allowed
- Invalid input → blocked by `type="number"`

No surprises.

---

## 9. Variables We Will Need (NO CODE)

Just mentally:

- temp input element
- unit select element
- output spans
- function: convertToCelsius
- function: updateOutputs

Clean responsibilities.

---

## 10. Interview-Level Explanation (LOCK THIS)

> “Temperature units aren’t proportional, so I use Celsius as a base unit.
> I first convert the input into Celsius, then derive Fahrenheit and Kelvin from it.
> This avoids duplicated formulas and keeps the logic predictable.”

If you can say this clearly → you understand.

---

## STOP POINT (MANDATORY)

Before moving ahead, confirm:

- Why base unit is needed
- Why Celsius is chosen
- Why conversion is two-step
- Why no direct unit jumping

---

# STEP 3 — `js/script.js` (Temperature Converter Logic)

This step is **pure logic + formulas**.
No CSS.
No HTML changes.

Read slowly.

---

## 1. What this file must do (CLEAR GOAL)

On **every input or unit change**, JavaScript must:

1. Read temperature value
2. Read selected unit
3. Convert input → **Celsius (base unit)**
4. Convert Celsius → Fahrenheit & Kelvin
5. Update the UI

No stored state.
Everything recalculated every time.

---

## 2. Folder Reminder

```
temperature-converter/
└── js/
    └── script.js
```

---

## 3. `script.js` (FINAL — COPY PASTE, LINE BY LINE)

```js
/*
This file handles:
- Reading temperature input
- Converting temperature units
- Updating output values

Base unit strategy:
ALL conversions go through Celsius
*/

// 1. Select INPUT elements
const tempInput = document.getElementById("temp-input");
const unitSelect = document.getElementById("unit-select");

// 2. Select OUTPUT elements
const cOutput = document.getElementById("c-output");
const fOutput = document.getElementById("f-output");
const kOutput = document.getElementById("k-output");

/*
Safety check (good habit)
*/
if (!tempInput || !unitSelect || !cOutput || !fOutput || !kOutput) {
  throw new Error("One or more DOM elements not found");
}

// 3. Core conversion function
function convertTemperature() {
  /*
  Read input value
  Always comes as string → convert to number
  */
  const inputValue = Number(tempInput.value);
  const selectedUnit = unitSelect.value;

  /*
  Handle empty input:
  Reset outputs and stop execution
  */
  if (!tempInput.value) {
    cOutput.textContent = 0;
    fOutput.textContent = 0;
    kOutput.textContent = 0;
    return;
  }

  /*
  STEP 1: Convert input → Celsius (base unit)
  */
  let tempInCelsius;

  if (selectedUnit === "c") {
    tempInCelsius = inputValue;
  } else if (selectedUnit === "f") {
    tempInCelsius = (inputValue - 32) * (5 / 9);
  } else if (selectedUnit === "k") {
    tempInCelsius = inputValue - 273.15;
  }

  /*
  STEP 2: Convert Celsius → other units
  */
  const tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
  const tempInKelvin = tempInCelsius + 273.15;

  /*
  STEP 3: Update UI
  Rounded for readability
  */
  cOutput.textContent = tempInCelsius.toFixed(2);
  fOutput.textContent = tempInFahrenheit.toFixed(2);
  kOutput.textContent = tempInKelvin.toFixed(2);
}

// 4. Attach LIVE events
tempInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);
```

---

## 4. MOST IMPORTANT PART — WHY THIS CODE IS CORRECT

### 1. Base unit strategy

- All paths → Celsius
- No direct F ↔ K logic
- Less bugs

### 2. Stateless logic

- No stored variables like `currentTemp`
- Every event recalculates everything

### 3. Formula correctness

- Fahrenheit uses **offset + scale**
- Kelvin uses **offset only**

---

## 5. Common Beginner Mistakes (You Avoided)

- ❌ Treating temperature like weight
- ❌ Using direct F ↔ K shortcuts
- ❌ Writing formulas in HTML
- ❌ Button-based conversion only
- ❌ Hardcoded outputs

---

## 6. Short Dry Run (Quick Check)

User enters:

```
32
```

Unit:

```
F
```

Flow:

```
C = (32 - 32) * 5/9 = 0
F = 32
K = 273.15
```

Correct.

---

## 7. Interview Explanation (MEMORIZE)

> “Temperature units are not proportional, so I use Celsius as a base unit.
> I convert the input into Celsius first, then derive Fahrenheit and Kelvin from it.”

If you can explain this → you understand.

---

## STOP POINT (MANDATORY)

Before moving ahead, confirm:

- Code runs without errors
- All unit combinations work
- You understand **why formulas are different**
- You can explain base-unit logic clearly

---

## (Dark · Centered · Eye-Comfortable)

**Rule (LOCKED):**
CSS = appearance only.
JS logic stays untouched.

Goal:

- clean
- dark
- low eye strain
- **centered both vertically & horizontally**

---

## Folder Reminder

```
temperature-converter/
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
  margin-bottom: 24px;
  font-size: 20px;
  color: #f9fafb;
}

/* ===============================
   Input Section
   =============================== */
.input-section {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

/* ===============================
   Inputs & Select
   =============================== */
input,
select {
  flex: 1;
  padding: 10px;
  font-size: 14px;

  background-color: #0f1320;
  color: #e5e7eb;

  border: 1px solid #2a2f3d;
  border-radius: 6px;
  outline: none;
}

input:focus,
select:focus {
  border-color: #4f46e5; /* subtle blue focus */
}

/* ===============================
   Output Section
   =============================== */
.output-section p {
  margin-bottom: 10px;
  font-size: 14px;
  color: #cbd5e1;
}

.output-section span {
  font-weight: bold;
  color: #f9fafb;
}
```

---

## Why this is the **right** CSS (Engineer Thinking)

### 1. Eye comfort

- No pure black
- No pure white
- Muted contrast for long sessions

### 2. Proper centering

```css
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
```

This is the **correct professional pattern**.

### 3. Zero logic coupling

- No JS classes
- No state-based CSS
- Theme can change without touching JS

---

## Interview Line (Gold)

> “I center the app using Flexbox on the body and keep the dark theme low-contrast to reduce eye strain, while keeping logic completely independent.”

---
