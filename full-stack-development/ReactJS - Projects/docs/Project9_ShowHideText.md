# Project 9 — Show / Hide Content

(tags: **Conditional Rendering**, **Boolean State**)

This project fixes a **very common beginner confusion**:

> “When should I use state vs just logic?”

---

## 1. Problem (What are we building?)

A UI where:

- There is some content (text / section)
- A button toggles:
  - **Show**
  - **Hide**

- UI changes instantly

This is **binary UI control**.

---

## 2. Builder Mental Model (Loud Thinking)

Let’s reason from first principles.

### What changes in UI?

- Content visibility

### How many possible states?

- Only two: visible / hidden

So the correct state type is:

```js
boolean;
```

Mental flow:

```
Button click
→ toggle boolean
→ React re-renders
→ JSX decides whether to show content
```

---

## 3. State Design (Critical)

### Correct state

```js
const [isVisible, setIsVisible] = useState(false);
```

Why boolean?

- Exactly models the real-world condition
- No magic numbers
- No strings like `"show"` / `"hide"`

---

## 4. File Structure

```
src/projects/Project9_ShowHideText/
├── ShowHideText.jsx
├── ShowHideText.css
```

---

## 5. ShowHideText.jsx

```jsx
import { useState } from "react";
import "./ShowHideText.css";

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="toggle-container">
      <h2>Show / Hide Content</h2>

      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && (
        <p className="content">This content is conditionally rendered.</p>
      )}
    </div>
  );
}

export default ShowHideText;
```

---

## 6. ShowHideText.css

```css
.toggle-container {
  padding: 20px;
}

button {
  margin-bottom: 12px;
  padding: 6px 12px;
}

.content {
  background: #f5f5f5;
  padding: 10px;
}
```

---

## 7. Dry Run (Step-by-step)

### Initial Render

```
isVisible = false
Button text → "Show"
Content → not rendered
```

---

### User clicks button

```
toggleVisibility runs
→ setIsVisible(true)
→ re-render
```

UI now:

```
Button text → "Hide"
Content → visible
```

---

### User clicks again

```
setIsVisible(false)
→ re-render
```

Content disappears.

---

## 8. Key Learning (This Project’s Core)

### Previous project (Greeting by Time)

- Conditional rendering without state

### This project

- Conditional rendering **with boolean state**

This teaches:

> Some conditions are **environment-driven**
> Some conditions are **user-controlled**

---

## 9. Design Decisions (Why this way)

### Decision 1: Boolean state

- Clean
- Readable
- Scales well

---

### Decision 2: `&&` rendering

```js
isVisible && <Component />;
```

Why?

- Simple
- Idiomatic React
- Avoids ternary clutter

---

### Decision 3: Button label derived from state

- No duplicate logic
- UI always stays in sync

---

## 10. Common Beginner Mistakes

- Using numbers (`0/1`) instead of boolean
- Using CSS `display: none` instead of conditional render
- Mutating state directly
- Overusing `useEffect`

---

## 11. Interview Questions & Answers

### Q1. Why use boolean state here?

**Answer**
Because visibility has only two valid states.

---

### Q2. Difference between hiding via CSS vs conditional rendering?

**Answer**
CSS hides visually but component still exists. Conditional rendering removes it from the DOM.

---

### Q3. What happens to component state when it’s hidden?

**Answer**
If unmounted, its internal state is destroyed.

---

### Q4. Can this pattern be reused?

**Answer**
Yes. Modals, dropdowns, tooltips, accordions all use this.

---

## 12. Why This Project Matters

This project unlocks:

- Modals
- Accordions
- Dropdowns
- Sidebars
- Feature toggles

It’s a **foundational UI control pattern**.

---

# Project 9 — Show / Hide Content

---

## 1. Dry Run (Exact React Execution)

### Initial Render

```js
isVisible = false;
```

React does:

```
Component function runs
→ useState initializes isVisible = false
→ JSX evaluated
→ button text = "Show"
→ conditional render: false && <p> → nothing rendered
```

UI:

- Button: **Show**
- Content: ❌ not in DOM

---

### User clicks button (first time)

Event:

```js
onClick → toggleVisibility
```

Execution:

```
setIsVisible(!false)
→ setIsVisible(true)
→ React schedules re-render
```

Re-render:

```
Component runs again
isVisible = true
button text = "Hide"
true && <p> → content rendered
```

UI:

- Button: **Hide**
- Content: ✅ visible

---

### User clicks button again

```
setIsVisible(false)
→ re-render
```

UI:

- Button: **Show**
- Content: ❌ removed from DOM

---

### Key Observation

- Component function re-runs every time
- DOM nodes are created and destroyed
- No CSS hiding involved

---

## 2. Explanation (Concept-Level)

### What problem is this solving?

> Controlling UI visibility based on user intent.

This is a **binary decision**:

- Show
- Hide

Binary problems should use **boolean state**.

---

### Why state is required here

- Visibility is controlled by **user interaction**
- React needs to remember user choice
- Local variables reset on render → useless

---

### Why conditional rendering

```js
isVisible && <Content />;
```

Because:

- React decides **whether element exists**
- Cleaner than toggling styles
- Prevents unnecessary DOM nodes

---

## 3. Design Decisions (Why this is correct)

### Decision 1: Boolean state

```js
useState(false);
```

- Models reality accurately
- Readable
- Scalable

---

### Decision 2: Derived button label

```js
{
  isVisible ? "Hide" : "Show";
}
```

- No duplicate state
- UI always in sync

---

### Decision 3: No `useEffect`

- No side effects
- Pure UI control

---

## 4. Common Mistakes This Project Prevents

- Using CSS `display: none`
- Using numbers (`0 / 1`)
- Using strings (`"show" / "hide"`)
- Using multiple states for same concept

---

## 5. Interview Questions & Answers

### Q1. Why use boolean instead of numbers?

**Answer**
Visibility has only two valid states. Boolean expresses intent clearly.

---

### Q2. Difference between conditional rendering and CSS hiding?

**Answer**
Conditional rendering removes the element from the DOM; CSS only hides it visually.

---

### Q3. What happens to child component state when hidden?

**Answer**
If unmounted, the child component’s state is destroyed.

---

### Q4. When would CSS hiding be better?

**Answer**
When you want to preserve layout or keep animations/state intact.

---

### Q5. Is this pattern common in real apps?

**Answer**
Yes. Used in modals, dropdowns, accordions, tooltips, and sidebars.

---

### Q6. Does hiding trigger re-render?

**Answer**
Yes, because state change triggers a re-render.

---

### Q7. Can this cause performance issues?

**Answer**
Only if heavy components are frequently mounted/unmounted.

---

### Q8. What React principle does this demonstrate?

**Answer**
UI is a function of state.

---

## 6. What You’ve Learned (Checkpoint)

After this project, you understand:

- Boolean state modeling
- Conditional rendering
- Mount vs unmount
- User-controlled UI logic

You now have **three conditional patterns** mastered:

1. Derived logic (Greeting by Time)
2. Boolean toggle (Show/Hide)
3. Event-driven updates (Click Tracker)

---
