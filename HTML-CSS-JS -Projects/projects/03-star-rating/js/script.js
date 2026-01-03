// test

// Select all stars
const stars = document.querySelectorAll(".star");

// Store selected rating
let currentRating = 0;

// Update stars based on rating value
function updateStars(rating) {
  stars.forEach((star) => {
    const starValue = Number(star.dataset.value);

    if (starValue <= rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

// Add event listeners to each star
stars.forEach((star) => {
  // Hover preview
  star.addEventListener("mouseover", () => {
    updateStars(Number(star.dataset.value));
  });

  // Restore on mouse leave
  star.addEventListener("mouseleave", () => {
    updateStars(currentRating);
  });

  // Save rating on click
  star.addEventListener("click", () => {
    currentRating = Number(star.dataset.value);
    updateStars(currentRating);
  });
});
