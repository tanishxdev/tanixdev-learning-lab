/*
  quizData.js

  This file contains ONLY quiz questions data.
  Think of this as a backend API response.

  No DOM
  No logic
  No UI code
*/

const quizData = [
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
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Float"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
];

/*
  We are not using export/import.
  The variable `quizData` becomes global
  and can be accessed inside quiz.js
*/
