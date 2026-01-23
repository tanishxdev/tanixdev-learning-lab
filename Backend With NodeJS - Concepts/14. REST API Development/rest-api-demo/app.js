const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

/* =========================
   Middleware
========================= */
app.use(express.json());

/* =========================
   Data File Path
========================= */
const dataPath = path.join(__dirname, "data", "users.json");

/* =========================
   Helper Functions
========================= */

// Read users from file
function readUsers() {
  const data = fs.readFileSync(dataPath, "utf-8"); // file -> string
  return JSON.parse(data); // string -> JS array
}

// Write users to file
function writeUsers(users) {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2)); // save formatted JSON
}

/* =========================
   Routes
========================= */

// GET all users
app.get("/api/users", (req, res) => {
  const users = readUsers(); // load data from file
  res.status(200).json(users); // send to client

  // print
  console.log(users);
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
  const users = readUsers(); // fresh data
  const user = users.find(
    (u) => u.id === parseInt(req.params.id), // id match
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST create user
app.post("/api/users", (req, res) => {
  const users = readUsers(); // load current data

  const newUser = {
    id: Date.now(), // unique id
    ...req.body, // name, email from client
  };

  users.push(newUser); // add in memory
  writeUsers(users); // save in file

  res.status(201).json(newUser);
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
  const users = readUsers();

  const index = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // merge old + new data
  users[index] = { ...users[index], ...req.body };

  writeUsers(users); // persist in file

  res.json({ message: "User updated", user: users[index] });
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const users = readUsers();

  const filteredUsers = users.filter((u) => u.id !== parseInt(req.params.id));

  writeUsers(filteredUsers); // update file

  res.json({ message: "User deleted" });
});

/* =========================
   Start Server
========================= */

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
