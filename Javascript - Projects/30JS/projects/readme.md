# HTML 

**INTERVIEW-STYLE EXPLANATION (AS A CANDIDATE)**
Sir, let me walk you through the HTML structure of my quiz application. I’ll explain screen-by-screen so that you can understand the file flow clearly.

---

### 1. High-Level Overview

This HTML file defines a small single-page quiz application.
I am not reloading pages.
Instead, I use **three screens** inside one page:

1. Start Screen
2. Quiz Screen
3. Result Screen

By showing and hiding these screens using JavaScript and CSS, the quiz feels like a multi-page flow.

---

### 2. `<!DOCTYPE html>` and `<head>` section

I start with the HTML5 doctype to make sure the browser renders in standards mode.

Inside the `<head>`:

* `meta charset="UTF-8"` ensures proper character encoding.
* `meta viewport` makes the layout mobile responsive.
* Page title is “Quiz Game”.
* I link external CSS through `style.css` to keep structure and styling separate.

---

### 3. `<body>` structure

Inside the body, I wrap everything in a main container:

```html
<div class="container">
```

The container holds all three “screens” of the application.
Each screen is simply a `div` with class `"screen"`, and whichever one has `"active"` becomes visible.

---

### 4. Screen 1: Start Screen

```html
<div class="screen active" id="start-screen">
```

* This is the first screen user sees.
* It has a title, a description, and a “Start Quiz” button.
* I intentionally kept it small and simple to reduce cognitive load.

```html
<h1>Quiz Time!</h1>
<p>Test your knowledge...</p>
<button id="start-btn">Start Quiz</button>
```

**JavaScript later attaches a click event to this button**, which hides this screen and shows the quiz screen.

---

### 5. Screen 2: Quiz Screen

This is the main interaction area for the quiz.

```html
<div class="screen" id="quiz-screen">
```

#### a) Quiz Header

Contains the question text and the quiz info (current question number and score).

```html
<h2 id="question-text">Question goes here</h2>
<p>Question <span id="current-question">1</span> of <span id="total-questions">5</span></p>
<p>Score: <span id="score">0</span></p>
```

All of these values are dynamically updated by JavaScript.

#### b) Answers Container

```html
<div id="answers-container"></div>
```

I intentionally left this empty.
My JavaScript generates answer buttons dynamically depending on the question object.

This allows me to:

* Randomize answers
* Create increasing/decreasing number of options
* Apply event listeners to each button

#### c) Progress Bar

```html
<div class="progress-bar">
  <div id="progress" class="progress"></div>
</div>
```

This bar visually indicates how far the user has progressed in the quiz.
JS updates the width percentage after every question.

---

### 6. Screen 3: Result Screen

```html
<div id="result-screen" class="screen">
```

When the quiz finishes, I show:

* Final score
* Max possible score
* A performance message
* Restart button

Example elements:

```html
<p>You scored <span id="final-score">0</span> out of <span id="max-score">5</span></p>
<div id="result-message">Good job!</div>
```

The restart button triggers the flow to reset everything and return to the start screen.

---

### 7. Script at Bottom

```html
<script src="script.js"></script>
```

I load my JavaScript at the end of the body so that:

* The DOM loads first
* JS can safely access all elements without waiting

---

### SHORT SUMMARY (AS IN INTERVIEW)

Sir, I have structured the quiz using a **single-page multi-screen layout**, where each screen is shown or hidden using CSS + JavaScript. The quiz screen dynamically loads questions, answers, and updates progress and score. The result screen displays the final performance and allows restarting. The code is cleanly divided into structure (HTML), styling (CSS), and logic (JS), following basic separation of concerns.

---

# CSS

---

**INTERVIEW-STYLE EXPLANATION OF CSS**

Sir, let me walk you through the CSS approach I have used for the Quiz App. I’ll explain this in sections so you can clearly see the design decisions I made.

---

## 1. Basic Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

I start by resetting default browser styles.
This helps avoid inconsistent spacing across different browsers.
The `box-sizing: border-box` makes width calculations predictable because padding and borders get included inside the total width.

---

## 2. Body Styling

```css
body {
  background: #f5efe6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  font-family: sans-serif;
}
```

