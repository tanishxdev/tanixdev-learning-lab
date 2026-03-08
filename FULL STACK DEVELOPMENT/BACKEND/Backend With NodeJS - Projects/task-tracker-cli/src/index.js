const {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
  markTodo,
} = require("./controllers/taskController");

const command = process.argv[2];
const args = process.argv.slice(3); // Get arguments after the command, '3' is the index of the first argument after the command

switch (command) {
  case "add":
    addTask(args);
    break;

  case "list":
    listTasks();
    break;

  case "update":
    updateTask(args);
    break;
  case "delete":
    deleteTask(args);
    break;
  case "done":
    markDone(args);
    break;
  case "todo":
    markTodo(args);
    break;
  default:
    console.log("Invalid command.");
    console.log("Available commands:");
    console.log(" add 'task description'");
    console.log(" list");
    console.log(" update <id> 'new description'");
    console.log(" delete <id>");
    console.log(" done <id>");
    console.log(" todo <id>");
}
