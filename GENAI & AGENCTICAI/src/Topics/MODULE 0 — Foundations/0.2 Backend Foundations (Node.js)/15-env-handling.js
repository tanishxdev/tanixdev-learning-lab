/*
   Topic: ENV Handling (Node.js)
   Purpose: Load and validate environment variables for GenAI apps.
*/

import express from "express";
import { config } from "../../config/index.js";   // auto loads .env + validates

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    port: config.port,
    geminiKeyLoaded: !!config.geminiKey
  });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
