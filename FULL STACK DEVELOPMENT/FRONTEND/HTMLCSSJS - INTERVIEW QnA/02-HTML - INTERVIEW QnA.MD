# HTML Basics

---

## 1. What does HTML stand for and what is its purpose?

### Concepts

HTML stands for **HyperText Markup Language**.

- **HyperText** → Links between documents/pages
- **Markup Language** → Uses tags to structure content

Purpose:

- Defines **structure of web pages**
- Works with:
  - CSS → styling
  - JavaScript → behavior

HTML is **not a programming language**, it is a **markup language**.

---

### Example Code (with comments)

```html
<!DOCTYPE html>
<!-- Defines HTML5 document -->

<html lang="en">
  <!-- Root element -->

  <head>
    <title>My Page</title>
    <!-- Page title -->
  </head>

  <body>
    <h1>Hello World</h1>
    <!-- Heading -->
    <p>This is a paragraph</p>
    <!-- Text content -->
  </body>
</html>
```

---

### Interview Ready Answer

HTML stands for HyperText Markup Language. It is used to define the structure of web pages using elements like headings, paragraphs, and links. It is not a programming language but a markup language that works together with CSS for styling and JavaScript for interactivity.

---

## 2. Describe the basic structure of an HTML document.

### Concepts

Every HTML document has a **standard skeleton**:

1. `<!DOCTYPE html>` → tells browser HTML5
2. `<html>` → root element
3. `<head>` → metadata (not visible)
4. `<body>` → visible content

---

### Example Code (with comments)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Encoding -->
    <title>Document</title>
    <!-- Title -->
  </head>

  <body>
    <h1>Main Content</h1>
  </body>
</html>
```

---

### Interview Ready Answer

An HTML document consists of a DOCTYPE declaration, an html root element, a head section for metadata, and a body section for visible content. This structure ensures proper rendering across browsers.

---

## 3. What do DOCTYPE and html lang attributes do?

### Concepts

**DOCTYPE**

- Declares HTML version (HTML5)
- Ensures browser uses **standard mode**

**lang attribute**

- Specifies language of page
- Important for:
  - SEO
  - Accessibility (screen readers)

---

### Example Code (with comments)

```html
<!DOCTYPE html>
<!-- HTML5 declaration -->

<html lang="en">
  <!-- English language -->

  <head></head>
  <body></body>
</html>
```

---

### Interview Ready Answer

The DOCTYPE declaration tells the browser to use HTML5 and render in standard mode. The lang attribute defines the language of the document, which improves accessibility and SEO.

---

## 4. What is the difference between head and body tags?

### Concepts

| Head                | Body            |
| ------------------- | --------------- |
| Metadata            | Visible content |
| Not displayed       | Displayed       |
| SEO, links, scripts | UI elements     |

---

### Example Code (with comments)

```html
<head>
  <title>Page Title</title>
  <!-- Not visible -->
</head>

<body>
  <h1>Hello</h1>
  <!-- Visible -->
</body>
```

---

### Interview Ready Answer

The head tag contains metadata like title, meta tags, and links to CSS or scripts, which are not visible on the page. The body tag contains all the visible content displayed to the user.

---

## 5. Can you explain the purpose of meta tags in HTML?

### Concepts

Meta tags provide **information about the page**:

- Character encoding
- Viewport settings
- SEO description
- Author info

---

### Example Code (with comments)

```html
<meta charset="UTF-8" />
<!-- Encoding -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- Responsive -->
<meta name="description" content="My website" />
<!-- SEO -->
```

---

### Interview Ready Answer

Meta tags provide metadata about the HTML document such as character encoding, viewport settings for responsive design, and SEO-related information like description. They are placed inside the head tag and are not visible on the page.

---

## 6. How do you link a CSS file to an HTML document?

### Concepts

Use `<link>` tag inside `<head>`:

- `rel="stylesheet"`
- `href="file.css"`

---

### Example Code (with comments)

```html
<head>
  <link rel="stylesheet" href="styles.css" />
  <!-- External CSS -->
