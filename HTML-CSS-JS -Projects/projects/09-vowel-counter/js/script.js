/*
  script.js

  Responsibility:
  - Read user input
  - Count vowels
  - Update result in real time
*/

/* ===============================
   STEP 1: Select DOM elements
   =============================== */

// Textarea where user types text
const textInput = document.getElementById("text-input");

// Span where vowel count will be displayed
const vowelCountElement = document.getElementById("vowel-count");

/*
  Safety check (good practice)
*/
if (!textInput || !vowelCountElement) {
  throw new Error("Required DOM elements not found");
}

/* ===============================
   STEP 2: Define vowel data
   =============================== */

// Vowels to check against
const vowels = ["a", "e", "i", "o", "u"];

/* ===============================
   STEP 3: Add input event listener
   =============================== */

textInput.addEventListener("input", () => {
  // Read current text from textarea
  const text = textInput.value.toLowerCase();

  // Reset count for every input
  let count = 0;

  // Loop through each character in the text
  for (let char of text) {
    // Check if character is a vowel
    if (vowels.includes(char)) {
      count++;
    }
  }

  // Update UI with final count
  vowelCountElement.textContent = count;
});

