const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHelper");

function getAllTasks() {
  return readTasksFromFile();
}

function saveTasks(tasks) {
  writeTasksToFile(tasks);
}

function findTaskById(id) {
  const tasks = readTasksFromFile();

  return tasks.find((task) => task.id === id);
}

function addTask(task) {
  const tasks = readTasksFromFile();

  tasks.push(task);

  writeTasksToFile(tasks);
}

function updateTask(updatedTask) {
  const tasks = readTasksFromFile();

  const index = tasks.findIndex((t) => t.id === updatedTask.id);

  if (index !== -1) {
    tasks[index] = updatedTask;

    writeTasksToFile(tasks);
  }
}

function deleteTask(id) {
  const tasks = readTasksFromFile();

  const filtered = tasks.filter((task) => task.id !== id);

  writeTasksToFile(filtered);
}

module.exports = {
  getAllTasks,
  saveTasks,
  findTaskById,
  addTask,
  updateTask,
  deleteTask,
};
