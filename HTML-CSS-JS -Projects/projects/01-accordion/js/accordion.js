const accordionContainer = document.getElementById("accordion-container");

if (!accordionContainer) {
  throw new Error("Accordion container not found in HTML");
}

function renderAccordion(data) {
  data.forEach((item) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.textContent = item.title;

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.textContent = item.content;

    header.addEventListener("click", () => {
      const isActive = accordionItem.classList.contains("active");
      closeAllAccordions();

      if (!isActive) {
        accordionItem.classList.add("active");
      }
    });

    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    accordionContainer.appendChild(accordionItem);
  });
}

function closeAllAccordions() {
  const allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach((item) => {
    item.classList.remove("active");
  });
}

renderAccordion(accordionData);
