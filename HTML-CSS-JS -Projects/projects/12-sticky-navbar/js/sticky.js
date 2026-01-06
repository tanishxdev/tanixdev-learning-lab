/*
=====================================
Sticky Navbar Logic
=====================================

Responsibilities:
- Detect scroll
- Decide sticky state
- Toggle CSS class
- Prevent layout jump
*/

// Select navbar element
const navbar = document.getElementById("navbar");

// Safety check
if (!navbar) {
  throw new Error("Navbar element not found");
}

// Scroll threshold (px)
const STICKY_OFFSET = 100;

// Read navbar height ONCE
const navbarHeight = navbar.offsetHeight;

// Track current sticky state
let isSticky = false;

/*
Listen to scroll event
*/
window.addEventListener("scroll", () => {
  // Current vertical scroll position
  const scrollPosition = window.scrollY;

  /*
  If user scrolls beyond threshold
  */
  if (scrollPosition > STICKY_OFFSET) {
    // Apply sticky only once
    if (!isSticky) {
      isSticky = true;

      // Add sticky class
      navbar.classList.add("sticky");

      // Prevent content jump
      document.body.style.paddingTop = `${navbarHeight}px`;
    }
  } else {
    // Remove sticky when scrolling back up
    if (isSticky) {
      isSticky = false;

      navbar.classList.remove("sticky");

      // Remove reserved space
      document.body.style.paddingTop = "0px";
    }
  }
});
