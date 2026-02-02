# HTML Interview Questions and Answers

---

**Topic : Tables**

# 40. How do you create a table in HTML?

## Complete Explanation

In HTML, a table is used to display **structured data** in rows and columns (like reports, pricing tables, schedules).

A basic table is created using these core elements:

* `<table>` → wraps the entire table
* `<tr>` (table row) → defines a row
* `<th>` (table header cell) → header cell (bold + centered by default)
* `<td>` (table data cell) → normal data cell

### Basic Structure Flow

```
table
 ├── tr (row)
 │    ├── th / td
 │    ├── th / td
 ├── tr
 │    ├── td
 │    ├── td
```

### Important Notes

* Tables are for **data**, not layout (layout tables are bad practice).
* `<th>` adds semantic meaning (important for accessibility).
* CSS is used to style borders, spacing, alignment, etc.

---

## Code Example (with comments)

```html
<!-- Basic HTML table -->
<table border="1">
  <!-- Table header row -->
  <tr>
    <th>Name</th>        <!-- Column header -->
    <th>Age</th>
    <th>City</th>
  </tr>

  <!-- Table data row -->
  <tr>
    <td>Alice</td>       <!-- Table cell -->
    <td>24</td>
    <td>Delhi</td>
  </tr>

  <!-- Another data row -->
  <tr>
    <td>Bob</td>
    <td>30</td>
    <td>Mumbai</td>
  </tr>
</table>
```

### Slightly Better Version (with caption)

```html
<table border="1">
  <caption>User Information</caption> <!-- Table title -->

  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>

  <tr>
    <td>Ravi</td>
    <td>28</td>
    <td>Bangalore</td>
  </tr>
</table>
```

---

## Short Answer Version

Use `<table>` with `<tr>` for rows, `<th>` for headers, and `<td>` for data cells to create an HTML table.
Example:
`<table><tr><th>Head</th></tr><tr><td>Data</td></tr></table>`

---

# 41. What are **thead**, **tbody**, and **tfoot** in a table?

## Complete Explanation

`<thead>`, `<tbody>`, and `<tfoot>` are **semantic grouping elements** used inside an HTML table to logically separate different parts of the table.

They **do not change the visual layout by default**, but they improve:

* Readability of code
* Accessibility (screen readers)
* Styling with CSS
* Table behavior (like fixed headers, scrolling bodies)

---

## 1. `<thead>` — Table Header Group

### Purpose

* Groups **header rows** of the table
* Usually contains `<th>` elements
* Defines column headings

### Benefits

* Screen readers identify column headers
* CSS can easily style header rows
* Useful for sticky headers

---

## 2. `<tbody>` — Table Body Group

### Purpose

* Contains the **main data rows**
* Can contain multiple `<tr>` rows
* Default container if `<tbody>` is omitted (browser inserts it automatically)

---

## 3. `<tfoot>` — Table Footer Group

### Purpose

* Contains **summary or footer rows**
* Used for totals, averages, notes
* Can appear **before `<tbody>` in HTML**, but browser renders it at the bottom

This helps browsers render footers early for large tables.

---

## Important Rules

* Order in HTML: `<thead>`, `<tfoot>`, `<tbody>` (recommended)
* Visual order: header → body → footer
* Each group contains `<tr>` rows only

---

## Code Example (with comments)

```html
<table border="1">

  <!-- Table Header -->
  <thead>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>

  <!-- Table Footer (summary) -->
  <tfoot>
    <tr>
      <td>Total</td>
      <td>6</td>
      <td>₹300</td>
    </tr>
  </tfoot>

  <!-- Table Body -->
  <tbody>
    <tr>
      <td>Pen</td>
      <td>2</td>
      <td>₹40</td>
    </tr>
    <tr>
      <td>Notebook</td>
      <td>4</td>
      <td>₹260</td>
    </tr>
  </tbody>

</table>
```

### What this shows

