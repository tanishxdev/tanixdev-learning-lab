// ============================================
// Topic 8: Callbacks - Blocking Version
// File: app2.js
// ============================================

// Import the built-in 'fs' module
// fs is used to interact with the file system
const fs = require("fs");

/*
  STEP 1: Start a SYNCHRONOUS file read operation

  - fs.readFileSync is BLOCKING
  - JS thread waits here
  - No callback is used
  - Event loop is blocked
*/
try {
  const data = fs.readFileSync("./data/info.txt", "utf8");

  // This line runs ONLY after file is fully read
  console.log("File Content:");
  console.log(data);
} catch (err) {
  // Error handling using try-catch (sync style)
  console.log("Error reading file:", err);
}

/*
  STEP 2: This line runs AFTER file reading finishes

  Why?
  - fs.readFileSync blocks execution
  - JS thread cannot continue until disk I/O completes
*/
console.log("Reading file... completed!");
