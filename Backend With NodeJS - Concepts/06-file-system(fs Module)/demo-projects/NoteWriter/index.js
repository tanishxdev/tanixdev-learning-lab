// Import core modules
const fs = require("fs");             // For reading/writing files
const path = require("path");         // For path handling
const readline = require("readline"); // For user input

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Define the data folder path (in same directory)
const dataDir = path.join(__dirname, "data");

// Step 2: Ensure the "data" folder exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log("✅ Created 'data' folder successfully.");
}

// Step 3: Ask user for a filename
rl.question("Enter a file name (without extension): ", (fileName) => {
  // Step 4: Ask user for content
  rl.question("Write your note: ", (noteContent) => {

    // Step 5: Build full file path (same directory)
    const filePath = path.join(dataDir, `${fileName}.txt`);

    // Step 6: Write content into the file
    fs.writeFileSync(filePath, noteContent, "utf-8");
    console.log(`\n✅ Note saved successfully to ${filePath}`);

    // Step 7: Read file back and display content
    const savedContent = fs.readFileSync(filePath, "utf-8");
    console.log("\n--- File Content ---");
    console.log(savedContent);
    console.log("--------------------\n");

    // Step 8: Close the input stream
    rl.close();
  });
});
