# SECTION 10 — INTERACTION & UI EFFECTS

---

# PART 1 — BUTTONS (VISUAL + INTERACTIVE STATES)

---

### Basic button styling

```css
.btn {
    background: #4a6cff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
}
```

### Hover effect

```css
.btn:hover {
    background: #3b57cc;
}
```

### Active (when pressed)

```css
.btn:active {
    transform: scale(0.95);
}
```

### Focus (keyboard navigation)

```css
.btn:focus-visible {
    outline: 3px solid black;
}
```

### Disabled button

```css
.btn:disabled {
    background: gray;
    cursor: not-allowed;
    opacity: 0.6;
}
```

---

# PART 2 — HOVER EFFECTS (GENERALLY ON ANY ELEMENT)

---

### 1. Scale

```css
.card:hover {
    transform: scale(1.05);
}
```

### 2. Shadow

```css
.card:hover {
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
```

### 3. Translate (lift up)

```css
.card:hover {
    transform: translateY(-5px);
}
```

### 4. Fade

```css
.card:hover {
    opacity: 0.8;
}
```

### 5. Glow

```css
button:hover {
    box-shadow: 0 0 10px rgba(79,111,255,0.6);
}
```

---

# PART 3 — TOOLTIP (NO JAVASCRIPT)

---

HTML:

```html
<div class="tooltip">Hover me
    <span class="tip">This is a tooltip</span>
</div>
```

CSS:

```css
.tooltip {
    position: relative;
    cursor: pointer;
}

.tip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
}

.tooltip:hover .tip {
    opacity: 1;
}
```

---

# PART 4 — PAGINATION COMPONENT

---

```html
<div class="pagination">
    <a href="#" class="page">1</a>
    <a href="#" class="page active">2</a>
    <a href="#" class="page">3</a>
</div>
```

```css
.pagination {
    display: flex;
    gap: 10px;
}

.page {
    padding: 8px 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
    text-decoration: none;
    transition: 0.3s;
}

.page:hover {
    background: #ededed;
}

.page.active {
    background: #4a6cff;
    color: white;
    border-color: #4a6cff;
}
```

---

# PART 5 — DROPDOWN (CSS ONLY)

---

```html
<div class="dropdown">
    <button class="drop-btn">Menu</button>
    <div class="menu">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
    </div>
</div>
```

```css
.dropdown {
    position: relative;
    display: inline-block;
}

.menu {
    display: none;
    position: absolute;
    background: white;
    border: 1px solid #ddd;
    min-width: 120px;
    padding: 10px 0;
}

.dropdown:hover .menu {
    display: block;
}

.menu a {
    display: block;
    padding: 8px 12px;
}

.menu a:hover {
    background: #f0f0f0;
}
```

---

# PART 6 — CSS USER INTERFACE PROPERTIES

---

### Cursor styles

```css
button {
    cursor: pointer;
}

.disabled {
    cursor: not-allowed;
}

.drag-handle {
    cursor: move;
}
```

### Accent color (for radio, checkbox, input)

```css
input {
    accent-color: #4a6cff;
}
```

### Resize (for textareas)

```css
textarea {
    resize: vertical;
}
```

### outline

```css
button:focus-visible {
    outline: 3px solid black;
}
```

### pointer-events

```css
.disabled {
    pointer-events: none;
}
```

---

# PART 7 — ADVANCED INTERACTION EFFECTS

---

### 1. Ripple effect (button press)

```css
.btn {
    position: relative;
    overflow: hidden;
}
.btn::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.3);
    transform: scale(0);
    border-radius: 50%;
    transition: transform 0.4s;
}
.btn:active::after {
    transform: scale(3);
}
```

### 2. Glassmorphism hover

```css
.card {
    backdrop-filter: blur(10px);
}
.card:hover {
    background: rgba(255,255,255,0.2);
}
```

### 3. Neon hover

```css
.btn:hover {
    box-shadow: 0 0 15px #00eaff;
}
```

---

# PART 8 — REAL COMPONENT: INTERACTIVE CARD

---

```html
<div class="card">
    <img src="img.jpg">
    <div class="content">
        <h3>Product</h3>
        <p>Description here</p>
    </div>
</div>
```

```css
.card {
    width: 240px;
    border-radius: 15px;
    overflow: hidden;
    transition: 0.4s;
}

.card img {
    width: 100%;
    transition: 0.4s;
}

.card:hover {
    transform: translateY(-5px);
}

.card:hover img {
    transform: scale(1.1);
}
```

---

# PART 9 — ACCESSIBILITY WITH INTERACTIVITY

---

**Never remove outline without replacement:**

```css
button {
    outline: none;
}
button:focus-visible {
    outline: 2px solid black;
}
```

---

# PART 10 — INTERVIEW QUESTIONS

---

1. Difference between :hover, :focus and :active?
2. How do you create a dropdown menu without JS?
3. Which CSS property controls smooth transitions?
4. What is pointer-events?
5. How to create a tooltip using CSS only?
6. What is the purpose of focus-visible?
7. Explain cursor types in UI design.
8. How do you disable interaction using CSS?
9. Why is transition important for modern UI?
10. What is accent-color used for?

---
