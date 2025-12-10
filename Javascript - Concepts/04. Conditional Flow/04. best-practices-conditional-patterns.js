// ======================================================
// BEST PRACTICES & PRO PATTERNS
// ======================================================


// ------------------------------------------------------
// WHEN TO USE WHICH PATTERN
// ------------------------------------------------------

/*
Scenario                            Recommended Pattern
--------------------------------------------------------
Simple true / false                Ternary
3–6 fixed values                   if-else or switch
7+ exact string/number values      switch OR Object lookup
Range checks (< > >= <=)           if-else only
Role / permission                  Object + includes()
React conditional rendering        Ternary + && + Early Return
*/



// ------------------------------------------------------
// SIMPLE BOOLEAN - TERNARY
// ------------------------------------------------------

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome Back" : "Please Login";
console.log(message);



// ------------------------------------------------------
// MANY FIXED VALUES - OBJECT LOOKUP (Modern Pattern)
// ------------------------------------------------------

const statusMessages = {
  200: "Success",
  401: "Unauthorized",
  404: "Not Found",
  500: "Server Error"
};

function getStatusMessage(code) {
  return statusMessages[code] || "Unknown Status";
}

console.log(getStatusMessage(200));



// ------------------------------------------------------
// ROLE / PERMISSION CHECK - PRO PATTERN
// ------------------------------------------------------

function hasAccess(userRole) {
  const allowedRoles = ["admin", "manager"];
  return allowedRoles.includes(userRole);
}

console.log("Has Access:", hasAccess("user"));   // false
console.log("Has Access:", hasAccess("admin"));  // true



// ------------------------------------------------------
// REACT PATTERN: CLEAN USER GREETING COMPONENT
// ------------------------------------------------------

function Greeting({ user, time }) {
  // Early return when no user exists
  if (!user) return "<LoginPrompt />";

  const hour = new Date(time).getHours();

  const period =
    hour < 12 ? "morning" :
    hour < 18 ? "afternoon" :
    "evening";

  const prefix = user.isVIP ? "Dear" : "Hello";

  return `${prefix} ${user.name}, good ${period}!`;
}

// Testing
console.log(
  Greeting({
    user: { name: "Tanish", isVIP: true },
    time: Date.now()
  })
);



// ------------------------------------------------------
// ULTIMATE CLEAN PATTERN: EARLY RETURNS
// ------------------------------------------------------

function calculateTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price, 0);
}

function processOrder(order) {

  // Early exit guard clauses
  if (!order) return { error: "No order provided" };
  if (order.status === "cancelled") return { error: "Order Cancelled" };
  if (!order.items || order.items.length === 0) return { error: "Empty Order" };

  // Main logic
  const total = calculateTotal(order);

  return {
    success: true,
    total
  };
}

// Testing order processing
const sampleOrder = {
  status: "active",
  items: [
    { name: "Item A", price: 100 },
    { name: "Item B", price: 200 }
  ]
};

console.log(processOrder(sampleOrder));



// ------------------------------------------------------
// INTERVIEW GOLD RULES
// ------------------------------------------------------

/*
1. Prefer EARLY RETURNS over deeply nested if-else
2. Use Ternary only for simple logic
3. Use Object lookup instead of large switch when scalable
4. Handle failure cases first
5. Keep UI logic declarative
*/


// ======================================================
// END OF FILE
// ======================================================
