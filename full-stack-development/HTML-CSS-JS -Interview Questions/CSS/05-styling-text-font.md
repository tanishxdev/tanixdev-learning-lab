# CSS Interview Questions and Answers

---

**Topic : Styling Text and Fonts**

## 21. How do you change the font of text in CSS?

### Answer

You change the font of text using the **`font-family`** property.

It allows you to specify a **font stack** (multiple fonts as fallback).

```css
p {
  font-family: "Arial", "Helvetica", sans-serif;
}
```

How it works:

* Browser tries the first font
* If unavailable, moves to the next
* Ends with a generic family (`serif`, `sans-serif`, `monospace`)

You can also control size, weight, and style:

```css
p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
}
```

---

## 22. What is a web-safe font?

### Answer

A **web-safe font** is a font that is **pre-installed on almost all devices and browsers**, so it displays consistently without needing downloads.

Examples of web-safe fonts:

* Arial
* Times New Roman
* Verdana
* Georgia
* Courier New

Example usage:

```css
body {
  font-family: Arial, sans-serif;
}
```

Why they are used:

* No loading delay
* No dependency on external files
* Guaranteed compatibility

Modern practice often uses **custom fonts**, but web-safe fonts are still useful as **fallbacks**.

---

## 23. When would you use a font shorthand property?

### Answer

The **font shorthand** property is used when you want to define **multiple font-related properties in a single line**.

It improves readability and reduces CSS size.

Syntax order (important):

```
font: style variant weight size/line-height family;
```

Example:

```css
p {
  font: italic small-caps 600 16px/1.5 "Arial", sans-serif;
}
```

This replaces:

```css
p {
  font-style: italic;
  font-variant: small-caps;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
```

Used when:

* Writing clean, compact CSS
* You want to reset all font properties at once

---

## 24. How can you include and use custom fonts on a webpage?

### Answer

There are **two common ways** to use custom fonts.

---

### Method 1: Using `@font-face`

You host the font files yourself.

```css
@font-face {
  font-family: "MyFont";
  src: url("MyFont.woff2") format("woff2"),
       url("MyFont.woff") format("woff");
}

body {
  font-family: "MyFont", sans-serif;
}
```

This gives full control and works offline.

---

### Method 2: Using Google Fonts (Most common)

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: "Roboto", sans-serif;
}
```

Why custom fonts are used:

* Better typography
* Brand identity
* Modern UI consistency

---

## 25. What is the difference between `em` and `rem` units?

### Answer

Both `em` and `rem` are **relative units**, but they differ in **what they depend on**.

---

### `em`

* Relative to the **font size of the parent element**
* Can compound (multiply) when nested

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em; /* 32px */
}
```

Nested `em` values can cause unexpected sizing.

---

### `rem`

* Relative to the **root element (`html`)**
* Does NOT compound
* More predictable

```css
html {
  font-size: 16px;
}

p {
  font-size: 2rem; /* 32px */
}
```

---

### Key Difference

* `em` depends on parent → flexible but risky
* `rem` depends on root → consistent and scalable

---

### Final Short Summary

* Fonts are changed using `font-family`
* Web-safe fonts are pre-installed on devices
* Font shorthand combines multiple font properties
* Custom fonts are added using `@font-face` or Google Fonts
* `em` is relative to parent, `rem` is relative to root