I center the entire app vertically and horizontally using flexbox.
`min-height: 100vh` helps keep the content centered on all screen heights.
A subtle background colour (#f5efe6) gives a soft feel because it's a quiz app, and I wanted it to look friendly.
Padding ensures content never touches the edges on smaller screens.

---

## 3. Main Container

```css
.container {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  position: relative;
}
```

This is the card-like wrapper for all screens.
I used a radius of 1rem and a light box-shadow to make it clean and modern.
Keeping `max-width: 600px` ensures reading comfort on both mobile and desktop.
`overflow: hidden` helps prevent any inner elements from visually overflowing the card when switching screens.

---

## 4. Screens (Three-screen architecture)

```css
.screen {
  display: none;
  padding: 2rem;
  text-align: center;
}
.screen.active {
  display: block;
}
```

I follow the single-page-app approach.
All screens remain in the DOM, but only the one with `.active` is visible.
This gives smooth transitions without page reloads.

---

## 5. Start Screen Styling

I used a large heading and soft grey subtext.

```css
#start-screen h1 {
  color: #e86a33;
  margin-bottom: 20px;
  font-size: 2.5rem;
}
```

The orange colour (#e86a33) is my accent shade across the entire app.
This keeps colour consistency across all screens.

---

## 6. Quiz Screen Layout

This includes question, score info, answer buttons, and progress bar.

### Header

```css
.quiz-header {
  margin-bottom: 1rem;
}
```

### Question Text

```css
#question-text {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}
```

Readable font size, tight spacing, and a dark grey for better contrast.

### Quiz Info (score + question count)

```css
.quiz-info {
  display: flex;
  justify-content: space-between;
  color: #666;
  margin-bottom: 10px;
}
```

I used flexbox to place "Question X of Y" on one side and "Score" on the other.

---

## 7. Answers Container

```css
.answers-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
}
```

Flexbox column makes it easy to stack dynamically created answer buttons.
`gap` simplifies spacing without extra margins.

---

## 8. Answer Buttons

```css
.answer-btn {
  background-color: #f8f0e5;
  color: #333;
  border: 2px solid #eadbc8;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
}
```

I give each button a soft theme to match the rest of the UI.
Left text-align improves readability of long answers.
I also add a transition so hover effects feel smooth.

### Hover Effect

```css
.answer-btn:hover {
  background-color: #eadbc8;
  border-color: #dac0ae;
}
```

### Correct / Incorrect States

```css
.answer-btn.correct {
  background-color: #e6fff0;
  border-color: #a3f0c4;
  color: #28a745;
}
.answer-btn.incorrect {
  background-color: #fff0f0;
  border-color: #ffbdbd;
  color: #dc3545;
}
```

I use green for correct, red for incorrect.
These colours also match widely accepted accessibility patterns.

---

## 9. Progress Bar

```css
.progress-bar {
  height: 10px;
  background-color: #f8f0e5;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
}
.progress {
  height: 100%;
  background-color: #e86a33;
  width: 0%;
  transition: width 0.3s ease;
}
```

The inner `.progress` div expands based on JS percentage value.
Transition creates a smooth animation as the bar fills.

---

## 10. Result Screen

```css
#result-screen h1 {
  color: #e86a33;
  margin-bottom: 30px;
}
```

### Result Info Box

```css
.result-info {
  background-color: #f8f0e5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
}
```

A soft card-like background to highlight results visually.

### Message Text

```css
#result-message {
  font-size: 1.5rem;
  font-weight: 600;
  color: #e86a33;
}
```

---

## 11. Buttons (Reusable Style)

```css
button {
  background-color: #e86a33;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #d45b28;
}
```

All buttons share a consistent design pattern and colour theme.

---

## 12. Responsive Design (Below 500px)

```css
@media (max-width: 500px) {
  .screen { padding: 1rem; }
  #start-screen h1 { font-size: 2rem; }
  #question-text { font-size: 1.3rem; }
  .answer-btn { padding: 12px; }
  button { padding: 12px 25px; font-size: 1rem; }
}
```

I reduce padding, button sizes, and font sizes for smaller screens so that the design remains readable and compact.
The quiz stays usable on small devices without overflowing.

---

## SHORT INTERVIEW SUMMARY

Sir, the entire CSS is designed around simplicity, readability, and consistency.
I’ve used soft colours, rounded edges, clean spacing, and responsive behaviour to make the quiz feel smooth and modern.
Stylistically, it follows a lightweight, mobile-first design, and structurally, it keeps each screen clear and easy to maintain.

---

# JavaScript

---

**INTERVIEW-STYLE EXPLANATION OF `script.js`**

Sir, this JavaScript file controls the entire quiz logic.
I’ve structured it in a simple, modular flow:

1. Select all required DOM elements
2. Store questions in an array
3. Maintain quiz state
4. Add event listeners
5. Write core functions:

   * startQuiz
   * showQuestion
   * selectAnswer
   * showResults
   * restartQuiz

Now I’ll walk through each section.

---

## 1. DOM Selections

```js
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
...
const progressBar = document.getElementById("progress");
```

Here I am simply caching all frequently used HTML elements.
This helps improve performance and makes the code easier to read.
Instead of repeatedly querying the DOM, I store references once.

---

## 2. Quiz Questions Array

```js
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  ...
];
```

I use a structured data format:
Each question is an object with a `question` string and an `answers` array.
Each answer contains text and a boolean `correct` property.

Benefits:

* Easy to extend
* Easy to randomize
* Clear separation of data and logic

---

## 3. Quiz State Variables

```js
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
```

I maintain three important states:

1. `currentQuestionIndex` → to know which question to show
2. `score` → track correct answers
3. `answersDisabled` → prevent multiple clicks until next question loads

This variable prevents double-click or selecting multiple answers while animation is running.

---

## 4. Initial Setup Values

```js
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;
```

I update the UI to show total number of questions.
This ensures even if we add or remove questions later, the UI updates automatically.

---

## 5. Event Listeners

```js
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
```

Click handlers for start and restart functionality.

---

## CORE FUNCTIONS

---

## 6. `startQuiz()`

```js
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}
```

This is the entry point:

* Reset quiz state
* Hide start screen
* Show quiz screen
* Load the first question

This gives a clean restart every time the quiz starts.

---

## 7. `showQuestion()`

This is the most important function; it renders everything dynamically.

```js
answersDisabled = false;
```

Enable answering.

```js
const currentQuestion = quizQuestions[currentQuestionIndex];
```

Pick current question.

```js
currentQuestionSpan.textContent = currentQuestionIndex + 1;
```

Update question number (UI).

### Progress Bar

```js
const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
progressBar.style.width = progressPercent + "%";
```

This visually shows progress.

### Render Question Text

```js
questionText.textContent = currentQuestion.question;
```

### Clear previous answers

```js
answersContainer.innerHTML = "";
```

Important so that old buttons don’t remain.

### Create Answer Buttons

```js
currentQuestion.answers.forEach((answer) => {
  const button = document.createElement("button");
  button.textContent = answer.text;
  button.classList.add("answer-btn");
  button.dataset.correct = answer.correct;
  button.addEventListener("click", selectAnswer);
  answersContainer.appendChild(button);
});
```

Key point:
I store the correctness using `dataset.correct`.
This is a clean method to attach metadata to DOM nodes.

---

## 8. `selectAnswer()`

This handles answer selection and correctness logic.

### Prevent Double Clicking

```js
if (answersDisabled) return;
answersDisabled = true;
```

### Identify Selected Answer

```js
const selectedButton = event.target;
const isCorrect = selectedButton.dataset.correct === "true";
```

### Highlight Correct/Incorrect

```js
Array.from(answersContainer.children).forEach((button) => {
  if (button.dataset.correct === "true") {
    button.classList.add("correct");
  } else if (button === selectedButton) {
    button.classList.add("incorrect");
  }
});
```

I convert NodeList to array using `Array.from()` to use `.forEach()`.
Correct answers always get highlighted; incorrect only highlights the chosen one.

### Update Score

```js
if (isCorrect) {
  score++;
  scoreSpan.textContent = score;
}
```

### Move to Next Question After Delay

```js
setTimeout(() => {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}, 1000);
```

I give a 1-second delay to show visual feedback before changing question.

---

## 9. `showResults()`

```js
quizScreen.classList.remove("active");
resultScreen.classList.add("active");

finalScoreSpan.textContent = score;
```

I hide quiz screen and show result screen.
Display final score.

### Dynamic Result Message

I compute percentage and show different messages.

```js
const percentage = (score / quizQuestions.length) * 100;

if (percentage === 100) {
  resultMessage.textContent = "Perfect! You're a genius!";
} else if (percentage >= 80) {
  resultMessage.textContent = "Great job! You know your stuff!";
} else if (percentage >= 60) {
  resultMessage.textContent = "Good effort! Keep learning!";
} else if (percentage >= 40) {
  resultMessage.textContent = "Not bad! Try again to improve!";
} else {
  resultMessage.textContent = "Keep studying! You'll get better!";
}
```

This gives the quiz more personality.

---

## 10. `restartQuiz()`

```js
resultScreen.classList.remove("active");
startQuiz();
```

I remove result screen and simply call `startQuiz()`.
This resets the full flow.

---

## SHORT INTERVIEW SUMMARY

Sir, the entire JavaScript is structured around clear separation of responsibilities:

* Data: The questions array
* UI Control: Screens toggling
* State Management: `currentQuestionIndex`, `score`, `answersDisabled`
* Rendering Logic: `showQuestion()`
* Answer Validation: `selectAnswer()`
* End Flow: `showResults()` and `restartQuiz()`

Everything is dynamic, reusable, and easy to extend.
The code avoids repetition, handles edge cases like double clicks, and maintains smooth user experience.

---
