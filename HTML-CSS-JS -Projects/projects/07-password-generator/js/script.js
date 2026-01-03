/*
Password Generator Logic
Responsibilities:
- Read user input
- Build character pool
- Generate password
- Update UI
*/

// DOM Elements
const passwordOutput = document.getElementById("passwordOutput");
const lengthInput = document.getElementById("lengthInput");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const toggleBtn = document.getElementById("toggleBtn");
const copyMessage = document.getElementById("copyMessage");

/* Generate Password */
generateBtn.addEventListener("click", () => {
  const length = Number(lengthInput.value);
  let characterPool = "";

  if (uppercaseCheckbox.checked) {
    characterPool += PASSWORD_DATA.uppercase;
  }
  if (lowercaseCheckbox.checked) {
    characterPool += PASSWORD_DATA.lowercase;
  }
  if (numbersCheckbox.checked) {
    characterPool += PASSWORD_DATA.numbers;
  }
  if (symbolsCheckbox.checked) {
    characterPool += PASSWORD_DATA.symbols;
  }

  if (!characterPool) return;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  // Update UI
  passwordOutput.value = password;
  copyMessage.textContent = "";
});

/* Copy Password */
copyBtn.addEventListener("click", () => {
  if (!passwordOutput.value) return;

  navigator.clipboard.writeText(passwordOutput.value);
  copyMessage.textContent = "Password copied";

  setTimeout(() => {
    copyMessage.textContent = "";
  }, 1500);
});

/* Show / Hide Password */
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordOutput.type === "password";

  passwordOutput.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
});
