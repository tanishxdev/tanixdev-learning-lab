# SECTION 11 — HTML STYLE GUIDE & BEST PRACTICES

---

We cover:

1. Coding Principles
2. File Structure Best Practices
3. Naming Conventions
4. Semantic Rules
5. Accessibility Rules
6. Performance Rules
7. SEO Best Practices
8. Image & Media Best Practices
9. Form Best Practices
10. Maintainability & Readability
11. Security Considerations
12. Full Checklist
13. Interview Questions

---


# PART 1 — CODING PRINCIPLES

---

Follow these universal rules:

### 1. Use lowercase for all tags & attributes

Bad:

```html
<DIV CLASS="WRONG"></DIV>
```

Good:

```html
<div class="correct"></div>
```

### 2. Always close tags

HTML allows unclosed tags, but professionals do not.

### 3. Use double quotes for attributes

Bad:

```html
<input type='text'>
```

Good:

```html
<input type="text">
```

### 4. Indentation = 2 or 4 spaces (never tabs)

Consistent indentation helps readability.

---

# PART 2 — FILE STRUCTURE BEST PRACTICES

---

### Recommended structure:

```
project/
│── index.html
│── about.html
│── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    └── banner.jpg
```

### Rules:

• Never put CSS or JS inline inside the HTML file (except prototypes).
• Use separate files for maintainability.
• Group assets logically.

---

# PART 3 — NAMING CONVENTIONS (MOST IMPORTANT)

---

### Use **meaningful**, **readable**, **dash-separated** names.

Good:

```html
<div class="hero-section"></div>
```

Bad:

```html
<div class="hs1"></div>
<div class="random"></div>
```

### Avoid camelCase in HTML class names.

Correct:

```
product-card
nav-bar
btn-primary
```

---

# PART 4 — SEMANTIC RULES

---

### Use semantic tags instead of `<div>` everywhere.

Bad:

```html
<div class="header"></div>
<div class="footer"></div>
```

Good:

```html
<header></header>
<footer></footer>
```

### Only one `<main>` per page.

### Headings follow hierarchy (`<h1>` → `<h2>` → `<h3>`).

Bad:

```html
<h1>Title</h1>
<h1>Another Title</h1>
```

Good:

```html
<h1>Main Title</h1>
<h2>Sub Title</h2>
```

---

# PART 5 — ACCESSIBILITY BEST PRACTICES (a11y)

---

### 1. Always use `alt` in images

```html
<img src="dog.jpg" alt="A small dog running">
```

### 2. Use `<label>` for inputs

```html
<label for="email">Email</label>
<input id="email" type="email">
```

### 3. Use `aria-*` attributes for clarity (advanced)

```html
<button aria-expanded="false">Menu</button>
```

### 4. Avoid using color alone to convey meaning

Add text or icons.

### 5. Ensure proper heading order for screen readers.

---

# PART 6 — PERFORMANCE BEST PRACTICES

---

### 1. Use optimized images

• Convert images to WebP format
• Compress large images

### 2. Use lazy loading for media

```html
<img src="photo.jpg" loading="lazy">
```

### 3. Avoid inline base64 unless needed.

### 4. Place scripts at bottom of body or use `defer`.

```html
<script src="app.js" defer></script>
```

---

# PART 7 — SEO BEST PRACTICES

---

### 1. Write proper `<title>`

```html
<title>Portfolio | Tanish Kumar</title>
```

### 2. Use meta description

```html
<meta name="description" content="Web developer portfolio.">
```

### 3. Use semantic tags for content grouping

(search engines read them)

### 4. Wrap articles/blogs inside `<article>`.

### 5. Use proper `<h1>` only once.

---

# PART 8 — IMAGE & MEDIA BEST PRACTICES

---

### Use `<picture>` for art direction.

```html
<picture>
    <source srcset="hero-large.jpg" media="(min-width: 900px)">
    <img src="hero-small.jpg" alt="Hero image">
</picture>
```

### Avoid huge images (over 2000px) for mobile.

### Compress videos before embedding.

### Don’t autoplay audio (bad UX).

---

# PART 9 — FORM BEST PRACTICES

---

### 1. Use autocomplete attributes

```html
<input type="email" autocomplete="email">
```

### 2. Mark required fields

```html
<input type="text" required>
```

### 3. Group fields with `<fieldset>`.

### 4. Don’t use placeholders as labels (bad accessibility).

### 5. Always specify `name` attribute for form submission.

---

# PART 10 — MAINTAINABILITY & READABILITY

---

### Write clean, readable HTML:

```html
<section class="services">
    <h2>Our Services</h2>
    <p>We provide full-stack development.</p>
</section>
```

### Avoid deeply nested HTML (anti-pattern):

Bad:

```html
<div><div><div><p>Text</p></div></div></div>
```

### Limit nesting to 3–4 levels max.

---

# PART 11 — SECURITY BEST PRACTICES

---

### 1. Never trust client-side validation

HTML validation helps UX but backend must validate again.

### 2. Avoid exposing sensitive keys in HTML or JS.

### 3. Use HTTPS links everywhere.

### 4. Escape user input before rendering.

---

# PART 12 — FULL HTML BEST PRACTICES CHECKLIST

---

### Structure

✓ Semantic HTML
✓ Proper headings
✓ `<main>` only once

### Code Quality

✓ Lowercase tags
✓ Consistent indentation
✓ Descriptive class names

### Accessibility

✓ `alt` text
✓ labels for inputs
✓ ARIA attributes if needed

### Performance

✓ lazy-loading images
✓ compressed media
✓ placed scripts at end or using `defer`

### SEO

✓ title + meta
✓ semantic structure
✓ meaningful URLs

### Forms

✓ correct `name` attributes
✓ avoid placeholder-only labels

---

# PART 13 — INTERVIEW QUESTIONS (STYLE GUIDE)

---

1. Why is semantic HTML important?
2. What is the purpose of the `<main>` element?
3. Why should images always have alt text?
4. What is the difference between `<section>` and `<div>`?
5. Why avoid using multiple `<h1>` tags?
6. What are common accessibility mistakes?
7. Why should scripts be placed at bottom of body or deferred?
8. How do you optimize HTML for performance?
9. Why should filenames and class names follow a convention?
10. What is the benefit of keeping CSS and JS in separate files?

---
