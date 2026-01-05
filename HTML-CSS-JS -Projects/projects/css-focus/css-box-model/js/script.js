// script.js - PART 1: Box-Sizing Toggle

document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const contentBox = document.querySelector(".content-box");
  const toggleButtons = document.querySelectorAll(".toggle-buttons button");
  const explanation = document.getElementById("box-sizing-explanation");

  // Initial state - content-box (default)
  let currentMode = "content-box";

  // Update the visual styles based on box-sizing
  function updateBoxSizing(mode) {
    // Apply the box-sizing to our content box
    contentBox.style.boxSizing = mode;

    // Update button states
    toggleButtons.forEach((btn) => {
      if (btn.dataset.mode === mode) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update explanation text
    if (mode === "content-box") {
      explanation.innerHTML = `
                <strong>content-box:</strong> Width/height only affect the CONTENT area.<br>
                Total width = width + padding + border
            `;
      contentBox.style.width = "200px";
      contentBox.style.height = "150px";
    } else {
      explanation.innerHTML = `
                <strong>border-box:</strong> Width/height include padding and border.<br>
                Content width = width - padding - border
            `;
      contentBox.style.width = "200px";
      contentBox.style.height = "150px";
    }

    // Force a reflow to ensure styles update
    contentBox.offsetHeight;
  }

  // Add click handlers to toggle buttons
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      currentMode = this.dataset.mode;
      updateBoxSizing(currentMode);
    });
  });

  // Initialize with content-box
  updateBoxSizing("content-box");
});

// script.js - PART 2: Slider Controls

// Add this after the box-sizing code

// Get slider elements
const marginSlider = document.getElementById("margin-slider");
const borderSlider = document.getElementById("border-slider");
const paddingSlider = document.getElementById("padding-slider");
const widthSlider = document.getElementById("content-width");

const marginValue = document.getElementById("margin-value");
const borderValue = document.getElementById("border-value");
const paddingValue = document.getElementById("padding-value");
const widthValue = document.getElementById("width-value");

// Get the box layers
const marginLayer = document.querySelector(".margin-layer");
const borderLayer = document.querySelector(".border-layer");
const paddingLayer = document.querySelector(".padding-layer");

// Initialize values
function initializeSliders() {
  // Margin slider
  marginSlider.addEventListener("input", function () {
    const value = this.value + "px";
    marginValue.textContent = value;
    marginLayer.style.padding = value; // Using padding to visualize margin
  });

  // Border slider
  borderSlider.addEventListener("input", function () {
    const value = this.value + "px";
    borderValue.textContent = value;
    borderLayer.style.padding = value; // Using padding to visualize border
    borderLayer.style.borderWidth = value;
  });

  // Padding slider
  paddingSlider.addEventListener("input", function () {
    const value = this.value + "px";
    paddingValue.textContent = value;
    paddingLayer.style.padding = value; // ACTUAL PADDING
  });

  // Width slider
  widthSlider.addEventListener("input", function () {
    const value = this.value + "px";
    widthValue.textContent = value;

    // Update content box width based on current box-sizing mode
    contentBox.style.width = value;

    // Calculate and display total width
    updateTotalWidth();
  });
}

// Function to calculate and display total width
function updateTotalWidth() {
  const contentWidth = parseInt(widthSlider.value);
  const padding = parseInt(paddingSlider.value);
  const border = parseInt(borderSlider.value);

  let totalWidth;

  if (currentMode === "content-box") {
    // content-box: width is just content
    totalWidth = contentWidth + padding * 2 + border * 2;
  } else {
    // border-box: width includes padding and border
    totalWidth = contentWidth;
  }

  // Display somewhere (we'll add this element)
  const totalDisplay = document.getElementById("total-width-display");
  if (totalDisplay) {
    totalDisplay.textContent = `Total width: ${totalWidth}px`;
  }
}
