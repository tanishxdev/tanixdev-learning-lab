# SECTION 12 — Real Project Practice

---

## 52. Todo List (Version 1 — Frontend Only)

---

### 1. Problem (Why are we building this?)

Before jumping into code, understand:

#### Real-world need

You want to build a system where user can:

```id="prob1"
Add task
View task
Delete task
Mark task complete
```

---

#### Without React thinking

- Data scattered
- No structure
- Hard to manage UI updates

---

### Core Problem

```id="prob2"
How to manage dynamic UI with changing data?
```

---

### Solution Idea

Use:

```id="sol1"
React State + Components
```

---

## 2. What We Will Build (V1 Scope)

Only frontend (no backend)

### Features

```id="feat1"
Add Task
Delete Task
Toggle Complete
Display Task List
```

---

### Data Source

```id="data1"
Stored in React state (useState)
```

---

## 3. Mental Model (IMPORTANT)

Think like this:

```id="mental1"
State = Single Source of Truth

UI = Function of State
```

---

### Flow

```id="flow1"
User Action → State Update → UI Re-render
```

---

## 4. Component Design (Very Important)

Break UI into small parts:

```id="comp1"
App
 ├── AddTask
 ├── TaskList
       ├── TaskItem
```

---

### Responsibility

| Component | Work             |
| --------- | ---------------- |
| App       | Manage state     |
| AddTask   | Take input       |
| TaskList  | Loop tasks       |
| TaskItem  | Show single task |

---

## 5. Step-by-Step Implementation

---

### Step 1 — App Component (Main State)

```jsx
// App.jsx

import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  // Global state for tasks
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>

      {/* Add Task Component */}
      <AddTask tasks={tasks} setTasks={setTasks} />

      {/* Task List Component */}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
```

---

### Key Understanding

```id="key1"
App = central controller
```

---

### Step 2 — Add Task Component

```jsx
// components/AddTask.jsx

import { useState } from "react";

function AddTask({ tasks, setTasks }) {
  // Local input state
  const [input, setInput] = useState("");

  // Function to add task
  function handleAddTask() {
    // Prevent empty input
    if (!input) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    // Update global state
    setTasks([...tasks, newTask]);

    // Clear input
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default AddTask;
```

---

### Key Concepts Used

```id="concept1"
Controlled input
State update
Immutable update (spread)
```

---

### Step 3 — Task List Component

```jsx
// components/TaskList.jsx

import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
```

---

### Key Understanding

```id="key2"
map() → dynamic rendering
key → required for performance
```

---

### Step 4 — Task Item Component

```jsx
// components/TaskItem.jsx

function TaskItem({ task, tasks, setTasks }) {
  // Toggle complete
  function handleToggle() {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, completed: !t.completed };
      }

      return t;
    });

    setTasks(updatedTasks);
  }

  // Delete task
  function handleDelete() {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(filteredTasks);
  }

  return (
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={handleToggle}>Toggle</button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
```

---

## 6. Full Flow (Very Important)

```id="flow2"
User types → input state updates
Click Add → tasks state updates
tasks changes → React re-renders
UI shows new task
```

---

## 7. CRUD Breakdown

| Operation | How                           |
| --------- | ----------------------------- |
| Create    | setTasks([...tasks, newTask]) |
| Read      | tasks.map()                   |
| Update    | map() + modify                |
| Delete    | filter()                      |

---

## 8. Edge Cases

```id="edge1"
Empty input
Duplicate tasks
Large list performance
```

---

## 9. Tradeoffs (Frontend Only)

### Good

```id="good1"
Fast
Simple
No backend needed
```

---

### Bad

```id="bad1"
Data lost on refresh
No persistence
No multi-user support
```

---

## 10. Upgrade Thinking (Important)

### Problem in V1

```id="prob3"
Data disappears on reload
```

---

### Solution in V2

```id="sol2"
Backend + Database
```

---

## 11. Mental Model (Final)

```id="mental2"
State drives UI

Components break UI into parts

User action → state change → UI update
```

---

## 12. Mini Extensions (Try Yourself)

```id="extra1"
Add edit feature
Add task priority
Add localStorage persistence
```

---

## 13. Synthesis Questions

1. Why App holds state?
2. Why we use map() for rendering?
3. Why keys are important?
4. Why we use spread operator?
5. Difference between map() and filter() here?

---

## Most Important Line

```id="gold1"
React UI is always a reflection of state
```

---

# SECTION 12 — Real Project Practice

---

## 52. Todo List (Version 2 — Frontend + Backend)

---

### 1. Problem (Why V2?)

In Version 1:

```id="v1prob"
Data stored in React state only
→ Page refresh = data lost
```

---

### Real-world requirement

```id="realreq"
Data should persist
Multiple users should use app
Data should be stored centrally
```

---

### Core Problem

```id="prob1"
How to store and retrieve data permanently?
```

---

### Solution

```id="sol1"
Backend + Database + API
```

---

