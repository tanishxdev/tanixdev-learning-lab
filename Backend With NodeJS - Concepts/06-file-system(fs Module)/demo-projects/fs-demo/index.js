// ==================================================
// File System (fs) – All Operations in One File
// Covers:
// 1. Read   (Sync + Async)
// 2. Write  (Sync + Async)
// 3. Append (Sync + Async)
// 4. Delete (Sync + Async)
// ==================================================

const fs = require("fs");
const path = require("path");

// Build absolute paths safely
const inputFile = path.join(__dirname, "input.txt");
const outputFile = path.join(__dirname, "output.txt");
const deleteFile = path.join(__dirname, "temp.txt");

// ==================================================
// 1. READ FILE
// ==================================================

// ---------- Sync Read ----------
try {
  const dataSync = fs.readFileSync(inputFile, "utf-8");
  console.log("SYNC READ:\n", dataSync);
} catch (err) {
  console.error("Sync read error:", err.message);
}

// ---------- Async Read ----------
fs.readFile(inputFile, "utf-8", (err, dataAsync) => {
  if (err) {
    console.error("Async read error:", err.message);
    return;
  }
  console.log("ASYNC READ:\n", dataAsync);
});

// ==================================================
// 2. WRITE FILE
// ==================================================

// ---------- Sync Write ----------
try {
  fs.writeFileSync(outputFile, "Written using writeFileSync");
  console.log("SYNC WRITE: Done");
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
  console.log("SYNC APPEND: Done");
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
// 4. DELETE FILE
// ==================================================

// Create temp file first so delete works
fs.writeFileSync(deleteFile, "Temporary file");

// ---------- Sync Delete ----------
try {
  fs.unlinkSync(deleteFile);
  console.log("SYNC DELETE: Done");
} catch (err) {
  console.error("Sync delete error:", err.message);
}

// ---------- Async Delete ----------
fs.writeFile(deleteFile, "Temporary file again", () => {
  fs.unlink(deleteFile, (err) => {
    if (err) {
      console.error("Async delete error:", err.message);
      return;
    }
    console.log("ASYNC DELETE: Done");
  });
});

// ==================================================
// End of File
// ==================================================
