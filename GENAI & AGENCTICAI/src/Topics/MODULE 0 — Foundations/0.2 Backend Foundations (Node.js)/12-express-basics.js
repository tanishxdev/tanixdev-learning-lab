/*
   Topic: Express.js Basics
   Purpose: Build simple API foundation for GenAI systems.
*/

import express from "express";

const app = express();
const PORT = 3001;

// ----------------------------------------------
// 1. Enable JSON parsing
// ----------------------------------------------
app.use(express.json());

// ----------------------------------------------
// 2. Basic GET Route
// ----------------------------------------------
app.get("/", (req, res) => {
  res.json({ message: "GenAI Backend Running" });
});

// ----------------------------------------------
// 3. Echo POST (useful for testing clients)
// ----------------------------------------------
app.post("/echo", (req, res) => {
  res.json({
    received: req.body,
  });
});

// ----------------------------------------------
// 4. Example: AI-like endpoint
// ----------------------------------------------
app.post("/ask", async (req, res) => {
  // 1) Safely read body
  const { prompt } = req.body || {};

  // 2) Validate input
  if (!prompt) {
    return res.status(400).json({
      error:
        'Missing \'prompt\' in request body. Expecting JSON: { "prompt": "your question" }',
    });
  }
   // 3) Fake AI response (later we plug Gemini here)
  // In real project: call Gemini here
  const mockResponse = `You asked: ${prompt}`;

  res.json({
    answer: mockResponse,
  });
});
// ----------------------------------------------
// ✔ How to Test Properly (Repeat check)
// ----------------------------------------------
// Use POST with JSON body.
// URL: http://localhost:3001/ask
// Body:
// {
//   "prompt": "Hello AI"
// }

// ----------------------------------------------
// Start server
// ----------------------------------------------
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
