# HTML Interview Questions and Answers
---

**Topic : Basics**

# 1. What does HTML stand for and what is its purpose?

## Complete Explanation

HTML stands for **HyperText Markup Language**.
It is the **standard language** used to create the structure of web pages.
HTML does not handle styling or logic; instead, it defines **what elements appear on the page**, such as headings, paragraphs, images, buttons, forms, links, etc.

Browsers read HTML and render it into a visual webpage.
HTML works using **tags** (like `<p>`, `<h1>`, `<img>`) that tell the browser what each piece of content represents.

## Code Example (with comments)

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>This is a heading</h1>     <!-- Displays a large heading -->
  <p>This is a paragraph.</p>    <!-- Displays a paragraph -->
</body>
</html>
```

## Short Answer Version

HTML stands for HyperText Markup Language. It defines the structure and content of a webpage using tags.

---

# 2. Describe the basic structure of an HTML document.

## Complete Explanation

Every HTML file follows a **standard skeleton** that browsers expect.
This includes:

1. **DOCTYPE** → tells the browser that this is an HTML5 document.
2. **html tag** → the root element containing the entire page.
3. **head tag** → metadata, title, links, scripts (not visible on page).
4. **body tag** → actual content visible to users.

This structure ensures browsers can correctly interpret and render the page.

## Code Example (with comments)

```html
<!DOCTYPE html>              <!-- Declares HTML5 document -->
<html lang="en">             <!-- Root element, defines language -->
<head>                       <!-- Contains metadata -->
  <meta charset="UTF-8">     <!-- Text encoding -->
  <title>Document Title</title>
</head>

<body>                       <!-- Visible content of the page -->
  <h1>Hello World</h1>
  <p>This is a basic HTML structure.</p>
</body>
</html>
```

## Short Answer Version

An HTML document consists of DOCTYPE, `<html>`, `<head>`, and `<body>` tags that structure the entire webpage.

---

# 3. What do DOCTYPE and html lang attributes do?

## Complete Explanation

### DOCTYPE

The DOCTYPE declaration (`<!DOCTYPE html>`) tells the browser that the document uses **HTML5 standards**.
Without DOCTYPE, browsers may switch to **quirks mode**, causing inconsistent rendering.

### html lang attribute

The `lang` attribute (e.g., `<html lang="en">`) specifies the **language of the document**.
It helps:

* Search engines (SEO)
* Screen readers and accessibility tools
* Translation tools

## Code Example (with comments)

```html
<!DOCTYPE html>                 <!-- Tells browser to use HTML5 -->
<html lang="en">                <!-- Page language is English -->
<head>
  <title>Example</title>
</head>
<body>
  <p>Content here.</p>
</body>
</html>
```

## Short Answer Version

DOCTYPE triggers HTML5 standards mode.
`lang` specifies the document’s language for SEO and accessibility.

---

# 4. What is the difference between head and body tags?

## Complete Explanation

### head

The `<head>` tag contains **metadata**, not visible on the webpage.
It includes title, meta tags, links to CSS, scripts, favicon, SEO tags, etc.

### body

The `<body>` tag contains **all visible content** such as text, images, buttons, forms, navigation, etc.

Think of **head = behind-the-scenes info** and **body = what users see**.

## Code Example (with comments)

```html
<html>
<head>
  <title>My Page</title>        <!-- Visible in browser tab only -->
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <h1>Welcome</h1>              <!-- Visible on the page -->
  <p>This is visible content.</p>
</body>
</html>
```

## Short Answer Version

`head` contains metadata and resources; `body` contains all visible content on the webpage.

---

# 5. Can you explain the purpose of meta tags in HTML?

## Complete Explanation

Meta tags provide **information about the webpage** to browsers, search engines, and social platforms.
They do not appear visually on the screen.

Common uses:

* Setting character encoding
* Controlling viewport for responsiveness
* SEO (description, keywords)
* Social media preview (Open Graph tags)
* Author information

## Code Example (with comments)

```html
<head>
  <meta charset="UTF-8">                    <!-- Text encoding -->
  <meta name="description" content="My site"> <!-- SEO -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <!-- Makes page responsive -->
