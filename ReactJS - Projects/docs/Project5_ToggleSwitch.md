# Project5 — Toggle Switch

**(ToggleSwitch Project)**
Concise. Simple. Hinglish. Practical.

---

## Step 1 — Problem, concept, mental model

### What we are building

Ek switch hoga:

- ON
- OFF

Click karo → state change
ON → OFF
OFF → ON

Screen pe clearly dikhe:

```
Status: ON
```

or

```
Status: OFF
```

---

## Real-life analogy

Room ka switch:

Bulb state:

- ON
- OFF

Switch dabao → state flip hoti hai
Bulb react karta hai

Same model:
Switch click → state flip → UI change

---

## Core concept

### Boolean State

Simple meaning:

> State jisme sirf 2 values hoti hain
> `true / false`
> `on / off`
> `yes / no`

Yaha:

```
isOn = true / false
```

---

## Mental model

```
User click
→ boolean state flip
→ UI change
```

Flip logic:

```
true → false
false → true
```

---

## Why this exists

Real apps me:

- Dark mode toggle
- Notification on/off
- Wifi on/off
- Settings toggles
- Privacy controls
- Feature flags
- Mute/unmute
- Enable/disable

Sab boolean state pe chalte hain.

---

## Decision thinking

State design:

```
const [isOn, setIsOn] = useState(false)
```

Why boolean?
Because:

- Binary logic
- Simple
- Predictable
- Clean
- Scalable

---

## Folder structure

```
src/projects/Project5_ToggleSwitch/
├── ToggleSwitch.jsx
├── ToggleSwitch.css
```

---

## Learning goal

Clear hona chahiye:

- Boolean state kya hoti hai
- Toggle logic kaise kaam karta hai
- Flip pattern kya hota hai
- React me binary state handling
- Real apps me toggle ka use

---

## Scope

No animation
No transitions
No icons
No accessibility layer
No persistence

Only:
**Boolean state + toggle**

---

## Interview synthesis questions

1. Boolean state kya hoti hai?
2. Toggle logic kaise kaam karta hai?
3. `true/false` state real apps me kaha use hoti hai?
4. Binary state modeling kya hota hai?
5. Toggle system React me kaise implement hota hai?

---

# Project5 — Toggle Switch

**Step 2 — Implementation (boolean state + toggle logic)**
Concise. Simple. Hinglish.

---

## Files

```
src/projects/Project5_ToggleSwitch/
├── ToggleSwitch.jsx
├── ToggleSwitch.css
```

---

## `ToggleSwitch.jsx`

```jsx
import React, { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  // Boolean state
  const [isOn, setIsOn] = useState(false);

  // Toggle function
  function toggle() {
    setIsOn(!isOn); // flip state
  }

  return (
    <div className="toggle-container">
      <h1>Toggle Switch</h1>

      <button onClick={toggle} className="toggle-btn">
        {isOn ? "ON" : "OFF"}
      </button>

      <div className="toggle-status">Status: {isOn ? "ON" : "OFF"}</div>
    </div>
  );
}

export default ToggleSwitch;
```

---

## Core logic

```js
setIsOn(!isOn);
```

Meaning:

```
true → false
false → true
```

Flip pattern.

---

## `ToggleSwitch.css`

```css
.toggle-container {
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

.toggle-btn {
  padding: 14px 32px;
  font-size: 18px;
  background: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;
}

.toggle-status {
  font-size: 16px;
  background: #1a1a1a;
  padding: 10px 16px;
  border-radius: 6px;
}
```

---

## Flow

```
Click
→ toggle()
→ setIsOn(!isOn)
→ state flip
→ React re-render
→ UI update
```

---

## Dry run

Initial:

```
isOn = false
UI: OFF
```

Click:

```
setIsOn(true)
UI: ON
```

Click again:

```
setIsOn(false)
UI: OFF
```

---

## Core learning

- Boolean state handling
- Toggle pattern
- Binary UI logic
- Conditional rendering
- Flip state model

---

## Common mistakes

- Using numbers instead of boolean
- Multiple states for one toggle
- DOM manipulation
- Complex logic for simple flip

---

## Interview synthesis

1. Toggle logic kaise kaam karta hai?
2. Boolean state real apps me kaha use hoti hai?
3. `!isOn` ka matlab kya hota hai?
4. Binary UI logic kya hota hai?
5. Conditional rendering ka basic pattern kya hai?

---

Project complete.
Concept complete.
Foundation strong.

# Project5 — Toggle Switch

**Complete Dry Run / Walkthrough (Simple Hinglish)**

---

## System view

Sirf 3 cheezein:

1. Button
2. Boolean state (`isOn`)
3. UI text

Rule:
**State sach hai, UI uska reflection hai**

---

## Initial load

Component render hota hai:

```js
const [isOn, setIsOn] = useState(false);
```

State:

```
isOn = false
```

---

## First render

JSX read hota hai:

```jsx
{
  isOn ? "ON" : "OFF";
}
```

UI:

```
OFF
Status: OFF
```

---

## User click

Button click hota hai:

```js
function toggle() {
  setIsOn(!isOn);
}
```

Current:

```
isOn = false
```

Flip:

```
!false = true
```

State update:

```
isOn = true
```

React re-render karta hai component.

---

## Re-render

JSX re-evaluate:

```jsx
{
  isOn ? "ON" : "OFF";
}
```

Now:

```
ON
Status: ON
```

UI update.

---

## Second click

State:

```
isOn = true
```

Flip:

```
!true = false
```

State:

```
isOn = false
```

Re-render.

UI:

```
OFF
Status: OFF
```

---

## Loop model

```
Click
→ toggle()
→ setIsOn(!isOn)
→ state flip
→ React re-render
→ UI update
```

---

## Mental picture

Switch dabao → state palto → screen palto

---

## Truth model

Button kuch nahi badalta
Function kuch nahi badalta
State sab kuch badalta

---

## Debug mindset

Agar toggle kaam nahi kare:

1. `onClick` laga hai ya nahi
2. `setIsOn` call ho raha hai ya nahi
3. JSX me `isOn` use ho raha hai ya nahi
4. Boolean logic sahi hai ya nahi

---

## One-line learning

**React me toggle = boolean state flip**

---

## Core understanding

Binary UI = binary state
Simple logic = scalable system

---

Toggle project ka flow complete.
