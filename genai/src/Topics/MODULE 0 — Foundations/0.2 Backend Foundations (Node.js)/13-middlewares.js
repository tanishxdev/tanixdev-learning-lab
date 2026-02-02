/*
   Topic: Middlewares in Express
   Purpose: Build structured, safe, production-ready GenAI backend.
*/

import express from "express";

const app = express();
app.use(express.json());

// ----------------------------------------------
// 1. Logging middleware
// ----------------------------------------------
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

// ----------------------------------------------
// 2. Request validation middleware
// ----------------------------------------------
function requirePrompt(req, res, next) {
  const { prompt } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: "Missing 'prompt' in request body" });
  }
  next();
}

// ----------------------------------------------
// 3. Example route using middleware
// ----------------------------------------------
app.post("/ask", requirePrompt, (req, res) => {
  const { prompt } = req.body;
  return res.json({
    answer: `Echo from middleware-protected route: ${prompt}`
  });
});

// ----------------------------------------------
// 4. Error-handling middleware (must be last)
// ----------------------------------------------
function errorHandler(err, req, res, next) {
  console.error("Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
}

app.use(errorHandler);

// ----------------------------------------------
app.listen(3002, () => {
  console.log("Server running on port 3002");
});
