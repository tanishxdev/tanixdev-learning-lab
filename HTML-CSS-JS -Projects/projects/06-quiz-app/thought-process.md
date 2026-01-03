## New Project — QUIZ APP (Vanilla JS)

This will be a **better logic project than Accordion** because it introduces:

* State tracking
* Index movement
* Conditional rendering
* Score calculation
* End-state handling

But we will still move **slowly and correctly**.

---

## Before STEP 1 — Project Alignment (Very Important)

I will structure the **Quiz App** exactly like an engineer would:

### Core ideas we will learn

* Data-driven questions
* Current question index
* User selection handling
* Score state
* Render → update → re-render cycle
* End screen logic

### Tech (LOCKED)

* HTML
* CSS
* Vanilla JavaScript
* No frameworks
* No libraries

---

## Proposed Project Structure (Preview, NOT coding yet)

Just for mental clarity:

```
quiz-app/
│
├── index.html
│
├── css/
│   └── style.css
│
├── data/
│   └── questions.js
│
├── js/
│   └── quiz.js
│
└── README.md
```

We will **not write all this at once**.
This is only to set your **mental map**.

---

## How We Will Proceed (Exact Order)

1. **STEP 1** — `index.html`

   * Pure skeleton
   * Empty containers
   * No questions in HTML

2. **STEP 2** — `questions.js`

   * Quiz data only
   * Array of objects
   * No logic

3. **STEP 3** — Quiz logic (`quiz.js`)

   * Render question
   * Handle option click
   * Track index & score
   * Move to next question

4. **STEP 4** — Minimal CSS

   * Visibility
   * Selected state
   * Disabled state

5. **STEP 5** — README (thinking + interview explanation)

---

## Important Rule (I Will Follow This)

For **every JS file**, before writing code I will explain:

* Mental model
* State variables
* Flow in plain English
* Then code
* Then dry run

---

# PROJECT — QUIZ APP (Vanilla JS)

## STEP 1 — `index.html`

### Goal of this step

Create a **clean, dumb HTML structure** that JavaScript will fully control later.

Think this way (lock this):

> HTML = empty stage
> JavaScript = actor + director
> Data = script

---

## 1. Why `index.html` exists

This file should:

* Define **structure only**
* Provide **containers**
* Have **zero quiz logic**
* Allow JS to inject:

  * questions
  * options
  * buttons
  * results

If HTML already has questions → **bad design**.

---

## 2. What this file must NOT do

❌ No hardcoded questions
❌ No options
❌ No score logic
❌ No inline JS
❌ No `onclick`

If we violate this, JS learning is ruined.

---

## 3. What this file WILL contain

* App wrapper
* Title
* One container for quiz UI
* One container for navigation buttons
* Script links (data first, logic later)

---

## 4. Folder reminder

```
quiz-app/
└── index.html
```

---

## 5. `index.html` (FINAL — COPY-PASTE READY)

```html
<!DOCTYPE html>
<!--
HTML5 doctype
Tells browser to use modern standards
-->

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Prevents text encoding issues -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Responsive layout on mobile -->

    <title>Quiz App - Vanilla JavaScript</title>

    <!-- CSS file (only styling, no logic) -->
    <link rel="stylesheet" href="./css/style.css" />
  </head>

  <body>
    <!--
    Main app wrapper
    JavaScript will control everything inside
    -->
    <main class="quiz-app">
      <!-- App heading -->
      <h1 class="quiz-title">Simple Quiz App</h1>

      <!--
      Quiz container
      JS will inject:
      - Question text
      - Options
      -->
      <section id="quiz-container"></section>

      <!--
      Navigation container
      JS will inject buttons like:
      - Next
      - Submit
      - Restart
      -->
      <section id="quiz-actions"></section>
    </main>

    <!--
    Quiz data
    Contains questions & answers
    Must load BEFORE main JS logic
    -->
    <script src="./data/questions.js"></script>

    <!--
    Main quiz logic
    Handles rendering, clicks, score, flow
    -->
    <script src="./js/quiz.js"></script>
  </body>
</html>
```

---

## 6. Engineering Takeaways (Important)

* HTML knows **nothing** about quiz rules
* No question exists in HTML
* No button exists yet
* JS will **create everything dynamically**
* This mirrors real production apps

Interview line later:

> “My HTML is just a container. The quiz UI is rendered and controlled entirely by JavaScript using external data.”

---

## 7. STOP POINT — CHECK THIS CAREFULLY

Before moving forward, confirm:

* Folder structure is correct
* `quiz-container` is empty
* `quiz-actions` is empty
* No question text exists in HTML

Do **not** move ahead unless this is clean.

---

# QUIZ APP — STEP 2

## `data/questions.js`

### Goal of this step

Create **clean quiz data** that behaves like a real API response.

