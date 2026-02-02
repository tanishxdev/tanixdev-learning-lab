# SECTION 14 — PRACTICAL UI COMPONENTS

---
Cover:

1. Navigation Bar
2. Sidebar
3. Cards
4. Buttons (variants)
5. Forms
6. Modal
7. Tabs
8. Accordion
9. Tooltip
10. Badges / Chips
11. Toast Notifications
12. Loader / Spinner
13. Progress Bar
14. Responsive Layout Components

This section is CRITICAL for:

• Machine coding rounds
• Web dev interviews
• Personal projects
• Landing pages
• Real-world UI building

---

# 1) NAVIGATION BAR (Responsive)

---

### HTML

```html
<nav class="navbar">
    <div class="logo">Brand</div>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### CSS

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #4a6cff;
    color: white;
}

.menu {
    display: flex;
    gap: 20px;
    list-style: none;
}

.menu a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
}

.menu a:hover {
    opacity: 0.7;
}

/* Mobile */
@media (max-width: 600px) {
    .menu {
        display: none;
    }
}
```

---

# 2) CARD COMPONENT

---

### HTML

```html
<div class="card">
    <img src="img.jpg" alt="">
    <h3>Card Title</h3>
    <p>This is a simple card component.</p>
</div>
```

### CSS

```css
.card {
    width: 280px;
    padding: 20px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: 0.3s;
}

.card img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 12px;
}

.card:hover {
    transform: translateY(-5px);
}
```

---

# 3) BUTTON COMPONENTS

---

### Base button

```css
.btn {
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
}
```

### Primary

```css
.btn-primary {
    background: #4a6cff;
    color: white;
}
.btn-primary:hover {
    background: #384fca;
}
```

### Outline

```css
.btn-outline {
    border: 2px solid #4a6cff;
    background: white;
    color: #4a6cff;
}
.btn-outline:hover {
    background: #4a6cff;
    color: white;
}
```

---

# 4) FORM UI (Modern)

---

```html
<form class="form">
    <label>Email</label>
    <input type="email">

    <label>Password</label>
    <input type="password">

    <button class="btn btn-primary">Login</button>
</form>
```

```css
.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
}

input {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
}

input:focus {
    border-color: #4a6cff;
    outline: none;
}
```

---

# 5) MODAL POPUP (Pure CSS + Small JS Trigger)

---

### HTML

```html
<div class="modal" id="modal">
    <div class="modal-box">
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
    </div>
</div>
```

### CSS

```css
.modal {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: none;
    justify-content: center;
    align-items: center;
}

.modal-box {
    background: white;
    padding: 20px;
    border-radius: 10px;
}
```

---

# 6) ACCORDION

---

### HTML

```html
<div class="accordion">
    <div class="item">
        <button class="title">Section 1</button>
        <div class="content">Content for section 1...</div>
    </div>
</div>
```

### CSS

```css
.content {
    max-height: 0;
    overflow: hidden;
    transition: 0.4s;
}

.item.active .content {
    max-height: 200px;
}
```

---

# 7) TABS UI

---

### HTML

```html
<div class="tabs">
    <button class="tab active">Tab 1</button>
    <button class="tab">Tab 2</button>
</div>

<div class="content active">Tab 1 Content</div>
<div class="content">Tab 2 Content</div>
```

### CSS

```css
.tab {
    padding: 10px 20px;
    border-bottom: 2px solid transparent;
}

.tab.active {
    border-bottom: 2px solid #4a6cff;
}
```

---

# 8) TOOLTIP

(This is industry standard)

```html
<div class="tooltip">
    Hover me
    <span class="tip">Tooltip Text</span>
</div>
```

```css
.tooltip {
    position: relative;
    cursor: pointer;
}

.tip {
    position: absolute;
    bottom: 140%;
    background: black;
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    transition: 0.3s;
}

.tooltip:hover .tip {
    opacity: 1;
}
```

---

# 9) BADGES / CHIPS

```html
<span class="badge">5</span>
```

```css
.badge {
    background: red;
    color: white;
    padding: 3px 7px;
    border-radius: 50px;
    font-size: 12px;
}
```

---

# 10) TOAST NOTIFICATION

```html
<div class="toast">Saved Successfully!</div>
```

```css
.toast {
    position: fixed;
    right: 20px;
    bottom: -50px;
    background: #4a6cff;
    color: white;
    padding: 10px 18px;
    border-radius: 8px;
    transition: 0.4s;
}

.toast.show {
    bottom: 20px;
}
```

---

# 11) LOADER / SPINNER

```css
.loader {
    width: 40px;
    height: 40px;
    border: 4px solid #ccc;
    border-top-color: #4a6cff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

---

# 12) PROGRESS BAR

```html
<div class="progress">
    <div class="progress-bar"></div>
</div>
```

```css
.progress {
    background: #ddd;
    height: 10px;
    width: 300px;
    border-radius: 5px;
}

.progress-bar {
    background: #4a6cff;
    width: 60%; /* dynamic */
    height: 100%;
    border-radius: 5px;
}
```

---

# 13) RESPONSIVE COMPONENT LAYOUT

### Auto-adjusting card grid:

```css
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

# INTERVIEW QUESTIONS (PRACTICAL UI)

1. How do you build a responsive navbar?
2. How does an accordion work?
3. How do you create a modal without external libraries?
4. Difference between tabs vs accordion UI?
5. How to animate a card on hover?
6. Why use object-fit in cards?
7. How do you show/hide toast messages?
8. What are common responsive UI components?
9. How do CSS transitions improve UX?
10. How to build a pure CSS tooltip?

---
