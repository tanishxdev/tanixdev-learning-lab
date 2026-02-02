import "./env.js";          // load .env
import { validateEnv } from "./validateEnv.js";

validateEnv();

export const config = {
  port: process.env.PORT,
  geminiKey: process.env.GEMINI_API_KEY,
  logLevel: process.env.LOG_LEVEL || "info"
};