</head>
```

---

### Interview Ready Answer

You can link a CSS file using the link tag inside the head section with rel set to stylesheet and href pointing to the CSS file.

---

## 7. How do you link a JavaScript file to an HTML document?

### Concepts

Use `<script>` tag:

- Can be in `<head>` or `<body>`
- `defer` is preferred

---

### Example Code (with comments)

```html
<!-- Best practice -->
<script src="script.js" defer></script>
```

---

### Interview Ready Answer

A JavaScript file is linked using the script tag with the src attribute. Using the defer attribute ensures the script loads after the HTML is parsed, improving performance.

---

## 8. How do you add a comment in HTML and why would you use them?

### Concepts

Syntax:

```
<!-- comment -->
```

Used for:

- Documentation
- Debugging
- Temporary disabling code

---

### Example Code (with comments)

```html
<!-- This is a comment -->
<p>Hello</p>
```

---

### Interview Ready Answer

HTML comments are written using <!-- --> and are used for documentation, debugging, or temporarily disabling parts of the code. They are not rendered in the browser.

---

## 9. How do you serve your page in multiple languages?

### Concepts

Techniques:

1. `lang` attribute
2. Separate pages (`/en`, `/fr`)
3. i18n frameworks
4. Content switching via JS

---

### Example Code (with comments)

```html
<html lang="en">
  <!-- English -->

  <!-- For another language -->
  <html lang="fr">
    <!-- French -->
  </html>
</html>
```

---

### Interview Ready Answer

You can serve pages in multiple languages by using the lang attribute, creating separate localized versions of pages, or using internationalization techniques with JavaScript or backend support.

---

## 10. What are data-\* attributes and when should they be used?

### Concepts

Custom attributes:

```
data-*
```

Used for:

- Storing extra info in HTML
- Access via JS

---

### Example Code (with comments)

```html
<div data-user-id="123"></div>

<script>
  const el = document.querySelector("div");
  console.log(el.dataset.userId); // 123
</script>
```

---

### Interview Ready Answer

Data-\* attributes allow you to store custom data on HTML elements. They are useful for passing information between HTML and JavaScript without affecting standard attributes.

# Text Formatting in HTML

---

## 11. What is the difference between b and strong tags?

### Concepts

- `<b>` → **Styling only**
  - Makes text bold
  - No semantic meaning

- `<strong>` → **Semantic importance**
  - Indicates importance/urgency
  - Screen readers emphasize it

Key idea:

> `<strong>` = meaning + styling
> `<b>` = just styling

---

### Example Code (with comments)

```html
<p>This is <b>bold text</b> (just styling)</p>

<p>This is <strong>important text</strong> (semantic meaning)</p>
```

---

### Interview Ready Answer

The `<b>` tag is used only for styling text in bold without adding any semantic importance, whereas the `<strong>` tag indicates that the text is important and also makes it bold. Screen readers and SEO tools give more importance to `<strong>`.

---

## 12. When would you use em over i, and vice versa?

### Concepts

- `<i>` → Visual styling (italic)
- `<em>` → Semantic emphasis

Use cases:

- `<em>` → Stress or emphasis (important in sentence meaning)
- `<i>` → Alternate tone (book names, foreign words)

---

### Example Code (with comments)

```html
<p>I <em>really</em> want this job</p>
<!-- emphasis -->

<p>Read <i>Harry Potter</i></p>
<!-- stylistic -->
```

---

### Interview Ready Answer

The `<em>` tag is used to add semantic emphasis to text, which can change the meaning of a sentence and is recognized by screen readers. The `<i>` tag is used only for visual styling like italics without adding semantic meaning.

---

## 13. What is the purpose of small, s, and mark tags?

### Concepts

- `<small>` → Smaller text
  - Often for disclaimers, legal text

- `<s>` → Strikethrough (no longer relevant content)

- `<mark>` → Highlight text
  - Indicates relevance (like search result highlight)

---

### Example Code (with comments)

```html
<p><small>Terms and conditions apply</small></p>