* Headers are grouped in `<thead>`
* Main data is inside `<tbody>`
* Summary row is in `<tfoot>`

---

## Short Answer Version

`<thead>` groups header rows, `<tbody>` contains main data rows, and `<tfoot>` holds summary/footer rows.
They improve table structure, accessibility, and styling without changing default appearance.

---

# 42. What is **colspan** and **rowspan**?

## Complete Explanation

`colspan` and `rowspan` are attributes used in table cells (`<td>` or `<th>`) to **merge multiple cells** either horizontally or vertically.

They help create **complex table layouts**, such as headers spanning multiple columns or rows.

---

## 1. **colspan** (Column Span)

### Purpose

`colspan` allows a cell to **stretch across multiple columns**.

### When to use

* Table headers spanning multiple columns
* Summary rows
* Grouped headings

### Syntax

```html
<td colspan="number">
```

Example: `colspan="3"` means the cell covers **3 columns**.

---

## 2. **rowspan** (Row Span)

### Purpose

`rowspan` allows a cell to **stretch across multiple rows**.

### When to use

* Grouping rows under one category
* Creating side headers
* Timetables

### Syntax

```html
<td rowspan="number">
```

Example: `rowspan="2"` means the cell covers **2 rows**.

---

## Important Rules

* The total columns per row must match after applying spans.
* Incorrect span values can break table layout.
* Can be used on both `<td>` and `<th>`.

---

## Code Example (with comments)

```html
<table border="1">

  <!-- Header row using colspan -->
  <tr>
    <th colspan="3">Student Marks</th> <!-- Spans 3 columns -->
  </tr>

  <!-- Column headers -->
  <tr>
    <th>Name</th>
    <th>Math</th>
    <th>Science</th>
  </tr>

  <!-- Data rows -->
  <tr>
    <td rowspan="2">Aman</td> <!-- Spans 2 rows -->
    <td>85</td>
    <td>90</td>
  </tr>

  <tr>
    <td>88</td>
    <td>92</td>
  </tr>

</table>
```

### What happens visually

* "Student Marks" covers all 3 columns
* "Aman" appears once but applies to two rows

---

## Short Answer Version

`colspan` merges a cell across multiple columns, while `rowspan` merges a cell across multiple rows.
They are used to create complex table layouts.

---

# 43. How do you make a table **accessible**?

## Complete Explanation

Making tables accessible ensures that **screen readers**, **keyboard users**, and **assistive technologies** can correctly understand and navigate tabular data.

Accessible tables clearly define:

* What the table is about
* Which cells are headers
* How data cells relate to headers

Below are the **core practices**.

---

### 1. Use `<caption>` to describe the table

`<caption>` provides a **title/summary** of the table.
Screen readers announce it before reading the table.

---

### 2. Use `<th>` for header cells (not `<td>`)

`<th>` indicates **header cells**.
By default, screen readers treat them as headers.

---

### 3. Use `scope` attribute on `<th>`

The `scope` attribute explicitly defines what a header applies to.

Values:

* `scope="col"` → column header
* `scope="row"` → row header

This is very important for complex tables.

---

### 4. Group table sections using `<thead>`, `<tbody>`, `<tfoot>`

These help assistive technologies understand the table structure.

---

### 5. Avoid layout tables

Tables should be used **only for data**, not for page layout.

---

### 6. Use `headers` and `id` (for complex tables)

In complex tables (multiple headers), explicitly link data cells to headers.

---

### 7. Ensure keyboard navigation works

Users should be able to:

* Tab into the table
* Navigate logically through cells

---

## Code Example (with comments)

