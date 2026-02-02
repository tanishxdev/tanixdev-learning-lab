// ===========================
// Example: Basic Express Server
// ===========================

const express = require("express");
const app = express();

// middleware - Middleware har incoming request ko beech me intercept karta hai, usko process/log/modify karta hai, aur phir next() se aage route ko pass karta hai.

// Ye middleware har request ka method + URL log karta hai aur phir request ko next() se next route/middleware ke paas forward karta hai.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Server flow:
// request → middleware → route → response

// | URL        | Terminal       |
// | ---------- | -------------- |
// | `/`        | `GET /`        |
// | `/about`   | `GET /about`   |
// | `/contact` | `GET /contact` |
// | `/random`  | `GET /random`  |

// Middleware to parse JSON
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello from Express.js root!");
});
app.get("/about", (req, res) => {
  res.send("Hello from Express.js about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello from Express.js contact!");
});

app.post("/api/user", (req, res) => {
  const user = req.body;
  console.log("Received User:", user);
  res.status(201).send({ message: "User created", data: user });
});

app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
