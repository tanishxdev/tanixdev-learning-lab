/*
Project Hub - Filtering Script
Handles category filtering for the project cards
*/

document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons and project cards
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Add click event to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Show/hide project cards based on filter
      projectCards.forEach((card) => {
        if (filterValue === "all") {
          card.style.display = "block";
        } else if (card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Add hover effect enhancement
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add keyboard navigation for filter buttons
  filterButtons.forEach((button, index) => {
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }

      // Arrow key navigation between filter buttons
      if (e.key === "ArrowRight") {
        const nextIndex = (index + 1) % filterButtons.length;
        filterButtons[nextIndex].focus();
      }

      if (e.key === "ArrowLeft") {
        const prevIndex =
          (index - 1 + filterButtons.length) % filterButtons.length;
        filterButtons[prevIndex].focus();
      }
    });
  });
});
