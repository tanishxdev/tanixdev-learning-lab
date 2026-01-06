/*
This file handles:
- Testimonial rendering
- Slider index logic
- Next / Prev navigation

It depends on:
- testimonialsData (from testimonialsData.js)
*/

// 1. Select required DOM elements
const container = document.getElementById("testimonial-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

/*
Safety checks
Prevents silent failures if HTML changes
*/
if (!container || !nextBtn || !prevBtn) {
  throw new Error("Required DOM elements not found");
}

// 2. State: track which testimonial is active
let currentIndex = 0;

/*
3. Function to render testimonial based on index
This is the ONLY place where DOM is updated
*/
function renderTestimonial(index) {
  // Clear previous content
  container.innerHTML = "";

  // Get current testimonial object
  const testimonial = testimonialsData[index];

  // Create wrapper
  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  // Create name element
  const name = document.createElement("h3");
  name.textContent = testimonial.name;

  // Create role element
  const role = document.createElement("p");
  role.classList.add("role");
  role.textContent = testimonial.role;

  // Create message element
  const message = document.createElement("p");
  message.classList.add("message");
  message.textContent = testimonial.message;

  // Append elements to card
  card.appendChild(name);
  card.appendChild(role);
  card.appendChild(message);

  // Append card to container
  container.appendChild(card);
}

// 4. Handle Next button click
nextBtn.addEventListener("click", () => {
  /*
  Move index forward
  */
  currentIndex++;

  /*
  If index goes beyond last item,
  reset to first item
  */
  if (currentIndex >= testimonialsData.length) {
    currentIndex = 0;
  }

  // Re-render UI
  renderTestimonial(currentIndex);
});

// 5. Handle Prev button click
prevBtn.addEventListener("click", () => {
  /*
  Move index backward
  */
  currentIndex--;

  /*
  If index goes before first item,
  move to last item
  */
  if (currentIndex < 0) {
    currentIndex = testimonialsData.length - 1;
  }

  // Re-render UI
  renderTestimonial(currentIndex);
});

// 6. Initial render on page load
renderTestimonial(currentIndex);
