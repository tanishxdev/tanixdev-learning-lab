// ======================================================
// SWITCH STATEMENT – WHEN & HOW TO USE IT PROPERLY
// ======================================================


// ------------------------------------------------------
// 1. Basic Switch Structure
// ------------------------------------------------------

let role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access Granted");
    break; // IMPORTANT: prevents fall-through

  case "editor":
    console.log("Edit Access Granted");
    break;

  case "viewer":
    console.log("View Only Access");
    break;

  default:
    console.log("No Access");
}

/*
Key Rule:
Never forget 'break' unless you intentionally want fall-through.
*/


// ------------------------------------------------------
// 2. Real-World Example: HTTP Status Handler
// ------------------------------------------------------

function redirectToLogin() {
  console.log("Redirecting to login page...");
}

function handleResponse(status) {
  switch (status) {
    case 200:
      console.log("Success");
      break;

    case 201:
      console.log("Created");
      break;

    case 400:
      console.log("Bad Request");
      break;

    case 401:
      console.log("Unauthorized");
      redirectToLogin();
      break;

    case 404:
      console.log("Not Found");
      break;

    case 500:
    case 502:
    case 503:
      console.log("Server Error");
      break;

    default:
      console.log("Unknown status:", status);
  }
}

// Testing
handleResponse(200);
handleResponse(401);
handleResponse(503);
handleResponse(999);


// ------------------------------------------------------
// 3. Fall-Through Technique (Intentional)
// ------------------------------------------------------

let day = 6; // 0 = Sunday, 6 = Saturday
let type;

switch (day) {
  case 6:   // Saturday
  case 0:   // Sunday
    type = "weekend";
    break;

  case 1:   // Monday
  case 2:
  case 3:
  case 4:
  case 5:
    type = "weekday";
    break;

  default:
    type = "invalid day";
}

console.log("Day Type:", type);

/*
This is INTENTIONAL fall-through:
Multiple cases share same logic block.
*/


// ------------------------------------------------------
// 4. Common Bug Example (Missing break)
// ------------------------------------------------------

let color = "red";

switch (color) {
  case "red":
    console.log("Color is Red");
    // break is missing here

  case "blue":
    console.log("Color is Blue");
    break;

  default:
    console.log("Unknown color");
}

/*
Output:
Color is Red
Color is Blue

Reason:
Execution continues into next case due to missing break.
This is the #1 switch statement bug.
*/


// ------------------------------------------------------
// 5. When to Prefer switch over if-else
// ------------------------------------------------------

let command = "start";

switch (command) {
  case "start":
    console.log("System Starting...");
    break;
  case "stop":
    console.log("System Stopping...");
    break;
  case "pause":
    console.log("System Paused...");
    break;
  default:
    console.log("Invalid Command");
}

/*
Use switch when:
- Comparing ONE variable
- Against MANY fixed values
- Improves readability
*/
/*

Quick Interview Notes:

| Concept        | Key Point                           |
| -------------- | ----------------------------------- |
| break          | Prevents automatic fall-through     |
| default        | Runs if no case matches             |
| Multiple cases | Used to group same logic            |
| Fall-through   | Only use intentionally              |
| Best use       | Many fixed options for one variable |

Interview One-Liner

If asked:
"Why use switch instead of if-else?"

Answer:
Switch is cleaner and more readable when one variable is matched against multiple known values.

 */
// ======================================================
// END OF FILE
// ======================================================