No UI.
No DOM.
No logic.

Only **data**.

---

## 1. Why this file exists (Think like a developer)

In real apps:

* Questions come from a **backend / API**
* UI logic should **not care** where data comes from

So we simulate that using a **separate data file**.

Mental model:

> Data is independent
> Logic consumes data
> UI renders data

---

## 2. What this file must NOT contain

❌ No `document.getElementById`
❌ No event listeners
❌ No HTML
❌ No functions
❌ No quiz logic

If logic appears here → **bad design**

---

## 3. Data structure decision (VERY IMPORTANT)

We will use:

* **Array** → multiple questions
* **Object** → each question has properties

Each question object will have:

* `id` → unique
* `question` → string
* `options` → array of strings
* `correctAnswer` → index (number)

### Why `correctAnswer` as index?

Because:

* Easy comparison
* No string matching bugs
* Industry-standard pattern

Example thinking:

```js
options = ["A", "B", "C"]
correctAnswer = 1  // means "B"
```

---

## 4. Folder reminder

```
quiz-app/
└── data/
    └── questions.js
```

---

## 5. `questions.js` (FINAL — COPY-PASTE READY)

```js
/*
This file contains ONLY quiz data.
No logic.
No DOM access.
No UI code.

Think of this as:
"Response coming from backend API"
*/

const quizQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which language is used to add logic to web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Which CSS property controls text color?",
    options: ["font-style", "color", "background-color", "text-align"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    correctAnswer: 0,
  },
];

/*
We are NOT using ES module export here.
Because we are using plain <script> tags.

This variable becomes GLOBAL
and can be accessed inside quiz.js
*/
```

---

## 6. Engineering Thinking (Lock This)

Why this design is good:

* UI logic will not change if questions change
* Easy to add/remove questions
* Same structure as real APIs
* Interview-friendly explanation

Interview line later:

> “I separated quiz data from logic so the UI can scale or switch to an API without changing the core quiz logic.”

---

## 7. STOP POINT — CHECKLIST

Before moving ahead, confirm:

* File path is correct
* Variable name is exactly `quizQuestions`
* No DOM or logic exists here
* Data is readable and clean

---

# QUIZ APP — STEP 3

## `js/quiz.js`

---

## 0. Freeze and Think (Very Important)

Before touching code, answer this in your head:

> “What is a quiz, logically?”

A quiz is **NOT** buttons and text.
A quiz is a **state machine**.

---

## 1. Mental Model (Lock This)

A quiz has **STATE**.

We must track:

1. **Which question am I on?**
2. **What is the score so far?**
3. **Has the user selected an option?**
4. **When do we stop?**

Everything else is just **UI reflection of state**.

---

## 2. State Variables (Core Thinking)

We need **exactly these states**:

```js
currentQuestionIndex  // where the user is
score                 // how many correct answers
```

That’s it.

No more.
No less.

Why?

* Index → tells us which question to render
* Score → needed only at the end

---

## 3. High-Level Logic Flow (Plain English)

This is the **full quiz flow**:

1. Start quiz at question 0
2. Render question + options
3. User clicks an option
4. Check if selected option is correct
5. Update score if correct
6. Move to next question
7. Repeat until questions end
8. Show final score

If you understand this → you understand quizzes.

---

## 4. DOM Responsibilities (Who does what)

HTML gave us **empty containers**:

* `quiz-container` → question + options
* `quiz-actions` → buttons (Next / Restart)

JavaScript will:

* Inject question text
* Inject options dynamically
* Handle clicks
* Replace UI when state changes

---

## 5. `quiz.js` — FULL CODE (Line-by-Line, Clean)

Read slowly.
This is **thinking translated to code**.

```js
/*
This file handles:
- Quiz rendering
- Option selection
- Score tracking
- Question navigation

Depends on:
- quizQuestions (from questions.js)
*/

// 1. Select DOM containers
const quizContainer = document.getElementById("quiz-container");
const quizActions = document.getElementById("quiz-actions");

// Safety check
if (!quizContainer || !quizActions) {
  throw new Error("Quiz containers not found in HTML");
}

// 2. State variables
let currentQuestionIndex = 0;
let score = 0;

// 3. Render current question
function renderQuestion() {
  // Clear previous UI
  quizContainer.innerHTML = "";
  quizActions.innerHTML = "";

  // Get current question object
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Create question element
  const questionEl = document.createElement("h2");
  questionEl.textContent = currentQuestion.question;

  // Create options container
  const optionsWrapper = document.createElement("div");

  // Loop through options
  currentQuestion.options.forEach((optionText, optionIndex) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = optionText;

    // Handle option click
    optionBtn.addEventListener("click", () => {
      handleOptionClick(optionIndex);
    });

    optionsWrapper.appendChild(optionBtn);
  });

  // Append question and options to container
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(optionsWrapper);
}

// 4. Handle option click
function handleOptionClick(selectedIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check answer
  if (selectedIndex === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to next question
  currentQuestionIndex++;

  // Check if quiz is finished
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// 5. Show final result
function showResult() {
  quizContainer.innerHTML = "";
  quizActions.innerHTML = "";

  const resultText = document.createElement("h2");
  resultText.textContent = `Your Score: ${score} / ${quizQuestions.length}`;

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
  });

  quizContainer.appendChild(resultText);
  quizActions.appendChild(restartBtn);
}

// 6. Initial render
renderQuestion();
```

