/*
   Topic: FS Module (Node.js)
   Purpose: Handle file operations used in GenAI pipelines (RAG, tools, logs).
*/

import { promises as fs } from "fs";
import path from "path";

// Helper: resolve from project root
const filePath = path.resolve("data/example.txt");

async function run() {
  // ----------------------------------------------
  // 1. Write file
  // ----------------------------------------------
  await fs.writeFile(filePath, "Hello from FS module");
  console.log("File written.");

  // ----------------------------------------------
  // 2. Read file
  // ----------------------------------------------
  const content = await fs.readFile(filePath, "utf-8");
  console.log("File content:", content);

  // ----------------------------------------------
  // 3. Append file
  // ----------------------------------------------
  await fs.appendFile(filePath, "\nAppended line.");
  console.log("File appended.");

  // ----------------------------------------------
  // 4. Read again
  // ----------------------------------------------
  const newContent = await fs.readFile(filePath, "utf-8");
  console.log("Updated content:\n", newContent);

  // ----------------------------------------------
  // 5. Create folder
  // ----------------------------------------------
  await fs.mkdir("logs", { recursive: true });
  await fs.writeFile("logs/agent.log", "Agent started...");
  console.log("Folder + log created.");

  // ----------------------------------------------
  // 6. List directory
  // ----------------------------------------------
  const files = await fs.readdir("logs");
  console.log("Files inside logs/:", files);
}

run();
