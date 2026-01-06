// Time unit constants
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// Target New Year date
const targetTime = new Date("January 1, 2027 00:00:00").getTime();

// DOM elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Core logic function
function getRemainingTime(targetTime) {
  const now = new Date().getTime();
  let diff = targetTime - now;

  if (diff < 0) {
    diff = 0;
  }

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  };
}

// Render function
function renderCountdown(time) {
  daysEl.textContent = time.days;
  hoursEl.textContent = time.hours;
  minutesEl.textContent = time.minutes;
  secondsEl.textContent = time.seconds;
}

// Update loop
function updateCountdown() {
  const remainingTime = getRemainingTime(targetTime);
  renderCountdown(remainingTime);

  // Stop interval when countdown ends
  if (
    remainingTime.days === 0 &&
    remainingTime.hours === 0 &&
    remainingTime.minutes === 0 &&
    remainingTime.seconds === 0
  ) {
    clearInterval(timer);
  }
}

// Initial render
updateCountdown();

// Start interval
const timer = setInterval(updateCountdown, 1000);
