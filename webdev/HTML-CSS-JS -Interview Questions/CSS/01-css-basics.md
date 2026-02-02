# CSS Interview Questions and Answers
---

**Topic : Basics**

## 1. What does CSS stand for and what is its primary use?

### Concept

CSS stands for **Cascading Style Sheets**.
It is used to **control the presentation layer of a webpage** — meaning how HTML elements look on the screen.

HTML tells **what** the content is (structure),
CSS tells **how** it should look (style).

CSS handles:

* Colors
* Fonts
* Layout
* Spacing
* Responsiveness
* Animations
* Visual appearance across devices

### Why the name “Cascading”?

Because styles “cascade” — means if multiple styles apply to an element, the browser follows priority rules (specificity, inline > external, etc.).

### Simple Example

Below is a small HTML + CSS snippet showing structure vs style.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS controls look */
    h1 {
      color: navy;
      font-size: 28px;
    }

    p {
      color: gray;
      line-height: 1.5;
    }
  </style>
</head>

<body>
  <!-- HTML controls structure -->
  <h1>Welcome to My Page</h1>
  <p>This is a simple paragraph styled using CSS.</p>
</body>
</html>
```

### Interview-friendly Explanation (Short Version)

CSS stands for Cascading Style Sheets. It is used to style and layout web pages — controlling colors, fonts, spacing, and responsiveness. HTML gives structure, while CSS adds the visual design layer. The “cascading” part means styles are applied based on priority rules.

---

## 2. How do you include CSS in your HTML document?

There are **three ways** to include CSS inside an HTML page:

1. **Inline CSS**
2. **Internal CSS** (inside `<style>` tag)
3. **External CSS** (separate `.css` file – most preferred)

Below is the clear, interview-ready explanation.

---

### 1. Inline CSS

Style is written **directly inside the HTML tag** using the `style` attribute.
Used for **quick fixes**, not recommended for large projects.

```html
<p style="color: blue; font-size: 18px;">This is inline styled text</p>
```

---

### 2. Internal CSS

CSS is written inside the `<style>` tag in the `<head>` section.
Used when you want styles for **only this single page**.

```html
<head>
  <style>
    h1 {
      color: darkgreen;
      text-align: center;
    }
  </style>
</head>

<body>
  <h1>Internal CSS Example</h1>
</body>
```

---

### 3. External CSS (Best Practice)

You create a separate `.css` file and link it using `<link>` tag.
Best for **real projects**, reusability, and clean code.

```html
<!-- HTML -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <h1>External CSS Example</h1>
</body>
```

```css
/* styles.css */
h1 {
  color: crimson;
  font-weight: bold;
}
```

---

### Short Interview Answer

CSS can be added to HTML in three ways:

1. Inline CSS using the `style` attribute,
2. Internal CSS inside a `<style>` tag in the `<head>`,
3. External CSS by linking a separate `.css` file using the `<link>` tag.
   External CSS is recommended because it keeps styling clean, reusable, and easier to maintain.

---

## 3. Can you explain the difference between class and ID selectors?

### Concept

In CSS, **class** and **ID** selectors are used to target HTML elements, but they differ in **purpose**, **usage**, and **specificity**.

---

### Class Selector (`.`)

* Used to style **multiple elements**.
* Reusable – you can apply the same class to many HTML tags.
* Begins with a **dot (.)** in CSS.
* Specificity(Specificity means priority.) is **lower** than ID.

```html
<p class="highlight">This is paragraph one.</p>
<p class="highlight">This is paragraph two.</p>
```

```css
.highlight {
  color: blue;
  font-size: 18px;
}
```

---

### ID Selector (`#`)

* Used to style **a unique, single element**.
* Should be used **once per page**.
* Begins with a **#** in CSS.
* Has **higher specificity** than a class.

```html
<h1 id="main-title">Homepage Title</h1>
```

```css
#main-title {
  color: darkred;
  text-transform: uppercase;
}
```
---- 


### Demonstrate

```html
    <!-- class -->
    <p class="highlight">Paragram one</p>
    <p class="highlight">Paragram two</p>

    <!-- id -->
    <p id="special">Paragram three</p>
    <p id="special">Paragram four</p>

    <!-- script -->
    <script>
      const special = document.getElementById("special");
      special.classList.add("highlight");
    </script>
```

---

> it working but why?

---

