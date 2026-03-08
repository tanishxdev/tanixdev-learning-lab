// Access required DOM elements
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

// Game state variables
let num1 = 0;
let num2 = 0;
let score = 0;

// Function to generate a new question
function generateQuestion() {
  // Generate random numbers between 1 and 10
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  // Display question
  questionEl.textContent = `What is ${num1} × ${num2}?`;

  // Clear previous input and result
  answerInput.value = "";
  resultEl.textContent = "";

  // Move focus back to input for keyboard users
  answerInput.focus();
}

// Enter key support
answerInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

// Function to check user answer
function checkAnswer() {
  // Get user input value
  const userAnswer = Number(answerInput.value);

  // Calculate correct answer
  const correctAnswer = num1 * num2;

  // Compare answers
  if (userAnswer === correctAnswer) {
    resultEl.textContent = "Correct!";
    score++;
  } else {
    resultEl.textContent = `Wrong! Correct answer is ${correctAnswer}`;
  }

  // Update score UI
  scoreEl.textContent = `Score: ${score}`;

  // ✅ Delay next question so user can see result
  setTimeout(() => {
    generateQuestion();
  }, 1500); // 1.5 seconds
}

// Button click event
submitBtn.addEventListener("click", checkAnswer);

// Initial question load
generateQuestion();
