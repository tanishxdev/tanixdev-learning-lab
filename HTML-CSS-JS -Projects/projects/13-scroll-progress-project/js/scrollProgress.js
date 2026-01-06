/*
This file handles:
- Reading scroll position
- Calculating scroll progress
- Updating the progress bar UI
*/

// 1. Select the progress bar element
const progressBar = document.getElementById("progress-bar");

/*
Safety check
Prevents silent failure if HTML changes
*/
if (!progressBar) {
  throw new Error("Progress bar element not found");
}

// 2. Listen to scroll event on window
window.addEventListener("scroll", updateScrollProgress);

/*
Function:
Calculates scroll progress and updates UI
*/
function updateScrollProgress() {
  // How far user has scrolled from top
  const scrollTop = window.scrollY;

  // Total height of the document
  const documentHeight = document.documentElement.scrollHeight;

  // Height of visible viewport
  const windowHeight = window.innerHeight;

  // Total scrollable height
  const scrollableHeight = documentHeight - windowHeight;

  /*
  Edge case:
  If page is too short to scroll
  */
  if (scrollableHeight <= 0) {
    progressBar.style.width = "100%";
    return;
  }

  // Calculate scroll percentage
  const scrollPercent = (scrollTop / scrollableHeight) * 100;

  // Update progress bar width
  progressBar.style.width = `${scrollPercent}%`;
}
