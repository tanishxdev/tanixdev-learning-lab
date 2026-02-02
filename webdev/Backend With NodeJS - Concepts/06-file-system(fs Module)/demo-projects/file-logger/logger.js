const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "log.txt");

function log(message) {
  const timestamp = new Date().toISOString(); // Get the current timestamp
  const logMessage = `${timestamp}: ${message}\n`; // Format the log message

  // Append the log message to the log file
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
}

module.exports = log;
