/*
  This file contains ONLY static data.

  Think of it as:
  "Response coming from backend API"

  No DOM
  No logic
  No UI code
*/

const accordionData = [
  {
    id: 1,
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language used to add logic and interactivity to web pages. It runs inside the browser and can also run on servers using Node.js.",
  },
  {
    id: 2,
    title: "What is an Accordion UI?",
    content:
      "An accordion is a user interface pattern where content expands or collapses when a user clicks on a header. It helps organize information in limited space.",
  },
  {
    id: 3,
    title: "Why use Vanilla JavaScript?",
    content:
      "Vanilla JavaScript helps you understand core concepts like DOM manipulation, event handling, and state without hiding logic behind frameworks.",
  },
  {
    id: 4,
    title: "Can this data come from an API?",
    content:
      "Yes. In real-world applications, this data usually comes from an API. This file simply simulates that behavior.",
  },
];

/*
  NOTE:
  We are NOT using export / import here.

  Because index.html uses script tags,
  this variable becomes GLOBAL and
  can be accessed inside accordion.js.
*/