## 2. Mental Model (VERY IMPORTANT)

Now system becomes:

```id="arch1"
Frontend (React)
      ↓ API Call
Backend (Node/Express)
      ↓
Database (MongoDB)
```

---

### Flow

```id="flow1"
User Action
   ↓
Frontend sends request
   ↓
Backend processes
   ↓
Database stores/fetches data
   ↓
Response comes back
   ↓
UI updates
```

---

## 3. Folder Understanding (Your Structure)

You already have:

```id="folder1"
client → React frontend
server → Node backend
```

---

### Important Backend Folders

```id="backend"
controllers → logic
models → database schema
routes → API endpoints
middleware → auth logic
database → DB connection
```

---

## 4. Backend Setup (Step-by-Step)

---

### Step 1 — Basic Server

```js id="server1"
// server/index.js

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

---

### Step 2 — MongoDB Connection

```js id="db1"
// server/database/index.js

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/todo-app")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
```

---

## 5. Model (Database Structure)

---

```js id="model1"
// server/models/task.js

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", taskSchema);
```

---

## 6. Controller (Logic Layer)

---

```js id="controller1"
// server/controllers/task-controller.js

const Task = require("../models/task");

// CREATE task
exports.createTask = async (req, res) => {
  const { text } = req.body;

  const task = new Task({
    text,
    completed: false,
  });

  await task.save();

  res.json(task);
};

// GET all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
};

// DELETE task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: "Deleted" });
};

// UPDATE task
exports.toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.completed = !task.completed;

  await task.save();

  res.json(task);
};
```

---

## 7. Routes (API Endpoints)

---

```js id="routes1"
// server/routes/task-routes.js

const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  deleteTask,
  toggleTask,
} = require("../controllers/task-controller");

// CRUD routes
router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", toggleTask);

module.exports = router;
```

---

### Connect Routes

```js id="routes2"
// server/index.js

const taskRoutes = require("./routes/task-routes");

app.use("/api", taskRoutes);
```

---

## 8. Frontend Integration

---

### Step 1 — API Service

```js id="api1"
// client/src/services/index.js

const BASE_URL = "http://localhost:5000/api";

// GET tasks
export async function fetchTasks() {
  const res = await fetch(`${BASE_URL}/tasks`);
  return res.json();
}

// CREATE
export async function createTask(text) {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return res.json();
}

// DELETE
export async function deleteTask(id) {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
}

// UPDATE
export async function toggleTask(id) {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
  });

  return res.json();
}
```

---

## 9. Update Frontend Logic

---

### Fetch tasks from backend

```jsx id="fe1"
// App.jsx

import { useEffect, useState } from "react";
import { fetchTasks } from "./services";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from backend
  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTasks();
      setTasks(data);
    }

    loadTasks();
  }, []);

  return <div>{/* UI */}</div>;
}
```

---

### Add Task

```jsx id="fe2"
import { createTask } from "./services";

async function handleAdd(text) {
  const newTask = await createTask(text);

  setTasks((prev) => [...prev, newTask]);
}
```

---

### Delete Task

```jsx id="fe3"
import { deleteTask } from "./services";

async function handleDelete(id) {
  await deleteTask(id);

  setTasks((prev) => prev.filter((t) => t._id !== id));
}
```

---

### Toggle Task

```jsx id="fe4"
import { toggleTask } from "./services";

async function handleToggle(id) {
  const updated = await toggleTask(id);

  setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
}
```

---

## 10. Key Differences (V1 vs V2)

| Feature      | V1          | V2      |
| ------------ | ----------- | ------- |
| Data storage | React state | MongoDB |
| Persistence  | ❌          | ✅      |
| API          | ❌          | ✅      |
| Multi-user   | ❌          | ✅      |

---

## 11. Important Concepts Learned

```id="concepts"
REST API
CRUD operations
Frontend-backend communication
Async data fetching
State synchronization
```

---

## 12. Common Problems

---

### Problem 1 — CORS Error

Fix:

```id="cors"
app.use(cors());
```

---

### Problem 2 — Data not updating

Reason:

```id="bug1"
State not updated after API call
```

---

### Problem 3 — Async issues

```id="bug2"
Forgot await
```

---

## 13. Mental Model (Final)

```id="mental"
Frontend = UI

Backend = Logic

Database = Storage

API = Bridge
```

---

## 14. Synthesis Questions

1. Why we need backend in V2?
2. What is API?
3. Difference between PUT and POST?
4. Why use useEffect for fetching?
5. What happens if backend is down?

---

## Most Important Line

```id="gold"
Frontend does not store real data — backend does
```

---

# SECTION 12 — Real Project Practice

---

## 52. Todo List (Version 3 — Full System Understanding)

---

### 1. Problem (Why V3?)

In Version 2:

```id="v2prob"
We built frontend + backend
But still unclear:
How exactly do they communicate?
What happens internally?
How authentication works?
```

---

### Core Problem

```id="coreprob"
How does a full frontend-backend system actually work end-to-end?
```

---

### Goal of V3

```id="goal"
Understand complete system flow deeply
Frontend ↔ Backend ↔ Database
Auth (JWT)
Request lifecycle
```

---

## 2. Big Picture (System Architecture)

```id="arch"
Browser (React UI)
        ↓
