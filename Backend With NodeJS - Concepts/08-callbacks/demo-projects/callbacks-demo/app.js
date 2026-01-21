// ============================================
// Topic 8: Callbacks - Demo File + NON Blocking
// File: app.js
// ============================================

// Import the built-in 'fs' module
// fs is used to interact with the file system
const fs = require("fs");

/*
  STEP 1: Start an asynchronous file read operation

  - fs.readFile is NON-BLOCKING
  - Node.js sends this task to the OS
  - Callback function is registered
  - JS thread continues execution
*/
fs.readFile("./data/info.txt", "utf8", (err, data) => {
  /*
    This callback will run LATER
    once the file read operation finishes
  */

  // Always check error first (error-first callback pattern)
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  // If no error, 'data' contains file content
  console.log("File Content:");
  console.log(data);
});

/*
  STEP 2: This line runs immediately

  Why?
  - fs.readFile does NOT block execution
  - This proves async behavior
*/
console.log("Reading file... please wait!");