</head>
```

## Short Answer Version

Meta tags give important information to browsers and search engines, such as encoding, description, and responsiveness settings.

---

# 6. How do you link a CSS file to an HTML document?

## Complete Explanation

### There are three ways to apply CSS to HTML

In HTML, CSS can be applied in **three different ways**:

1. **External CSS** (using `<link>`)
2. **Internal CSS** (using `<style>`)
3. **Inline CSS** (using `style` attribute)

Each method has a different **use-case, priority, and scope**.

---

### 1. External CSS (Recommended way)

To attach external styles, you use the `<link>` tag inside the `<head>`.

The required attributes:

* `rel="stylesheet"` → tells browser this file is CSS
* `href="file.css"` → path of the CSS file

Only **external CSS** uses the `<link>` tag.

#### Why external CSS is preferred

* Keeps HTML clean
* Same CSS can be reused across multiple pages
* Better for large projects
* Faster loading due to browser caching

---

### 2. Internal CSS

Internal CSS is written using the `<style>` tag inside the `<head>` section.

#### When internal CSS is used

* When styling is needed for **only one page**
* For quick testing or small pages
* When external file is unnecessary

---

### 3. Inline CSS

Inline CSS is written directly inside an HTML tag using the `style` attribute.

#### Why inline CSS is usually avoided

* Mixes content and styling
* Hard to maintain
* Highest priority → can cause override bugs

Used only for:

* Quick overrides
* Dynamic styles (sometimes via JS)

---

## Code Example (with comments)

### External CSS

```html
<head>
  <link rel="stylesheet" href="styles.css">  <!-- External CSS -->
</head>
```

### Internal CSS

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

### Inline CSS

```html
<p style="color: red;">Hello World</p>
```

---

## Short Answer Version

HTML supports **three ways to apply CSS**: inline, internal, and external.
To link an external CSS file, use
`<link rel="stylesheet" href="file.css">` inside the `<head>`.

---

# 7. How do you link a JavaScript file to an HTML document?

**Tags:** Important

## Complete Explanation

JavaScript is linked to HTML using the `<script>` tag.
The **key decision is where and how the script is loaded**, because it directly affects **page performance** and **DOM availability**.

---

### 1. Script loading without attributes (default behavior)

When you write:

```html
<script src="app.js"></script>
```

the browser does the following **step-by-step**:

1. Starts parsing HTML
2. Encounters `<script>`
3. **Stops HTML parsing**
4. Downloads `app.js`
5. Executes `app.js`
6. Resumes HTML parsing

Because of this blocking behavior:

* If the script is placed in `<head>`, it may run **before DOM exists**
* If placed **before `</body>`**, DOM is already loaded → safer

This is why placing scripts at the **end of `<body>`** is a common practice.

---

### 2. Placing script at the end of `<body>` (classic & safe)

* HTML loads first
* JavaScript runs after DOM is available
* No blocking of visible content

Best when:

* Script depends on DOM elements
* No need for early execution

---

### 3. Using `defer` attribute (modern best practice)

`defer` tells the browser:

* Download the script **in parallel** while parsing HTML
* Execute it **after HTML parsing is complete**
* Maintain script execution order

This gives:

* Non-blocking behavior
* Safe DOM access
* Cleaner HTML structure

Recommended for **most external scripts**.

---

### 4. Using `async` attribute (important difference)

Although not always required, interviewers often expect this distinction.

* Script downloads **in parallel**
* Executes **as soon as it finishes downloading**
* Execution order is **not guaranteed**
* Can run before DOM is fully ready

Best for:

* Analytics
* Ads
* Independent scripts

Not ideal for scripts that depend on DOM or other scripts.

---

### 5. Inline vs External JavaScript

* **Inline JS**: `<script>console.log("Hi")</script>`
* **External JS**: `<script src="app.js"></script>`

External JS is preferred because:

* Better caching
* Cleaner HTML
* Easier maintenance

---

## Code Example (with comments)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 1. Deferred script (recommended) -->
  <script src="app.js" defer></script>
</head>

<body>
  <h1 id="title">Welcome</h1>

  <!-- 2. Script at end of body (safe for DOM usage) -->
  <script src="dom-script.js"></script>

  <!-- 3. Async script (non-blocking, order not guaranteed) -->
  <script src="analytics.js" async></script>
</body>
</html>
```

