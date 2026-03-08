const taskService = require("../services/taskService");

/*
Add task command
*/
function addTask(args) {
  const description = args.join(" ");

  if (!description) {
    console.log("Task description required.");
    return;
  }

  const task = taskService.createTask(description);

  console.log("Task added:", task.id);
}

/*
List tasks
*/
function listTasks() {
  const tasks = taskService.getTasks();

  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }

  tasks.forEach((task) => {
    console.log(`${task.id}. ${task.description} [${task.status}]`);
  });
}

/*
Update task
*/
function updateTask(args) {
  const id = parseInt(args[0]);

  const description = args.slice(1).join(" ");

  const task = taskService.updateTask(id, description);

  if (!task) {
    console.log("Task not found.");
    return;
  }

  console.log("Task updated.");
}

/*
Delete task
*/
function deleteTask(args) {
  const id = parseInt(args[0]);

  taskService.removeTask(id);

  console.log("Task deleted.");
}

/*
Mark done
*/
function markDone(args) {
  const id = parseInt(args[0]);

  const task = taskService.markTaskDone(id);

  if (!task) {
    console.log("Task not found.");
    return;
  }

  console.log("Task marked as done.");
}

/*
Mark todo
*/
function markTodo(args) {
  const id = parseInt(args[0]);

  const task = taskService.markTaskTodo(id);

  if (!task) {
    console.log("Task not found.");
    return;
  }

  console.log("Task marked as todo.");
}

module.exports = {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
  markTodo,
};
