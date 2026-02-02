const fs = require("fs");

fs.writeFileSync("demo.txt", "Hello File System");
const data = fs.readFileSync("demo.txt", "utf-8");

console.log("File content:", data);

// What utf-8 does?

// "utf-8" is a string encoding 
// "utf-8" tells Node how to convert raw file bytes into human-readable text.
// Without it, Node gives you raw binary data, not a string.

// What Node does internally?

// Reads raw bytes from disk
// Decodes bytes using UTF-8 rules
// Returns a JavaScript string