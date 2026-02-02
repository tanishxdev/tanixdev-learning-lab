# CSS Interview Questions and Answers

---

**Topic : Responsive Design and Media Queries**

## 41. What is a media query?

### Answer

A **media query** is a CSS technique used to apply styles **based on device characteristics** such as screen width, height, resolution, or orientation.

It allows your layout to **adapt to different screen sizes**.

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

This CSS runs **only when screen width is 768px or less**.

Common conditions:

* `width`, `height`
* `min-width`, `max-width`
* `orientation`
* `resolution`

Media queries are the **core of responsive design**.

---

## 42. How does the viewport meta tag assist with mobile responsive designs?

### Answer

The **viewport meta tag** tells the browser **how to scale and size the page** on mobile devices.

Without it, mobile browsers render pages as if they are desktop-sized.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

What it does:

* `width=device-width` → sets layout width to device screen width
* `initial-scale=1.0` → prevents automatic zooming

Why it’s important:

* Enables proper media query behavior
* Prevents horizontal scrolling
* Ensures correct font and layout scaling

Without this tag, responsive CSS **will not work correctly on mobile**.

---

## 43. Describe how to create a mobile-first responsive design.

### Answer

**Mobile-first design** means designing for **small screens first**, then enhancing for larger screens.

Steps:

1. Write base CSS for mobile
2. Add styles for larger screens using `min-width` media queries

Example:

```css
/* Mobile (default) */
.container {
  display: block;
}

/* Tablet and above */
@media (min-width: 768px) {
  .container {
    display: flex;
  }
}
```

Why mobile-first is recommended:

* Better performance on mobile
* Cleaner CSS
* Progressive enhancement
* Easier scaling to larger screens

Mobile-first uses **`min-width`**, not `max-width`.

---

## 44. How can you build a layout that changes from a two-column to a single-column with media queries?

### Answer

You define a **two-column layout for large screens**, then switch to **single-column** on smaller screens.

Example using Flexbox:

```css
.container {
  display: flex;
  gap: 20px;
}

.column {
  flex: 1;
}
```

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

Result:

* Desktop → two columns side by side
* Mobile → stacked single column

Same logic works with CSS Grid using `grid-template-columns`.

---

## 45. Explain the use of `min-width` and `max-width` in media queries.

### Answer

`min-width` and `max-width` define **breakpoints** where styles apply.

---

### `min-width`

Applies styles **from that width and above**.

```css
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

Used for:

* Mobile-first design
* Enhancing layout for larger screens

---

### `max-width`

Applies styles **up to that width**.

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

Used for:

* Desktop-first design
* Fixing small-screen issues

---

### Key Difference

* `min-width` → upward scaling
* `max-width` → downward scaling

---

### Final Summary

* Media queries apply CSS conditionally
* Viewport tag enables proper mobile scaling
* Mobile-first starts with small screens
* Layouts adapt using breakpoints
* `min-width` and `max-width` control responsiveness boundaries
