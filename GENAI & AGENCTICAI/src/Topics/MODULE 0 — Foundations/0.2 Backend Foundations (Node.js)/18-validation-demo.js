import express from "express";
import { z } from "zod";
import { validate } from "./middleware/validate.js";

const app = express();
app.use(express.json());

// 1) Define schema
const AskSchema = z.object({
  prompt: z.string().min(1, "Prompt cannot be empty")
});

// 2) Protect route with validation
app.post("/ask", validate(AskSchema), (req, res) => {
  const { prompt } = req.validated;

  const answer = `AI response to: ${prompt}`;

  res.json({ answer });
});

app.listen(3006, () => {
  console.log("Validation server running on 3006");
});