HTTP Request (API)
        ↓
Node/Express Server
        ↓
Controller Logic
        ↓
Database (MongoDB)
        ↓
Response
        ↓
UI Update
```

---

### Mental Model

```id="mental1"
Frontend = asks questions

Backend = answers questions

Database = stores truth
```

---

## 3. Full Request Lifecycle (Step-by-Step)

Let’s trace **Add Task**

---

### Step 1 — User Action

```id="step1"
User clicks "Add Task"
```

---

### Step 2 — Frontend Function

```jsx id="fe1"
async function handleAdd(text) {
  const newTask = await createTask(text);

  setTasks((prev) => [...prev, newTask]);
}
```

---

### Step 3 — API Call

```js id="api1"
fetch("http://localhost:5000/api/tasks", {
  method: "POST",
  body: JSON.stringify({ text }),
});
```

---

### Step 4 — Backend Route

```js id="route1"
POST / api / tasks;
```

---

### Step 5 — Controller

```js id="controller1"
exports.createTask = async (req, res) => {
  const { text } = req.body;

  const task = new Task({
    text,
    completed: false,
  });

  await task.save();

  res.json(task);
};
```

---

### Step 6 — Database

```id="db1"
MongoDB stores task
```

---

### Step 7 — Response

```json id="res1"
{
  "_id": "123",
  "text": "Learn React",
  "completed": false
}
```

---

### Step 8 — Frontend Update

```id="fe2"
State updated → UI re-renders
```

---

## 4. Same Flow for All CRUD

---

### Create

```id="crud1"
POST → create task
```

---

### Read

```id="crud2"
GET → fetch tasks
```

---

### Update

```id="crud3"
PUT → toggle task
```

---

### Delete

```id="crud4"
DELETE → remove task
```

---

## 5. Deep Understanding — API

### What is API?

```id="api2"
Contract between frontend and backend
```

---

### Example

```id="api3"
Frontend: "Give me tasks"
Backend: "Here are tasks"
```

---

### Important Properties

```id="api4"
URL
Method (GET, POST, PUT, DELETE)
Headers
Body
Response
```

---

## 6. Authentication (JWT Concept)

---

### Problem

```id="authprob"
How backend knows which user is making request?
```

---

### Solution

```id="authsol"
JWT (JSON Web Token)
```

---

### Flow

```id="jwtflow"
User logs in
   ↓
Backend verifies credentials
   ↓
Backend sends TOKEN
   ↓
Frontend stores token
   ↓
Frontend sends token in every request
   ↓
Backend verifies token
```

---

### Example

---

#### Login Controller

```js id="jwt1"
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const user = { id: "123" };

  const token = jwt.sign(user, "SECRET_KEY");

  res.json({ token });
};
```

---

#### Sending Token

```js id="jwt2"
fetch("/api/tasks", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---

#### Middleware (Verification)

```js id="jwt3"
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).send("Unauthorized");

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
}
```

---

## 7. Where Each Thing Lives

---

### Frontend

```id="fe"
UI
State
API calls
```

---

### Backend

```id="be"
Routes
Controllers
Auth logic
```

---

### Database

```id="db"
Stores data permanently
```

---

## 8. Common Real-World Flow

---

### Example: Open App

```id="flow2"
Frontend loads
   ↓
useEffect → fetch tasks
   ↓
Backend returns data
   ↓
UI renders tasks
```

---

### Example: Delete Task

```id="flow3"
Click delete
   ↓
API call
   ↓
Backend deletes from DB
   ↓
Response
   ↓
Frontend updates state
```

---

## 9. Key Problems Developers Face

---

### Problem 1 — State mismatch

```id="bug1"
Backend updated but frontend not updated
```

---

### Problem 2 — API failure

```id="bug2"
Server down → UI breaks
```

---

### Problem 3 — Auth failure

```id="bug3"
Invalid token → request rejected
```

---

## 10. Tradeoffs (System Thinking)

---

### Pros

```id="pro1"
Scalable
Persistent data
Multi-user support
```

---

### Cons

```id="con1"
Complex
Needs API handling
Network latency
```

---

## 11. Final Mental Model (VERY IMPORTANT)

```id="finalmental"
Frontend = UI + interaction

Backend = brain

Database = memory

API = communication bridge
```

---

## 12. Real Industry Thinking

When you build real apps:

```id="industry"
Frontend never directly talks to DB
Everything goes through backend
```

---

## 13. Synthesis Questions

1. What happens after clicking a button?
2. Why frontend should not access DB directly?
3. What is JWT used for?
4. What happens if token is invalid?
5. Why API is needed?

---

## Most Important Line

```id="gold"
Every user action becomes an API request in real-world apps
```
