/*
  testimonials.js

  Responsibility:
  - Control testimonial slider logic
  - Track active testimonial using index
  - Handle Next / Prev navigation

  Depends on:
  - testimonialsData (from data/testimonialsData.js)
*/

// STEP 1: Select DOM elements
const testimonialContainer = document.getElementById("testimonial-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Safety checks
if (!testimonialContainer || !prevBtn || !nextBtn) {
  throw new Error("Required DOM elements not found");
}

// STEP 2: State — track current testimonial index
let currentIndex = 0;

// STEP 3: Function to render testimonial based on index
function renderTestimonial(index) {
  const testimonial = testimonialsData[index];

  /*
    Replace container content completely.
    Only ONE testimonial exists in DOM at a time.
  */
  testimonialContainer.innerHTML = `
    <div class="testimonial">
      <p class="message">"${testimonial.message}"</p>
      <h3 class="name">${testimonial.name}</h3>
      <span class="role">${testimonial.role}</span>
    </div>
  `;
}

// STEP 4: Next button logic
nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex + 1;

  // Circular navigation
  if (currentIndex >= testimonialsData.length) {
    currentIndex = 0;
  }

  renderTestimonial(currentIndex);
});

// STEP 5: Prev button logic
prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex - 1;

  // Circular navigation
  if (currentIndex < 0) {
    currentIndex = testimonialsData.length - 1;
  }

  renderTestimonial(currentIndex);
});

// STEP 6: Initial render
renderTestimonial(currentIndex);
