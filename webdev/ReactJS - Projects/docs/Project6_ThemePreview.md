# Project 6 — Theme Preview Box

---

## 1. Problem (What are we building?)

A small UI where:

- User selects a **theme** (Light / Dark / Blue / etc.)
- A **preview box** immediately changes its appearance
- **No DOM manipulation**
- Everything is controlled by **React state**

This is your **first real “style driven by state” project**.

---

## 2. Builder Mental Model (Loud Thinking)

Let’s think like React, not like CSS/JS hackers.

### What changes in the UI?

- Background color
- Text color
- Border color
- Maybe padding / font

### What causes that change?

- User action (button click / select change)

### What controls it?

- **State**

So mentally:

```
User clicks theme
→ event handler runs
→ setTheme("dark")
→ React re-renders component
→ styles recalculate
→ preview box updates
```

No DOM queries.
No `document.body.style`.
Only **state → render**.

---

## 3. State Design (Most Important Part)

### Question: What should be state?

Option A (bad):

```js
(bgColor, textColor, borderColor);
```

Option B (good):

```js
theme;
```

Why?

- Colors are **derived from theme**
- Derived values should NOT be separate state

So we choose:

```js
const [theme, setTheme] = useState("light");
```

---

## 4. Data Model (Theme Config)

Instead of `if/else` everywhere, we create a **theme map**.

Mental model:

> State decides key → key decides styles

```js
const THEMES = {
  light: {
    background: "#ffffff",
    color: "#000000",
    border: "#cccccc",
  },
  dark: {
    background: "#1e1e1e",
    color: "#ffffff",
    border: "#444444",
  },
  blue: {
    background: "#e3f2fd",
    color: "#0d47a1",
    border: "#90caf9",
  },
};
```

This is **React architecture thinking**, not UI hacking.

---

## 5. File Structure (Follow your pattern)

Create:

```
src/projects/Project6_ThemePreview/
├── ThemePreview.jsx
├── ThemePreview.css
```

---

## 6. ThemePreview.jsx (Core Logic)

```jsx
import { useState } from "react";
import "./ThemePreview.css";

const THEMES = {
  light: {
    background: "#ffffff",
    color: "#000000",
    border: "#cccccc",
  },
  dark: {
    background: "#1e1e1e",
    color: "#ffffff",
    border: "#444444",
  },
  blue: {
    background: "#e3f2fd",
    color: "#0d47a1",
    border: "#90caf9",
  },
};

function ThemePreview() {
  const [theme, setTheme] = useState("light");

  const currentTheme = THEMES[theme];

  return (
    <div className="theme-container">
      <h2>Theme Preview Box</h2>

      <div className="controls">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("blue")}>Blue</button>
      </div>

      <div
        className="preview-box"
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.color,
          borderColor: currentTheme.border,
        }}
      >
        This is a preview box
      </div>
    </div>
  );
}

export default ThemePreview;
```

---

## 7. ThemePreview.css (Only Layout)

```css
.theme-container {
  padding: 20px;
}

.controls {
  margin-bottom: 16px;
}

.controls button {
  margin-right: 8px;
  padding: 6px 12px;
  cursor: pointer;
}

.preview-box {
  padding: 20px;
  border: 2px solid;
  border-radius: 6px;
}
```

---

## 8. Re-render Explanation (Critical)

- Clicking button calls `setTheme`
- `theme` changes
- Component re-renders
- `currentTheme` recalculates
- Inline styles update
- DOM updates automatically

No manual updates.
No side effects.
Pure React flow.

---

## 9. Common Mistakes (Avoid These)

- Storing colors in multiple `useState`s
- Using `document.body.style`
- Writing `if (theme === "dark")` everywhere
- Forgetting derived state principle

---

## 10. Why This Project Matters

This project teaches:

- **State → Style mapping**
- Clean UI configuration
- Scalable theming (used in real apps)
- Foundation for Context API later

This is the bridge between **toy apps** and **real UI systems**.

---

### Next action for you

1. Create `Project6_ThemePreview`
2. Add it to `projectsList.jsx`
3. Mount it in your hub
4. Run and test theme switching

---

Good. Let’s **close Project 6 properly** the way interviewers and senior devs expect.

Below is **only dry run + design decisions + interview Q&A**.
No new code. No repetition.

---

# Project 6 — Theme Preview Box

---

## 1. Dry Run (Step-by-step, React Mental Execution)

### Initial Render

```js
theme = "light";
currentTheme = THEMES["light"];
```

UI shows:

- White background
- Black text
- Light border

React flow:

```
Component mounts
→ useState initializes theme = "light"
→ JSX renders using currentTheme
```

---

### User clicks **Dark** button

Event:

```js
onClick → setTheme("dark")
```

What React does internally:

```
1. setTheme("dark") is called
2. React schedules a re-render
3. Component function runs again
4. theme = "dark"
5. currentTheme = THEMES["dark"]
6. JSX recalculates styles
7. DOM updates only changed styles
```

UI result:

- Dark background
- White text
- Dark border

Important:

- Component function re-runs
- CSS file does NOT change
- No manual DOM update

---

### User clicks **Blue**

Same flow:

```
setTheme("blue")
→ re-render
→ currentTheme recalculated
→ preview box updates
```

---

### Key Observation (Interview Gold)

- Only **state changed**
- UI is a **pure function of state**
- No side effects involved

---

## 2. Design Decisions (Why you built it this way)

### Decision 1: Single `theme` state

**Why**

- Theme is the real source of truth
- Colors are derived data

**Avoided mistake**

- Multiple states (`bgColor`, `textColor`, etc.)

---

### Decision 2: Theme configuration object

```js
const THEMES = { ... }
```

**Why**

- Scalable
- Easy to add new themes
- Cleaner than `if/else`

**Real-world usage**

- Design systems
- White-label apps
- Feature flags

---

### Decision 3: Inline styles for dynamic values

**Why**

- Styles depend on runtime state
- CSS classes would explode combinatorially

---

### Decision 4: No `useEffect`

**Why**

- No side effects
- UI updates are synchronous with state

---

## 3. Interview Questions & Answers

### Q1. Why did you use only one state variable for theming?

**Answer**
Because theme is the source of truth. Colors are derived from it. Keeping derived values in state causes duplication and bugs.

---

### Q2. What triggers re-render in this component?

**Answer**
Calling `setTheme` triggers React to re-run the component function and update the UI.

---

### Q3. Why not store theme styles in CSS classes?

**Answer**
Because themes are dynamic and driven by state. Inline styles allow direct mapping from state to UI without complex class logic.

---

### Q4. Is `currentTheme` state?

**Answer**
No. It’s derived data computed during render. Storing it in state would be redundant.

---

### Q5. Would this scale for large applications?

**Answer**
Yes. The same pattern scales to Context API or Theme Providers for global theming.

---

### Q6. Why didn’t you use `useEffect`?

**Answer**
There are no side effects like API calls or subscriptions. State change alone is enough.

---

### Q7. What happens if you add 10 more themes?

**Answer**
Only the `THEMES` object grows. No logic changes required.

---

### Q8. What is the React principle demonstrated here?

**Answer**
UI = f(state).
The UI is a pure function of state.

---

### Q9. How would you persist the theme across reloads?

**Answer**
By syncing theme state with `localStorage` using `useEffect`.

---

### Q10. What beginner mistake does this project fix?

**Answer**
Direct DOM manipulation and thinking of CSS as separate from state.

---

## 4. What You’ve Learned (Checkpoint)

After this project, you now understand:

- State-driven styling
- Derived state
- Clean UI configuration
- Re-render mental model