---

## 6. DRY RUN (One Question Only)

### Initial state

```
currentQuestionIndex = 0
score = 0
```

### `renderQuestion()` runs

* Question 0 shown
* Options rendered as buttons

### User clicks an option

* `handleOptionClick(index)` runs
* If correct → score++
* `currentQuestionIndex++`

### If questions remain

* `renderQuestion()` again

### If no questions remain

* `showResult()` runs
* Final score shown
* Restart button appears

---

## 7. Key Insight (VERY IMPORTANT)

There is **no magic**.

Everything depends on:

```js
currentQuestionIndex
```

Change index → UI changes.

This is **state-driven UI**, same concept used in React, Vue, etc.

---

## 8. Common Beginner Mistakes (You Avoided)

* ❌ Hardcoding questions in HTML
* ❌ Using alerts for answers
* ❌ Tracking too many variables
* ❌ Mixing data & UI
* ❌ Not handling end state

You avoided all of them.

---

## 9. STOP POINT (Mandatory)

At this stage:

* Quiz works logically
* No styling yet (ugly is OK)
* Clicking options progresses quiz
* Score calculates correctly

Do **NOT** add CSS yet.

---

# QUIZ APP — STEP 4

## `css/style.css` (Dark Theme)

### Goal of this step

* Make UI **readable**
* Make clicks **visible**
* Support quiz flow visually
* **Do NOT encode logic in CSS**

Think this way:

> JS decides **what**
> CSS decides **how it looks**

---

## 1. What CSS WILL do

* Dark background
* Center layout
* Button styles
* Hover feedback
* Clean spacing

---

## 2. What CSS must NOT do

❌ No quiz rules
❌ No score logic
❌ No hiding/showing questions conditionally
❌ No JS replacement

CSS should not “think”.

---

## 3. Folder reminder

```
quiz-app/
└── css/
    └── style.css
```

---

## 4. `style.css` (FINAL — DARK THEME, COPY-PASTE)

```css
/* ===== Global Reset ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== Body (Dark Theme Base) ===== */
body {
  font-family: Arial, sans-serif;
  background-color: #0f172a; /* dark navy */
  color: #e5e7eb; /* light text */
  min-height: 100vh;
}

/* ===== App Wrapper ===== */
.quiz-app {
  max-width: 600px;
  margin: 60px auto;
  padding: 24px;
  background-color: #020617; /* darker card */
  border-radius: 8px;
}

/* ===== Title ===== */
.quiz-title {
  text-align: center;
  margin-bottom: 24px;
}

/* ===== Question ===== */
#quiz-container h2 {
  margin-bottom: 16px;
}

/* ===== Options Wrapper ===== */
#quiz-container div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ===== Option Buttons ===== */
button {
  padding: 12px;
  background-color: #1e293b;
  color: #e5e7eb;
  border: 1px solid #334155;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

/* Hover feedback */
button:hover {
  background-color: #334155;
}

/* ===== Actions Area ===== */
#quiz-actions {
  margin-top: 24px;
  text-align: center;
}

/* Restart button slightly different */
#quiz-actions button {
  background-color: #2563eb;
  border: none;
}

#quiz-actions button:hover {
  background-color: #1d4ed8;
}
```

---

## 5. What Happens Now (Visual Flow)

### On load

* Dark background
* First question visible
* Options shown as stacked buttons

### On click

* Immediate next question appears
* Clean transition (logic-driven)

### On quiz end

* Score shown
* Restart button highlighted

All **controlled by JS state**, not CSS.

---

## 6. Key Engineering Insight (Lock This)

You did **not**:

* Hide questions with CSS
* Track selection with CSS
* Encode quiz rules in styles

That’s correct.

Interview line later:

> “JavaScript controls quiz state. CSS only reflects that state visually, using a dark theme for readability.”

---

## 7. STOP POINT — VERIFY

Check these:

* Dark theme applied?
* Quiz still works?
* No logic broken?
* Restart works?

If yes → you now have a **complete working Quiz App**.

---

# QUIZ APP — COMPLETE DRY RUN

(From page load → last question → restart)

---

## FILES INVOLVED (Mental Setup)

