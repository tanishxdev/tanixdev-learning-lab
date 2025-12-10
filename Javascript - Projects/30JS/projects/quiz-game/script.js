// DOM Elements: caching all required UI elements for easy access
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz Data: array of question objects, each with multiple answers
const quizQuestions = [
  {
    question: "Which language is primarily used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Power Unit", correct: false },
      { text: "Control Program Utility", correct: false },
      { text: "Computer Processing Unit", correct: false },
    ],
  },
  {
    question: "Which of these is a JavaScript data type?",
    answers: [
      { text: "Boolean", correct: true },
      { text: "Document", correct: false },
      { text: "Module", correct: false },
      { text: "Selector", correct: false },
    ],
  },
  {
    question: "Which tag is used to display an image in HTML?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false },
    ],
  },
  {
    question: "Which company developed Java?",
    answers: [
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: true },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "Which of these is used to store data in key-value pairs?",
    answers: [
      { text: "Array", correct: false },
      { text: "Dictionary / Object", correct: true },
      { text: "For loop", correct: false },
      { text: "Function", correct: false },
    ],
  },
  {
    question: "What does HTTP stand for?",
    answers: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "HighText Transfer Program", correct: false },
      { text: "Hyperlink Text Process", correct: false },
      { text: "Home Transfer Text Protocol", correct: false },
    ],
  },
  {
    question: "Which one is a looping statement in programming?",
    answers: [
      { text: "if", correct: false },
      { text: "switch", correct: false },
      { text: "for", correct: true },
      { text: "break", correct: false },
    ],
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
    ],
  },
  {
    question: "Which file extension is used for JavaScript files?",
    answers: [
      { text: ".js", correct: true },
      { text: ".java", correct: false },
      { text: ".script", correct: false },
      { text: ".jsx", correct: false },
    ],
  }
];


// Quiz State Variables: track progress and interaction control
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

// Display total questions and max score once at load time
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event Listeners: start and restart controls
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // Reset quiz progress and UI values at beginning
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active"); // hide start screen
  quizScreen.classList.add("active"); // show quiz screen

  showQuestion(); // load first question
}

function showQuestion() {
  // Unlock answer buttons for current question
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1; // update question number

  // Fill progress bar according to current index
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question; // render question text

  answersContainer.innerHTML = ""; // clear old answer buttons

  // Create answer buttons dynamically for current question
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // dataset.correct stores custom value on DOM element for checking correctness
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer); // attach click handler

    answersContainer.appendChild(button); // add button to DOM
  });
}

function selectAnswer(event) {
  // Prevent multiple clicks after answering
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true"; // check correctness

  // Convert NodeList to array so we can loop with forEach
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // highlight correct answer
    } else if (button === selectedButton) {
      button.classList.add("incorrect"); // highlight incorrect selection
    }
  });

  // Increase score if answer is correct
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score; // update score on UI
  }

  // Move to next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;

    // If questions remain, load next; else show results screen
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active"); // hide main quiz
  resultScreen.classList.add("active"); // show final screen

  finalScoreSpan.textContent = score; // display final score

  const percentage = (score / quizQuestions.length) * 100;

  // Display message based on performance range
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
}

function restartQuiz() {
  resultScreen.classList.remove("active"); // hide results
  startQuiz(); // restart from question 1
}
