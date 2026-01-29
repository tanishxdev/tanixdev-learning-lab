# Project3 — Live Text Mirror

**(TextMirror Project)**
Simple, clear, short, and practical. No over-explaining. No exaggeration. Hinglish + easy language.

---

## Step 1 — Problem, concept, and mental model

### What we are building

Ek input box hoga.
User jo type karega → wahi text live screen pe show hoga.

Input → Screen
Real-time mirror.

---

## Real-life analogy

Jaise mirror me jo face move karta hai, same move reflect hota hai.
Face = user input
Mirror = UI text

User kuch likhe → turant screen pe dikhe.

---

## Core concept

### Controlled Component

Simple meaning:

> Input ka data React ke state me store hota hai
> UI state se control hoti hai

Flow:

```
Input → State → UI
```

---

## Why this exists

Real apps me:

- Search bars
- Forms
- Chat inputs
- Login forms
- OTP fields
- Comment boxes
- Live preview editors
- Markdown preview
- Google search box

Sab same concept use karte hain:
**Input controlled by state**

---

## Decision thinking

DOM se value lene ka old way:

```js
document.getElementById("input").value;
```

React way:

```
State is source of truth
```

Decision:

> Input ka control React state ke paas rahega, DOM ke paas nahi

---

## Folder structure

```
src/projects/Project3_TextMirror/
├── TextMirror.jsx
├── TextMirror.css
```

---

## Learning goal

Is project se ye clear hona chahiye:

- Input ka data state me kaise jata hai
- UI state se kaise bind hoti hai
- Controlled input ka matlab kya hota hai
- Real-time rendering kaise hota hai
- React form handling ka base model

---

## Scope (simple rakhenge)

No validation
No limit
No API
No storage
No formatting
No debounce

Only:
**Input → State → UI**

---

## Interview synthesis questions

1. Controlled component kya hota hai?
2. React me input ko state se kyu control karte hain?
3. Input ka data kaha store hota hai?
4. DOM input vs React input me difference kya hai?
5. Real-time UI update kaise hota hai?

---

Ye sirf **foundation step** hai.
No code yet.
No wiring yet.
No CSS yet.

# Project3 — Live Text Mirror

**Step 2 — Component creation + state + input binding**

Concise. Practical. Direct.

---

## Files

```
src/projects/Project3_TextMirror/
├── TextMirror.jsx
├── TextMirror.css
```

---

## `TextMirror.jsx`

```jsx
import React, { useState } from "react";
import "./TextMirror.css";

function TextMirror() {
  // State to store input text
  const [text, setText] = useState("");

  // Input change handler
  function handleChange(e) {
    setText(e.target.value); // input value → state
  }

  return (
    <div className="mirror-container">
      <h1>Live Text Mirror</h1>

      {/* Input controlled by state */}
      <input
        type="text"
        placeholder="Type something..."
        value={text} // state → input
        onChange={handleChange} // input → state
      />

      {/* Live mirror */}
      <div className="mirror-output">{text}</div>
    </div>
  );
}

export default TextMirror;
```

---

## Flow (simple mental model)

```
User types
→ onChange fires
→ handleChange()
→ setText(value)
→ state updates
→ React re-render
→ UI updates
```

---

## Why `value={text}` is important

Without it:

- Input becomes uncontrolled
- React loses control
- State + UI mismatch possible

With it:

- State is boss
- UI follows state
- Predictable system

---

## `TextMirror.css`

```css
.mirror-container {
  min-height: 100vh;
  background: #0f0f0f;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-family: system-ui, sans-serif;
}

.mirror-container input {
  padding: 12px 16px;
  width: 280px;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #fff;
  border-radius: 6px;
  outline: none;
}

.mirror-output {
  min-height: 40px;
  padding: 12px 16px;
  background: #1a1a1a;
  border-radius: 6px;
  font-size: 16px;
}
```

---

## Dry run

Initial:

```
text = ""
UI shows empty
```

User types: `H`

```
e.target.value = "H"
setText("H")
state = "H"
UI = "H"
```

User types: `Hi`

```
state = "Hi"
UI = "Hi"
```

Mirror effect achieved.

---

## Core learning

- Input is controlled by state
- State is source of truth
- UI reflects state
- Real-time sync
- React form base model

---

## Common bugs

- Forgetting `value={text}`
- Not using `onChange`
- Using DOM methods
- Not binding state
- Using uncontrolled input

---

## Interview synthesis

1. Controlled input kya hota hai?
2. `value` prop ka role kya hai?
3. `onChange` kaise state update karta hai?
4. React forms ka base pattern kya hota hai?
5. State-driven UI ka meaning kya hai?

---

Project complete.
Concept complete.
Foundation strong.

# Project3 — Live Text Mirror

**Complete Dry Run / Walkthrough (Simple Hinglish)**

---

## System view

Sirf 3 cheezein hain:

1. Input box
2. State (`text`)
3. UI mirror box

Rule:
**State sach hai, UI uska reflection hai**

---

## Initial load

### App start hota hai

`TextMirror` component render hota hai.

```js
const [text, setText] = useState("");
```

State create hoti hai:

```
text = ""
```

---

## First render

JSX read hota hai:

```jsx
value={text}
```

Matlab:

```
input value = ""
```

Mirror box:

```jsx
{ text }
```

UI pe:

```
(empty)
```

---

## User types "H"

### Step-by-step flow

User input:

```
"H"
```

Event fire hota hai:

```js
onChange → handleChange(e)
```

Inside function:

```js
e.target.value = "H"
setText("H")
```

State update:

```
text = "H"
```

React re-render karta hai component.

JSX firse evaluate hota hai:

```jsx
value={text} → "H"
{ text } → "H"
```

UI update:

Input box: `H`
Mirror box: `H`

---

## User types "Hi"

Flow repeat:

```
e.target.value = "Hi"
setText("Hi")
state = "Hi"
```

Re-render

UI:

Input: `Hi`
Mirror: `Hi`

---

## Continuous loop model

```
User type
→ onChange
→ handleChange
→ setText(value)
→ state update
→ React re-render
→ UI update
```

---

## Simple mental picture

User bolta hai → React sunta hai → State change hoti hai → UI bolti hai

---

## Truth model

UI kabhi source of truth nahi hoti
State hamesha source of truth hoti hai

---

## Real-life mapping

Same system use hota hai:

* Google search box
* Chat typing preview
* Form fields
* Live preview editors
* OTP inputs
* Email forms
* Comment systems

Sab ka flow same:

```
Input → State → UI
```

---

## Debug mindset

Agar mirror kaam nahi kare:

1. `onChange` laga hai ya nahi
2. `value={text}` diya hai ya nahi
3. `setText` call ho raha hai ya nahi
4. JSX `{text}` use kar raha hai ya nahi

---

## One-line understanding

User input React ko data deta hai → React state change karta hai → UI apne aap update hoti hai

---

## Core learning sentence

**React me input ko control karta hai state, aur state UI ko control karti hai.**

---

Project flow complete.
Concept clear.
Foundation built.
