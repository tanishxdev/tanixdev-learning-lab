// STEP 1: Import express package
// require() loads the module from node_modules
// Express exports a function
const express = require("express");

// STEP 2: Call express() to create app instance
// express() returns an application object
// This app is actually a function with extra methods
const app = express();

// STEP 3: Define a route
// app.get() registers a GET route
// First argument: URL path
// Second argument: callback function (handler)
app.get("/", (req, res) => {
  // res.send() sends response to client
  // Automatically sets:
  // - Status Code: 200
  // - Content-Type header
  // - Ends the response
  res.send("Welcome to Express Phase 2");
});

// STEP 4: Start the server
// app.listen() starts HTTP server
// First argument: port number
// Second argument: callback when server starts
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
