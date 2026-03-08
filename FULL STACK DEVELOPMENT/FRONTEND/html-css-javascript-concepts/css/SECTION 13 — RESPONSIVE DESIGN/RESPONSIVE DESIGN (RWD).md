# SECTION 13 — RESPONSIVE WEB DESIGN (RWD)

---

# PART 1 — Concept

Responsive Web Design ensures that the website:

• looks good on all screen sizes
• automatically adapts width, spacing, layout
• is usable on mobile, tablet, laptop, and desktop

RWD uses:

• flexible grids
• flexible images
• media queries
• fluid typography
• modern CSS functions

---

# PART 2 — Why Responsive Design?

1. 70% traffic is mobile
2. Required for SEO
3. Required for professional UI
4. Makes UI accessible
5. Required in interviews + machine coding

---

# PART 3 — Responsive Units (core of RWD)

### 1. Percentage (%)

Flexible width based on parent.

```css
width: 80%;
```

### 2. Viewport Width/Height (vw/vh)

```
1vw = 1% of screen width  
1vh = 1% of screen height  
```

Example:

```css
.hero {
    height: 100vh;
}
```

### 3. rem

Responsive font sizing (based on root element).

```css
font-size: 1.2rem;
```

### 4. fr unit (grid)

Divides free space into flexible fractions.

```css
grid-template-columns: 1fr 2fr;
```

### 5. clamp(min, preferred, max)

```css
font-size: clamp(16px, 3vw, 24px);
```

---

# PART 4 — Mobile-First vs Desktop-First

### Mobile-first

Write CSS for mobile → expand using min-width media queries.

```css
@media (min-width: 768px) { ... }
```

BEST PRACTICE.

### Desktop-first

Write CSS for desktop → shrink using max-width queries.

```css
@media (max-width: 768px) { ... }
```

---

# PART 5 — Media Queries (backbone of RWD)

### Syntax:

```css
@media (max-width: 768px) {
    .box {
        width: 100%;
    }
}
```

### Common Breakpoints:

```
320px – phones  
480px – small phones  
768px – tablets  
1024px – laptops  
1280px – large desktops  
```

---

# PART 6 — Responsive Layout Example Using Flexbox

```css
.container {
    display: flex;
    gap: 20px;
}

.card {
    flex: 1;
}

/* Mobile layout */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

---

# PART 7 — Responsive Grid Layout

```css
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

This layout auto-adjusts without media queries.

---

# PART 8 — Responsive Images

### 1. Make images scale

```css
img {
    max-width: 100%;
    height: auto;
}
```

### 2. object-fit for uniform card layouts

```css
img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
```

### 3. picture tag for different image sizes

```html
<picture>
    <source media="(max-width:600px)" srcset="small.jpg">
    <source media="(min-width:601px)" srcset="large.jpg">
    <img src="large.jpg">
</picture>
```

---

# PART 9 — Fluid Typography (Modern Responsive Fonts)

### Using clamp()

```css
h1 {
    font-size: clamp(24px, 5vw, 40px);
}
```

This automatically adjusts heading size based on viewport.

---

# PART 10 — Responsive Spacing System

```css
:root {
    --space: clamp(10px, 2vw, 30px);
}

section {
    padding: var(--space);
}
```

Spacing changes automatically across screen sizes.

---

# PART 11 — FULL RESPONSIVE HERO SECTION (Complete Example)

```html
<!DOCTYPE html>
<html>
<head>
<style>

/* Global font size scaling */
html {
    font-size: 16px;
}

/* Hero Section */
.hero {
    height: 70vh;
    background: url("banner.jpg") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.hero h1 {
    font-size: clamp(30px, 6vw, 60px);
    color: white;
}

/* Responsive changes */
@media (max-width: 768px) {
    .hero {
        height: 50vh;
    }
}

</style>
</head>

<body>
    <div class="hero">
        <h1>Responsive Web Design</h1>
    </div>
</body>

</html>
```

---

# PART 12 — FULL RESPONSIVE CARD LAYOUT (Real UI)

```html
<style>
.cards {
    display: grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
    padding: 20px;
    border-radius: 12px;
    background: #f5f7ff;
}
</style>

<div class="cards">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
</div>
```

This layout automatically adapts on mobile, tablets, desktops.

---

# PART 13 — COMMON RESPONSIVE PROBLEMS & FIXES

### Problem 1 — Text overflowing

Fix: use `max-width: 100%`, `word-wrap: break-word`.

### Problem 2 — Images stretched

Fix: use `object-fit: cover`.

### Problem 3 — Layout breaks on small screens

Fix: use `flex-direction: column` in mobile queries.

### Problem 4 — Too many media queries

Fix: use:

✔ auto-fit/auto-fill
✔ minmax()
✔ clamp()

---

# PART 14 — INTERVIEW QUESTIONS (VERY IMPORTANT)

1. What is responsive design?
2. Difference between mobile-first and desktop-first?
3. What are media queries?
4. Common breakpoints used in RWD?
5. Why are rem units preferred over px?
6. How do you make an image responsive?
7. What is the clamp() function used for?
8. Difference between auto-fit and auto-fill in Grid?
9. How do you build a responsive navbar layout?
10. How do you test responsiveness across devices?

---
