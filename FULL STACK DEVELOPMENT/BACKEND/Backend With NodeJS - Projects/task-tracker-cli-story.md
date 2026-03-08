# STEP 1 — PROJECT UNDERSTANDING

# 1.1 Understand the Project

## Simple Explanation

A **Task Tracker CLI** is a **command line application** that allows users to manage tasks directly from the terminal.

Users can:

- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as completed
- View all tasks

Example usage in terminal:

```
node task-cli.js add "Buy groceries"
node task-cli.js list
node task-cli.js done 1
node task-cli.js delete 1
```

This tool helps users **track their daily tasks without needing a GUI application**.

---

## What Problem Does This Solve?

Many people need a **simple way to track tasks** quickly.

GUI tools like:

- Notion
- Trello
- Todoist

are **too heavy for quick usage**.

Developers often prefer **terminal tools** because they are:

- Fast
- Scriptable
- Lightweight
- Offline

So a **CLI task tracker** solves the problem of **quick task management from terminal**.

---

## Who Are the Users?

Primary users:

1. Developers using terminal frequently
2. Power users who prefer CLI tools
3. Students managing tasks
4. Anyone wanting a lightweight todo system

---

## Real World Situation

Example scenario:

A developer working on multiple tasks wants to quickly track them:

```
$ task add "Fix login bug"
$ task add "Write API docs"
$ task list
```

Instead of opening a GUI app.

---

# 1.2 Define the Problem Clearly

## Core Problem Statement

Users need a **simple and fast way to track tasks from the command line** without requiring internet or complex software.

---

## Current Pain Points

Existing options have problems:

### Problem 1 — GUI Overhead

Apps like Trello require:

- Browser
- Login
- Internet

Too slow for quick usage.

---

### Problem 2 — Too Complex Tools

Some CLI tools require:

- Database
- Large dependencies

Which is unnecessary for a small tool.

---

### Problem 3 — No Offline Lightweight Tool

A simple **file-based CLI tracker** solves this problem.

---

## What Success Looks Like

A good solution should allow:

```
task add "Learn Node.js"
task add "Practice DSA"
task list
task done 1
task delete 2
```

And the tasks should be **persisted in a file**.

Example storage:

```
tasks.json
```

---

# 1.3 Possible Approaches

There are **multiple ways to build this system**.

---

# Approach 1 — In-Memory Task Storage

Tasks stored inside program memory.

Example:

```
let tasks = []
```

### How it works

Program stores tasks in memory while running.

---

### Advantages

- Very simple
- Fast
- No file operations

---

### Disadvantages

Data disappears after program stops.

Example:

```
node task-cli.js add "Buy milk"
```

After program exits → tasks lost.

---

### When to Use

Only for **temporary demos or testing**.

Not practical.

---

# Approach 2 — File Based Storage (JSON)

Tasks stored in a file:

```
tasks.json
```

Example:

```
[
 { "id":1, "title":"Buy milk", "status":"todo" },
 { "id":2, "title":"Learn Node", "status":"done" }
]
```

CLI reads/writes this file.

---

### Advantages

- Persistent storage
- Very simple
- No database required
- Perfect for CLI tools

---

### Disadvantages

- Not scalable
- Slower than memory
- Concurrent writes may conflict

---

### When to Use

Perfect for:

- CLI tools
- Small utilities
- Local apps

---

# Approach 3 — Database (SQLite / PostgreSQL)

Tasks stored in database.

Example:

```
tasks table
```

---

### Advantages

- Scalable
- Better querying
- Reliable

---

### Disadvantages

- Overkill for this project
- Requires DB setup
- Adds complexity

---

### When to Use

For:

- Web applications
- Multi-user systems

---

# Best Approach for This Project

We choose:

**Approach 2 — File Based JSON Storage**

Because:

1. Simple
2. Persistent
3. Perfect for CLI tools
4. No infrastructure needed

This keeps the project **simple but realistic**.

---

# 1.4 Define the Scope

To avoid over-engineering, we define scope clearly.

---

# What We WILL Build

Core features:

### CLI Commands

```
task add
task list
task update
task delete
task done
```

---

### File Persistence

```
tasks.json
```

---

### Task Structure

Each task:

```
{
 id: number,
 description: string,
 status: "todo" | "done",
 createdAt: timestamp,
 updatedAt: timestamp
}
```

