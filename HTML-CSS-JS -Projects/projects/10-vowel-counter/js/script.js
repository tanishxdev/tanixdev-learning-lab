/*
This file handles:
- Reading user text
- Counting vowels
- Updating the UI

Logic:
Loop through each character and check if it's a vowel
*/

// 1. Select DOM elements
const textInput = document.getElementById("text-input");
const vowelCountOutput = document.getElementById("vowel-count");

/*
Safety check (good engineering habit)
*/
if (!textInput || !vowelCountOutput) {
  throw new Error("Required DOM elements not found");
}

// 2. Core vowel counting function
function countVowels() {
  /*
  Read input text
  Convert to lowercase for case-insensitive comparison
  */
  const text = textInput.value.toLowerCase();

  /*
  Reference set of vowels
  */
  const vowels = "aeiou";

  /*
  Counter starts at 0 for every calculation
  */
  let count = 0;

  /*
  Loop through each character in the string
  */
  for (let char of text) {
    /*
    Check if character exists in vowel set
    */
    if (vowels.includes(char)) {
      count++;
    }
  }

  /*
  Update UI with final count
  */
  vowelCountOutput.textContent = count;
}

// 3. Attach LIVE event
textInput.addEventListener("input", countVowels);
