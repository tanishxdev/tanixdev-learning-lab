import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create server
const server = http.createServer((req, res) => {
  // Define file path
  const filePath = path.join(__dirname, "message.txt");

  // Read file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