<p>Price: <s>₹1000</s> ₹500</p>

<p>This is <mark>important</mark> text</p>
```

---

### Interview Ready Answer

The `<small>` tag is used for less important or fine print text, `<s>` represents content that is no longer relevant, typically shown as strikethrough, and `<mark>` highlights text to indicate relevance or importance, such as search results.

---

## 14. What are semantic HTML tags and why are they important?

### Concepts

Semantic tags = **tags with meaning**

Examples:

- `<header>`
- `<footer>`
- `<article>`
- `<section>`
- `<nav>`

Why important:

- Improves **readability**
- Better **SEO**
- Better **accessibility**
- Helps screen readers

---

### Example Code (with comments)

```html
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
</nav>

<article>
  <p>Blog content</p>
</article>
```

---

### Interview Ready Answer

Semantic HTML tags clearly describe the meaning of the content they contain, such as header, article, and footer. They improve code readability, accessibility, and SEO by helping browsers and assistive technologies understand the structure of the page.

---

## 15. How do you create a paragraph or a line break in HTML?

### Concepts

- `<p>` → Paragraph
- `<br>` → Line break (no closing tag)

Key difference:

- `<p>` → block element
- `<br>` → inline break

---

### Example Code (with comments)

```html
<p>This is a paragraph</p>

<p>
  Line 1 <br />
  Line 2
</p>
```

---

### Interview Ready Answer

A paragraph is created using the `<p>` tag, which defines a block of text. A line break is created using the `<br>` tag, which inserts a break within the same paragraph without starting a new block.

---

# Links and Navigation

---

## 16. How do you create a hyperlink in HTML?

### Concepts

Use `<a>` (anchor tag):

- `href` → destination URL
- Can link to:
  - Pages
  - Sections
  - Files
  - Emails

---

### Example Code (with comments)

```html
<a href="https://example.com">Visit Website</a>
<!-- External link -->

<a href="/about.html">About Page</a>
<!-- Internal link -->
```

---

### Interview Ready Answer

A hyperlink is created using the anchor tag `<a>` with the `href` attribute specifying the destination URL. It can link to internal pages, external websites, or resources.

---

## 17. What is the difference between relative and absolute URLs?

### Concepts

**Absolute URL**

- Full path
- Includes domain

**Relative URL**

- Based on current file location
- Shorter and flexible

---

### Example Code (with comments)

```html
<!-- Absolute -->
<a href="https://example.com/about">About</a>

<!-- Relative -->
<a href="/about.html">About</a>
<a href="../about.html">About</a>
```

---

### Interview Ready Answer

An absolute URL contains the full address including protocol and domain, while a relative URL defines the path relative to the current document. Relative URLs are commonly used for internal navigation.

---

## 18. How can you open a link in a new tab?

### Concepts

Use:

```html
target="_blank"
```

Best practice:

- Add `rel="noopener noreferrer"` for security

---

### Example Code (with comments)

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in new tab
</a>
```

---

### Interview Ready Answer

You can open a link in a new tab by using `target="_blank"` in the anchor tag. For security reasons, it is recommended to also include `rel="noopener noreferrer"`.

---

## 19. How do you create an anchor to jump to a specific part of the page?

### Concepts

Steps:

1. Add `id` to target element
2. Link using `#id`

---

### Example Code (with comments)

```html
<!-- Link -->
<a href="#section1">Go to Section</a>

<!-- Target -->
<h2 id="section1">Section 1</h2>
```

---

### Interview Ready Answer

You can create an anchor link by assigning an `id` to an element and linking to it using a hash `#id` in the href attribute. This allows navigation within the same page.

---

## 20. How do you link to a downloadable file in HTML?

### Concepts

Use:

- `<a>`
- `download` attribute

---

### Example Code (with comments)

```html
<a href="file.pdf" download>Download PDF</a>
```

Optional:

```html
<a href="file.pdf" download="MyFile.pdf">Download</a>
```

---

### Interview Ready Answer

To link a downloadable file, you use the anchor tag with the `href` attribute pointing to the file and the `download` attribute to prompt the browser to download it instead of opening it.

