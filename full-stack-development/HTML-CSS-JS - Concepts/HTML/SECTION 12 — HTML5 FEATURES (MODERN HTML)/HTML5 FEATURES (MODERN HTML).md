# SECTION 12 — HTML5 FEATURES (MODERN HTML)

---

We cover:

1. What is HTML5
2. New Semantic Elements
3. New Form Input Types
4. New Form Attributes
5. Audio & Video API
6. Canvas
7. SVG
8. Web Storage API (localStorage, sessionStorage)
9. Web Workers
10. Geolocation
11. Drag & Drop
12. WebSockets / SSE
13. Offline Apps (Manifest, deprecated but asked)
14. History API
15. ContentEditable
16. Data Attributes
17. Template Tag
18. Meter & Progress
19. Interview Questions

---


# PART 1 — WHAT IS HTML5?

---

HTML5 is the **latest standard** of HTML offering:

• Better semantics
• Built-in multimedia
• Offline capabilities
• Browser APIs
• App-like functionalities

HTML5 = Structure + APIs.

It made JavaScript apps and SPAs possible.

---

# PART 2 — NEW SEMANTIC ELEMENTS (MOST IMPORTANT)

---

HTML5 added new meaningful tags:

```
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
<figure>
<figcaption>
<mark>
<time>
```

Purpose:

• Better SEO
• Better accessibility
• Cleaner markup

---

# PART 3 — NEW FORM INPUT TYPES (HTML5 FORMS)

---

HTML5 introduced new input types for better UX + validation:

```
email
url
tel
date
time
month
week
datetime-local
number
range
search
color
```

Example:

```html
<input type="email" placeholder="Enter email" required>
```

Browser automatically validates the format.

---

# PART 4 — NEW FORM ATTRIBUTES

---

### 1. `required`

```html
<input required>
```

### 2. `pattern`

```html
<input pattern="\d{10}">
```

### 3. `min`, `max`, `step`

```html
<input type="number" min="1" max="100">
```

### 4. `autocomplete`

```html
<input autocomplete="email">
```

### 5. `autofocus`

```html
<input autofocus>
```

### 6. `novalidate`

```html
<form novalidate>
```

### 7. `multiple`

```html
<input type="file" multiple>
```

### 8. `placeholder`

```html
<input placeholder="Username">
```

---

# PART 5 — AUDIO & VIDEO SUPPORT (HTML5 MEDIA)

---

Before HTML5 → Flash required.

Now:

```html
<video controls src="video.mp4"></video>
```

```html
<audio controls src="sound.mp3"></audio>
```

Advanced:

```html
<video controls autoplay muted loop></video>
```

Attributes:

• `controls`
• `muted`
• `loop`
• `poster`
• `preload`

---

# PART 6 — CANVAS (POWERFUL NEW FEATURE)

---

Canvas introduced drawing capabilities:

```html
<canvas id="c" width="400" height="300"></canvas>
```

JavaScript:

```javascript
const ctx = document.getElementById("c").getContext("2d")
ctx.fillStyle = "blue"
ctx.fillRect(20, 20, 150, 100)
```

Used in:

• Games
• Graphs
• Animations
• Particle effects
• Drawing apps

---

# PART 7 — SVG SUPPORT (Vector Graphics)

---

Inline SVG:

```html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="orange"/>
</svg>
```

Best for:

• Icons
• Logos
• Animated graphics

---

# PART 8 — WEB STORAGE (localStorage + sessionStorage)

---

No cookies required for simple storage.

### localStorage (persistent)

```javascript
localStorage.setItem("theme", "dark")
localStorage.getItem("theme")
```

### sessionStorage (per tab)

```javascript
sessionStorage.setItem("token", "123")
```

Use cases:

• Dark/light mode
• Saving settings
• Storing auth tokens
• Saving quiz progress

---

# PART 9 — WEB WORKERS (Background Threads)

---

Allows JavaScript to run in background without blocking UI.

main.js:

```javascript
const worker = new Worker("worker.js")
worker.postMessage(10)
worker.onmessage = e => console.log(e.data)
```

worker.js:

```javascript
onmessage = e => postMessage(e.data * 2)
```

Used for:

• Heavy calculations
• Large data processing
• Background API polling

---

# PART 10 — GEOLOCATION API

---

Get user’s location:

```javascript
navigator.geolocation.getCurrentPosition(pos => {
    console.log(pos.coords.latitude)
})
```

Used in:

• Maps
• Delivery apps
• Weather apps

---

# PART 11 — DRAG & DROP API

---

Make element draggable:

```html
<div id="drag" draggable="true">Drag me</div>
```

JS:

```javascript
drag.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", "drag")
})
```

Used in:

• File upload
• Kanban boards
• UI sorting

---

# PART 12 — SERVER-SENT EVENTS (SSE)

---

Real-time updates from server → browser.

```javascript
const es = new EventSource("/events")
es.onmessage = e => console.log(e.data)
```

Used in:

• Live notifications
• Stock updates
• Real-time dashboards

---

# PART 13 — HISTORY API

---

Modify URL without reloading:

```javascript
history.pushState({}, "", "/profile")
```

Used by:

• React Router
• Vue Router
• SPAs

---

# PART 14 — CONTENTEDITABLE (Hidden Gem)

---

Make any element editable:

```html
<p contenteditable="true">Edit me</p>
```

Used for:

• Rich text editors
• Notes apps
• Comment editing

---

# PART 15 — DATA ATTRIBUTES (SUPER IMPORTANT)

---

Custom attributes for storing mini-data inside elements.

```html
<button data-id="21" data-role="admin">Edit</button>
```

JS:

```javascript
button.dataset.id
button.dataset.role
```

Used in:

• UI components
• Event handling
• JS frameworks

---

# PART 16 — TEMPLATE TAG (Component Structure)

---

Define reusable HTML blocks:

```html
<template id="card">
    <div class="card">
        <h3></h3>
    </div>
</template>
```

JS injects it:

```javascript
const temp = document.getElementById("card").content.cloneNode(true)
document.body.appendChild(temp)
```

Used for:

• Table rows
• Dynamic cards
• Framework-like UI

---

# PART 17 — METER & PROGRESS TAGS

---

### Meter (value within a range)

```html
<meter value="60" min="0" max="100">60%</meter>
```

Used for performance indicators.

### Progress (task progress)

```html
<progress value="30" max="100"></progress>
```

Used for uploads, downloads, tasks.

---

# PART 18 — INTERVIEW QUESTIONS (HTML5 FEATURES)

---

1. What are the major features introduced in HTML5?
2. Difference between localStorage and sessionStorage?
3. What is the purpose of the `<template>` tag?
4. How does Canvas differ from SVG?
5. What is the use of `contenteditable`?
6. What are the benefits of HTML5 semantic tags?
7. Explain new HTML5 input types.
8. What is `data-*` attribute and why is it used?
9. What is the difference between SSE and WebSockets?
10. How does the Geolocation API work?
11. Why does `<video autoplay>` require `muted`?
12. Can HTML5 forms validate without JavaScript? How?
13. What are Web Workers?

---
