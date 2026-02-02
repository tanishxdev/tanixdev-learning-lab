import express from "express";
import { logger } from "../../utils/logger.js";

const app = express();
app.use(express.json());

app.post("/ask", (req, res) => {
  const { prompt } = req.body;

  logger.info("Received prompt", { prompt });

  if (!prompt) {
    logger.warn("Missing prompt in request");
    return res.status(400).json({ error: "Prompt required" });
  }

  const answer = `AI Response to: ${prompt}`;

  logger.info("AI response generated", { answer });

  res.json({ answer });
});

app.listen(3005, () => {
  logger.info("Server started on port 3005");
});
