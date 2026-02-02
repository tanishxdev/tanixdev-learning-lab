/*
  converter.js

  Responsibility:
  - Read user input
  - Perform temperature conversion
  - Display results in the UI

  No styling logic here.
*/

// STEP 1: Select required DOM elements
const temperatureInput = document.getElementById("temperature-input");
const unitSelect = document.getElementById("unit-select");
const convertBtn = document.getElementById("convert-btn");
const resultContainer = document.getElementById("result-container");

// Safety check
if (!temperatureInput || !unitSelect || !convertBtn || !resultContainer) {
  throw new Error("Required DOM elements not found");
}

// STEP 2: Attach click event to Convert button
convertBtn.addEventListener("click", handleConversion);

// STEP 3: Main conversion handler
function handleConversion() {
  // Read input value (string by default)
  const inputValue = temperatureInput.value;
  const unit = unitSelect.value;

  // Convert input to number
  const temperature = Number(inputValue);

  // Clear previous result
  resultContainer.innerHTML = "";

  // STEP 4: Input validation
  if (inputValue === "" || Number.isNaN(temperature)) {
    resultContainer.textContent = "Please enter a valid number.";
    return;
  }

  // STEP 5: Conversion logic
  let resultText = "";

  if (unit === "celsius") {
    const fahrenheit = (temperature * 9) / 5 + 32;
    const kelvin = temperature + 273.15;

    resultText = `
      Fahrenheit: ${fahrenheit.toFixed(2)} °F
      Kelvin: ${kelvin.toFixed(2)} K
    `;
  } else if (unit === "fahrenheit") {
    const celsius = ((temperature - 32) * 5) / 9;
    const kelvin = celsius + 273.15;

    resultText = `
      Celsius: ${celsius.toFixed(2)} °C
      Kelvin: ${kelvin.toFixed(2)} K
    `;
  } else if (unit === "kelvin") {
    const celsius = temperature - 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;

    resultText = `
      Celsius: ${celsius.toFixed(2)} °C
      Fahrenheit: ${fahrenheit.toFixed(2)} °F
    `;
  }

  // STEP 6: Display result
  resultContainer.textContent = resultText.trim();
}
