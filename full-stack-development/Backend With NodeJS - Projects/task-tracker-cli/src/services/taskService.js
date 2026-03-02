import { readTasks, writeTasks } from "../repositories/taskRepository.js";
import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { MAX_TITLE_LENGTH, DEFAULT_STATUS } from "../config/constants.js";

/*
  Generates next unique ID.
  Finds max existing ID and increments.
*/
function generateNextId(tasks) {
  if (tasks.length === 0) return 1;
  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId + 1;
}

/*
  Adds a new task after validation.
*/
export async function addTask(title) {
  if (!title || !title.trim()) {
    throw new ValidationError("Title cannot be empty");
  }

  if (title.length > MAX_TITLE_LENGTH) {
    throw new ValidationError("Title exceeds maximum length");
  }

  const tasks = await readTasks();

  const newTask = {
    id: generateNextId(tasks),
    title: title.trim(),
    status: DEFAULT_STATUS,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  await writeTasks(tasks);

  return newTask;
}

/*
  Returns all tasks.
*/
export async function listTasks() {
  return await readTasks();
}

/*
  Updates title of existing task.
*/
export async function updateTask(id, newTitle) {
  if (!newTitle || !newTitle.trim()) {
    throw new ValidationError("Title cannot be empty");
  }

  const tasks = await readTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  task.title = newTitle.trim();
  task.updatedAt = new Date().toISOString();

  await writeTasks(tasks);

  return task;
}

/*
  Deletes a task by ID.
*/
export async function deleteTask(id) {
  const tasks = await readTasks();
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new NotFoundError("Task not found");
  }

  const deleted = tasks.splice(index, 1);

  await writeTasks(tasks);

  return deleted[0];
}

/*
  Marks task as completed.
*/
export async function markDone(id) {
  const tasks = await readTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  if (task.status === "done") {
    throw new ValidationError("Task already marked as done");
  }

  task.status = "done";
  task.updatedAt = new Date().toISOString();

  await writeTasks(tasks);

  return task;
}
