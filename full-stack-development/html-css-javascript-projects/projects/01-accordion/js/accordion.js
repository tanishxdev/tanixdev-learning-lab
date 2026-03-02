/*
  accordion.js

  Responsibility:
  - Render accordion UI from data
  - Handle click behavior
  - Control open / close state

  Depends on:
  - accordionData (from data/accordionData.js)
*/

// STEP 1: Get the accordion container from HTML
const accordionContainer = document.getElementById("accordion-container");

// Safety check
if (!accordionContainer) {
  throw new Error("Accordion container not found in HTML");
}

// STEP 2: Function to render accordion items
function renderAccordion(data) {
  /*
    Loop over each item from the data array
  */
  data.forEach((item) => {
    // Create main wrapper for one accordion item
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Create header (clickable)
    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.textContent = item.title;

    // Create content (hidden by CSS)
    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.textContent = item.content;

    /*
      Click logic:
      - Only one item open at a time
      - Clicking open item closes it
    */
    header.addEventListener("click", () => {
      // Check if this item is already active
      const isActive = accordionItem.classList.contains("active");

      // Close all accordion items
      closeAllAccordions();

      // If it was not active, open it
      if (!isActive) {
        accordionItem.classList.add("active");
      }
    });

    // Build structure
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    // Inject into DOM
    accordionContainer.appendChild(accordionItem);
  });
}

// STEP 3: Helper function to close all accordion items
function closeAllAccordions() {
  const allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach((item) => {
    item.classList.remove("active");
  });
}

// STEP 4: Initial render
renderAccordion(accordionData);
