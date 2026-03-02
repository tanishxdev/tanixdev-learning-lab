import {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
} from "../services/taskService.js";

import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";

/*
  Converts string ID from CLI into valid number.
*/
function parseId(idString) {
  const id = Number(idString);

  if (!id || id < 1 || !Number.isInteger(id)) {
    throw new ValidationError("Invalid task ID");
  }

  return id;
}

/*
  Centralized error handler.
*/
function handleError(error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else if (error instanceof NotFoundError) {
    console.error("Not Found:", error.message);
  } else {
    console.error("Unexpected Error:", error.message);
  }

  process.exit(1);
}

export async function handleAdd(title) {
  try {
    const task = await addTask(title);
    console.log("Task added successfully:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}

export async function handleList() {
  try {
    const tasks = await listTasks();

    if (tasks.length === 0) {
      console.log("No tasks found.");
      return;
    }

    tasks.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - ${task.status}`);
    });
  } catch (error) {
    handleError(error);
  }
}

export async function handleUpdate(idString, newTitle) {
  try {
    const id = parseId(idString);
    const task = await updateTask(id, newTitle);
    console.log("Task updated successfully:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}

export async function handleDelete(idString) {
  try {
    const id = parseId(idString);
    await deleteTask(id);
    console.log("Task deleted successfully.");
  } catch (error) {
    handleError(error);
  }
}

export async function handleMarkDone(idString) {
  try {
    const id = parseId(idString);
    const task = await markDone(id);
    console.log("Task marked as done:");
    console.log(task);
  } catch (error) {
    handleError(error);
  }
}