---

### Core Backend Concepts

Even though this is CLI we will still design with good architecture:

- CLI parser
- Controller layer
- Service layer
- Repository layer
- File storage
- Error handling
- Logging

But **without over-engineering**.

---

# What We Will NOT Build (Out of Scope)

We will NOT include:

- GUI
- Database
- User authentication
- Multi-user support
- Web API
- Cloud deployment
- Task priorities
- Task deadlines

Those belong to **later projects** in your roadmap.

---

# Final Project Goal

Build a CLI tool like this:

```
task add "Learn backend architecture"
task add "Build project"

task list

1. Learn backend architecture [todo]
2. Build project [todo]

task done 1

task list

1. Learn backend architecture [done]
2. Build project [todo]
```

---

We now move to **STEP 2 — SYSTEM DESIGN** for the project:

**Project #1 — Task Tracker CLI (File-Based Task Manager)**

We will design the system **before writing any code**, exactly like real backend engineering.

---

# STEP 2 — SYSTEM DESIGN

System design answers one question:

**How will this system work internally?**

Even though this is a CLI project, we will still design it like a **small backend system**.

---

# 2.1 Requirements Gathering

Requirements define **what the system must do**.

They are divided into:

1. Functional Requirements
2. Non-Functional Requirements

---

# Functional Requirements

Functional requirements describe **features of the system**.

The CLI tool must support the following commands.

---

## 1. Add Task

User should be able to add a new task.

Example:

```
task add "Buy groceries"
```

Expected behavior:

- Create a new task
- Assign a unique ID
- Save it in `tasks.json`

Example stored data:

```
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

## 2. List Tasks

User should see all tasks.

Example:

```
task list
```

Output:

```
1. Buy groceries [todo]
2. Learn Node.js [done]
```

---

## 3. Update Task

User should update task description.

Example:

```
task update 1 "Buy vegetables"
```

System behavior:

- Find task with ID
- Update description
- Update timestamp

---

## 4. Delete Task

User can delete task.

Example:

```
task delete 2
```

System behavior:

- Remove task from storage

---

## 5. Mark Task as Done

Example:

```
task done 1
```

System behavior:

```
status → done
```

---

## 6. Mark Task as Todo Again

Example:

```
task todo 1
```

System behavior:

```
status → todo
```

---

# Functional Requirements Summary

The system must support:

| Command | Purpose         |
| ------- | --------------- |
| add     | create task     |
| list    | show tasks      |
| update  | modify task     |
| delete  | remove task     |
| done    | mark complete   |
| todo    | mark incomplete |

---

# Non-Functional Requirements

These describe **how well the system performs**.

---

## 1 Performance

The system should be **fast**.

Expected dataset:

```
10 – 1000 tasks
```

Reading a JSON file is fast enough.

---

## 2 Simplicity

This is a **learning project**, so we prioritize:

- readability
- clear architecture
- maintainability

---

## 3 Reliability

Data should not be lost.

Every change must:

```
read → modify → write
```

to the file.

---

## 4 Maintainability

Code must follow **clear architecture**:

```
CLI
Controller
Service
Repository
File storage
```

So it resembles real backend architecture.

---

# 2.2 High Level Architecture

Even for a CLI tool, we structure it like a backend.

High-level architecture:

```
User (Terminal)
        │
        ▼
 CLI Command Parser
        │
        ▼
   Controller Layer
        │
        ▼
   Service Layer
        │
        ▼
 Repository Layer
        │
        ▼
     File Storage
       tasks.json
```

---

## Responsibilities of Each Component

### 1 CLI Command Parser

Responsible for:

- reading terminal commands
- parsing arguments

Example:

```
task add "Buy milk"
```

Parser extracts:

```
command = add
argument = Buy milk
```

---

### 2 Controller Layer

Controller acts as **entry point of business logic**.

Responsibilities:

- validate inputs
- call service layer
- format output

Example:

```
addTaskController()
```

---

### 3 Service Layer

Service contains **business logic**.

Example logic:

```
generate task ID
create timestamps
change status
```

Services do NOT interact directly with CLI or file.

They talk to repository.

---

### 4 Repository Layer

Repository handles **data storage logic**.

Responsibilities:

```
readTasks()
writeTasks()
findTask()
deleteTask()
```

Repository hides storage details from service.

---

### 5 File Storage

Storage is:

```
tasks.json
```

This file acts like a **small database**.

---

# 2.3 Architecture Diagrams

Understanding architecture visually is important.

---

# System Architecture Diagram

```
+-------------+
|   Terminal  |
|  (User CLI) |
+-------------+
        │
        ▼
