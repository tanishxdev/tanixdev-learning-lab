const express = require("express");
const app = express();

// Middleware

// Custom middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to next handler
});

// Middleware to parse JSON
app.use(express.json());

// Define a route

// GET
app.get("/", (req, res) => {
  res.send("Hello from ROOT Express.js Server!");
});
app.get("/about", (req, res) => {
  res.send("Hello from ABOUT Express.js Server!");
});
app.get("/contact", (req, res) => {
  res.send("Hello from CONTACT Express.js Server!");
});

// POST
app.post("/api/user", (req, res) => {
  const user = req.body;
  console.log("Received User:", user);
  res.status(201).send({ message: "User created", data: user });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