* `index.html` → empty containers
* `questions.js` → quiz data
* `quiz.js` → logic + state
* `style.css` → dark theme (visual only)

---

## INITIAL STATE (Before Page Loads)

### HTML Reality

```html
<section id="quiz-container"></section>
<section id="quiz-actions"></section>
```

Both are **EMPTY**.

No questions.
No buttons.

Correct design.

---

## STEP 1 — Browser Loads Files (Top to Bottom)

### 1️⃣ `questions.js` loads

```js
const quizQuestions = [ ...4 questions... ];
```

Memory now contains:

```
quizQuestions → Array(4 objects)
```

No UI change yet.

---

### 2️⃣ `quiz.js` loads

#### DOM selection

```js
quizContainer → <section id="quiz-container">
quizActions   → <section id="quiz-actions">
```

Both found → no error.

---

#### State variables initialized

```js
currentQuestionIndex = 0
score = 0
```

This is **CRITICAL**.

State snapshot:

```
Question index → 0
Score → 0
```

---

## STEP 2 — Initial Render

```js
renderQuestion();
```

Execution enters `renderQuestion()`.

---

## STEP 3 — renderQuestion() (Question 0)

### Clear UI

```js
quizContainer.innerHTML = "";
quizActions.innerHTML = "";
```

Still empty (first load).

---

### Get current question

```js
currentQuestion = quizQuestions[0];
```

That object is:

```js
{
  id: 1,
  question: "What does HTML stand for?",
  options: [4 options],
  correctAnswer: 0
}
```

---

### Create Question Element

```html
<h2>What does HTML stand for?</h2>
```

---

### Create Options (Loop)

Loop runs **4 times**.

Each time:

* Create `<button>`
* Set text
* Attach click handler with `optionIndex`

Buttons created:

```
[0] Hyper Text Markup Language
[1] High Text Machine Language
[2] Hyperlinks and Text Markup Language
[3] Home Tool Markup Language
```

---

### Append to DOM

Final DOM becomes:

```html
<section id="quiz-container">
  <h2>What does HTML stand for?</h2>
  <div>
    <button>Option 0</button>
    <button>Option 1</button>
    <button>Option 2</button>
    <button>Option 3</button>
  </div>
</section>
```

User **sees Question 1**.

---

## STEP 4 — User Clicks an Option

### Case 1: User clicks **correct option** (index = 0)

Click triggers:

```js
handleOptionClick(0);
```

---

### Inside handleOptionClick()

#### Check answer

```js
if (selectedIndex === correctAnswer)
```

```
0 === 0 → TRUE
```

So:

```js
score++
```

State now:

```
score = 1
```

---

#### Move to next question

```js
currentQuestionIndex++;
```

```
currentQuestionIndex = 1
```

---

#### Check quiz end

```js
1 < 4 → TRUE
```

So:

```js
renderQuestion();
```

---

## STEP 5 — renderQuestion() (Question 1)

Same flow again.

Current state:

```
currentQuestionIndex = 1
score = 1
```

Now question is:

```
"Which language is used to add logic to web pages?"
```

Options rendered.

---

## STEP 6 — User Clicks Wrong Option (Example)

User clicks option index `1` (wrong).

### Answer check

```
1 === 2 → FALSE
```

Score stays:

```
score = 1
```

---

### Move index

```
currentQuestionIndex = 2
```

Render next question.

---

## STEP 7 — Repeat Until Last Question

After last question (index 3):

```js
currentQuestionIndex++;
```

Now:

```
currentQuestionIndex = 4
```

---

### End condition check

```js
4 < 4 → FALSE
```

So we call:

```js
showResult();
```

---

## STEP 8 — showResult()

### Clear UI

```js
quizContainer.innerHTML = "";
quizActions.innerHTML = "";
```

---

### Show score

```html
<h2>Your Score: X / 4</h2>
```

---

### Create Restart Button

```html
<button>Restart Quiz</button>
```

Button has click handler.

User sees:

```
Your Score: 3 / 4
[ Restart Quiz ]
```

---

## STEP 9 — User Clicks Restart

Click triggers:

```js
currentQuestionIndex = 0;
score = 0;
renderQuestion();
```

State reset:

```
currentQuestionIndex = 0
score = 0
```

Quiz starts again from **Question 1**.

---

## 🔑 MOST IMPORTANT INSIGHT (Lock This)

The **entire quiz** is driven by just **two variables**:

```js
currentQuestionIndex
score
```

UI is just a **reflection** of state.

This is the same idea used in:

* React
* Vue
* Angular
* Any frontend framework

---

## FINAL DEVELOPER SUMMARY (You should say this)

> “The quiz is state-driven.
> I track the current question index and score.
> On each option click, I validate the answer, update state, and re-render the UI.
> When questions end, I switch to a result screen.”

---

