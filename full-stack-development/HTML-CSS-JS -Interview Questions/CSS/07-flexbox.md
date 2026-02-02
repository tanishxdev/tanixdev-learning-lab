# CSS Interview Questions and Answers

---

**Topic : Flexbox**

## 31. Describe Flexbox and its advantages.

### Answer

**Flexbox (Flexible Box Layout)** is a one-dimensional layout system designed to arrange items in a **row or column** efficiently.

Flexbox focuses on **space distribution, alignment, and responsiveness** without relying on floats or complex calculations.

Key ideas:

* Parent becomes a **flex container**
* Children become **flex items**
* Layout is controlled along a **main axis** and a **cross axis**

```css
.container {
  display: flex;
}
```

### Advantages

* Easy horizontal & vertical alignment
* Responsive by default
* No floats or clearfix hacks
* Dynamic sizing of elements
* Works well for navbars, cards, toolbars, layouts

---

## 32. How does `flex-grow` work?

### Answer

`flex-grow` defines **how much available free space** a flex item should take relative to others.

Default value: `0` (item does not grow)

```css
.item {
  flex-grow: 1;
}
```

Example:

```css
.container {
  display: flex;
}

.item1 { flex-grow: 1; }
.item2 { flex-grow: 2; }
```

Result:

* `item2` gets **twice the space** of `item1`

Important points:

* Works only when there is **extra space**
* Values are **relative ratios**, not fixed sizes

---

## 33. Explain the difference between `justify-content` and `align-items`.

### Answer

The difference depends on **axis direction**.

---

### `justify-content`

* Aligns items along the **main axis**
* Main axis is row by default

```css
.container {
  display: flex;
  justify-content: center;
}
```

Controls:

* `flex-start`
* `center`
* `space-between`
* `space-around`
* `space-evenly`

---

### `align-items`

* Aligns items along the **cross axis**

```css
.container {
  display: flex;
  align-items: center;
}
```

Controls:

* `stretch` (default)
* `center`
* `flex-start`
* `flex-end`
* `baseline`

---

### Key Difference

* `justify-content` → main axis
* `align-items` → cross axis

---

## 34. When would you use `align-self`?

### Answer

`align-self` is used when you want to **override alignment for a single flex item**, without affecting others.

It works on the **cross axis**.

```css
.item {
  align-self: flex-end;
}
```

Use cases:

* Highlighting one item
* Special alignment exceptions
* UI badges, buttons, icons

It overrides `align-items` set on the container.

---

## 35. How do you create equal-width columns using Flexbox?

### Answer

The easiest way is using `flex: 1` on each child.

```css
.container {
  display: flex;
}

.column {
  flex: 1;
}
```

All columns automatically take **equal width**, regardless of content.

Alternative:

```css
.column {
  flex-grow: 1;
  flex-basis: 0;
}
```

Why it works:

* `flex-basis: 0` removes content-based width
* `flex-grow: 1` distributes space evenly

---

### Final Summary

* Flexbox is a 1D layout system for responsive design
* `flex-grow` controls space expansion
* `justify-content` aligns along main axis
* `align-items` aligns along cross axis
* `align-self` customizes one item
* Equal columns use `flex: 1`
