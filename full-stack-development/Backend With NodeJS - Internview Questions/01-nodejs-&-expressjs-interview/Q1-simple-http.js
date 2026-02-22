// Import built-in http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // This callback runs for every request
  res.write("Hello from Node.js");
  res.end();
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
