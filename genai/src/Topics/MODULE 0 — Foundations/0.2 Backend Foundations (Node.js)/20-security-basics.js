/*
   Topic: Security Basics
   Purpose: Add essential security protections for GenAI backend.
*/

import express from "express";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";

const app = express();

// ----------------------------------------------
// Apply security middleware
// ----------------------------------------------
app.use(helmet());
app.use(cors({ origin: "*" }));     // change for production
app.use(xss());
app.disable("x-powered-by");
app.use(express.json());

// ----------------------------------------------
// Example protected route
// ----------------------------------------------
app.post("/ask", (req, res) => {
  const { prompt } = req.body || {};

  if (!prompt) {
    return res.status(400).json({ error: "Prompt required" });
  }

  // Basic prompt injection guard
  if (prompt.toLowerCase().includes("ignore")) {
    return res.status(400).json({ error: "Disallowed term detected" });
  }

  const answer = `AI response: ${prompt}`;
  res.json({ answer });
});

app.listen(3008, () => {
  console.log("Security server running on port 3008");
});
