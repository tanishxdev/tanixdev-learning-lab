# SECTION 2 — CSS SELECTORS (DETAILED)

---

cover:

1. Basic Selectors
   • Element
   • Class
   • ID
   • Universal
   • Grouping

2. Attribute Selectors

3. Combinators
   • Descendant
   • Child
   • Adjacent sibling
   • General sibling

4. Pseudo-classes

5. Pseudo-elements

This is a deep section. Mastering this means you can target any element precisely.

---
# PART 1 — BASIC SELECTORS

---
### 1. Element Selector

Targets all elements of that tag.

```css
p {
    color: blue;
}
```

### 2. Class Selector (Most common)

Reusable selector.

```css
.title {
    font-size: 24px;
}
```

HTML:

```html
<h1 class="title">Hello</h1>
```

### 3. ID Selector

Must be unique per page.

```css
#header {
    background: black;
}
```

HTML:

```html
<div id="header"></div>
```

### 4. Universal Selector

Targets everything.

```css
* {
    margin: 0;
    padding: 0;
}
```

### 5. Grouping Selector

Apply same style to multiple elements.

```css
h1, h2, h3 {
    font-family: Arial;
}
```

---

# MINI EXAMPLE

```html
<style>
p { color: green; }            /* element */
.title { font-size: 20px; }    /* class */
#main { background: lightgray; } /* id */
*, h1 { margin: 0; }           /* universal + grouping */
</style>
```

---
# PART 2 — ATTRIBUTE SELECTORS

---
Used to target elements based on attributes.

### 1. [attr]

```css
input[type] {
    border: 2px solid red;
}
```

### 2. [attr=value]

```css
input[type="email"] {
    background: lightyellow;
}
```

### 3. Starts with ^=

```css
a[href^="https"] {
    color: green;
}
```

### 4. Ends with $=

```css
img[src$=".png"] {
    border: 3px solid blue;
}
```

### 5. Contains *=

```css
a[href*="login"] {
    color: red;
}
```

---

# Mini Example

```html
<style>
input[required] { border: 2px solid red; }
a[href^="https"] { color: green; }
img[src$=".jpg"] { border: 3px solid orange; }
</style>
```

---
# PART 3 — COMBINATORS

---
Combinators define **relationships** between elements.

---

### 1. Descendant Selector (space)

Selects any level inside parent.

```css
div p { color: blue; }
```

Matches:

```html
<div>
    <p>Targeted</p>
</div>
```

---

### 2. Child Selector (>)

Direct children only.

```css
ul > li {
    color: red;
}
```

Matches:

```
<ul>
  <li>Direct child</li>  ← targeted
</ul>
```

---

### 3. Adjacent Sibling (+)

Targets the next element immediately after.

```css
h1 + p {
    color: green;
}
```

Works only if p is **right after** h1.

---

### 4. General Sibling (~)

Selects all siblings after.

```css
h1 ~ p {
    color: brown;
}
```

Matches all p elements after the h1 at same level.

---
# COMBINATORS – VISUAL EXAMPLE

```html
<style>
div p { color: blue; }       /* descendant */
div > p { color: red; }      /* child */
h2 + p { background: yellow; } /* adjacent */
h2 ~ p { border: 1px solid black; } /* general sibling */
</style>
```

HTML:

```html
<div>
    <p>Red (direct child)</p>
    <span>
        <p>Blue (descendant)</p>
    </span>
</div>

<h2>Title</h2>
<p>Yellow (adjacent)</p>
<p>Border (general sibling)</p>
```

---
# PART 4 — PSEUDO-CLASSES

---
Used for **states** (hover, focus), positions, form validation, etc.

### 1. :hover

```css
button:hover {
    background: blue;
}
```

### 2. :focus

```css
input:focus {
    border-color: green;
}
```

### 3. :active

```css
a:active {
    color: red;
}
```

### 4. :first-child

```css
p:first-child {
    color: purple;
}
```

### 5. :nth-child()

```css
li:nth-child(2) {
    color: orange;
}
```

### 6. :checked

```css
input:checked {
    outline: 2px solid red;
}
```

---

# Mini Example

```css
ul li:nth-child(odd) { background: lightgray; }
ul li:nth-child(even) { background: white; }
```

---
# PART 5 — PSEUDO-ELEMENTS

---
Pseudo-elements create **virtual elements**.

### 1. ::before

### 2. ::after

### 3. ::first-letter

### 4. ::first-line

### 5. ::selection

---

## Example: ::before and ::after

```css
h1::before {
    content: ">>> ";
    color: red;
}

h1::after {
    content: " <<<";
    color: blue;
}
```

---

## Example: ::first-letter

```css
p::first-letter {
    font-size: 40px;
    color: purple;
}
```

---

## Example: ::selection

```css
p::selection {
    background: yellow;
    color: black;
}
```

---
# SECTION 2 — FULL PRACTICE MINI DEMO

---
```html
<!DOCTYPE html>
<html>
<head>
<style>

/* Basic selectors */
h1 { color: navy; }
.title { color: darkred; }
#main { padding: 20px; background: #eee; }

/* Attribute selector */
input[type="email"] { border: 2px solid orange; }

/* Combinator selector */
div > p { color: red; }

/* Pseudo-class */
button:hover { background: black; color: white; }

/* Pseudo-element */
h1::after { content: " — CSS Selectors"; color: gray; }

</style>
</head>

<body>

<h1 class="title" id="main-title">Main Heading</h1>

<div id="main">
    <p>I am a direct child</p>
    <span><p>I am a deeper descendant</p></span>
</div>

<input type="email" placeholder="Enter email">

<br><br>
<button>Hover Me</button>

</body>
</html>
```

---
# SECTION 2 — INTERVIEW QUESTIONS (CONSOLIDATED)

---
1. Difference between class and id selectors?
2. What is the universal selector used for?
3. Explain the difference between descendant and child selectors.
4. What does the adjacent sibling selector do?
5. What is the difference between pseudo-classes and pseudo-elements?
6. What does nth-child(odd) mean?
7. Can pseudo-elements be applied to all HTML elements?
8. How do you select all input fields except type="submit"?
9. Which selector has higher specificity: class or attribute?
10. What happens if ::before has no content?

---