// DOM references
const monthYearEl = document.getElementById("monthYear");
const datesEl = document.getElementById("dates");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Current date state
let currentDate = new Date();

// Month names array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Render calendar function
function renderCalendar() {
  // Clear previous dates
  datesEl.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Set month-year text
  monthYearEl.textContent = `${months[month]} ${year}`;

  // First day of current month
  const firstDay = new Date(year, month, 1).getDay();

  // Total days in current month
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("span");
    datesEl.appendChild(emptyCell);
  }

  // Actual date cells
  for (let day = 1; day <= totalDays; day++) {
    const dateCell = document.createElement("span");
    dateCell.textContent = day;

    // Highlight today
    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dateCell.classList.add("today");
    }

    datesEl.appendChild(dateCell);
  }
}

// Button events
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();
