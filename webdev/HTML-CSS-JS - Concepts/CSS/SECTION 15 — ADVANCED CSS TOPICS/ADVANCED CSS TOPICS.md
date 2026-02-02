# SECTION 15 — ADVANCED CSS TOPICS

---

Cover:

1. CSS Specificity (deep)
2. Cascade Layers ( @layer )
3. Advanced Selectors
4. Container Queries
5. Subgrid
6. Logical Properties
7. CSS Nesting
8. Scoped Styles
9. Advanced Functions: clamp(), min(), max(), env()
10. Viewport Units: svh, lvh, dvh
11. Backdrop-filter, mix-blend-mode
12. CSS Houdini & @property
13. CSS Performance
14. Architecture (BEM, ITCSS, Utility-first)
15. Interview Questions

---

# PART 1 — SPECIFICITY (DEEP UNDERSTANDING)

---

CSS applies styles based on:

1. **Origin** (author > user > browser)
2. **Importance** (!important)
3. **Specificity**
4. **Source order**

### Specificity scoring:

| Selector Type                | Score |
| ---------------------------- | ----- |
| Inline style                 | 1000  |
| ID                           | 100   |
| Class/pseudo-class/attribute | 10    |
| Element/pseudo-element       | 1     |

### Example:

```css
#id        → 100  
.card      → 10  
button     → 1  
button:hover → 11  
```

Higher wins.

---

# PART 2 — CSS CASCADE LAYERS ( @layer )

---

Modern CSS allows layering to control which group overrides which.

```css
@layer reset, base, components, utilities;
```

Example:

```css
@layer reset {
  * { margin: 0; padding: 0; }
}

@layer base {
  body { font-family: sans-serif; }
}

@layer components {
  .card { padding: 20px; }
}

@layer utilities {
  .mt-20 { margin-top: 20px; }
}
```

Useful for:

• large codebases
• scaling CSS
• avoiding specificity battles

---

# PART 3 — ADVANCED SELECTORS

---

### 1. :is()

Simplifies complex selectors.

```css
:is(h1, h2, h3) {
    color: blue;
}
```

### 2. :where()

Zero specificity!

```css
:where(.card, .box) {
    padding: 20px;
}
```

### 3. :has() (parent selector)

One of the most powerful additions.

```css
.card:has(img:hover) {
    border-color: blue;
}
```

### 4. :not()

Exclude elements.

```css
button:not(.primary) {
    opacity: 0.5;
}
```

---

# PART 4 — CONTAINER QUERIES (GAME CHANGER)

---

Unlike media queries (based on viewport),
**container queries respond to parent size**.

Example:

```css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-info {
    flex-direction: row;
  }
}
```

Uses:

• Responsive components
• Reusable cards
• Layout independent of screen size

This is the future of responsive design.

---

# PART 5 — CSS SUBGRID (ADVANCED GRID)

---

Subgrid allows child elements to use the parent’s grid tracks.

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
```

Used in:

• dashboards
• nested layouts
• form layouts

---

# PART 6 — LOGICAL PROPERTIES

---

Makes CSS direction-neutral (LTR/RTL support).

Examples:

Instead of:

```
margin-left
padding-right
border-top
```

Use:

```
margin-inline-start
padding-block-end
border-block-start
```

Allows UI to support Arabic/Hebrew automatically.

---

# PART 7 — CSS NESTING (Native CSS)

---

CSS now supports nesting like SCSS:

```css
.card {
    padding: 20px;

    h3 {
        color: blue;
    }

    &:hover {
        transform: scale(1.02);
    }
}
```

Cleaner styling for components.

---

# PART 8 — SCOPED STYLES

---

Limit CSS to specific components.

### Using :scope

```css
.component:scope h2 {
  color: red;
}
```

### Using shadow DOM (Web Components)

```html
<style scoped>
  h2 { color: blue; }
</style>
```

---

# PART 9 — ADVANCED CSS FUNCTIONS

---

### 1. clamp()

```css
font-size: clamp(16px, 3vw, 24px);
```

### 2. min()

```css
width: min(90%, 600px);
```

### 3. max()

```css
min-height: max(50vh, 400px);
```

### 4. env()

```css
padding-top: env(safe-area-inset-top);
```

Used for devices with notches.

---

# PART 10 — NEW VIEWPORT UNITS

---

Old units:

• vh
• vw

New stable units:

```
svh → Small viewport height  
lvh → Large viewport height  
dvh → Dynamic viewport height
```

Mobile browsers change height due to URL bars.
dvh gives the most accurate size.

Example:

```css
.hero {
    height: 100dvh;
}
```

---

# PART 11 — ADVANCED VISUAL EFFECTS

---

### 1. backdrop-filter

```css
.glass {
    backdrop-filter: blur(10px);
}
```

Glassmorphism UI.

### 2. mix-blend-mode

```css
img {
    mix-blend-mode: multiply;
}
```

Used for creative UI and overlays.

---

# PART 12 — CSS HOUDINI + @property

---

Houdini exposes CSS engine functions.

### Example:

```css
@property --rotate {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}
```

Used for:

• advanced animations
• custom paint API
• typed variables

---

# PART 13 — CSS PERFORMANCE OPTIMIZATION

---

✔ Prefer `transform` over `top/left`
✔ Avoid animating `width/height`
✔ Use GPU-friendly properties (opacity, transform)
✔ Reduce heavy shadows
✔ Use modern image formats (.webp, .avif)
✔ Use CSS containment (`contain: layout`)
✔ Use container queries instead of too many media queries

---

# PART 14 — CSS ARCHITECTURE (For Large Projects)

---

### 1. BEM (Block Element Modifier)

```css
.card {}
.card__title {}
.card--primary {}
```

### 2. ITCSS (Layered)

• Settings
• Tools
• Generic
• Elements
• Objects
• Components
• Utilities

### 3. OOCSS, SMACSS, Utility-First CSS (Tailwind-like)

---

# PART 15 — INTERVIEW QUESTIONS (ADVANCED)

---

1. Explain CSS specificity in detail.
2. What is @layer and why is it useful?
3. Difference between :is(), :has(), :where()?
4. What is subgrid and where is it used?
5. Difference between media queries and container queries?
6. Should CSS animations use transform or width? Why?
7. Explain clamp() with real use cases.
8. What are logical properties and why important?
9. How does backdrop-filter work?
10. What is the difference between vh, svh, lvh, dvh?
11. What is @property in CSS Houdini?
12. Difference between nesting in SCSS vs native CSS?
13. How to architect CSS for large projects?

---