```js
// dom-script.js
// DOM is available because script runs after HTML is parsed
document.getElementById("title").style.color = "blue";
```

---

## Short Answer Version

Use the `<script>` tag with `src` to link JavaScript.
Place it before `</body>` or use `defer` in `<head>` for non-blocking and safe DOM access.
Use `async` only for independent scripts.


> “defer is used to avoid blocking HTML parsing while still ensuring scripts run after the DOM is fully available, which improves performance and prevents DOM access bugs.”


### Follow-ups
---

#### async vs defer — meaning

Both `async` and `defer` are attributes used with **external JavaScript files** to control **how scripts are loaded and executed** relative to HTML parsing.

They solve one common problem:
👉 **Blocking of HTML parsing due to JavaScript loading/execution**

But they solve it **in different ways**.

---

#### Meaning of `async`

`async` means:

* Script is **downloaded in parallel** with HTML parsing
* Script is **executed immediately after download**
* HTML parsing **may pause at execution time**
* **Execution order is NOT guaranteed**

In short:

> “Run this script as soon as it’s ready. Don’t wait for HTML or other scripts.”

---

#### Meaning of `defer`

`defer` means:

* Script is **downloaded in parallel** with HTML parsing
* Script is executed **only after HTML parsing is complete**
* Execution order **is preserved**
* DOM is **fully available**

In short:

> “Download now, but execute only after the page structure is ready.”

---

#### Key behavioral difference (core intuition)

* `async` cares about **speed**
* `defer` cares about **safety + order**

---

#### Dry-run comparison (browser thinking)

**With `async`:**

1. HTML parsing starts
2. Script starts downloading
3. Script finishes downloading
4. ❗ Script executes immediately (HTML parsing pauses)
5. HTML parsing resumes

**With `defer`:**

1. HTML parsing starts
2. Script starts downloading
3. HTML parsing completes
4. ✅ Script executes

---

#### DOM access safety

* `async` → ❌ DOM may not be ready
* `defer` → ✅ DOM is guaranteed to be ready

That’s why `defer` is safer for:

* Button handlers
* Form logic
* UI interactions

---

#### Execution order guarantee

```html
<script src="a.js" async></script>
<script src="b.js" async></script>
```

* ❌ `b.js` may run before `a.js`

```html
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

* ✅ `a.js` always runs before `b.js`

---

#### Interview one-line difference (very important)

> **async** executes as soon as it’s downloaded and does not guarantee order.
> **defer** executes after HTML parsing and preserves execution order.

---

#### When to use which (real decision rule)

* Use **`defer`** → most application scripts (best practice)
* Use **`async`** → independent scripts (analytics, ads, tracking)

---


# 7.1 How do you link a JavaScript file to an HTML document?

## Complete Explanation

JavaScript is linked using the `<script>` tag, but **how you link it depends on what you want to achieve**.

Below is the **IF / WHAT-IF decision guide** interviewers expect you to understand.

---

### What if I put `<script>` in the `<head>` **without any attribute**?

```html
<head>
  <script src="app.js"></script>
</head>
```

**What happens:**

* HTML parsing stops
* Script downloads and runs immediately
* DOM may NOT exist yet

**Result:**

* DOM-related JS may break
* Slower page load

**Use when:**

* Script does not touch DOM
* Rarely recommended

---

### What if I put `<script>` at the **end of `<body>`**?

```html
<body>
  <h1 id="title">Welcome</h1>
  <script src="app.js"></script>
