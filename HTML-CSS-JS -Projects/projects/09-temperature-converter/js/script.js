/*
This file handles:
- Reading temperature input
- Converting temperature units
- Updating output values

Base unit strategy:
ALL conversions go through Celsius
*/

// 1. Select INPUT elements
const tempInput = document.getElementById("temp-input");
const unitSelect = document.getElementById("unit-select");

// 2. Select OUTPUT elements
const cOutput = document.getElementById("c-output");
const fOutput = document.getElementById("f-output");
const kOutput = document.getElementById("k-output");

/*
Safety check (good habit)
*/
if (!tempInput || !unitSelect || !cOutput || !fOutput || !kOutput) {
  throw new Error("One or more DOM elements not found");
}

// 3. Core conversion function
function convertTemperature() {
  /*
  Read input value
  Always comes as string → convert to number
  */
  const inputValue = Number(tempInput.value);
  const selectedUnit = unitSelect.value;

  /*
  Handle empty input:
  Reset outputs and stop execution
  */
  if (!tempInput.value) {
    cOutput.textContent = 0;
    fOutput.textContent = 0;
    kOutput.textContent = 0;
    return;
  }

  /*
  STEP 1: Convert input → Celsius (base unit)
  */
  let tempInCelsius;

  if (selectedUnit === "c") {
    tempInCelsius = inputValue;
  } else if (selectedUnit === "f") {
    tempInCelsius = (inputValue - 32) * (5 / 9);
  } else if (selectedUnit === "k") {
    tempInCelsius = inputValue - 273.15;
  }

  /*
  STEP 2: Convert Celsius → other units
  */
  const tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
  const tempInKelvin = tempInCelsius + 273.15;

  /*
  STEP 3: Update UI
  Rounded for readability
  */
  cOutput.textContent = tempInCelsius.toFixed(2);
  fOutput.textContent = tempInFahrenheit.toFixed(2);
  kOutput.textContent = tempInKelvin.toFixed(2);
}

// 4. Attach LIVE events
tempInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);
