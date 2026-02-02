// DOM references
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Get next New Year date
const currentYear = new Date().getFullYear();
const newYearDate = new Date(`January 1, ${currentYear + 1} 00:00:00`);

// Update countdown
function updateCountdown() {
  const now = new Date();
  const diff = newYearDate - now;

  // Convert milliseconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Update UI
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
