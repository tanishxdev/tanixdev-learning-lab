/*
  animation.js

  Responsibility:
  - Convert text into individual letter elements
  - Inject letters into the DOM

  NO animation logic here
*/

// STEP 1: Text data (from STEP 2)
const text = "JUMPING LETTERS";

// STEP 2: Select the container from HTML
const textContainer = document.getElementById("text-container");

// Safety check
if (!textContainer) {
  throw new Error("Text container not found in HTML");
}

// STEP 3: Convert text into characters
const letters = text.split("");

// STEP 4: Create DOM elements for each character
letters.forEach((char) => {
  // Create span for each character
  const span = document.createElement("span");

  // If character is a space, handle it separately
  if (char === " ") {
    span.innerHTML = "&nbsp;";
    span.classList.add("space");
  } else {
    span.textContent = char;
    span.classList.add("letter");
  }

  // Append span to container
  textContainer.appendChild(span);
});
