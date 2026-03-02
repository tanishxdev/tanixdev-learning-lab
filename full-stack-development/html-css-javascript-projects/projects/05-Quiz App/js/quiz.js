/*
  quiz.js

  Responsibility:
  - Render quiz questions
  - Handle option selection
  - Track score
  - Control quiz flow

  Depends on:
  - quizData (from data/quizData.js)
*/

// ==============================
// STEP 1: STATE VARIABLES
// ==============================

// Tracks which question is currently shown
let currentQuestionIndex = 0;

// Tracks user's score
let score = 0;

// Tracks whether user has answered current question
let hasAnswered = false;

// ==============================
// STEP 2: DOM SELECTION
// ==============================

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

// Safety check
if (!questionContainer || !optionsContainer || !nextBtn || !resultContainer) {
  throw new Error("One or more required DOM elements not found");
}

// ==============================
// STEP 3: RENDER QUESTION
// ==============================

function renderQuestion() {
  // Reset answered state
  hasAnswered = false;

  // Clear previous UI
  questionContainer.textContent = "";
  optionsContainer.innerHTML = "";
  resultContainer.textContent = "";

  // Get current question object
  const currentQuestion = quizData[currentQuestionIndex];

  // Render question text
  questionContainer.textContent = currentQuestion.question;

  // Render options
  currentQuestion.options.forEach((optionText, optionIndex) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = optionText;

    // Click logic for option
    optionBtn.addEventListener("click", () => {
      handleOptionClick(optionIndex);
    });

    optionsContainer.appendChild(optionBtn);
  });
}

// ==============================
// STEP 4: HANDLE OPTION CLICK
// ==============================

function handleOptionClick(selectedIndex) {
  // Prevent multiple answers
  if (hasAnswered) return;

  hasAnswered = true;

  const currentQuestion = quizData[currentQuestionIndex];

  // Check correctness
  if (selectedIndex === currentQuestion.correctAnswer) {
    score++;
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = "Wrong!";
  }

  // Disable all options after answer
  disableAllOptions();
}

// ==============================
// STEP 5: DISABLE OPTIONS
// ==============================

function disableAllOptions() {
  const optionButtons = optionsContainer.querySelectorAll("button");

  optionButtons.forEach((btn) => {
    btn.disabled = true;
  });
}

// ==============================
// STEP 6: NEXT BUTTON LOGIC
// ==============================

nextBtn.addEventListener("click", () => {
  // Do nothing if user hasn't answered
  if (!hasAnswered) return;

  // Move to next question or end quiz
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showFinalResult();
  }
});

// ==============================
// STEP 7: FINAL RESULT
// ==============================

function showFinalResult() {
  // Clear UI
  questionContainer.textContent = "";
  optionsContainer.innerHTML = "";

  // Show score
  resultContainer.textContent = `Quiz Finished! Your score: ${score}/${quizData.length}`;

  // Disable Next button
  nextBtn.disabled = true;
}

// ==============================
// STEP 8: INITIAL LOAD
// ==============================

renderQuestion();
