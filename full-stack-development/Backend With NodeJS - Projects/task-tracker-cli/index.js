#!/usr/bin/env node

import {
  handleAdd,
  handleList,
  handleUpdate,
  handleDelete,
  handleMarkDone,
} from "./src/controllers/taskController.js";

/*
  Extract command and arguments from CLI.
  Example:
  node index.js add "Learn Node"
*/
const [, , command, ...args] = process.argv;

/*
  Routes command to appropriate controller.
*/
async function main() {
  switch (command) {
    case "add":
      await handleAdd(args.join(" "));
      break;

    case "list":
      await handleList();
      break;

    case "update":
      await handleUpdate(args[0], args.slice(1).join(" "));
      break;

    case "delete":
      await handleDelete(args[0]);
      break;

    case "mark-done":
      await handleMarkDone(args[0]);
      break;

    default:
      console.log("Unknown command.");
      console.log("Available commands:");
      console.log('  add "Task Title"');
      console.log("  list");
      console.log('  update <id> "New Title"');
      console.log("  delete <id>");
      console.log("  mark-done <id>");
      process.exit(1);
  }
}

main();