+------------------+
| CLI Command Tool |
|   (task.js)      |
+------------------+
        │
        ▼
+------------------+
|   Controllers    |
+------------------+
        │
        ▼
+------------------+
|    Services      |
+------------------+
        │
        ▼
+------------------+
|   Repository     |
+------------------+
        │
        ▼
+------------------+
|   tasks.json     |
|  File Storage    |
+------------------+
```

---

# Request Flow Diagram

Example command:

```
task add "Learn backend"
```

Flow:

```
User Terminal
     │
     ▼
CLI Parser
     │
     ▼
Task Controller
     │
     ▼
Task Service
     │
     ▼
Task Repository
     │
     ▼
tasks.json
```

Then response printed to terminal.

---

# Component Diagram

```
task.js
│
├── commandParser
│
├── controllers
│      └── taskController
│
├── services
│      └── taskService
│
├── repositories
│      └── taskRepository
│
└── storage
       └── tasks.json
```

---

# Database Schema Diagram

Even though this is a file, we still design schema.

```
Task
--------------------------------
id           number
description  string
status       string
createdAt    timestamp
updatedAt    timestamp
```

Example:

```
{
  "id": 1,
  "description": "Learn backend",
  "status": "todo",
  "createdAt": "2026-03-07",
  "updatedAt": "2026-03-07"
}
```

---

# API Flow Diagram (CLI Commands)

```
task add "task"
task list
task update 1 "new"
task delete 1
task done 1
task todo 1
```

Each command maps to controller.

---

# 2.4 Request Lifecycle

Let's follow **one request step by step**.

Example:

```
task add "Learn Node"
```

---

## Step 1 — User Command

Terminal receives command:

```
task add "Learn Node"
```

---

## Step 2 — CLI Parser

CLI parser extracts:

```
command = add
argument = "Learn Node"
```

---

## Step 3 — Controller

Controller validates input:

```
description must exist
```

Then calls service.

---

## Step 4 — Service Layer

Service performs business logic:

```
generate id
create timestamps
create task object
```

Example:

```
{
 id: 3,
 description: "Learn Node",
 status: "todo"
}
```

---

## Step 5 — Repository Layer

Repository:

1. Reads `tasks.json`
2. Adds new task
3. Writes file again

---

## Step 6 — File Storage

tasks.json updated.

---

## Step 7 — Response

CLI prints:

```
Task added successfully.
```

---

# 2.5 Technology Decisions

Now we choose the **technology stack**.

---

# Runtime

Node.js

Why?

- perfect for CLI tools
- fast
- built-in file system support
- JavaScript ecosystem

---

# CLI Framework

Option 1:

```
process.argv
```

Option 2:

```
commander.js
```

For this project we choose:

**process.argv**

Why?

- teaches CLI fundamentals
- avoids unnecessary dependency
- simpler

---

# Storage

```
JSON file
```

Why?

- simple
- human readable
- no database needed

---

# File System

Node.js built-in module:

```
fs
```

Used for:

```
readFile
writeFile
```

---

# Logging

For this simple project:

```
console.log
```

Later projects will use:

```
Winston / Pino
```

---

# Summary of Tech Stack

| Component       | Technology     |
| --------------- | -------------- |
| Runtime         | Node.js        |
| Language        | JavaScript     |
| CLI Parsing     | process.argv   |
| Storage         | JSON File      |
| File Operations | Node fs module |

---

# System Design Completed

We now have:

- Requirements
- Architecture
- Components
- Request lifecycle
- Tech decisions

Exactly how real backend systems start.

---

# Next Step

Next we start **STEP 3 — IMPLEMENTATION**

We will build this system **file by file like a real production backend**:

1. Project setup
2. Folder structure
3. CLI entry file
4. Controller
5. Service
6. Repository
7. File storage

and explain **every line of code**.

If you want, next I will show the **production-grade folder structure first** before writing any code.

We now start **STEP 3 — IMPLEMENTATION** for:

**Project #1 — Task Tracker CLI (File-Based Task Manager)**

Important:
We already finished **design**. Now we implement **file by file**, exactly like a real backend system.

We will **not over-engineer**, but we will still maintain **clean architecture**.

---

# STEP 3 — IMPLEMENTATION

Implementation order:

1. Project Setup
2. Folder Structure
3. Server / CLI Entry
4. Configuration
5. Models
6. Repository Layer
7. Service Layer
8. Controllers
9. CLI Commands
10. Error Handling
11. Logging
12. Validation

---

# 3.1 Project Setup

First create project folder.

```bash
mkdir task-tracker-cli
cd task-tracker-cli
```

Initialize Node project.

```bash
npm init -y
```

This creates:

```text
package.json
```

Example:

```json
{
  "name": "task-tracker-cli",
  "version": "1.0.0",
  "description": "CLI tool for managing tasks",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  }
}
```

Why we do this:

- Defines project metadata
- Manages dependencies
- Allows npm scripts

---

# 3.2 Production-Grade Folder Structure

Even though this is a CLI tool, we still organize code properly.

```
task-tracker-cli
│
├── src
│   │
│   ├── controllers
│   │      taskController.js
│   │
│   ├── services
│   │      taskService.js
│   │
│   ├── repositories
│   │      taskRepository.js
│   │
│   ├── models
│   │      taskModel.js
│   │
│   ├── utils
│   │      fileHelper.js
│   │
│   ├── storage
│   │      tasks.json
│   │
│   └── index.js
│
└── package.json
```

---

# Explanation of Each Folder

### src/index.js

Main CLI entry point.

Responsibilities:

- read terminal command
- call controllers

---

### controllers

Responsible for:

- receiving commands
- validating inputs
- calling services

Example:

```
taskController.js
```

---

### services

Contains **business logic**.

Example:

- generate IDs
- update timestamps
- modify task state

---

### repositories

Responsible for **data access**.

Example:

- read tasks
- write tasks
- update tasks

This layer talks to **file storage**.

---

### models

Defines **data structure of a task**.

Example:

```
Task
```

---

### utils

Contains helper utilities.

Example:

```
file read/write logic
```

---

### storage

Acts as our **database**.

```
tasks.json
```

Example initial file:

```json
[]
```

---

# 3.3 CLI Entry Point

File:

```
src/index.js
```

Purpose:

- entry point of CLI
- parses command line arguments
- routes command to controller

---

## Full Code

```javascript
// src/index.js

