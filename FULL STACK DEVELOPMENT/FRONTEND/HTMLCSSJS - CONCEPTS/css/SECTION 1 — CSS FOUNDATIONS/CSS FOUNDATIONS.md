# SECTION 1 — CSS FOUNDATIONS

(CSS Basics needed for every beginner + interviews)

Includes:

1. CSS Introduction
2. CSS Syntax
3. CSS How To (3 Ways to Add CSS)
4. CSS Selectors (Basic)
5. CSS Comments
6. CSS Errors
7. CSS Units
8. CSS Inheritance
9. CSS Specificity
10. CSS !important
11. CSS Optimization
12. CSS Accessibility
13. CSS Website Layout Overview

---

# PART 1 — CSS INTRODUCTION

---

## 1. Concept

CSS = Cascading Style Sheets.
It controls **how HTML looks**.

HTML = structure
CSS = design

Example:
• Colors
• Layout
• Fonts
• Spacing
• Buttons
• Responsiveness

---

## 2. Why CSS Exists

Without CSS, all websites would look like plain documents.
CSS handles:

• modern layouts
• animations
• responsive design
• custom UI
• branding

---

## 3. Simple Example

```html
<h1 style="color: blue;">Hello</h1>
```

CSS changed the color.

---

## 4. Interview Questions

1. What is CSS?
2. Difference between HTML and CSS?
3. What does “Cascading” mean?

---

# PART 2 — CSS SYNTAX

---

### Anatomy of a CSS rule:

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: red;
    font-size: 30px;
}
```

---

## 1. Selector

Chooses the HTML tag(s) to style.

## 2. Property

The styling feature (color, width, padding, etc.)

## 3. Value

The setting for that property.

---

## 4. Interview Questions

1. What are components of CSS syntax?
2. What is a selector?

---

# PART 3 — HOW TO ADD CSS (Three Methods)

---

### 1) Inline CSS

Inside HTML tag:

```html
<h1 style="color: blue;">Hello</h1>
```

Not recommended for real projects.

### 2) Internal CSS

Inside `<style>` tag in head:

```html
<style>
h1 { color: red; }
</style>
```

### 3) External CSS

Separate `.css` file.

```html
<link rel="stylesheet" href="style.css">
```

**This is the best method.**

---

## Interview Questions

1. Which CSS method is preferred and why?
2. Why avoid inline CSS?

---

# PART 4 — BASIC CSS SELECTORS

---

### 1) Element Selector

```css
p { color: green; }
```

### 2) Class Selector

Used for grouping and reuse.

```css
.title { color: blue; }
```

HTML:

```html
<h1 class="title">Welcome</h1>
```

### 3) ID Selector

Unique per page.

```css
#header { background: black; }
```

HTML:

```html
<div id="header"></div>
```

### 4) Universal Selector

Styles everything.

```css
* { margin: 0; }
```

---

## Interview Questions

1. Difference between class and id?
2. Can we use one id multiple times?

---

# PART 5 — CSS COMMENTS

---

Syntax:

```css
/* this is a comment */
```

Used for:

• clarity
• documenting code
• sectioning large files

---

# PART 6 — CSS ERRORS (Common Mistakes)

---

### 1) Missing semicolon

Wrong:

```css
color: red
font-size:20px;
```

Right:

```css
color: red;
font-size:20px;
```

### 2) Wrong selectors

```css
.titel { ... }  /* typo */
```

### 3) Missing curly braces

```css
h1 {
color:red;
```

---

## Interview Questions

1. How do you debug CSS?

---

# PART 7 — CSS UNITS

---

Two types:

### A) Absolute Units

px, cm, mm

Most common: **px**

### B) Relative Units

1. em (relative to parent font size)
2. rem (relative to root font size)
3. % (relative to parent)
4. vw (1% of viewport width)
5. vh (1% of viewport height)

---

## Example

```css
box {
    width: 50%;   /* half of parent */
    font-size: 2rem;   /* twice root size */
    height: 50vh;  /* half the viewport */
}
```

---

## Interview Questions

1. Difference between px, em, and rem?
2. Why rem is preferred over em?

---

# PART 8 — CSS INHERITANCE

---

Some properties are inherited:

• color
• font-family
• line-height

Some are NOT inherited:

• margin
• padding
• border
• background

---

## Example

```css
body { color: red; }
p { /* will inherit red */ }
```

---

## Interview Questions

1. Name 5 inherited properties.
2. Name 5 non-inherited properties.

---

# PART 9 — CSS SPECIFICITY

---

Determines which rule wins.

Order of power (low → high):

1. Element selectors (p, h1)
2. Class selectors (.btn)
3. ID selectors (#header)
4. Inline styling
5. !important

---

## Example

```css
p { color: blue; }     /* specificity = 1 */
p.note { color: green; }  /* specificity = 10 */
#main p { color: red; }   /* specificity = 100 */
```

Red wins.

---

## Interview Questions

1. Explain specificity.
2. Which selector has highest priority?
3. Why is excessive specificity bad?

---

# PART 10 — CSS !important

---

Overrides all rules.

```css
p {
    color: red !important;
}
```

Use only when necessary (bad for maintainability).

---

## Interview Questions

1. When should you use !important?
2. Why do developers avoid it?

---

# PART 11 — CSS OPTIMIZATION

---

To make CSS clean and fast:

• Avoid too many IDs
• Use classes for reuse
• Use DRY principles (Do Not Repeat Yourself)
• Keep selectors simple
• Split large files logically
• Minimize unused CSS

---

## Interview Questions

1. What is DRY CSS?
2. How to keep CSS maintainable?

---

# PART 12 — CSS ACCESSIBILITY BASICS

---

Important for SEO + usability.

• Use semantic HTML
• Maintain contrast ratio
• Avoid styling that hides essential info
• Use focus-visible for keyboard users
• Never remove outline without alternative

Example:

```css
button:focus-visible {
    outline: 2px solid blue;
}
```

---

## Interview Questions

1. What is accessible CSS?
2. Why should outlines not be removed?

---

# PART 13 — WEBSITE LAYOUT BASICS (Overview)

---

CSS layouts use:

• Display (block, inline, inline-block)
• Position
• Flexbox
• Grid
• Box Model
• Media Queries

You will learn these deeply in your next sections.

---

# MINI PROJECT TO COMPLETE FOUNDATIONS

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS Foundations</title>
<style>

body {
    font-family: Arial;
    margin: 0;
    padding: 20px;
}

/* class selector */
.title {
    color: blue;
    font-size: 32px;
}

/* id selector */
#box {
    background: lightgray;
    padding: 20px;
    width: 50%;
    color: black;
}

/* inheritance example */
body {
    color: darkgray;
}

</style>
</head>

<body>

<h1 class="title">CSS Foundations</h1>

<div id="box">
    This box demonstrates CSS basics, selectors, inheritance, and units.
</div>

</body>
</html>
```

---

# SECTION-WISE INTERVIEW QUESTIONS (CONSOLIDATED)

1. Explain CSS syntax.
2. Difference between class and id.
3. Why avoid inline CSS?
4. Difference between px, em, rem.
5. What is CSS specificity?
6. Why is !important bad practice?
7. Name inherited vs non-inherited CSS properties.
8. Explain CSS cascade.
9. How do you debug CSS?
10. What is DRY CSS?

---