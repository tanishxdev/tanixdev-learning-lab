/*
This file contains ONLY static testimonial data.
No logic.
No DOM access.
No UI rendering.

Think of this as:
"Response coming from backend API"
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
    role: "Backend Engineer",
    message:
      "I liked how everything was data-driven. Separating logic from UI really improved how I think about building applications.",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Full Stack Developer",
    message:
      "The projects felt very close to real-world problems. This slider logic especially helped me understand state management.",
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Software Engineer Intern",
    message:
      "Building components without frameworks forced me to actually think. This improved my confidence in JavaScript fundamentals.",
  },
];

/*
We are NOT using ES module exports
because we are using plain script tags.

This variable becomes global
and is accessible inside slider.js
*/
