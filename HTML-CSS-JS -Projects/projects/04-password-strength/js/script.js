/***************************************************
 * DOM SELECTION
 ***************************************************/

// Select the password input field
const passwordInput = document.getElementById("passwordInput");

// Select the text element where strength will be shown
const strengthText = document.getElementById("strengthText");

/***************************************************
 * HELPER FUNCTIONS — RULE CHECKS
 ***************************************************/

/*
  Check if password contains at least one lowercase letter
*/
function hasLowercase(password) {
  for (let char of password) {
    if (char >= "a" && char <= "z") {
      return true;
    }
  }
  return false;
}

/*
  Check if password contains at least one uppercase letter
*/
function hasUppercase(password) {
  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      return true;
    }
  }
  return false;
}

/*
  Check if password contains at least one number
*/
function hasNumber(password) {
  for (let char of password) {
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}

/*
  Check if password contains at least one special character
*/
function hasSpecialChar(password) {
  const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  for (let char of password) {
    if (specialChars.includes(char)) {
      return true;
    }
  }
  return false;
}

/***************************************************
 * STRENGTH CALCULATION LOGIC
 ***************************************************/

/*
  Calculate strength score based on rules
  Each rule adds 1 point
*/
function calculateStrength(password) {
  let score = 0;

  // Rule 1: Minimum length
  if (password.length >= 8) {
    score++;
  }

  // Rule 2: Lowercase letter
  if (hasLowercase(password)) {
    score++;
  }

  // Rule 3: Uppercase letter
  if (hasUppercase(password)) {
    score++;
  }

  // Rule 4: Number
  if (hasNumber(password)) {
    score++;
  }

  // Rule 5: Special character
  if (hasSpecialChar(password)) {
    score++;
  }

  return score;
}

/*
  Convert numeric score into human-readable label
*/
function getStrengthLabel(score) {
  if (score <= 1) {
    return "Weak";
  } else if (score <= 3) {
    return "Medium";
  } else {
    return "Strong";
  }
}

/***************************************************
 * EVENT HANDLING — REAL-TIME CHECK
 ***************************************************/

// Listen for typing inside password input
passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;

  // Calculate strength score
  const strengthScore = calculateStrength(password);

  // Convert score to label
  const strengthLabel = getStrengthLabel(strengthScore);

  // Update UI text
  strengthText.innerText = "Strength: " + strengthLabel;

  strengthText.classList.remove("Weak", "Medium", "Strong");

  if (strengthLabel === "Weak") {
    strengthText.classList.add("weak");
  } else if (strengthLabel === "Medium") {
    strengthText.classList.add("medium");
  } else {
    strengthText.classList.add("strong");
  }
});
