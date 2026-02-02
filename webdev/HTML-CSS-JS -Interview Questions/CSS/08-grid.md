# CSS Interview Questions and Answers

---

**Topic : Flexbox**

## 36. What is the CSS Grid layout, and why is it useful?

### Answer

**CSS Grid** is a **two-dimensional layout system** that allows you to design layouts using **rows and columns at the same time**.

Unlike Flexbox (which is one-dimensional), Grid is built for **page-level layouts**.

You define a **grid container**, then place items precisely inside it.

```css
.container {
  display: grid;
}
```

### Why CSS Grid is Useful

* True 2D layouts (rows + columns together)
* Precise control over placement
* Clean, readable layout code
* No floats or complex nesting
* Ideal for dashboards, page layouts, galleries

CSS Grid separates **layout structure** from **content**, making designs predictable and scalable.

---

## 37. How do you define grid columns and rows?

### Answer

Grid columns and rows are defined using:

* `grid-template-columns`
* `grid-template-rows`

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 100px auto;
}
```

Explanation:

* `px` → fixed size
* `fr` → fraction of available space
* `auto` → size based on content

Using `repeat()` for cleaner code:

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
}
```

This creates a **3×2 grid** with equal columns.

---

## 38. What is the difference between `grid-template-areas` and `grid-template-columns`?

### Answer

### `grid-template-columns`

Defines the **size and number of columns**.

```css
.container {
  grid-template-columns: 1fr 2fr;
}
```

Used for **structural sizing**.

---

### `grid-template-areas`

Defines the **layout visually using names**.

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}
```

Each grid item is assigned an area:

```css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
```

---

### Key Difference

* `grid-template-columns` → controls **dimensions**
* `grid-template-areas` → controls **layout meaning & placement**

Areas improve **readability**, columns control **measurement**.

---

## 39. How do you place items in the CSS Grid layout?

### Answer

Grid items can be placed in **three main ways**.

---

### 1. Automatic Placement (Default)

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Items fill row by row automatically.

---

### 2. Using Grid Lines

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

This places the item between specific grid lines.

---

### 3. Using Named Areas

```css
.item {
  grid-area: content;
}
```

Works with `grid-template-areas` for semantic layouts.

---

### Shorthand Placement

```css
.item {
  grid-area: 1 / 1 / 2 / 3;
}
```

Order:

```
row-start / column-start / row-end / column-end
```

---

## 40. How is overlapping of grid items handled in CSS Grid?

### Answer

Grid items **can overlap** if they are placed in the same grid area or span over each other.

```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.item2 {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}
```

### Which Item Appears on Top?

Stacking order rules:

1. Higher `z-index` wins
2. Later elements in HTML appear on top by default

```css
.item2 {
  z-index: 2;
}
```

### Important Notes

* Overlapping is **intentional**, not a bug
* `z-index` works normally in Grid
* Useful for badges, overlays, layered UI

---

### Final Summary

* CSS Grid is a 2D layout system
* Rows and columns are defined explicitly
* Areas improve semantic layout clarity
* Items can be placed automatically or manually
* Overlapping is controlled using placement and `z-index`