```html
<table border="1">

  <!-- Table caption for screen readers -->
  <caption>Monthly Sales Report</caption>

  <!-- Table header group -->
  <thead>
    <tr>
      <th scope="col">Product</th>   <!-- Column header -->
      <th scope="col">January</th>
      <th scope="col">February</th>
    </tr>
  </thead>

  <!-- Table body -->
  <tbody>
    <tr>
      <th scope="row">Laptop</th>    <!-- Row header -->
      <td>120</td>
      <td>150</td>
    </tr>

    <tr>
      <th scope="row">Mobile</th>
      <td>200</td>
      <td>180</td>
    </tr>
  </tbody>

  <!-- Table footer -->
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>320</td>
      <td>330</td>
    </tr>
  </tfoot>

</table>
```

### Example for complex table (headers + id)

```html
<table border="1">
  <tr>
    <th id="p">Product</th>
    <th id="q1">Q1</th>
    <th id="q2">Q2</th>
  </tr>

  <tr>
    <td headers="p q1">Laptop - Q1</td>
    <td headers="q1">100</td>
    <td headers="q2">120</td>
  </tr>
</table>
```

---

## Short Answer Version

Use `<caption>`, `<th>` with proper `scope`, and group rows with `<thead>`, `<tbody>`, and `<tfoot>`.
For complex tables, link headers using `id` and `headers`.
These practices make tables readable for screen readers and accessible users.

---

# 44. How can tables be made **responsive**?

## Complete Explanation

HTML tables are naturally **wide**, so on small screens (mobile), they often overflow.
Making tables responsive means ensuring they remain **readable and usable on all screen sizes**.

There is **no single perfect method**. Different situations require different techniques.
Below are the **most common and interview-expected approaches**.

---

### 1. Horizontal Scrolling (Most Common & Safest)

The table stays intact, and the user scrolls horizontally on small screens.

**Why use it**

* Keeps table structure unchanged
* Best for large data tables
* Easiest and safest solution

---

### 2. CSS Media Queries (Hide / Reformat Columns)

On smaller screens, you hide less important columns or adjust layout.

**Why use it**

* Improves readability
* Useful when some columns are optional

---

### 3. Converting Rows into Cards (Mobile-first approach)

Each row becomes a **card-style layout** on small screens.

**Why use it**

* Best UX on mobile
* Common in modern dashboards
* More complex but very effective

---

### 4. Using `display: block` for Table Elements

Table rows and cells are stacked vertically.

**Why use it**

* Simple solution
* Often combined with `data-label` for context

---

### 5. Using `<colgroup>` to control column widths

Helps manage column sizing, especially when combined with CSS.

---

## Code Example (with comments)

### Method 1: Horizontal Scroll (Recommended)

```html
<!-- Wrapper enables horizontal scrolling -->
<div style="overflow-x: auto;">
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
      <th>Phone</th>
    </tr>
    <tr>
      <td>Aman</td>
      <td>aman@mail.com</td>
      <td>Delhi</td>
      <td>9999999999</td>
    </tr>
  </table>
</div>
```

---

### Method 2: Media Query (Hide Column)

```html
<style>
@media (max-width: 600px) {
  .hide-mobile {
    display: none;
  }
}
</style>

<table border="1">
  <tr>
    <th>Name</th>
    <th class="hide-mobile">Email</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Ravi</td>
    <td class="hide-mobile">ravi@mail.com</td>
    <td>Mumbai</td>
  </tr>
</table>
```

---

### Method 3: Card-Style Table (Advanced)

```html
<style>
@media (max-width: 600px) {
  table, thead, tbody, tr {
    display: block;
  }

  td {
    display: block;
    padding-left: 50%;
    position: relative;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    font-weight: bold;
  }
}
</style>

<table border="1">
  <tr>
    <td data-label="Name">Aman</td>
    <td data-label="City">Delhi</td>
    <td data-label="Age">25</td>
  </tr>
</table>
```

---

## Short Answer Version

Tables can be made responsive by wrapping them in a horizontally scrollable container, using CSS media queries to hide or adjust columns, or converting rows into card-style layouts on small screens. The most common and safe approach is horizontal scrolling using `overflow-x: auto`.
