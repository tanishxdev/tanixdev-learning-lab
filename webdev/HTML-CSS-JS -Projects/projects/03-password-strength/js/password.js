/*
  password.js

  Responsibility:
  - Listen to password input
  - Evaluate strength rules
  - Decide strength level
  - Update UI state

  No styling logic here
*/

// STEP 1: Select required DOM elements
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength-text");
const strengthFill = document.getElementById("strength-fill");

// Safety check
if (!passwordInput || !strengthText || !strengthFill) {
  throw new Error("Required DOM elements not found");
}

// STEP 2: Listen to input event
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  // STEP 3: Handle empty input
  if (password.length === 0) {
    updateStrength("none", 0);
    return;
  }

  // STEP 4: Calculate score
  let score = 0;

  // Rule 1: Length >= 8
  if (password.length >= 8) {
    score++;
  }

  // Rule 2: Contains number
  if (/[0-9]/.test(password)) {
    score++;
  }

  // Rule 3: Contains uppercase letter
  if (/[A-Z]/.test(password)) {
    score++;
  }

  // Rule 4: Contains special character
  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  }

  // STEP 5: Decide strength based on score
  if (score <= 1) {
    updateStrength("weak", 25);
  } else if (score <= 3) {
    updateStrength("medium", 60);
  } else {
    updateStrength("strong", 100);
  }
});

// STEP 6: Update UI state (no styling logic)
function updateStrength(level, width) {
  // Update text
  if (level === "none") {
    strengthText.textContent = "Strength: —";
  } else {
    strengthText.textContent =
      "Strength: " + level.charAt(0).toUpperCase() + level.slice(1);
  }

  // Reset previous state
  strengthFill.className = "";
  strengthFill.style.width = width + "%";

  // Apply current state class
  if (level !== "none") {
    strengthFill.classList.add(level);
  }
}
