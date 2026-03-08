/*
=====================================
Scroll Progress Indicator Logic
=====================================

Role of this file:
- Read scroll state from browser
- Calculate scroll percentage
- Update progress bar width
- No styling logic
- No layout logic
- No HTML generation
*/

/*
1. Select progress bar element
This is the bar whose width we will change
*/
const progressBar = document.getElementById("progress-bar");

/*
Safety check:
If element not found, stop execution
Prevents silent bugs
*/
if (!progressBar) {
  throw new Error("Progress bar element not found in DOM");
}

/*
2. Function to calculate and update scroll progress
*/
function updateScrollProgress() {
  /*
  scrollTop:
  How much user has scrolled from top
  */
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  /*
  scrollHeight:
  Total height of the page content
  */
  const scrollHeight = document.documentElement.scrollHeight;

  /*
  clientHeight:
  Visible viewport height
  */
  const clientHeight = document.documentElement.clientHeight;

  /*
  Total scrollable height:
  This is the part user can actually scroll
  */
  const scrollableHeight = scrollHeight - clientHeight;

  /*
  Scroll percentage calculation
  Formula:
  (current scroll / total scrollable height) * 100
  */
  const scrollPercent = (scrollTop / scrollableHeight) * 100;

  /*
  Update UI:
  Progress bar width = scroll percentage
  */
  progressBar.style.width = scrollPercent + "%";
}

/*
3. Attach scroll event listener to window
Browser triggers this automatically when user scrolls
*/
window.addEventListener("scroll", updateScrollProgress);

/*
4. Initial call
Ensures correct state if page loads not at top
*/
updateScrollProgress();
