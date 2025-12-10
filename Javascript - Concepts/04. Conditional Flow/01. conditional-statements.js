// ======================================================
// CONDITIONAL STATEMENTS - IF / ELSE / ELSE-IF
// ======================================================


// ------------------------------------------------------
// 1. Basic if
// Executes only when condition is true
// ------------------------------------------------------

let score = 92;
let grade;

if (score >= 90) {
  grade = "A+";
}

console.log("Score:", score);
console.log("Grade:", grade);
/*
Output:
Score: 92
Grade: A+
*/


// ------------------------------------------------------
// 2. if - else
// Chooses between two paths
// ------------------------------------------------------

let user = {
  name: "Tanish",
  isAdmin: false
};

function showAdminPanel() {
  console.log("Admin Panel Loaded");
}

function showUserDashboard() {
  console.log("User Dashboard Loaded");
}

if (user.isAdmin) {
  showAdminPanel();
} else {
  showUserDashboard();
}
/*
Output:
User Dashboard Loaded
*/


// ------------------------------------------------------
// 3. else-if ladder (real world usage)
// Multiple conditions checked in order
// ------------------------------------------------------

let temperature = 25;

console.log("\nTemperature:", temperature);

if (temperature < 0) {
  console.log("Freezing!");
} else if (temperature < 10) {
  console.log("Very Cold");
} else if (temperature < 20) {
  console.log("Cool");
} else if (temperature < 30) {
  console.log("Warm");   // This runs
} else {
  console.log("Hot!");
}

/*
Output:
Temperature: 25
Warm
*/


// ------------------------------------------------------
// 4. Optimised version using function
// Cleaner reusable pattern
// ------------------------------------------------------

function checkTemperature(temp) {
  if (temp < 0) return "Freezing!";
  else if (temp < 10) return "Very Cold";
  else if (temp < 20) return "Cool";
  else if (temp < 30) return "Warm";
  else return "Hot!";
}

console.log("\nOptimised Result:", checkTemperature(35));
