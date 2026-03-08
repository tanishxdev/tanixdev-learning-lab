# Task Tracker CLI

A simple **command-line task management tool** built with **Node.js**.  
This project allows users to manage tasks directly from the terminal using simple commands.

The system stores tasks in a **JSON file**, making it lightweight and easy to run without requiring a database.

This project demonstrates **clean backend architecture principles** such as layered design (Controller → Service → Repository).

---

# Project Overview

Task Tracker CLI helps users manage their daily tasks quickly from the terminal.

Users can:

- Add tasks
- List tasks
- Update tasks
- Delete tasks
- Mark tasks as completed
- Mark tasks as pending again

All tasks are stored locally in a JSON file.

Example usage:

```bash
node src/index.js add "Buy groceries"
node src/index.js list
node src/index.js done 1
node src/index.js delete 1
```

---

# Features

- Simple command line interface
- Persistent task storage using JSON
- Layered backend architecture
- Clear separation of responsibilities
- Lightweight and dependency-free

---

# Tech Stack

| Component       | Technology        |
| --------------- | ----------------- |
| Runtime         | Node.js           |
| Language        | JavaScript        |
| Storage         | JSON File         |
| File Operations | Node.js fs module |
| CLI Parsing     | process.argv      |

---

# Architecture Overview

The project follows a **layered architecture**, similar to production backend systems.

```
Terminal (User CLI)
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

## Layer Responsibilities

### CLI Entry

Handles command-line arguments and routes commands to controllers.

### Controller Layer

Validates input and interacts with the service layer.

### Service Layer

Contains business logic such as generating IDs and updating task status.

### Repository Layer

Handles data access operations such as reading and writing tasks.

### Storage Layer

Stores tasks inside `tasks.json`.

---

# Project Structure

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

# Installation

## 1 Clone Repository

```bash
git clone https://github.com/your-username/task-tracker-cli.git
```

## 2 Navigate to Project

```bash
cd task-tracker-cli
```

## 3 Install Dependencies

This project does not require external dependencies.

Ensure Node.js is installed:

```bash
node -v
```

---

# Usage

Run commands using Node.js.

```
node src/index.js <command>
```

---

# Available Commands

## Add Task

Adds a new task.

```bash
node src/index.js add "Buy groceries"
```

Example output:

```
Task added: 1
```

---

## List Tasks

Displays all tasks.

```bash
node src/index.js list
```

Example output:

```
1. Buy groceries [todo]
2. Learn Node.js [done]
```

---

## Update Task

Updates task description.

```bash
node src/index.js update 1 "Buy vegetables"
```

---

## Delete Task

Deletes a task.

```bash
node src/index.js delete 1
```

---

## Mark Task as Done

```bash
node src/index.js done 1
```

---

## Mark Task as Todo

```bash
node src/index.js todo 1
```

---

# Task Data Format

Tasks are stored in `tasks.json`.

Example:

```json
[
  {
    "id": 1,
    "description": "Learn backend",
    "status": "todo",
    "createdAt": "2026-03-07T10:00:00Z",
    "updatedAt": "2026-03-07T10:00:00Z"
  }
]
```

---

# Example Workflow

Add tasks:

```bash
node src/index.js add "Learn Node.js"
node src/index.js add "Practice DSA"
```

List tasks:

```bash
node src/index.js list
```

Output:

```
1. Learn Node.js [todo]
2. Practice DSA [todo]
```

Mark a task as done:

```bash
node src/index.js done 1
```

---

# Future Improvements

Possible enhancements:

- Add task priority
- Add due dates
- Implement search functionality
- Convert to REST API
- Add database support
- Add task categories
- Add CLI auto-completion
- Implement logging system
- Add automated tests

---

# Learning Goals

This project demonstrates:

- CLI tool development
- File-based persistence
- Backend layered architecture
- Separation of concerns
- Basic Node.js filesystem operations

---

```

```
