import fs from "fs/promises";
import { DATA_FILE_PATH } from "../config/constants";

async function ensureFileExists() {
  try {
    await fs.access(DATA_FILE_PATH);
  } catch (error) {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify([], null, 2));
  }
}

export async function readTasks() {
  await ensureFileExists();

  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const tasks = JSON.parse(data);

    if (!Array.isArray(tasks)) {
      throw new Error("Data file is corrupted. Expected an array of tasks.");
    }

    return tasks;
  } catch (error) {
    throw new Error(`Failed to read tasks: ${error.message}`);
  }
}

export async function writeTasks(tasks) {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(tasks, null, 2));
  } catch {
    throw new Error("Failed to write tasks file");
  }
}
