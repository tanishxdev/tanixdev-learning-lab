# SECTION 8 — HTML COMPONENTS (COMMON UI ELEMENTS)

---

covered:

1. Buttons
2. Navigation Bars
3. Dropdowns
4. Tabs
5. Accordions
6. Cards
7. Image Gallery
8. Forms (structure recap)
9. Hero Section
10. Modal (structure only)
11. Table layouts
12. Pagination
13. Breadcrumbs
14. Components best practices
15. Interview questions

---

# PART 1 — BUTTONS

---

Basic button:

```html
<button>Click Me</button>
```

Submit button:

```html
<button type="submit">Submit</button>
```

Icon button:

```html
<button>
    <img src="icon.png" alt="" width="16">  
    Save
</button>
```

Link styled as button:

```html
<a href="#" class="btn">Read More</a>
```

---

# PART 2 — NAVIGATION BAR (HTML STRUCTURE)

---

```html
<nav>
    <div class="logo">Brand</div>

    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

Mobile hamburger menu:

```html
<button class="menu-btn">☰</button>
```

---

# PART 3 — DROPDOWN MENU (STRUCTURE)

---

```html
<div class="dropdown">
    <button>Menu</button>

    <ul class="dropdown-content">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
    </ul>
</div>
```

CSS handles show/hide later.

---

# PART 4 — TABS

---

```html
<div class="tabs">
    <button class="tab active" data-target="tab1">Tab 1</button>
    <button class="tab" data-target="tab2">Tab 2</button>
</div>

<div id="tab1" class="tab-content active">
    Tab 1 Content
</div>

<div id="tab2" class="tab-content">
    Tab 2 Content
</div>
```

---

# PART 5 — ACCORDION (HTML)

---

```html
<div class="accordion">

    <div class="acc-item">
        <button class="acc-btn">Section 1</button>
        <div class="acc-content">
            <p>Content for section 1.</p>
        </div>
    </div>

    <div class="acc-item">
        <button class="acc-btn">Section 2</button>
        <div class="acc-content">
            <p>Content for section 2.</p>
        </div>
    </div>

</div>
```

---

# PART 6 — CARD COMPONENT (HTML STRUCTURE)

---

```html
<div class="card">
    <img src="image.jpg" alt="product">
    <h3>Product Title</h3>
    <p>Short description goes here.</p>
    <button>Buy Now</button>
</div>
```

Card with price:

```html
<div class="card">
    <img src="img.jpg">
    <h3>Chair</h3>
    <p>Comfortable wooden chair</p>
    <strong>$129</strong>
</div>
```

---

# PART 7 — IMAGE GALLERY

---

```html
<div class="gallery">
    <img src="1.jpg" alt="">
    <img src="2.jpg" alt="">
    <img src="3.jpg" alt="">
</div>
```

Lightbox-ready structure:

```html
<a href="large1.jpg" class="gallery-item">
    <img src="thumb1.jpg">
</a>
```

---

# PART 8 — FORM COMPONENTS (STRUCTURE RECAP)

---

Contact form:

```html
<form>
    <label>Name</label>
    <input type="text">

    <label>Email</label>
    <input type="email">

    <label>Message</label>
    <textarea></textarea>

    <button type="submit">Send</button>
</form>
```

Login form:

```html
<form>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</form>
```

---

# PART 9 — HERO SECTION (LANDING PAGE STRUCTURE)

---

```html
<section class="hero">
    <h1>Build Your Dream Website</h1>
    <p>Professional tools to design better.</p>
    <button>Get Started</button>
</section>
```

Hero with image:

```html
<section class="hero">
    <div class="hero-text">
        <h1>Modern Web Solutions</h1>
        <p>Create stunning user experiences.</p>
    </div>

    <div class="hero-img">
        <img src="hero.png">
    </div>
</section>
```

---

# PART 10 — MODAL (HTML STRUCTURE)

---

```html
<div class="modal" id="modal">
    <div class="modal-box">
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
        <button class="close-btn">Close</button>
    </div>
</div>
```

Modal is hidden by CSS; shown with JS.

---

# PART 11 — TABLE LAYOUT COMPONENT

---

```html
<table class="data-table">
    <thead>
        <tr>
            <th>Name</th><th>Email</th><th>Role</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Amit</td><td>amit@gmail.com</td><td>Admin</td>
        </tr>
    </tbody>
</table>
```

---

# PART 12 — PAGINATION STRUCTURE

---

```html
<div class="pagination">
    <a href="#">&laquo;</a>
    <a class="active" href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">&raquo;</a>
</div>
```

---

# PART 13 — BREADCRUMB COMPONENT

---

```html
<nav class="breadcrumb">
    <a href="/">Home</a> &gt;
    <a href="/products">Products</a> &gt;
    <span>Chairs</span>
</nav>
```

---

# PART 14 — COMPONENT ARCHITECTURE (BEST PRACTICES)

---

### 1. Use `<section>` for grouping

### 2. Use `<article>` for stand-alone content

### 3. Use `<nav>` for navigation

### 4. Use `<header>` & `<footer>` inside sections

### 5. Keep structure simple → style later with CSS

### 6. Never use `<div>` when semantic tag available

### 7. Use class names to enable reusable components

---

# SECTION 8 — INTERVIEW QUESTIONS

---

1. How do you structure a navigation bar?
2. Difference between tabs and accordion?
3. How to structure a card component?
4. What is the HTML structure of a modal?
5. How to build a responsive image gallery?
6. Why is hero section important in landing pages?
7. What tags should NOT be used for navbars?
8. What is the correct semantic tag for blog posts?
9. Why use `<figure>` for images?
10. How do you ensure UI components are reusable?

---
