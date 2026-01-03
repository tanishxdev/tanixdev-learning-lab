// Select elements
const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrOutput = document.getElementById("qrOutput");

// Disable button initially
generateBtn.disabled = true;

// Enable / disable button based on input
qrInput.addEventListener("input", function () {
  generateBtn.disabled = qrInput.value.trim() === "";
});

// Generate QR on button click
generateBtn.addEventListener("click", function () {
  // Clear previous QR
  qrOutput.innerHTML = "";

  const inputValue = qrInput.value.trim();

  if (inputValue === "") {
    alert("Please enter some text or URL");
    return;
  }

  const qrImageUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(inputValue);

  qrOutput.innerHTML = `
    <img src="${qrImageUrl}" alt="QR Code" />
  `;

  // Clear input after generation
  qrInput.value = "";
  generateBtn.disabled = true;
});
