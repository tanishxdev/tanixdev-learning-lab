# Controlled vs Uncontrolled Components (React)

## 1️⃣ First: forget React, think in plain HTML

### Plain HTML form behavior

```html
<input type="text" />
```

- Browser stores the value internally
- JS does **not** know the value unless you ask for it
- Input controls itself

👉 This is **uncontrolled by default**

---

## 2️⃣ Now enter React (mental shift)

React philosophy:

> **UI = function(state)**

So React asks:

- “Who owns the data?”
- “Who decides what appears on screen?”

That’s where **controlled vs uncontrolled** comes from.

---

## 3️⃣ Controlled Component (React is the boss)

### Mental model

> **React state is the single source of truth**

Input:

- does NOT own its value
- just reflects state
- reports changes via `onChange`

### Flow (important)

```
User types
   ↓
onChange fires
   ↓
setState runs
   ↓
React re-renders
   ↓
input value updates from state
```

---

### Controlled example

```jsx
function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name} // value comes from state
      onChange={(e) => setName(e.target.value)} // state updates
    />
  );
}
```

### Key points

- React **controls** the input
- UI always matches state
- Predictable behavior

---

## 4️⃣ Uncontrolled Component (DOM is the boss)

### Mental model

> **Browser owns the input value**

React:

- does NOT track changes
- reads value only when needed

---

### Uncontrolled example

```jsx
function UncontrolledInput() {
  const inputRef = useRef();

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

### Key points

- No state for input
- Value lives in DOM
- React reads value via `ref`

---

## 5️⃣ Side-by-side comparison (important)

| Feature             | Controlled       | Uncontrolled |
| ------------------- | ---------------- | ------------ |
| Who owns value      | React state      | DOM          |
| Uses useState       | Yes              | No           |
| Uses ref            | No               | Yes          |
| Re-render on change | Yes              | No           |
| Validation          | Easy             | Hard         |
| Debugging           | Easy             | Tricky       |
| Recommended         | Yes (most cases) | Rare cases   |

---

## 6️⃣ Why React prefers controlled components

Because React wants:

- predictable UI
- easy validation
- form state access anytime
- sync with other components

Example:

- Disable submit button
- Show live error messages
- Count characters
- Auto-format input

All of these are **impossible or messy** with uncontrolled inputs.

---

## 7️⃣ When SHOULD you use uncontrolled components?

Rare but valid cases:

- File input (`<input type="file" />`)
- Simple one-time form
- Third-party libraries
- Performance-heavy inputs (edge case)

Even then, many teams still use controlled.

---

## 8️⃣ Very common beginner mistakes

❌ Mixing both in one input

```jsx
<input value={name} ref={inputRef} />
```

This breaks React’s mental model.

---

❌ Switching from uncontrolled → controlled

```jsx
<input value={undefined} />
```

React will warn you.

---

## 9️⃣ Interview-ready explanation (clean)

> Controlled components are inputs whose values are managed by React state, while uncontrolled components store their values in the DOM and are accessed using refs. Controlled components provide better control, validation, and predictability, which is why they are preferred in most React applications.

---

## 🔗 Connect to your Form project

Your form is **100% controlled** because:

- Every input has `value`
- Every change updates state
- React owns the entire form data

That’s the **correct professional approach**.

---