</body>
```

**What happens:**

* HTML loads fully first
* Script runs after DOM is ready

**Result:**

* Safe DOM access
* No blocking of visible content

**Use when:**

* Script depends on DOM
* Simple setup
* Very common practice

---

### What if I use `defer` in `<head>`?

```html
<head>
  <script src="app.js" defer></script>
</head>
```

**What happens:**

* Script downloads in parallel
* Executes after HTML parsing completes
* Execution order is preserved

**Result:**

* Best performance
* DOM is always ready
* Clean structure

**Use when:**

* Modern web apps
* Multiple scripts
* Recommended best practice

---

### What if I use `async`?

```html
<script src="app.js" async></script>
```

**What happens:**

* Script downloads in parallel
* Executes immediately after download
* Execution order NOT guaranteed

**Result:**

* Fast but unpredictable
* May run before DOM is ready

**Use when:**

* Analytics
* Ads
* Independent scripts only

---

### What if my JS needs DOM elements?

**Correct options:**

* End of `<body>`
* OR `defer`

**Wrong option:**

* `<head>` without `defer`

---

### What if I have multiple JS files with dependency?

**Correct:**

* Use `defer` (order preserved)

**Wrong:**

* Use `async` (order breaks)

---

### What if interviewer asks: “Best practice?”

**Answer:**

* Use `defer` for external scripts
* Use `async` only for non-dependent scripts
* Use body-end scripts if simplicity is preferred

---

## Code Example (with comments)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Best practice: DOM-safe + non-blocking -->
  <script src="main.js" defer></script>
</head>

<body>
  <h1 id="msg">Hello</h1>

  <!-- Safe fallback approach -->
  <script src="fallback.js"></script>

  <!-- Independent script -->
  <script src="analytics.js" async></script>
</body>
</html>
```

```js
// main.js
// DOM is guaranteed to be available
document.getElementById("msg").style.color = "green";
```

---

## Short Answer Version

Link JavaScript using `<script src="file.js"></script>`.
Use **`defer`** for best practice, **end of body** for simplicity, and **`async`** only for independent scripts like analytics.

### JavaScript Linking in HTML — Complete Concept Table

| Situation / What if                  | Script Placement / Attribute           | HTML Parsing | Script Download | Script Execution    | DOM Ready? | Order Guaranteed? | When to Use                            |
| ------------------------------------ | -------------------------------------- | ------------ | --------------- | ------------------- | ---------- | ----------------- | -------------------------------------- |
| Script in `<head>` without attribute | `<script src="app.js"></script>`       | **Blocked**  | Blocking        | Immediate           | ❌ No       | ✅ Yes             | Rarely, when script does not touch DOM |
| Script at end of `<body>`            | Before `</body>`                       | ✅ Complete   | After HTML      | After HTML          | ✅ Yes      | ✅ Yes             | Simple projects, DOM-dependent scripts |
| Script with `defer`                  | `<script defer src="app.js"></script>` | ✅ Continues  | Parallel        | After parsing       | ✅ Yes      | ✅ Yes             | **Best practice**, modern apps         |
| Script with `async`                  | `<script async src="app.js"></script>` | ✅ Continues  | Parallel        | ASAP after download | ❌ Maybe    | ❌ No              | Analytics, ads, independent scripts    |
| Multiple dependent scripts           | `defer` on all                         | ✅ Continues  | Parallel        | In order            | ✅ Yes      | ✅ Yes             | When scripts depend on each other      |
| Multiple independent scripts         | `async`                                | ✅ Continues  | Parallel        | Random order        | ❌ Maybe    | ❌ No              | Third-party scripts                    |
| Script needs DOM elements            | `defer` or body-end                    | —            | —               | After DOM           | ✅ Yes      | —                 | DOM manipulation                       |
| Script must run ASAP                 | `async`                                | —            | Fast            | Immediate           | ❌ Risky    | ❌ No              | Tracking scripts                       |
| Legacy safe method                   | End of `<body>`                        | ✅ Complete   | Normal          | After HTML          | ✅ Yes      | ✅ Yes             | Older browsers, simple sites           |

