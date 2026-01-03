// Select the text element
const textElement = document.getElementById("text");

// Read original text
const text = textElement.innerText;

// Split text into letters
const letters = text.split("");

// Clear original text
textElement.innerHTML = "";

// Store spans for later use
const spans = [];

// Create span for each letter
letters.forEach(function (letter) {
  const span = document.createElement("span");
  span.innerText = letter;
  textElement.appendChild(span);
  spans.push(span);
});

// Add hover event for staggered jump
textElement.addEventListener("mouseenter", function () {
  spans.forEach(function (span, index) {
    setTimeout(function () {
      span.classList.add("jump");
    }, index * 100); // delay per letter
  });
});

// Remove animation class after hover ends
textElement.addEventListener("mouseleave", function () {
  spans.forEach(function (span) {
    span.classList.remove("jump");
  });
});