---

If you want next:

- **Images & Media**
- OR switch to **Interviewer mode for rapid-fire practice**

# Images and Objects

---

## 21. How do you embed images in an HTML page?

### Concepts

Use `<img>` tag:

- Self-closing tag
- Important attributes:
  - `src` → image path
  - `alt` → alternative text
  - `width` / `height` → optional sizing

---

### Example Code (with comments)

```html
<img
  src="image.jpg"      <!-- Image path -->
  alt="Profile photo"  <!-- Accessibility -->
  width="200"          <!-- Optional -->
/>
```

---

### Interview Ready Answer

Images are embedded using the `<img>` tag with the src attribute specifying the image path and the alt attribute providing alternative text. It is a self-closing tag and does not require a closing tag.

---

## 22. What is the importance of the alt attribute for images?

### Concepts

`alt` = **alternative text**

Why important:

- Accessibility (screen readers)
- SEO
- Fallback if image fails to load

---

### Example Code (with comments)

```html
<img src="logo.png" alt="Company logo" />
```

---

### Interview Ready Answer

The alt attribute provides alternative text for an image, which is used by screen readers for accessibility and displayed if the image fails to load. It also helps improve SEO by describing the image content.

---

## 23. What image formats are supported by web browsers?

### Concepts

Common formats:

- **JPEG / JPG** → photos (compressed)
- **PNG** → transparency support
- **GIF** → simple animations
- **SVG** → vector graphics
- **WebP** → modern, better compression

---

### Example Code (with comments)

```html
<img src="photo.jpg" alt="JPEG example" />
<img src="icon.png" alt="PNG example" />
<img src="graphic.svg" alt="SVG example" />
```

---

### Interview Ready Answer

Web browsers support multiple image formats including JPEG for photographs, PNG for images with transparency, GIF for animations, SVG for vector graphics, and WebP for optimized compression and performance.

---

## 24. How do you create image maps in HTML?

### Concepts

Image maps allow **clickable areas inside an image**.

Tags used:

- `<img>` with `usemap`
- `<map>`
- `<area>`

---

### Example Code (with comments)

```html
<img src="map.jpg" usemap="#imagemap" />

<map name="imagemap">
  <area
    shape="rect"
    coords="34,44,270,350"
    href="link.html"
    alt="Clickable area"
  />
</map>
```

---

### Interview Ready Answer

Image maps are created using the map and area elements along with the usemap attribute on an image. They allow defining clickable regions within an image that can link to different URLs.

---

## 25. What is the difference between svg and canvas elements?

### Concepts

| SVG                   | Canvas                      |
| --------------------- | --------------------------- |
| Vector-based          | Pixel-based                 |
| Scalable without loss | Loses quality on scaling    |
| DOM elements          | Drawn via JS                |
| Better for icons      | Better for games/animations |

---

### Example Code (with comments)

```html
<!-- SVG example -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<!-- Canvas example -->
<canvas id="myCanvas"></canvas>

<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 100, 100);
</script>
```

---

### Interview Ready Answer

SVG is a vector-based format where each element is part of the DOM and scales without losing quality, making it ideal for icons and graphics. Canvas is pixel-based and rendered using JavaScript, making it suitable for dynamic graphics like games and animations.

---

# Lists

---

## 26. What are the different types of lists available in HTML?

### Concepts

There are **3 main types of lists**:

1. **Ordered List (`<ol>`)**
   - Numbered list (1, 2, 3…)

2. **Unordered List (`<ul>`)**
   - Bullet points

3. **Description List (`<dl>`)**
   - Key-value pairs
   - Uses:
     - `<dt>` → term
     - `<dd>` → description

---

### Example Code (with comments)

```html
<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Unordered List -->
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>Markup language</dd>
</dl>
```

---

### Interview Ready Answer

HTML provides three types of lists: ordered lists for numbered items, unordered lists for bullet points, and description lists for key-value style data using dt and dd tags.

---

## 27. How do you create ordered, unordered, and description lists in HTML?