---

# 8. How do you add a comment in HTML and why would you use them?

## Complete Explanation

HTML comments use the syntax:
`<!-- comment text -->`

Comments help:

* Explain code
* Label sections
* Temporarily disable elements
* Improve readability for teams

Browsers ignore comments completely.

## Code Example (with comments)

```html
<!-- This is a comment explaining the header section -->
<h1>Home Page</h1>

<!-- <p>This text is hidden because it's commented out.</p> -->
```

## Short Answer Version

Use `<!-- comment -->`. They help document or disable parts of HTML without affecting output.

---

# 9. How do you serve your page in multiple languages?

## Complete Explanation

To serve multi-language content, HTML provides:

1. **`lang` attribute** → specifies default language
2. **Translated content versions** (separate pages or JSON files)
3. **`hreflang` attribute** in links → informs search engines
4. **i18n libraries** in frameworks for dynamic translations

HTML itself does not auto-translate; developers supply multiple language versions.

## Code Example (with comments)

```html
<html lang="en"> <!-- English version -->
<body>
  <a href="index-hi.html" hreflang="hi">Hindi Version</a>
</body>
</html>
```

## Short Answer Version

Use `lang` attributes and separate translated versions. HTML does not translate; developers must provide content in multiple languages.

---

# 10. What are data-* attributes and when should they be used?

## Complete Explanation

`data-*` attributes allow you to store **custom data** on HTML elements.
They are useful when:

* Passing data to JavaScript
* Storing configuration values
* Creating interactive components
* Avoiding misuse of classes/IDs for non-styling purposes

JavaScript retrieves them using `.dataset`.

## Code Example (with comments)

```html
<button id="buyBtn" data-product-id="101" data-price="499">
  Buy Now
</button>

<script>
// Accessing custom data
const btn = document.getElementById("buyBtn");
console.log(btn.dataset.productId); // 101
console.log(btn.dataset.price);     // 499
</script>
```

## Short Answer Version

`data-*` attributes store custom data inside HTML elements for JavaScript use without affecting layout or style.


# 10.1 What is `data-*` called?

## Complete Explanation

`data-*` is called a **custom data attribute** in HTML.

More specifically, it belongs to the category of **HTML5 data attributes**.

### Why the name `data-*`?

* `data-` → fixed prefix defined by HTML5
* `*` → wildcard (you can replace it with any custom name)

Examples:

* `data-id`
* `data-user-name`
* `data-price`
* `data-role`

So the full term interviewers expect is:

> **HTML5 custom data attributes**

### What they are used for

* Store **extra custom information** on HTML elements
* Meant **only for JavaScript access**
* Do NOT affect styling or structure
* Cleaner alternative to abusing `id` or `class`

### How JavaScript sees them

In JavaScript, `data-*` attributes are accessed via the **`dataset` API**.

Example:

* `data-user-id` → `element.dataset.userId`
* `data-product-price` → `element.dataset.productPrice`

---

## Code Example (with comments)

```html
<!-- HTML element with custom data attributes -->
<button 
  data-user-id="42"
  data-role="admin"
  data-active="true">
  Click Me
</button>

<script>
  const btn = document.querySelector("button");

  // Accessing data-* attributes using dataset
  console.log(btn.dataset.userId);   // "42"
  console.log(btn.dataset.role);     // "admin"
  console.log(btn.dataset.active);   // "true"
</script>
```

Key rules shown above:

* Hyphenated names become **camelCase** in JavaScript
* Values are always **strings** (convert if needed)

---

## Short Answer Version

`data-*` is called an **HTML5 custom data attribute**.
It is used to store custom data on HTML elements and is accessed in JavaScript using the `dataset` property.

