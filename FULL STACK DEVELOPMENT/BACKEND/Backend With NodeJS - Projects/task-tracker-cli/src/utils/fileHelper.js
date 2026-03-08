const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../storage/tasks.json");

function readTasksFromFile() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const tasks = JSON.parse(data);
    return tasks;
  } catch (error) {
    console.log("Error reading tasks file:", error);
    return [];
  }
}

function writeTasksToFile(tasks) {
  try {
    const data = JSON.stringify(tasks, null, 2); // Pretty print with 2 spaces
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log("Error writing tasks file:", error);
  }
}

module.exports = {
  readTasksFromFile,
  writeTasksToFile,
};
