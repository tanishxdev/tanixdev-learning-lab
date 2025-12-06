# SECTION 12 — CSS VARIABLES & MODERN FEATURES

---

# PART 1 — CSS VARIABLES (Custom Properties)

---

## 1. Concept

CSS variables let you define reusable values.

Syntax:

```css
:root {
    --primary-color: #4a6cff;
    --radius: 10px;
}
```

Use them:

```css
button {
    background: var(--primary-color);
    border-radius: var(--radius);
}
```

---

## 2. Why CSS Variables Are Important?

1. DRY (Don’t Repeat Yourself)
2. Central control of theme
3. Easy design updates
4. Used in real projects + design systems
5. Enables dark/light themes
6. Works at runtime (JS can modify variables)

---

# PART 2 — VARIABLE SCOPE

---

### 1. Global variables (in :root)

```css
:root {
    --text: #222;
}
```

### 2. Local variables (inside elements)

```css
.card {
    --card-bg: white;
    background: var(--card-bg);
}
```

Local overrides global.

---

# PART 3 — VARIABLE INHERITANCE

CSS variables follow normal inheritance rules.

Example:

```css
.container {
    --size: 20px;
}

.item {
    font-size: var(--size);
}
```

`.item` inherits variable from `.container`.

---

# PART 4 — CHANGING VARIABLES ON HOVER

(Useful for dynamic themes)

```css
button {
    --bg: #4a6cff;
    background: var(--bg);
}

button:hover {
    --bg: #3046b9;
}
```

---

# PART 5 — DARK MODE USING VARIABLES

---

### Step 1: Define base theme

```css
:root {
    --bg: #ffffff;
    --text: #222;
}
```

### Step 2: Override for dark mode

```css
.dark {
    --bg: #0f1115;
    --text: #e8e8e8;
}
```

### Step 3: Apply theme

```css
body {
    background: var(--bg);
    color: var(--text);
}
```

Toggle `.dark` class using JS to switch themes instantly.

---

# PART 6 — CSS VARIABLES + TRANSITIONS

Smooth theme change:

```css
body {
    transition: background 0.3s, color 0.3s;
}
```

---

# PART 7 — VARIABLES WITH calc()

---

```css
:root {
    --space: 20px;
}

.box {
    margin: calc(var(--space) * 2);
}
```

---

# PART 8 — ADVANCED: @property (Typed CSS Variables)

---

@property allows CSS variables to have:

• type
• initial value
• inheritance settings

Example:

```css
@property --rotate {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}

.box {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    to { --rotate: 360deg; }
}

.box {
    transform: rotate(var(--rotate));
}
```

Used for:

• complex animations
• CSS painting
• typed color/length variables

---

# PART 9 — MODERN CSS FUNCTIONS

---

### 1. calc()

```css
width: calc(100% - 50px);
```

### 2. min()

```css
width: min(90%, 600px);
```

### 3. max()

```css
font-size: max(16px, 1vw);
```

### 4. clamp(min, preferred, max)

```css
font-size: clamp(16px, 3vw, 24px);
```

Clamp is extremely useful for responsive typography.

---

# PART 10 — FULL WORKING EXAMPLE (With Comments)

```html
<!DOCTYPE html>
<html>
<head>
<style>

/* Global variables */
:root {
    --primary: #4a6cff;
    --text: #222;
    --bg: #fff;
    --radius: 12px;
    --space: 20px;
}

/* Dark mode overrides */
.dark {
    --primary: #89a2ff;
    --text: #eee;
    --bg: #0f1115;
}

/* Base styles using variables */
body {
    background: var(--bg);
    color: var(--text);
    padding: var(--space);
    font-family: Arial;
    transition: 0.3s;
}

/* Card component */
.card {
    background: var(--primary);
    padding: calc(var(--space) * 2);
    border-radius: var(--radius);
    color: white;
    width: min(90%, 400px);
    margin: auto;
}

button {
    padding: 10px 18px;
    border: none;
    border-radius: var(--radius);
    background: var(--text);
    color: var(--bg);
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: var(--primary);
}

</style>
</head>

<body class="dark">

<div class="card">
    <h2>CSS Variables Demo</h2>
    <p>This card demonstrates theme switching using CSS variables.</p>
    <button>Toggle Mode</button>
</div>

</body>
</html>
```

---

# PART 11 — BEST PRACTICES

---

✓ Always define variables in `:root`
✓ Use variables for: colors, spacing, radius, fonts
✓ Use camelCase or hyphens (`--primary-color`)
✓ Avoid magic numbers; use calc()
✓ Use clamp() for responsive typography
✓ Keep design tokens in a separate CSS file (pro projects)

---

# PART 12 — INTERVIEW QUESTIONS

---

1. What are CSS variables?
2. Difference between CSS variables and SASS variables?
3. What is variable scope in CSS?
4. How do you override variables in dark mode?
5. What is @property used for?
6. Explain calc(), min(), max(), and clamp().
7. Why is clamp() preferred for responsive fonts?
8. Advantages of CSS variables over repeating values?
9. Can CSS variables be changed using JavaScript?
10. Are CSS variables inherited?

---
