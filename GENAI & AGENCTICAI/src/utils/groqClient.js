// groqClient.js
import Groq from "groq-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ------------------------------
// Resolve project root
// ------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../..", ".env");

// ------------------------------
// Load environment variables
// ------------------------------
dotenv.config({ path: envPath });

// ------------------------------
// Validate required env vars
// ------------------------------
if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY missing in .env");
  console.error("Checked path:", envPath);
  process.exit(1);
}

// ------------------------------
// Create reusable Groq client
// ------------------------------
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default groq;
