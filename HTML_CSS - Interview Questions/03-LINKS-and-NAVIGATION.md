# CHAPTER 3 — LINKS & NAVIGATION
---

## 16) How do you create a hyperlink in HTML?

### Concept

Use the `<a>` (anchor) tag with the `href` attribute.

### Interview-Style Answer

A hyperlink is created using the `<a>` tag, with the destination URL placed inside the `href` attribute. The text inside the tag becomes clickable.

### Code

```html
<!-- Basic hyperlink -->
<a href="https://example.com">Visit Example</a>
```

### Notes

Any HTML element can become a link if wrapped inside `<a>`.

---

## 17) What is the difference between relative and absolute URLs?

### Concept

URLs can refer to:

1. **Absolute URL**
   Full path including protocol + domain.
   Use for external links.

2. **Relative URL**
   Path relative to the current website’s folder.
   Used for internal navigation.

### Interview-Style Answer

Absolute URLs point to resources with the full web address, while relative URLs point to resources relative to the current page’s location.

### Code

```html
<!-- Absolute URL -->
<a href="https://mywebsite.com/about">About Us (absolute)</a>

<!-- Relative URL -->
<a href="/about">About Us (relative)</a>         <!-- Root-relative -->
<a href="contact.html">Contact (relative)</a>     <!-- Same folder -->
```

### Notes

Relative URLs break if folder structure changes; absolute URLs remain stable.

---

## 18) How can you open a link in a new tab?

### Concept

Use the `target="_blank"` attribute.

### Interview-Style Answer

Setting `target="_blank"` tells the browser to open the link in a new tab.

### Code

```html
<a href="https://developer.mozilla.org" target="_blank">
  MDN Web Docs
</a>
```

### Important Security Note

Add `rel="noopener noreferrer"` to avoid security and performance issues.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Safe External Link
</a>
```

---

## 19) How do you create an anchor to jump to a specific part of the page?

### Concept

Use an ID on the target element and link to it using `#id`.

### Interview-Style Answer

Assign an `id` to the section you want to jump to and create a hyperlink referencing `#id`. The browser scrolls automatically.

### Code

```html
<!-- Navigation link -->
<a href="#contactSection">Go to Contact</a>

<!-- Target section -->
<h2 id="contactSection">Contact Us</h2>
<p>Phone: 9876543210</p>
```

### Notes

Anchors work without JavaScript and are important for accessibility and long documents.

---

## 20) How do you link to a downloadable file in HTML?

### Concept

Use the `<a>` tag with the `download` attribute.

### Interview-Style Answer

Adding the `download` attribute tells the browser to download the file instead of opening it in the browser.

### Code

```html
<a href="files/resume.pdf" download>
  Download Resume
</a>
```

You can also specify a custom file name:

```html
<a href="files/report.pdf" download="Student_Report_2025.pdf">
  Download Report
</a>
```