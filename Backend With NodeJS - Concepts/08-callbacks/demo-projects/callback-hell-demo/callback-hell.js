// ============================================
// Topic 8: Callback Hell Example
// File: callback-hell.js
// ============================================

const fs = require("fs");

/*
  GOAL:
  Perform multiple async tasks IN SEQUENCE using callbacks

  Steps:
  1. Create a file
  2. Append data
  3. Read file
  4. Rename file

  Each step depends on the previous one
*/

// STEP 1: Create a file
fs.writeFile("./data/task.txt", "Task started", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }

  console.log("File created!");

  // STEP 2: Append data
  fs.appendFile("./data/task.txt", "\nStep 2 completed.", (err) => {
    if (err) {
      console.log("Error appending file:", err);
      return;
    }

    console.log("Data appended!");

    // STEP 3: Read file
    fs.readFile("./data/task.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }

      console.log("File content:");
      console.log(data);

      // STEP 4: Rename file
      fs.rename("./data/task.txt", "./data/final-task.txt", (err) => {
        if (err) {
          console.log("Error renaming file:", err);
          return;
        }

        console.log("File renamed successfully!");
      });
    });
  });
});

/*
  WHY THIS IS CALLED CALLBACK HELL:

  - Deep nesting
  - Hard to read
  - Hard to debug
  - Error handling repeated

  This exact problem is solved later using:
  - Promises
  - Async / Await
*/
