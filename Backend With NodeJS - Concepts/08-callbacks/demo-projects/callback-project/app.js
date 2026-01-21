// ============================================
// Mini Project: Async File Workflow (Callbacks)
// File: app.js
// ============================================

const fs = require("fs");

/*
  GOAL:
  Simulate a backend-style logging workflow
  using ONLY callbacks

  Steps:
  1. Create log file
  2. Append logs
  3. Read logs
  4. Delete log file
*/

// STEP 1: Create log file
fs.writeFile("./logs/app.log", "Server started...\n", (err) => {
  if (err) {
    console.log("Error creating log file:", err);
    return;
  }

  console.log("Log file created.");

  // STEP 2: Append log entry
  fs.appendFile("./logs/app.log", "New request received...\n", (err) => {
    if (err) {
      console.log("Error appending log:", err);
      return;
    }

    console.log("Log updated.");

    // STEP 3: Read log file
    fs.readFile("./logs/app.log", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading log file:", err);
        return;
      }

      console.log("\nLog Content:");
      console.log(data);

      // STEP 4: Delete log file
      fs.unlink("./logs/app.log", (err) => {
        if (err) {
          console.log("Error deleting log file:", err);
          return;
        }

        console.log("Log file deleted successfully.");
      });
    });
  });
});

/*
  BACKEND LEARNING NOTES:

  - Every fs operation is async
  - Each callback depends on previous step
  - This is realistic backend flow
  - But structure does NOT scale

  Next evolution:
  - Convert this to Promises
  - Then async/await
*/
