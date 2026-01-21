// =======================================
// Basic HTTP Server using Node.js
// =======================================

// 1. Import the built-in http module
//    This module allows Node.js to create web servers
const http = require("http");

// 2. Create an HTTP server
//    This callback runs EVERY time a client makes a request
const server = http.createServer((req, res) => {
  // 3. Set HTTP response status code and headers
  //    200  -> OK (request successful)
  //    Content-Type tells the browser how to interpret the response
  res.writeHead(200, { "Content-Type": "text/html" });

  // 4. Send the response body and end the response
  //    res.end() MUST be called, otherwise request will hang
  res.end("Hello from Node.js HTTP Server!");
});

// 5. Define the port number
const PORT = 3000;

// 6. Start the server and listen on the given port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 7. Stop the server
// server.close();

// 🧠 Mental Model (Very Important)
/*
Browser
   ↓ HTTP Request
Node HTTP Server
   ↓
createServer callback (req, res)
   ↓
res.writeHead()
res.end()
   ↓
HTTP Response
 */

// I create a basic HTTP server in Node.js using the http module, handle requests via createServer, set headers using writeHead, and send responses using res.end()