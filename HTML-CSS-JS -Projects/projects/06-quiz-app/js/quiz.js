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