#### Why it appears to work

* Browsers **do not stop rendering** when HTML rules are violated
* Even though IDs must be unique, the browser still:

  * Parses both elements
  * Applies CSS normally

So visually, **nothing breaks immediately**.

---

#### What actually happens internally (important)

```js
document.getElementById("special");
```

* By definition, this API returns **only ONE element**
* Browser returns the **first element** with that ID
* Second `<p id="special">` is **ignored by JS**

So:

* Only **Paragraph three** gets the `highlight` class
* Paragraph four is untouched

It “works” **by accident**, not by correctness.

---

#### Why this is dangerous

* Silent bugs (no error thrown)
* JS cannot reach the second element
* DOM uniqueness contract is broken
* Interviewers consider this **invalid HTML**

---

#### Correct solution (what should be done)

If styling multiple elements:

```html
<p class="special">Paragram three</p>
<p class="special">Paragram four</p>
```

```js
document.querySelectorAll(".special")
  .forEach(el => el.classList.add("highlight"));
```

If targeting one element:

```html
<p id="special">Paragram three</p>
```

---

#### One-line interview answer

> “It works because browsers are forgiving, but `getElementById` returns only the first match, so this is invalid HTML and unsafe.”


----

### Key Differences (Interview Summary)

| Feature     | Class                      | ID                         |
| ----------- | -------------------------- | -------------------------- |
| Reusability | Can be used many times     | Should be used once        |
| Specificity | Lower                      | Higher                     |
| CSS Symbol  | `.` (dot)                  | `#` (hash)                 |
| Best Use    | Styling groups of elements | Targeting a unique element |

---

### Short Interview Answer

A **class** is used for styling multiple elements and is reusable. An **ID** is meant for a single, unique element and has higher specificity. Class uses `.classname`, while ID uses `#idname`. If both are applied, the ID style overrides the class.

---

## 4. What are pseudo-classes in CSS?

### Concept

A **pseudo-class** is a special keyword in CSS that lets you style an element **based on its state**, not just its name or class.

Meaning:
You apply styles **when something happens** — like when a user hovers, clicks, focuses, or when an element is the first child, visited link, etc.

Pseudo-classes always start with a **colon `:`**.

Examples of states:

* Mouse is hovering
* Link is visited
* Input is focused
* An element is the first child

---

### Common Pseudo-Classes

### 1. `:hover`

Triggered when mouse is over the element.

```css
button:hover {
  background-color: darkblue;
}
```

---

### 2. `:active`

Triggered when the element is being clicked.

```css
button:active {
  transform: scale(0.95);
}
```

---

### 3. `:focus`

Triggered when input is focused (clicked or tabbed into).

```css
input:focus {
  border-color: blue;
}
```

---

### 4. `:first-child`

Targets the first element inside a parent.

```css
p:first-child {
  color: red;
}
```

---

### 5. `:visited`

Styles already-visited links.

```css
a:visited {
  color: purple;
}
```

---

### Simple Interview Answer

Pseudo-classes are keywords that let us style elements based on their **state**, like hover, focus, active, visited, first-child, etc. They start with a colon (:) and help create interactive and state-based styling.

---

## 5. Describe how to implement a CSS reset and why it is useful

### Concept

Every browser has its **own default styling** for elements.
Example:

* `<h1>` has different margins in Chrome vs Firefox
* `<ul>` always has default padding
* `<button>` looks different on each browser

These differences create **inconsistency** in layout.

A **CSS Reset** removes all default browser styles so you can start from a **clean, consistent baseline**.

---

### Why CSS Reset is Useful

1. Makes styling consistent across all browsers
2. Removes unexpected margins/padding
3. Gives full control to the developer
4. Reduces layout bugs
5. Helps build predictable UI systems

---

### How to Implement a CSS Reset (Simple Example)

```css
/* Simple CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

This removes all margin and padding from every element and ensures box-sizing stays consistent.

---

### More Complete Reset (Commonly Used)

```css
/* Full CSS Reset */
html, body, div, span, h1, h2, h3, p, a, ul, li {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
```

---

### Short Interview Answer

A CSS reset removes the browser’s default styles so every element starts from the same baseline. This prevents inconsistent margins, paddings, and typography across browsers. It is implemented by defining reset rules at the top of your stylesheet, usually targeting all elements with `*` or using a predefined reset file.

---

