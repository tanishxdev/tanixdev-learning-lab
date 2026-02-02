# SECTION 9 — HTML APIS (BROWSER FEATURES)

---

HTML APIs are **browser-provided features** accessed through JavaScript.
They allow web pages to behave like applications.

---

# PART 1 — DOM API (Document Object Model)

---

HTML is converted into a **DOM Tree**.

Accessing elements:

```javascript
document.getElementById("title")
document.querySelector(".card")
document.querySelectorAll("p")
```

Modifying content:

```javascript
element.textContent = "Updated text"
element.style.color = "red"
```

Adding elements:

```javascript
const div = document.createElement("div")
document.body.appendChild(div)
```

Event listeners:

```javascript
button.addEventListener("click", () => {
    alert("Clicked!")
})
```

DOM API is the foundation for all browser interactions.

---

# PART 2 — GEOLOCATION API

---

Get the user’s location (requires permission).

### Basic usage:

```javascript
navigator.geolocation.getCurrentPosition(success)

function success(position) {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}
```

### Continuous tracking:

```javascript
navigator.geolocation.watchPosition(updateLocation)
```

### Use Cases:

• Delivery apps
• Maps apps
• Weather apps
• Fitness tracking

---

# PART 3 — DRAG & DROP API

---

Allows dragging HTML elements using JavaScript.

### HTML:

```html
<div id="drag" draggable="true">Drag me</div>
<div id="dropzone">Drop here</div>
```

### JS:

```javascript
const drag = document.getElementById("drag")
const dropzone = document.getElementById("dropzone")

drag.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", "drag-element")
})

dropzone.addEventListener("dragover", (e) => e.preventDefault())

dropzone.addEventListener("drop", (e) => {
    e.preventDefault()
    dropzone.appendChild(drag)
})
```

### Use cases:

• File upload UI
• Drag-to-reorder lists
• Kanban boards (Trello style)
• HTML games

---

# PART 4 — WEB STORAGE API

---

Local data storage inside browser → **no database needed**.

### 1. localStorage (persists even after browser close)

```javascript
localStorage.setItem("theme", "dark")
localStorage.getItem("theme")
localStorage.removeItem("theme")
localStorage.clear()
```

### 2. sessionStorage (cleared after tab closes)

```javascript
sessionStorage.setItem("token", "123")
```

### Use cases:

• Authentication tokens
• Dark mode toggle
• Saving form data
• Cart items in e-commerce
• Saving quiz progress

---

# PART 5 — WEB WORKERS

---

Runs JavaScript in **background thread**, prevents UI blocking.

### main.js

```javascript
const worker = new Worker("worker.js")

worker.postMessage(5)

worker.onmessage = function(e) {
    console.log("Result:", e.data)
}
```

### worker.js

```javascript
onmessage = function(e) {
    const num = e.data
    postMessage(num * num)
}
```

Used for:

• Heavy calculations
• Background API polling
• Large JSON parsing
• Image processing

---

# PART 6 — SERVER-SENT EVENTS (SSE)

---

SSE = server → browser **one-way real-time communication**

### HTML:

```html
<div id="messages"></div>
```

### JS:

```javascript
const eventSource = new EventSource("/events")

eventSource.onmessage = function(event) {
    document.getElementById("messages").textContent += event.data + "\n"
}
```

Used for:

• Live sports scores
• Live stock updates
• Logging dashboards
• Notification feeds

---

# PART 7 — HISTORY API (BONUS)

---

Allows changing browser URL without reloading.

```javascript
history.pushState({}, "", "/profile")
```

Used in:

• SPA routing (React Router)
• Custom navigation

---

# PART 8 — CLIPBOARD API (BONUS)

---

Copy text:

```javascript
navigator.clipboard.writeText("Copied text")
```

Paste text:

```javascript
navigator.clipboard.readText().then(text => console.log(text))
```

Used in:

• Copy-to-clipboard buttons
• Editors
• Credential copy boxes

---

# PART 9 — FULL DEMO: Using Multiple APIs Together

---

```html
<button id="copyBtn">Copy Message</button>
<p id="status"></p>

<script>
// Clipboard API
document.getElementById("copyBtn").onclick = () => {
    navigator.clipboard.writeText("Hello World")
    document.getElementById("status").textContent = "Copied!"
}

// Web Storage API
localStorage.setItem("visited", "true")

// DOM API
document.body.style.background = localStorage.getItem("visited") ? "lightyellow" : "white"
</script>
```

---

# PART 10 — INTERVIEW QUESTIONS (APIs)

---

1. What is DOM API?
2. What is the difference between localStorage and sessionStorage?
3. What is the Geolocation API used for?
4. How does Drag & Drop API work?
5. What is a Web Worker and why is it used?
6. Difference between SSE and WebSockets?
7. What is the purpose of `history.pushState()`?
8. How do you copy text using JavaScript?
9. Why do we use `navigator.geolocation`?
10. How can you store theme preference in browser?

---
