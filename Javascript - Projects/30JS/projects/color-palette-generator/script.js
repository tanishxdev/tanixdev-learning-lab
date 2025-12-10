// Get main UI elements: button to generate and container holding all color boxes
const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

// Attach event listener to generate a new palette on button click
generateBtn.addEventListener("click", generatePalette);

// Delegate click events inside palette (for copy button or color preview)
paletteContainer.addEventListener("click", function (e) {
  // If user clicked on the copy icon
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent; // Get hex code text

    navigator.clipboard
      .writeText(hexValue) // Copy color to clipboard
      .then(() => showCopySuccess(e.target)) // Show tick icon
      .catch((err) => console.log(err));
  }

  // If user clicked directly on the color block
  else if (e.target.classList.contains("color")) {
    const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))
      )
      .catch((err) => console.log(err));
  }
});

// Show visual confirmation after copying (icon change → checkmark)
function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy"); // Remove copy icon
  element.classList.add("fas", "fa-check"); // Add check-mark icon
  element.style.color = "#48bb78"; // Temporary green color for success

  // Reset icon to normal after 1.5 seconds
  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");
    element.style.color = "";
  }, 1500);
}

// Generate 5 random colors and update the UI palette
function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor()); // Add a random hex color
  }

  updatePaletteDisplay(colors); // Render new colors on screen
}

// Generate a random HEX color code (#RRGGBB)
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Build a 6-digit hex code by selecting random characters
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Update UI color boxes with newly generated colors
function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color"); // Block showing the actual color
    const hexValue = box.querySelector(".hex-value"); // Text displaying hex code

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

// generatePalette(); // Optional: uncomment to auto-generate on page load
