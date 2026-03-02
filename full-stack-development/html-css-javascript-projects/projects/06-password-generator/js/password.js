/*
  password.js

  Responsibility:
  - Generate a random password
  - Display it when user clicks the button

  No CSS control
  No HTML generation
*/

// STEP 1: Select required DOM elements
const generateBtn = document.getElementById("generate-btn");
const passwordOutput = document.getElementById("password-output");

// Safety check
if (!generateBtn || !passwordOutput) {
  throw new Error("Required DOM elements not found");
}

// STEP 2: Define password rules (DATA)
const PASSWORD_LENGTH = 12;

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";

// Combine all allowed characters
const ALL_ALLOWED_CHARS = UPPERCASE_CHARS + LOWERCASE_CHARS + NUMBER_CHARS;

// STEP 3: Password generation logic
function generatePassword() {
  let password = "";

  // Repeat until desired length is reached
  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    // Generate random index
    const randomIndex = Math.floor(Math.random() * ALL_ALLOWED_CHARS.length);

    // Pick character at random index
    const randomChar = ALL_ALLOWED_CHARS[randomIndex];

    // Append character to password
    password += randomChar;
  }

  return password;
}

// STEP 4: Handle button click
generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword();

  // Display generated password
  passwordOutput.textContent = newPassword;
});