/*
This is the entry point of the CLI application.

Responsibilities:
1. Read command line arguments
2. Determine which command the user executed
3. Call the correct controller function
*/

// Import controller functions
const {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markDone,
  markTodo,
} = require("./controllers/taskController");

// process.argv contains command line arguments
// Example:
// node src/index.js add "Buy milk"
//
// process.argv[0] -> node path
// process.argv[1] -> script path
// process.argv[2] -> command
// process.argv[3...] -> arguments

const command = process.argv[2];
const args = process.argv.slice(3);

// CLI command router
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
```

---

# How This File Works

Example command:

```
node src/index.js add "Buy milk"
```

process.argv becomes:

```
[
 'node',
 'src/index.js',
 'add',
 'Buy milk'
]
```

So:

```
command = add
args = ["Buy milk"]
```

Then:

```
addTask(args)
```

is called.

---

# Dry Run

Command:

```
node src/index.js list
```

Execution flow:

```
CLI command
   ↓
index.js
   ↓
switch(command)
   ↓
listTasks()
   ↓
controller layer
```

---

# 3.4 Task Model

File:

```
src/models/taskModel.js
```

Purpose:

Define **structure of task objects**.

---

## Code

```javascript
// src/models/taskModel.js

/*
Task Model

Defines the structure of a task object.
This keeps task creation consistent across the system.
*/

