// ========================================
// Path Module – Complete & Organized Example
// ========================================

// 1. Import the built-in path module
//    This module helps work with file and folder paths safely
const path = require("path");

// ------------------------------------------------
// 2. Important Node.js global variables
// ------------------------------------------------

// __dirname
// Absolute path of the directory where THIS file exists
// This does NOT depend on where you run `node` from
console.log("__dirname:", __dirname);

// __filename
// Absolute path of THIS file including the file name
console.log("__filename:", __filename);

// ------------------------------------------------
// 3. path.join() – Build paths safely (MOST IMPORTANT)
// ------------------------------------------------

// Joining folder name and file name
// Node will insert the correct OS-specific separator
const filePath = path.join("data", "note.txt");

// Always use path.join instead of string concatenation
console.log("filePath:", filePath);

// Example mental result:
// Windows  -> data\note.txt
// Linux/Mac -> data/note.txt

// ------------------------------------------------
// 4. path.extname() – Get file extension
// ------------------------------------------------

// Extracts the extension from a file name or path
const extension = path.extname("notes.txt");

console.log("extension:", extension); // .txt

// Common backend use-case:
// - validating file types
// - handling uploads

// ------------------------------------------------
// 5. path.dirname() – Get directory path
// ------------------------------------------------

// Returns the directory portion of a path
const directoryName = path.dirname("/data/notes.txt");

console.log("directoryName:", directoryName); // /data

// Used when:
// - separating folder and file
// - navigating paths dynamically

// ------------------------------------------------
// 6. BEST PRACTICE: Absolute path for fs operations
// ------------------------------------------------

// Correct backend-safe pattern
const absoluteFilePath = path.join(__dirname, "data", "note.txt");

console.log("absoluteFilePath:", absoluteFilePath);

// This path:
// - is absolute
// - is OS-independent
// - works regardless of where the command is run
