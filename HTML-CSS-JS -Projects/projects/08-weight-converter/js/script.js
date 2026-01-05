/*
This file handles:
- Reading user input
- Converting weight units
- Updating output values

HTML provides structure
JavaScript provides logic
*/

// 1. Select DOM elements (INPUTS)
const weightInput = document.getElementById("weight-input");
const unitSelect = document.getElementById("unit-select");

// 2. Select DOM elements (OUTPUTS)
const kgOutput = document.getElementById("kg-output");
const gOutput = document.getElementById("g-output");
const lbOutput = document.getElementById("lb-output");

/*
Safety check (good engineering habit)
*/
if (!weightInput || !unitSelect || !kgOutput || !gOutput || !lbOutput) {
  throw new Error("One or more DOM elements not found");
}

// 3. Core conversion function
function convertWeight() {
  /*
  Read input value.
  Input value comes as STRING.
  Convert it to NUMBER.
  */
  const inputValue = Number(weightInput.value);
  const selectedUnit = unitSelect.value;

  /*
  Handle empty input:
  If input is empty or invalid,
  show 0 everywhere and stop.
  */
  if (!weightInput.value) {
    kgOutput.textContent = 0;
    gOutput.textContent = 0;
    lbOutput.textContent = 0;
    return;
  }

  /*
  STEP 1: Convert input → base unit (kg)
  */
  let weightInKg;

  if (selectedUnit === "kg") {
    weightInKg = inputValue;
  } else if (selectedUnit === "g") {
    weightInKg = inputValue / 1000;
  } else if (selectedUnit === "lb") {
    weightInKg = inputValue * 0.453592;
  }

  /*
  STEP 2: Convert base unit → all units
  */
  const weightInGrams = weightInKg * 1000;
  const weightInPounds = weightInKg / 0.453592;

  /*
  STEP 3: Update UI
  Limit decimals for readability
  */
  kgOutput.textContent = weightInKg.toFixed(2);
  gOutput.textContent = weightInGrams.toFixed(2);
  lbOutput.textContent = weightInPounds.toFixed(2);
}

// 4. Attach events (LIVE conversion)
weightInput.addEventListener("input", convertWeight);
unitSelect.addEventListener("change", convertWeight);

