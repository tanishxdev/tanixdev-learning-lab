/*
STEP 3: Calendar calculation logic only
(No DOM, no rendering)
*/

// 1. Get today's date object (single source of truth)
const today = new Date();

// 2. Extract current year
const currentYear = today.getFullYear();

// 3. Extract current month (0–11)
const currentMonthIndex = today.getMonth();

// 4. Extract today's date (1–31)
const todayDate = today.getDate();

// 5. Month name mapping
const monthNames = [
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

// 6. Resolve current month name
const currentMonthName = monthNames[currentMonthIndex];

// 7. Total days in current month (leap-year safe)
const totalDaysInMonth = new Date(
  currentYear,
  currentMonthIndex + 1,
  0
).getDate();

// 8. First day index of month (0–6)
const firstDayIndex = new Date(currentYear, currentMonthIndex, 1).getDay();

/*
STEP 4: Calendar grid rendering
(Now we touch the DOM)
*/

// 1. Select DOM elements
const calendarTitle = document.getElementById("calendar-title");
const calendarContainer = document.getElementById("calendar-container");

if (!calendarTitle || !calendarContainer) {
  throw new Error("Calendar DOM elements not found");
}

// 2. Set month + year title
calendarTitle.textContent = `${currentMonthName} ${currentYear}`;

// 3. Weekday labels
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Create weekday header
const weekHeader = document.createElement("div");
weekHeader.classList.add("week-header");

weekDays.forEach((day) => {
  const dayCell = document.createElement("div");
  dayCell.classList.add("week-day");
  dayCell.textContent = day;
  weekHeader.appendChild(dayCell);
});

// Append weekday header
calendarContainer.appendChild(weekHeader);

// 4. Create calendar grid
const calendarGrid = document.createElement("div");
calendarGrid.classList.add("calendar-grid");

// 5. Add empty cells before date 1
for (let i = 0; i < firstDayIndex; i++) {
  const emptyCell = document.createElement("div");
  emptyCell.classList.add("empty-cell");
  calendarGrid.appendChild(emptyCell);
}

// 6. Add date cells (1 → totalDaysInMonth)
for (let day = 1; day <= totalDaysInMonth; day++) {
  const dateCell = document.createElement("div");
  dateCell.classList.add("date-cell");
  dateCell.textContent = day;

  // Determine if this date is today
  const isToday =
    day === todayDate &&
    currentMonthIndex === today.getMonth() &&
    currentYear === today.getFullYear();

  if (isToday) {
    dateCell.classList.add("today");
  }

  // Append ONCE (IMPORTANT)
  calendarGrid.appendChild(dateCell);
}

// 7. Append grid to container
calendarContainer.appendChild(calendarGrid);
