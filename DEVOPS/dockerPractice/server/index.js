// Simple Express server

const express = require("express");
const cors = require("cors");

const app = express();

// Use CORS middleware
app.use(cors());

// API route
app.get("/", (req, res) => {
  res.send("Hello from Backend");
});

// server listen
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