### Concepts

- `<ol>` → ordered
- `<ul>` → unordered
- `<li>` → list item
- `<dl>`, `<dt>`, `<dd>` → description list

---

### Example Code (with comments)

```html
<!-- Ordered -->
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>

<!-- Unordered -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<!-- Description -->
<dl>
  <dt>JS</dt>
  <dd>Programming language</dd>
</dl>
```

---

### Interview Ready Answer

Ordered lists are created using the ol tag with li items, unordered lists use the ul tag with li items, and description lists use dl with dt for terms and dd for descriptions.

---

## 28. Can lists be nested in HTML? If so, how?

### Concepts

Yes — lists can be nested inside `<li>`.

Use case:

- Multi-level menus
- Hierarchical data

---

### Example Code (with comments)

```html
<ul>
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>

  <li>Vegetables</li>
</ul>
```

---

### Interview Ready Answer

Yes, lists can be nested by placing a list inside a list item. This is commonly used to represent hierarchical data or multi-level navigation menus.

---

## 29. What attributes can you use with lists to modify their appearance or behavior?

### Concepts

### For `<ol>`:

- `type` → numbering style
  - "1", "A", "a", "I", "i"

- `start` → starting number
- `reversed` → reverse order

### For `<ul>`:

- Controlled via CSS (`list-style-type`)

### For `<li>`:

- `value` → custom numbering (rare)

---

### Example Code (with comments)

```html
<!-- Different numbering -->
<ol type="A" start="3">
  <li>Item</li>
  <li>Item</li>
</ol>

<!-- Reversed list -->
<ol reversed>
  <li>Last</li>
  <li>First</li>
</ol>
```

---

### Interview Ready Answer

List behavior can be modified using attributes like type, start, and reversed for ordered lists. For unordered lists, appearance is usually controlled using CSS like list-style-type. The li tag can also use the value attribute to override numbering in specific cases.

---

# Forms and Input Elements

---

## 30. What are HTML forms and how do you create one?

### Concepts

HTML forms are used to **collect user input** and send it to a server.

Core parts:

- `<form>` → container
- `action` → where data is sent
- `method` → GET / POST

Common elements:

- `<input>`
- `<textarea>`
- `<select>`
- `<button>`

---

### Example Code (with comments)

```html
<form action="/submit" method="POST">
  <!-- Input field -->
  <input type="text" name="username" placeholder="Enter name" />

  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>
```

---

### Interview Ready Answer

HTML forms are used to collect user input and send it to a server using methods like GET or POST. A form is created using the form tag along with input elements, and it uses attributes like action and method to define submission behavior.

---

## 31. Describe the different form input types in HTML5.

### Concepts

HTML5 provides many input types:

#### Text-based

- `text`
- `password`
- `email`
- `search`
- `tel`
- `url`

#### Numeric / Date

- `number`
- `range`
- `date`
- `time`
- `datetime-local`
- `month`
- `week`

#### Selection

- `radio`
- `checkbox`

#### Others

- `file`
- `color`
- `hidden`
- `submit`
- `reset`

---

### Example Code (with comments)

```html
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<input type="number" min="1" max="10" />
<input type="date" />

<input type="radio" name="gender" />
<input type="checkbox" />

<input type="file" />
<input type="color" />
```

---

### Interview Ready Answer

HTML5 provides various input types such as text, email, password, number, date, radio, checkbox, file, and color. These types improve user experience and provide built-in validation for specific data formats.

---

## 32. How do you make form inputs required?

### Concepts

Use:

```html
required
```

- Prevents submission if empty
- Built-in browser validation

---

### Example Code (with comments)

```html
<input type="text" name="username" required />
```

---

### Interview Ready Answer

You can make form inputs required by adding the required attribute to the input element. This ensures that the user must fill in the field before submitting the form.

---

## 33. What is the purpose of the label element in forms?

### Concepts

`<label>`:

- Describes input field
- Improves **accessibility**
- Clicking label focuses input

Two ways:

1. `for` attribute
2. Wrap input

