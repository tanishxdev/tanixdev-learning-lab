# Project 8 — Greeting by Time

(tags: **Conditional Rendering**)

This project is **very different** from previous ones:

- No button clicks
- No user input
- UI depends on **environment (time)**

This is your first step into **derived UI logic**.

---

## 1. Problem (What are we building?)

Show a greeting message based on the current time:

- Morning → “Good Morning”
- Afternoon → “Good Afternoon”
- Evening → “Good Evening”
- Night → “Good Night”

Message should change **automatically** based on time logic.

---

## 2. Builder Mental Model (Very Important)

Let’s ask the right questions.

### Do we need state?

❌ No — time is not controlled by user
❌ No — greeting is derived from current time

> If something can be calculated during render, it should NOT be state.

This project teaches:

> **Not everything needs `useState`**

---

## 3. Data Source

```js
const hour = new Date().getHours();
```

This is:

- External data
- Read-only
- Snapshot at render time

---

## 4. Derivation Logic (Core Thinking)

```js
let greeting;

if (hour < 12) greeting = "Good Morning";
else if (hour < 17) greeting = "Good Afternoon";
else if (hour < 21) greeting = "Good Evening";
else greeting = "Good Night";
```

No hooks needed.

---

## 5. File Structure

```
src/projects/Project8_GreetingByTime/
├── GreetingByTime.jsx
├── GreetingByTime.css
```

---

## 6. GreetingByTime.jsx

```jsx
import "./GreetingByTime.css";

function GreetingByTime() {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div className="greeting-container">
      <h2>{greeting}</h2>
      <p>Current Hour: {hour}</p>
    </div>
  );
}

export default GreetingByTime;
```

---

## 7. GreetingByTime.css

```css
.greeting-container {
  padding: 20px;
}
```

---

## 8. Dry Run (React Execution)

### Suppose current time is 10:00 AM

```
hour = 10
10 < 12 → true
greeting = "Good Morning"
```

UI renders:

```
Good Morning
Current Hour: 10
```

---

### Suppose current time is 18:00 (6 PM)

```
hour = 18
18 < 12 → false
18 < 17 → false
18 < 21 → true
greeting = "Good Evening"
```

---

## 9. Key Learning (This Is Big)

### Previous projects

- User action → state → UI

### This project

- Environment → logic → UI

This distinction is **critical** for real apps.

---

## 10. Common Beginner Mistakes

- Using `useState` unnecessarily
- Using `useEffect` for simple logic
- Updating greeting with button clicks
- Thinking everything must be interactive

---

## 11. Interview Questions & Answers

### Q1. Why didn’t you use `useState` here?

**Answer**
Greeting is derived from current time. No user interaction. No need for state.

---

### Q2. Will greeting update automatically when time changes?

**Answer**
No, because component doesn’t re-render automatically with time. That would require `setInterval` and `useEffect`.

---

### Q3. Is this component pure?

**Answer**
Mostly yes. Given the same time, it always renders the same UI.

---

### Q4. When would you introduce state here?

**Answer**
If greeting needs to update live as time changes.

---

## 12. Why This Project Matters

This teaches:

- Derived values
- Conditional rendering
- When **not** to use hooks

Knowing when _not_ to use hooks is senior-level thinking.

---

# Project 8 — Greeting by Time

---

## 1. Project Intent (Why this exists)

This project exists to teach **conditional rendering based on derived data**, not user interaction.

Most beginners think:

> “React = buttons + state”

This project breaks that mindset.

---

## 2. Core Problem Definition

**Input:**

- Current system time

**Output:**

- A greeting message based on time range

**Constraint:**

- No user control
- No manual updates
- UI reflects logic, not actions

---

## 3. Builder Mental Model (Very Important)

Let’s reason before writing code.

### Key questions:

- Does the user change anything? → ❌ No
- Do we need to remember anything? → ❌ No
- Can we compute result during render? → ✅ Yes

Therefore:

> No `useState`
> No `useEffect`

This is **intentional restraint**, not missing knowledge.

---

## 4. Data Source Decision

```js
const hour = new Date().getHours();
```

### Why this?

- System-provided data
- Read-only
- Snapshot at render time

### Why not store in state?

Because:

- State is for **data that changes due to React events**
- Time is external and uncontrolled here

---

## 5. Logic Design (Conditional Mapping)

### Requirement

Map hour ranges → greeting text

### Chosen structure

```js
if / else if / else
```

### Why?

- Clear
- Readable
- Easy to reason in interviews

### Avoided:

- Nested ternaries (hurts readability)
- Switch (less intuitive for ranges)

---

## 6. Rendering Strategy

```jsx
<h2>{greeting}</h2>
```

Key idea:

> JSX should stay **dumb**
> All logic happens **before return**

This keeps UI declarative.

---

## 7. Dry Run (Step-by-step Execution)

### Case 1: 9 AM

```
hour = 9
9 < 12 → true
greeting = "Good Morning"
```

Rendered UI:

```
Good Morning
Current Hour: 9
```

---

### Case 2: 2 PM

```
hour = 14
14 < 12 → false
14 < 17 → true
greeting = "Good Afternoon"
```

---

### Case 3: 8 PM

```
hour = 20
20 < 12 → false
20 < 17 → false
20 < 21 → true
greeting = "Good Evening"
```

---

### Case 4: 11 PM

```
hour = 23
All conditions false
greeting = "Good Night"
```

---

## 8. React Execution Flow

```
Component function runs
→ Reads system time
→ Computes greeting
→ Returns JSX
→ React renders UI
```

Important:

- No re-render unless parent re-renders
- No automatic time updates

---

## 9. Design Decisions Explained

### Decision 1: No `useState`

**Why**

- Greeting is derived data
- No user interaction

---

### Decision 2: No `useEffect`

**Why**

- No side effects
- No subscriptions
- No timers

---

### Decision 3: Derive inside component

**Why**

- Keeps logic close to UI
- Improves readability
- Easy to test mentally

---

### Decision 4: Simple CSS

**Why**

- Focus is logic, not styling

---

## 10. Common Beginner Mistakes (Avoided)

- Using `useState` unnecessarily
- Trying to update greeting with a button
- Using `setInterval` without need
- Overengineering a simple condition

---

## 11. Interview Questions & Answers

### Q1. Why didn’t you use `useState`?

**Answer**
Because greeting can be calculated during render. No need to store derived data.

---

### Q2. Will greeting update automatically as time changes?

**Answer**
No. The component doesn’t re-render automatically. That would require `useEffect` and timers.

---

### Q3. When would you use `useEffect` here?

**Answer**
If greeting needs to update live every minute or hour.

---

### Q4. Is this component pure?

**Answer**
Given the same hour value, it always renders the same output.

---

### Q5. Why not use ternary operators?

**Answer**
Multiple ranges reduce readability. `if-else` is clearer.

---

### Q6. What core React concept does this teach?

**Answer**
Conditional rendering using derived values.

---

### Q7. What real-world apps use this pattern?

**Answer**
Dashboards, time-based banners, greetings, shift-based UI.

---

### Q8. What is the key learning takeaway?

**Answer**
Not everything needs state. Some UI is just logic.

---

## 12. What You’ve Unlocked

After this project, you now understand:

- Derived UI logic
- Conditional rendering
- When NOT to use hooks

This is **senior-level restraint thinking**.

---