class Task {
  constructor(id, description, status = "todo") {
    this.id = id;

    this.description = description;

    this.status = status;

    // Timestamp when task created
    this.createdAt = new Date().toISOString();

    // Timestamp when last updated
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = Task;
```

---

# Example Task Object

```
{
 id: 1,
 description: "Learn backend",
 status: "todo",
 createdAt: "2026-03-07T10:10:00",
 updatedAt: "2026-03-07T10:10:00"
}
```

---

# Why Use a Model?

Benefits:

1. Consistent structure
2. Cleaner code
3. Easier to maintain
4. Easy to extend later

---

# 3.5 Storage File

Create file:

```
src/storage/tasks.json
```

Initial content:

```json
[]
```

Why:

Acts as our **mini database**.

---

# Implementation Progress

We have implemented:

- Project setup
- Folder structure
- CLI entry point
- Task model
- Storage file

Next we will implement **core backend layers**.

Next files:

1. File Helper (filesystem logic)
2. Repository Layer
3. Service Layer
4. Controller Layer

These layers are where the **real backend architecture appears**.

---

If you want, next I will implement **Repository Layer + File Helper**, which is where the CLI actually starts **reading and writing tasks.json**.

We continue **STEP 3 — IMPLEMENTATION**.

So far we created:

- Project setup
- Folder structure
- CLI entry (`index.js`)
- Task model
- Storage file (`tasks.json`)

Now we implement the **core backend layers**.

Next components:

1. **File Helper (utils)** – handles filesystem operations
2. **Repository Layer** – data access
3. **Service Layer** – business logic
4. **Controller Layer** – CLI handling

These layers replicate **real backend architecture**.

---

# 3.6 File Helper (Filesystem Utility)

File:

```
src/utils/fileHelper.js
```

## Purpose

This file centralizes **file operations**.

Responsibilities:

- Read `tasks.json`
- Write `tasks.json`

Why we isolate this logic:

If tomorrow we replace **file storage with database**, we only change this layer.

---

# Full Code

```javascript
// src/utils/fileHelper.js

/*
This file handles all file system operations.

Why this file exists:
- Keeps file logic separate from business logic
- Makes repository layer cleaner
*/

const fs = require("fs");
const path = require("path");

// Absolute path to tasks.json file
const filePath = path.join(__dirname, "../storage/tasks.json");

/*
Function: readTasksFromFile

Purpose:
Reads tasks from tasks.json

Returns:
Array of tasks
*/
function readTasksFromFile() {
  try {
    // Read file content
    const data = fs.readFileSync(filePath, "utf8");

    // Convert JSON string to JS object
    const tasks = JSON.parse(data);

    return tasks;
  } catch (error) {
    console.error("Error reading tasks file:", error);

    return [];
  }
}

/*
Function: writeTasksToFile

Purpose:
Writes updated tasks back to file

Parameters:
tasks -> array of task objects
*/
function writeTasksToFile(tasks) {
  try {
    // Convert JS object to JSON string
    const data = JSON.stringify(tasks, null, 2);

    // Write file
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.error("Error writing tasks file:", error);
  }
}

module.exports = {
  readTasksFromFile,
  writeTasksToFile,
};
```

---

# Example Flow

When service wants tasks:

```
Service
   ↓
Repository
   ↓
File Helper
   ↓
tasks.json
```

---

# 3.7 Repository Layer

File:

```
src/repositories/taskRepository.js
```

## Purpose

Repository is responsible for **data access operations**.

Responsibilities:

- read tasks
- save tasks
- find task
- update task
- delete task

Repository **does not contain business logic**.

---

# Full Code

```javascript
// src/repositories/taskRepository.js

/*
Repository Layer

Handles data storage operations.

It interacts with:
- fileHelper (filesystem)
*/

const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHelper");

/*
Get all tasks
*/
function getAllTasks() {
  return readTasksFromFile();
}

/*
Save all tasks
*/
function saveTasks(tasks) {
  writeTasksToFile(tasks);
}

/*
Find task by ID
*/
function findTaskById(id) {
  const tasks = readTasksFromFile();

  return tasks.find((task) => task.id === id);
}

/*
Add new task
*/
function addTask(task) {
  const tasks = readTasksFromFile();

  tasks.push(task);

  writeTasksToFile(tasks);
}

/*
Update existing task
*/
function updateTask(updatedTask) {
  const tasks = readTasksFromFile();

  const index = tasks.findIndex((t) => t.id === updatedTask.id);

  if (index !== -1) {
    tasks[index] = updatedTask;

    writeTasksToFile(tasks);
  }
}

/*
Delete task
*/
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
```

---

# Repository Responsibilities Summary

| Function     | Purpose     |
| ------------ | ----------- |
| getAllTasks  | read tasks  |
| saveTasks    | write tasks |
| findTaskById | locate task |
| addTask      | insert task |
| updateTask   | modify task |
| deleteTask   | remove task |

---

# 3.8 Service Layer

File:

```
src/services/taskService.js
```

## Purpose

Service layer contains **business logic**.

Examples:

- generate ID
- change status
- update timestamps

Services talk to **repository**.

---

# Full Code

```javascript
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
```

---

# Service Layer Logic Example

Add Task Flow:

```
Controller
   ↓
Service
   ↓
Generate ID
Create Task
   ↓
Repository
   ↓
File
```

---

# 3.9 Controller Layer

File:

```
src/controllers/taskController.js
```

Controllers connect **CLI commands → service layer**.

---

# Full Code

```javascript
// src/controllers/taskController.js

/*
Controller Layer

Responsible for:
- receiving CLI input
- validating arguments
- calling service functions
*/

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
```

---

# Complete Architecture Now

```
Terminal
   ↓
index.js (CLI parser)
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
File Helper
   ↓
tasks.json
```

---

# Example Full Flow

Command:

```
node src/index.js add "Learn Node"
```

Flow:

```
index.js
   ↓
taskController.addTask()
   ↓
taskService.createTask()
   ↓
taskRepository.addTask()
   ↓
fileHelper.writeTasksToFile()
   ↓
tasks.json updated
```

---

# Implementation Completed

We now finished **STEP 3 — IMPLEMENTATION**.

Next we move to:

# STEP 4 — PROJECT EXPLANATION (INTERVIEW STYLE)

Where I will show:

- How to explain this project in interviews
- Real backend interview questions
- Scaling discussion
- Improvements

This part is **extremely important for interviews**.

Now we move to **STEP 4 — PROJECT EXPLANATION (LIKE AN INTERVIEW)** for:

**Project #1 — Task Tracker CLI (File-Based Task Manager)**

This section is important because in interviews you must explain:

- **why you designed the system this way**
- **how the request flows**
- **trade-offs**
- **how it could scale**

---

# 4.1 Architecture Explanation

## Project Overview

This project is a **command-line task management system** that allows users to manage tasks directly from the terminal.

Users can:

- add tasks
- list tasks
- update tasks
- delete tasks
- mark tasks as done or todo

The system stores data in a **JSON file instead of a database**, making it lightweight and easy to run locally.

---

# Architecture Design

The system follows a **layered architecture** similar to real backend applications.

```
User (Terminal)
        │
        ▼
CLI Entry (index.js)
        │
        ▼
Controller Layer
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
File Storage (tasks.json)
```

Each layer has a **single responsibility**, which makes the system easier to maintain and extend.

---

# Why This Architecture Was Chosen

## Reason 1 — Separation of Concerns

Each layer handles a specific job.

| Layer      | Responsibility         |
| ---------- | ---------------------- |
| CLI        | Read terminal commands |
| Controller | Validate input         |
| Service    | Business logic         |
| Repository | Data access            |
| Storage    | Persist data           |

This separation prevents **tightly coupled code**.

---

## Reason 2 — Real Backend Pattern

Even though this is a CLI project, the structure mirrors a **typical backend architecture** used in production systems.

Example real backend flow:

```
Client
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Our CLI tool simply replaces **client → terminal** and **database → JSON file**.

---

## Reason 3 — Future Scalability

Because logic is separated, we can easily upgrade:

Replace

```
tasks.json
```

with

```
PostgreSQL / MongoDB
```

without changing the service layer.

---

# Constraints Considered

During design we considered:

## Simplicity

This is a **learning project**, so we avoided:

- heavy frameworks
- databases
- complex dependencies

---

## Maintainability

Code must be:

- readable
- modular
- easy to extend

---

## Offline Capability

The system must work **without internet or external services**.

---

# Trade-offs

## Why JSON File Instead of Database

Advantages:

- simple
- no setup
- easy to understand

Disadvantages:

- slower for large datasets
- no concurrency control
- not scalable for multi-user systems

But for a **CLI task tool**, JSON storage is perfectly adequate.

---

# Request Flow Explanation

Example command:

```
node src/index.js add "Learn backend"
```

Flow:

```
Terminal
   │
   ▼
index.js
(parse command)
   │
   ▼
Controller
(validate input)
   │
   ▼
Service
(create task object)
   │
   ▼
Repository
(read tasks.json)
(update list)
(write file)
   │
   ▼
Response printed
```

---

# 4.2 Interview Questions and Answers

Below are common interview questions related to this project.

---

# Question 1

Why did you separate controller, service, and repository layers?

### Answer

Separating these layers improves **modularity and maintainability**.

Controllers handle **input validation and request routing**, services contain **business logic**, and repositories handle **data access**.

This ensures that changes in storage or business rules do not affect other layers.

---

# Question 2

Why did you use a JSON file instead of a database?

### Answer

The system is a **single-user CLI tool**, so a full database would add unnecessary complexity.

A JSON file provides **persistent storage without requiring external infrastructure**, which keeps the tool simple and easy to run.

If the system later required multi-user support, we could replace the storage layer with a database.

---

# Question 3

How does the request flow through the system?

### Answer

When a user enters a CLI command:

1. The **CLI entry file** reads command-line arguments.
2. The **controller** validates the input.
3. The **service layer** performs business logic.
4. The **repository layer** interacts with the storage.
5. The result is returned and printed in the terminal.

This layered approach ensures clean separation of responsibilities.

---

# Question 4

What potential bottlenecks exist in this system?

### Answer

The main bottleneck is **file-based storage**.

Every operation requires:

1. Reading the JSON file
2. Modifying the data
3. Writing it back

If the task list grows very large or multiple processes access the file simultaneously, performance issues may occur.

---

# Question 5

How would you add search functionality?

### Answer

Search could be implemented in the service layer.

Steps:

1. Retrieve all tasks from repository.
2. Filter tasks based on keyword.
3. Return filtered list.

Example logic:

```
tasks.filter(task =>
  task.description.includes(keyword)
)
```

---

# Question 6

How would you ensure task IDs remain unique?

### Answer

Currently the service layer generates IDs based on the last task ID.

```
lastTaskId + 1
```

In a database system, this would typically be handled using **auto-increment primary keys**.

---

# Question 7

How would you test this system?

### Answer

Testing could include:

Unit tests:

- service functions
- repository logic

Integration tests:

- CLI command execution

Mock file operations to isolate business logic during testing.

---

# 4.3 Improvements and Scaling

Even simple systems can evolve.

---

# Improvement 1 — Use a Database

Replace JSON file with:

```
SQLite
PostgreSQL
MongoDB
```

Benefits:

- faster queries
- concurrent access
- better scalability

---

# Improvement 2 — Add Task Metadata

Add fields:

```
priority
dueDate
tags
```

Example:

```
{
 id: 1,
 description: "Learn backend",
 priority: "high",
 dueDate: "2026-03-10"
}
```

---

# Improvement 3 — Add Search and Filters

Commands like:

```
task search backend
task list done
task list todo
```

---

# Improvement 4 — Add Logging System

Instead of:

```
console.log
```

Use:

```
Winston
Pino
```

for structured logging.

---

# Improvement 5 — Convert CLI to REST API

Transform this system into a **web backend**.

Architecture would become:

```
Client (Browser)
       │
       ▼
REST API
       │
       ▼
Service Layer
       │
       ▼
Database
```

---

# Improvement 6 — Add Concurrency Safety

For file-based storage we could add:

- file locking
- atomic writes

to prevent corruption.

---

# Improvement 7 — Add Command Auto-Completion

Add CLI features:

- help command
- command suggestions
- colored output

Libraries:

```
commander
chalk
inquirer
```

---

# Scaling to Millions of Users

If this system became a real service:

### Architecture could evolve into

```
Client Apps
     │
     ▼
API Gateway
     │
     ▼
Task Service
     │
     ▼
Database Cluster
     │
     ▼
Cache (Redis)
```

Additional improvements:

- load balancing
- distributed storage
- caching
- background workers

---

# Step 4 Completed

You can now:

- explain the architecture
- answer interview questions
- discuss scaling and trade-offs

---

Next step is:

# STEP 5 — README

We will create a **professional GitHub README** including:

- project overview
- architecture
- installation
- API/CLI commands
- folder structure
- usage examples.

This will make the project **portfolio-ready**.
