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
