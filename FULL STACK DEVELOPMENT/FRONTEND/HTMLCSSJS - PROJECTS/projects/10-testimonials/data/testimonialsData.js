/*
  testimonialsData.js

  This file contains ONLY static testimonial data.
  Think of it as:
  "Data coming from backend / CMS"

  No DOM
  No logic
  No UI code
*/

const testimonialsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    message:
      "This platform helped me understand JavaScript logic clearly. The step-by-step approach made complex concepts feel simple.",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Software Engineer",
    message:
      "I liked how the projects focus on thinking and structure rather than just writing code. It improved my confidence in interviews.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "CS Student",
    message:
      "Building small projects with clean logic helped me finally understand how JavaScript controls the UI.",
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Web Developer",
    message:
      "Separating data, logic, and UI changed the way I approach frontend development completely.",
  },
];

/*
  NOTE:
  We are not using export/import.
  This variable becomes global and
  is accessible inside testimonials.js
*/
