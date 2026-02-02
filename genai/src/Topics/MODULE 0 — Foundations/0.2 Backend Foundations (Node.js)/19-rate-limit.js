/*
   Topic: Rate Limiting
   Purpose: Protect GenAI backend from overload and abuse.
*/

import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());

// ----------------------------------------------
// 1) Global rate limiter
// ----------------------------------------------
const globalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50,             // allow 50 requests/minute
  message: {
    error: "Too many requests. Please slow down."
  }
});

app.use(globalLimiter);

// ----------------------------------------------
// 2) AI route limiter (stricter)
// ----------------------------------------------
const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,            // limit AI requests to 10/min
  message: {
    error: "AI rate limit exceeded."
  }
});

// Example AI route
app.post("/ask", aiLimiter, (req, res) => {
  const { prompt } = req.body || {};

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  const answer = `AI Response: ${prompt}`;
  res.json({ answer });
});

// ----------------------------------------------
app.listen(3007, () => {
  console.log("Rate limiter server running on 3007");
});
