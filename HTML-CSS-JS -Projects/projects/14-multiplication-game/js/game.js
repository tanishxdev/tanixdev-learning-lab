const questionText = document.getElementById("question-text");
const scoreValue = document.getElementById("score-value");
const form = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");

if (!questionText || !scoreValue || !form || !answerInput) {
  throw new Error("One or more DOM elements not found");
}

let num1 = 0;
let num2 = 0;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  questionText.textContent = `What is ${num1} x ${num2}?`;
}

function updateScore() {
  scoreValue.textContent = score;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userAnswer = Number(answerInput.value);
  const correctAnswer = num1 * num2;

  if (userAnswer === correctAnswer) {
    score++;
  } else {
    score = -1;
  }

  updateScore();

  answerInput.value = "";

  generateQuestion();
});

updateScore();
generateQuestion();
