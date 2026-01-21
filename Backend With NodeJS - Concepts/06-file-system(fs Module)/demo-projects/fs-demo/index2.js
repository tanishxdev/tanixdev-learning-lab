// ==================================================
// File System (fs) – Auto Create, Operate, Auto Delete
// Covers:
// 1. Create files if not exist
// 2. Read   (Sync + Async)
// 3. Write  (Sync + Async)
// 4. Append (Sync + Async)
// 5. Delete (Sync + Async)
// ==================================================

const fs = require("fs");
const path = require("path");

// --------------------------------------------------
// Build absolute paths safely
// --------------------------------------------------
const inputFile = path.join(__dirname, "input.txt");
const outputFile = path.join(__dirname, "output.txt");
const tempFile = path.join(__dirname, "temp.txt");

// --------------------------------------------------
// Helper: Create file if it does not exist
// --------------------------------------------------
function ensureFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`CREATED: ${path.basename(filePath)}`);
  }
}

// --------------------------------------------------
// 0. ENSURE FILES EXIST
// --------------------------------------------------
ensureFile(inputFile, "Initial input file content");
ensureFile(outputFile, "");
ensureFile(tempFile, "Temporary file");

// ==================================================
// 1. READ FILE
// ==================================================

// ---------- Sync Read ----------
try {
  const dataSync = fs.readFileSync(inputFile, "utf-8");
  console.log("\nSYNC READ:\n", dataSync);
} catch (err) {
  console.error("Sync read error:", err.message);
}

// ---------- Async Read ----------
fs.readFile(inputFile, "utf-8", (err, dataAsync) => {
  if (err) {
    console.error("Async read error:", err.message);
    return;
  }
  console.log("\nASYNC READ:\n", dataAsync);
});

// ==================================================
// 2. WRITE FILE
// ==================================================

// ---------- Sync Write ----------
try {
  fs.writeFileSync(outputFile, "Written using writeFileSync");
  console.log("\nSYNC WRITE: Done");
} catch (err) {
  console.error("Sync write error:", err.message);
}

// ---------- Async Write ----------
fs.writeFile(outputFile, "Written using writeFile (Async)", (err) => {
  if (err) {
    console.error("Async write error:", err.message);
    return;
  }
  console.log("ASYNC WRITE: Done");
});

// ==================================================
// 3. APPEND FILE
// ==================================================

// ---------- Sync Append ----------
try {
  fs.appendFileSync(outputFile, "\nAppended using appendFileSync");
  console.log("\nSYNC APPEND: Done");
} catch (err) {
  console.error("Sync append error:", err.message);
}

// ---------- Async Append ----------
fs.appendFile(outputFile, "\nAppended using appendFile (Async)", (err) => {
  if (err) {
    console.error("Async append error:", err.message);
    return;
  }
  console.log("ASYNC APPEND: Done");
});

// ==================================================
// 4. DELETE FILES
// ==================================================

// ---------- Sync Delete ----------
try {
  fs.unlinkSync(tempFile);
  console.log("\nSYNC DELETE (temp.txt): Done");
} catch (err) {
  console.error("Sync delete error:", err.message);
}

// ---------- Async Delete ----------
fs.unlink(inputFile, (err) => {
  if (err) {
    console.error("Async delete error:", err.message);
    return;
  }
  console.log("ASYNC DELETE (input.txt): Done");

  // Delete output file last
  fs.unlink(outputFile, (err) => {
    if (err) {
      console.error("Async delete error:", err.message);
      return;
    }
    console.log("ASYNC DELETE (output.txt): Done");
    console.log("\nALL FILE OPERATIONS COMPLETED");
  });
});

// ==================================================
// End of File
// ==================================================
