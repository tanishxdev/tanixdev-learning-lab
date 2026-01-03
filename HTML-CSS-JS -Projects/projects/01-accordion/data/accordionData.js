/*
This file contains ONLY static data.
No logic.
No DOM access.
No UI code.

Think of this as:
"Data coming from backend / API"
*/

const accordionData = [
  {
    id: 1,
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language used to add interactivity and logic to web pages. It runs in the browser and can also run on servers using environments like Node.js.",
  },
  {
    id: 2,
    title: "What is an Accordion UI?",
    content:
      "An accordion is a UI pattern where content is shown or hidden when a user clicks on a header. It helps organize information in a compact way.",
  },
  {
    id: 3,
    title: "Why use Vanilla JavaScript?",
    content:
      "Using Vanilla JavaScript helps you understand core concepts like DOM manipulation, event handling, and state management without relying on frameworks.",
  },
  {
    id: 4,
    title: "Can this data come from an API?",
    content:
      "Yes. In real applications, this data often comes from APIs. This file simulates that behavior so the UI logic remains the same.",
  },
];

/*
We do NOT export using ES modules here
because we are using plain script tags.

The variable 'accordionData' becomes global
and accessible inside accordion.js
*/
