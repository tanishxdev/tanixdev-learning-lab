/*
  qr.js

  Responsibility:
  - Read user input
  - Generate QR code image
  - Inject QR into DOM

  No styling logic.
*/

// STEP 1: Select required DOM elements
const input = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const output = document.getElementById("qr-output");

// Safety checks
if (!input || !generateBtn || !output) {
  throw new Error("Required DOM elements not found");
}

// STEP 2: Handle button click
generateBtn.addEventListener("click", () => {
  // Read input value and trim spaces
  const inputValue = input.value.trim();

  // STEP 3: Validate input
  if (inputValue === "") {
    // Do nothing if input is empty
    return;
  }

  // STEP 4: Encode input for URL safety
  const encodedText = encodeURIComponent(inputValue);

  // STEP 5: Build QR image URL
  const qrImageURL =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodedText;

  // STEP 6: Clear previous QR (if any)
  output.innerHTML = "";

  // STEP 7: Create QR image element
  const qrImage = document.createElement("img");
  qrImage.src = qrImageURL;
  qrImage.alt = "Generated QR Code";

  // STEP 8: Inject QR image into output container
  output.appendChild(qrImage);
});
