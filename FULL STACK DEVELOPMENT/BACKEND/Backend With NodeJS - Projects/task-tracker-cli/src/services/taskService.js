// src/services/taskService.js

/*
Service Layer

Handles business logic of tasks.
*/

const Task = require("../models/taskModel");

const taskRepository = require("../repositories/taskRepository");

/*
Create new task
*/
function createTask(description) {
  const tasks = taskRepository.getAllTasks();

  // Generate next ID
  const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  const newTask = new Task(id, description);

  taskRepository.addTask(newTask);

  return newTask;
}

/*
Get all tasks
*/
function getTasks() {
  return taskRepository.getAllTasks();
}

/*
Update task description
*/
function updateTask(id, description) {
  const task = taskRepository.findTaskById(id);

  if (!task) return null;

  task.description = description;
  task.updatedAt = new Date().toISOString();

  taskRepository.updateTask(task);

  return task;
}

/*
Mark task as done
*/
function markTaskDone(id) {
  const task = taskRepository.findTaskById(id);

  if (!task) return null;

  task.status = "done";
  task.updatedAt = new Date().toISOString();

  taskRepository.updateTask(task);

  return task;
}

/*
Mark task as todo
*/
function markTaskTodo(id) {
  const task = taskRepository.findTaskById(id);

  if (!task) return null;

  task.status = "todo";
  task.updatedAt = new Date().toISOString();

  taskRepository.updateTask(task);

  return task;
}

/*
Delete task
*/
function removeTask(id) {
  taskRepository.deleteTask(id);
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  markTaskDone,
  markTaskTodo,
  removeTask,
};