---

### Example Code (with comments)

```html
<!-- Using for -->
<label for="email">Email</label>
<input id="email" type="email" />

<!-- Wrapping -->
<label>
  Name:
  <input type="text" />
</label>
```

---

### Interview Ready Answer

The label element provides a description for form inputs and improves accessibility. It also allows users to focus or activate the input by clicking on the label, especially when linked using the for attribute.

---

## 34. How do you group form inputs and why would you do this?

### Concepts

Use:

- `<fieldset>` → group inputs
- `<legend>` → group title

Why:

- Better UX
- Better accessibility
- Logical grouping

---

### Example Code (with comments)

```html
<fieldset>
  <legend>Personal Info</legend>

  <label>Name:</label>
  <input type="text" />

  <label>Email:</label>
  <input type="email" />
</fieldset>
```

---

### Interview Ready Answer

Form inputs can be grouped using the fieldset element, with a legend to provide a title. This improves accessibility, organizes related inputs, and enhances the user experience.

---

# HTML5 Features

---

## 35. What is new in HTML5 compared to previous versions?

### Concepts

HTML5 introduced major improvements:

### 1. Semantic Elements

- `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`

### 2. Multimedia Support (No plugins)

- `<audio>`
- `<video>`

### 3. New Form Features

- Input types: `email`, `date`, `number`
- Attributes: `required`, `placeholder`

### 4. APIs

- Geolocation API
- Local Storage / Session Storage
- Drag & Drop API

### 5. Cleaner Doctype

```html
<!DOCTYPE html>
```

---

### Example Code (with comments)

```html
<header>Header</header>
<main>Main content</main>
<footer>Footer</footer>

<video controls src="video.mp4"></video>
```

---

### Interview Ready Answer

HTML5 introduced semantic elements for better structure, built-in multimedia support like audio and video, new form input types and validation, and powerful APIs such as local storage and geolocation. It also simplified the DOCTYPE declaration.

---

## 36. How do you create a section on a webpage using HTML5 semantic elements?

### Concepts

Use semantic tags:

- `<section>` → generic section
- `<article>` → independent content
- `<header>` / `<footer>` → structure

Rule:

> Use `<section>` when content has a **theme/title**

---

### Example Code (with comments)

```html
<section>
  <h2>About Us</h2>
  <p>We build products</p>
</section>
```

---

### Interview Ready Answer

A section is created using the section tag, typically with a heading to define its purpose. Semantic elements like section, article, header, and footer help organize content meaningfully.

---

## 37. What is the role of the article element in HTML5?

### Concepts

`<article>`:

- Represents **independent, reusable content**

Examples:

- Blog post
- News article
- Comment

Key idea:

> Can be reused or shared independently

---

### Example Code (with comments)

```html
<article>
  <h2>Blog Title</h2>
  <p>This is a blog post</p>
</article>
```

---

### Interview Ready Answer

The article element represents self-contained content that can be independently distributed or reused, such as blog posts, news articles, or comments.

---

## 38. Can you explain the use of the nav and aside elements in HTML5?

### Concepts

### `<nav>`

- Contains **navigation links**
- Menus, sidebar links, pagination

### `<aside>`

- Contains **related/secondary content**
- Ads, sidebars, tips

---

### Example Code (with comments)

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<aside>
  <p>Related articles</p>
</aside>
```

---

### Interview Ready Answer

The nav element is used to define a section containing navigation links, while the aside element represents content that is indirectly related to the main content, such as sidebars or additional information.

---

## 39. How do you use the figure and figcaption elements?

### Concepts

- `<figure>` → wraps media/content
- `<figcaption>` → description

Used for:

- Images
- Diagrams
- Code snippets

---

### Example Code (with comments)

```html
<figure>
  <img src="image.jpg" alt="Sample image" />
  <figcaption>This is an image description</figcaption>
</figure>
```

---

### Interview Ready Answer

The figure element is used to group media content like images or diagrams, and the figcaption element provides a caption or description for that content, improving accessibility and semantics.

---
