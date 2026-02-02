/*
  converter.js

  Responsibility:
  - Read user input
  - Convert weight based on selected unit
  - Update result text

  No styling logic.
*/

// STEP 1: Select DOM elements
const weightInput = document.getElementById("weight-input");
const unitSelect = document.getElementById("unit-select");
const resultText = document.getElementById("result-text");

// STEP 2: Main conversion function
function convertWeight() {
  // Read input value
  const value = parseFloat(weightInput.value);

  // Read selected unit
  const unit = unitSelect.value;

  // Edge case: empty or invalid input
  if (isNaN(value)) {
    resultText.textContent = "Please enter a valid number";
    return;
  }

  let kg;

  // STEP 3: Convert input value to kilograms
  if (unit === "kg") {
    kg = value;
  } else if (unit === "g") {
    kg = value / 1000;
  } else if (unit === "lb") {
    kg = value / 2.20462;
  }

  // STEP 4: Convert from kilograms to other units
  const grams = kg * 1000;
  const pounds = kg * 2.20462;

  // STEP 5: Update UI
  resultText.textContent =
    `${kg.toFixed(2)} kg = ` +
    `${grams.toFixed(2)} g = ` +
    `${pounds.toFixed(2)} lb`;
}

// STEP 6: Event listeners
weightInput.addEventListener("input", convertWeight);
unitSelect.addEventListener("change", convertWeight);
