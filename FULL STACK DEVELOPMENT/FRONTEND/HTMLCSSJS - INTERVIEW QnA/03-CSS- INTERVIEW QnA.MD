## CSS Basics

---

## 1. What does CSS stand for and what is its primary use?

### Concepts

- CSS stands for **Cascading Style Sheets**
- It is used to **style and layout web pages**
- Controls:
  - Colors
  - Fonts
  - Spacing
  - Layout (Flexbox, Grid)

- Separates **content (HTML)** from **presentation (CSS)**
- “Cascading” means styles are applied based on:
  - Priority
  - Specificity
  - Source order

### Example Code

```css
/* Styling a paragraph */
p {
  color: blue; /* text color */
  font-size: 16px; /* text size */
  margin: 10px; /* spacing outside */
}
```

### Interview Ready Answer

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual presentation such as colors, fonts, spacing, and positioning, allowing separation of content from design for better maintainability.

---

## 2. How do you include CSS in your HTML document?

### Concepts

There are **3 ways**:

1. **Inline CSS**
   - Applied directly inside HTML tags
   - Highest specificity
   - Not recommended for large projects

2. **Internal CSS**
   - Written inside `<style>` tag in `<head>`

3. **External CSS (Best Practice)**
   - Separate `.css` file
   - Linked using `<link>`

### Example Code

```html
<!-- Inline CSS -->
<p style="color: red;">Hello</p>

<!-- Internal CSS -->
<style>
  p {
    color: blue;
  }
</style>

<!-- External CSS -->
<link rel="stylesheet" href="styles.css" />
```

```css
/* styles.css */
p {
  color: green;
}
```

### Interview Ready Answer

CSS can be added in three ways: inline (inside HTML elements), internal (inside a `<style>` tag), and external (using a separate CSS file). External CSS is preferred because it improves reusability and maintainability.

---

## 3. Can you explain the difference between class and ID selectors?

### Concepts

| Feature     | Class             | ID                    |
| ----------- | ----------------- | --------------------- |
| Syntax      | `.className`      | `#idName`             |
| Usage       | Multiple elements | Single unique element |
| Reusability | Yes               | No                    |
| Specificity | Lower             | Higher                |

- ID should be **unique per page**
- Class can be reused multiple times

### Example Code

```html
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>

<p id="unique">Only one</p>
```

```css
.text {
  color: blue; /* applied to multiple elements */
}

#unique {
  color: red; /* applied to one element */
}
```

### Interview Ready Answer

Class selectors can be reused across multiple elements, while ID selectors are unique and used for a single element. IDs have higher specificity than classes.

---

## 4. What are pseudo-classes in CSS?

### Concepts

- Pseudo-classes define a **special state of an element**
- Used for:
  - Hover effects
  - Focus states
  - First/last child

- Syntax: `selector:pseudo-class`

Common examples:

- `:hover`
- `:focus`
- `:first-child`
- `:nth-child()`

### Example Code

```css
button:hover {
  background-color: blue; /* changes on hover */
}

input:focus {
  border: 2px solid green; /* when input is active */
}

li:first-child {
  color: red; /* first item */
}
```

### Interview Ready Answer

Pseudo-classes are used to define special states of elements like hover, focus, or position in the DOM. They help in adding interactivity without JavaScript.

---

## 5. Describe how to implement a CSS reset and why it is useful.

### Concepts

- Browsers have **default styles (user-agent stylesheets)**
- These defaults vary → causes inconsistency
- CSS Reset removes all default styles for consistency

Two approaches:

1. **Reset CSS**
   - Removes all styles

2. **Normalize CSS**
   - Makes styles consistent (better approach)

### Example Code

```css
/* Simple CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

```css
/* Better practice */
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

### Interview Ready Answer

A CSS reset removes default browser styles to ensure consistent rendering across browsers. It helps avoid unexpected spacing and layout issues. Modern projects often use Normalize.css instead of a full reset.

---
