# ⚛️ React Practice Hub

A single, scalable React application for learning React by building many small, real-world mini projects inside one system.

Instead of creating 20 different React apps, this repository contains **one master app (the Hub)** that launches and manages all learning projects like a professional dashboard.

This mirrors how real products, SaaS dashboards, and internal tools are built.

---

## 🚀 What is this?

This repo is a **Learning Operating System for React**.

You get:
- A central dashboard (Project Hub)
- Search + category filtering
- Project cards
- A navigation system
- Mini-apps that plug into the same UI

Every mini-project teaches one React concept (state, lists, forms, logic, etc).

---

## 🧠 Learning Philosophy

This project follows:

> **Learn React the way real products are built — not isolated demos.**

You will learn:
- Component architecture
- State-driven navigation
- UI systems
- Project separation
- Scalable patterns

---

## 🗂 Folder Structure

```
src/
├── core/
│   ├── Layout.jsx         → App frame (dark theme, max-width, padding)
│   ├── ProjectHub.jsx    → Dashboard UI (filters, search, cards)
│   └── projectsList.jsx  → Central project database
│
├── projects/
│   ├── Project1_Counter/
│   │   ├── Counter.jsx
│   │   └── Counter.css
│   ├── Project2_Todo/
│   │   ├── Todo.jsx
│   │   └── Todo.css
│   └── ...
│
├── App.jsx              → Navigation controller
├── Main.jsx             → React entry point
├── index.css            → Tailwind + dark theme
```

---

## 🔄 How the app works

```
Main.jsx → App.jsx → Layout.jsx → ProjectHub.jsx → Mini Projects
```

- `Main.jsx` boots React
- `App.jsx` controls which screen is visible
- `Layout.jsx` gives a consistent dark UI
- `ProjectHub.jsx` builds the dashboard
- Mini-projects run inside this system

Navigation is done using state (`activeProject`), not React Router, so you learn how React really works.

---

## 🧩 How to add a new project (Example: Counter App)

### Step 1 – Create a folder

```
src/projects/Project1_Counter/
├── Counter.jsx
└── Counter.css
```

### Step 2 – Write the component

```jsx
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
```

### Step 3 – Register the project

Open:
```
src/core/projectsList.jsx
```

Add:
```js
{
  id: "counter",
  name: "Counter App",
  tags: ["state", "useState", "basics"],
  description: "Learn how React state updates the UI when values change."
}
```

### Step 4 – Connect it in `App.jsx`

Import it:
```js
import Counter from "./projects/Project1_Counter/Counter";
```

Render it:
```jsx
{activeProject === "counter" && <Counter />}
```

That’s it.
The project will automatically appear in the dashboard with filters, search, and routing.

---

## ⚠️ Breaking Changes Policy

This project is actively evolving.

Some future updates may:
* Change UI structure
* Add new layout systems
* Improve filtering logic
* Add progress tracking

These may introduce **breaking changes**.
When that happens:
* It will be clearly mentioned in commits and README
* Migration notes will be added

---

## 🐞 Known Issues

This project is in active development.

**Recently Verified (2026-01-28):**
* ✅ UI spacing - Tested and working on screens as small as 320px
* ✅ Tailwind v4+ - Fully compatible and building successfully
* ⚠️ Browser compatibility - Verified on Chromium, broader testing ongoing

**Status:** Core functionality and responsive design are working as expected across tested environments.

If you find something broken, note it — it will be addressed.

---

## 🛣 Roadmap

Planned upgrades:
* Difficulty levels (Beginner / Intermediate / Advanced)
* Project progress tracking
* More mini-projects (Forms, Calculator, Quiz, Auth UI, API apps)
* Better animations
* Mobile optimizations

---

## 🧑‍💻 Author

Built for learning real-world React by  
[**tanishxdev**](https://github.com/tanishxdev)

This is not a tutorial repo — it is a **React learning platform**.