## Q1. What is the role of a browser in a web application?

### Concepts

- Browser is a **client-side runtime** that acts as a bridge between **user** and **server**.
- Its core responsibilities:
  - **Send HTTP requests** to servers (HTML, CSS, JS, images).
  - **Parse & interpret** HTML → build DOM.
  - **Parse CSS** → build CSSOM.
  - **Execute JavaScript** using JS engine.
  - **Render UI** on screen (layout + paint).
  - **Handle user interactions** (click, scroll, input).
  - **Manage security** (same-origin policy, sandboxing).

- Browser is **not just a viewer**; it is an **execution environment** for frontend apps.
- Without browser:
  - No rendering
  - No JS execution
  - No event handling
  - No UI interaction

### Example Code Snippets

**Example 1: HTML parsing**

```html
<h1>Hello</h1>
<p>World</p>
```

- Browser parses this
- Creates DOM nodes
- Prepares it for rendering

**Example 2: JavaScript execution**

```html
<button onclick="alert('Clicked')">Click</button>
```

- Browser:
  - Loads JS
  - Executes it
  - Connects event (click) → JS function

**Example 3: Fetching data**

```js
fetch("/api/users");
```

- Browser sends HTTP request
- Receives response
- Makes data available to JS

### Interview-Specific Answer

> A browser acts as the client runtime of a web application. It fetches resources from the server, parses HTML and CSS, executes JavaScript, renders the UI, and handles user interactions while enforcing security rules.

## Q2. What happens internally when a browser loads a webpage?

![Web Browser Working](https://media.geeksforgeeks.org/wp-content/uploads/20250516162618471004/browserworking11.webp)

### Concepts

- Browser follows a **step-by-step pipeline** to convert a URL into a visible webpage.
- High-level flow:
  1. **URL resolution & DNS lookup** – find server IP.
  2. **HTTP request** – browser requests HTML.
  3. **HTML parsing** – builds **DOM**.
  4. **CSS parsing** – builds **CSSOM**.
  5. **DOM + CSSOM → Render Tree**.
  6. **Layout (reflow)** – calculate size & position.
  7. **Paint** – pixels drawn on screen.
  8. **JavaScript execution** – modifies DOM/CSS during or after parsing.

- JS can **block parsing** unless deferred or async.
- Any DOM/CSS change may trigger **reflow or repaint**.

### Example Code Snippets

**Example 1: Basic load**

```html
<link rel="stylesheet" href="style.css" />
<script src="app.js"></script>
```

- HTML parsing starts
- CSS blocks rendering
- JS blocks HTML parsing

**Example 2: Non-blocking JS**

```html
<script src="app.js" defer></script>
```

- HTML parsing continues
- JS executes after DOM is ready

**Example 3: DOM change**

```js
document.body.style.background = "red";
```

- Triggers repaint
- Browser updates UI

### Interview-Specific Answer

> When a browser loads a webpage, it resolves the URL, fetches HTML, parses it into DOM, parses CSS into CSSOM, combines both into a render tree, calculates layout, paints pixels on screen, and executes JavaScript while handling reflows and repaints when changes occur.

## Q3. What is the difference between a website and a web application?

![website vs web application](https://dinarys.com/images/ckeditor/1539933900_Website%20vs.%20Web%20Application%206-min.png)

### Concepts

- **Website** is mainly **informational**.
- **Web application** is **interactive and stateful**.
- Key conceptual differences:
  - **User interaction**: minimal vs heavy
  - **Business logic**: mostly server-side vs significant client-side
  - **State handling**: none or simple vs complex (UI + data state)
  - **Behavior**: static pages vs dynamic flows

- Websites focus on **content delivery**.
- Web applications focus on **user actions and workflows**.

### Example Code Snippets

**Example 1: Website (static content)**

```html
<h1>About Us</h1>
<p>We are a company</p>
```

- Just content
- No interaction or logic

**Example 2: Web application (interaction)**

```html
<input id="name" /> <button onclick="save()">Save</button>
```

```js
function save() {
  localStorage.setItem("name", document.getElementById("name").value);
}
```

- Takes input
- Processes logic
- Stores state

**Example 3: Dynamic behavior**

```js
fetch("/api/data").then((res) => res.json());
```

- App depends on user actions and server responses

### Interview-Specific Answer

> A website mainly delivers static or informational content, while a web application allows users to interact, perform actions, manage state, and execute business logic directly in the browser.

## Q4. What is the DOM and why does it exist?

![DOM](https://media.geeksforgeeks.org/wp-content/uploads/20241120143259875787/DOM-Tree1.webp)

### Concepts

- **DOM (Document Object Model)** is an **in-memory tree representation** of HTML.
- Browser converts HTML text into **nodes (objects)**.
- Each HTML element → **DOM node**.
- DOM exists to:
  - Allow **JavaScript to read, modify, delete, and create UI elements**.
  - Provide a **standard interface** between HTML and JS.

- Without DOM:
  - JavaScript cannot interact with the page.
  - No dynamic UI updates.

- DOM is **not HTML**:
  - HTML = static text
  - DOM = live, mutable object structure

- Any DOM change can trigger:
  - **Reflow** (layout recalculation)
  - **Repaint** (visual update)

- What does **“DOM is an in-memory object model”** mean?
  _"DOM is a tree of JavaScript objects created in memory by the browser to represent the HTML document, so JavaScript can read and modify the page."_
  - In-memory
    - Means: stored in RAM, not on disk
    - Exists only while the page is loaded
    - When you refresh or close the tab → DOM is destroyed

    👉 Browser reads HTML → creates DOM → keeps it in memory (RAM)

  - Objects
    - DOM is made of JavaScript objects
    - Each HTML element becomes an object

    ```html
    <p>Hello</p>
    ```

    becomes 👇

    ```js
    {
      tagName: "P",
      innerText: "Hello",
      style: {},
      children: []
    }
    ```

    so we can do

    ```js
    document.querySelector("p").innerText = "Hi";
    ```

  - Model
    - “Model” = structured representation
    - DOM represents the page in a tree structure
    - Parent → Child → Grandchild relationship

### Example Code Snippets

**Example 1: Accessing DOM**

```js
document.getElementById("title");
```

- JS reads DOM node
- Browser exposes DOM API

**Example 2: Modifying DOM**

```js
document.querySelector("h1").innerText = "Hello DOM";
```

- DOM node updated
- UI changes instantly

**Example 3: Creating elements**

```js
const div = document.createElement("div");
document.body.appendChild(div);
```

- New DOM node created
- Render tree updates

### Interview-Specific Answer

> The DOM is a tree-like object representation of HTML created by the browser so JavaScript can interact with and manipulate the page dynamically. It exists to bridge static HTML and dynamic behavior.

## Q5. What is the difference between DOM and HTML source code?

### Concepts

- **HTML source code**:
  - Raw text sent by the server.
  - Static.
  - Cannot change after response.

- **DOM**:
  - Parsed, **in-memory object model** created by browser.
  - Dynamic and mutable.
  - Can be changed by JavaScript at runtime.

- Relationship:
  - Browser parses HTML → builds DOM.
  - DOM may **diverge from original HTML** after JS runs.

- DOM reflects the **current state of UI**, not original source.
- Inspecting elements shows **DOM**, not original HTML.

### Example Code Snippets

**Example 1: Original HTML**

```html
<p>Hello</p>
```

- This is HTML source

**Example 2: DOM modification**

```js
document.querySelector("p").innerText = "Hi";
```

- HTML source unchanged
- DOM updated

**Example 3: New DOM nodes**

```js
document.body.append("New Text");
```

- Exists in DOM
- Not in original HTML source

### Interview-Specific Answer

> HTML source code is the static markup sent by the server, while the DOM is the dynamic in-memory representation created by the browser that can change at runtime through JavaScript.

## Q6. What is the rendering engine in a browser?

### Concepts

- **Rendering engine** is the part of the browser that **converts code into pixels**.
- It takes:
  - HTML → DOM
  - CSS → CSSOM

- Then:
  - DOM + CSSOM → **Render Tree**
  - Calculates layout (size & position)
  - Paints pixels on screen

- Different browsers use different engines:
  - Chrome / Edge → **Blink**
  - Firefox → **Gecko**
  - Safari → **WebKit**

- Rendering engine works closely with:
  - **JavaScript engine**
  - **Graphics engine (GPU)**

### Example Code Snippets

**Example 1: Render tree creation**

```html
<p style="color:red">Text</p>
```

- Rendering engine combines DOM + CSS
- Decides visual style

**Example 2: Layout calculation**

```css
div {
  width: 50%;
}
```

- Engine calculates actual pixel width

**Example 3: Visual update**

```js
element.style.display = "none";
```

- Render tree updates
- Element removed from layout

### Interview-Specific Answer

> The rendering engine is responsible for turning HTML and CSS into a visual webpage by building the render tree, calculating layout, and painting pixels on the screen.

## Q7. What is the critical rendering path?

### Concepts

- **Critical Rendering Path (CRP)** is the **sequence of steps** the browser follows to render the **first visible content**.
- Main stages:
  1. Parse HTML → **DOM**
  2. Parse CSS → **CSSOM**
  3. DOM + CSSOM → **Render Tree**
  4. **Layout (reflow)**
  5. **Paint**

- CSS is **render-blocking**:
  - Browser waits for CSS before painting.

- JavaScript can be **parser-blocking**:
  - Stops HTML parsing if not deferred/async.

- Optimizing CRP improves:
  - **FCP**
  - **Perceived performance**

### Example Code Snippets

**Example 1: Render-blocking CSS**

```html
<link rel="stylesheet" href="style.css" />
```

- Browser waits for CSS
- No paint before CSS loads

**Example 2: Blocking JS**

```html
<script src="app.js"></script>
```

- HTML parsing stops
- Delays render

**Example 3: Optimized load**

```html
<link rel="stylesheet" href="style.css" />
<script src="app.js" defer></script>
```

- Faster first paint
- JS runs after DOM ready

### Interview-Specific Answer

> The critical rendering path is the set of steps a browser follows to convert HTML and CSS into visible pixels, and optimizing it helps the page render faster.

## Q8. What is reflow and repaint in browsers?

### Concepts

- **Reflow (Layout)**:
  - Browser recalculates **size, position, and layout** of elements.
  - Expensive operation.
  - Can affect many elements in the DOM tree.

- **Repaint**:
  - Browser redraws pixels **without changing layout**.
  - Cheaper than reflow.

- Flow:
  - Reflow → Repaint (often)
  - Repaint can happen without reflow.

- Performance impact:
  - Frequent reflows cause UI jank.
  - Modern browsers try to batch operations.

### Example Code Snippets

**Example 1: Reflow trigger**

```js
element.style.width = "300px";
```

- Layout changes
- Reflow + repaint

**Example 2: Repaint only**

```js
element.style.color = "red";
```

- Visual change
- Only repaint

**Example 3: Multiple changes**

```js
element.style.width = "200px";
element.style.height = "200px";
```

- Multiple reflows

### Interview-Specific Answer

> Reflow happens when the browser recalculates layout due to structural or size changes, while repaint only redraws visuals like color without affecting layout. Reflow is more expensive than repaint.

## Q9. What triggers reflow vs repaint?

### Concepts

- **Reflow triggers**:
  - Changes that affect **layout or geometry**.
  - Browser must recalculate positions and sizes.

- **Repaint triggers**:
  - Changes that affect **visual appearance only**.
  - Layout remains unchanged.

- Reflow is more expensive than repaint.
- Some operations trigger **both**.
- Reading layout values after writing styles can cause **forced synchronous reflow**.

### Example Code Snippets

**Example 1: Reflow trigger**

```js
element.style.margin = "20px";
```

- Layout changes
- Reflow + repaint

**Example 2: Repaint trigger**

```js
element.style.backgroundColor = "blue";
```

- Visual change only
- Repaint

**Example 3: Forced reflow**

```js
element.style.width = "300px";
const h = element.offsetHeight;
```

- Browser forced to calculate layout immediately

### Interview-Specific Answer

> Reflow is triggered by changes that affect element size or position, while repaint is triggered by visual changes like color. Accessing layout properties after style changes can force a reflow.

## Q10. What is the browser event loop at a high level?

### Concepts

- Browser event loop manages **JavaScript execution and UI updates**.
- JS runs on a **single thread**.
- Responsibilities:
  - Execute **call stack** tasks.
  - Process **asynchronous callbacks**.
  - Keep UI responsive.

- Flow (high level):
  1. Execute synchronous JS (call stack).
  2. Handle **microtasks** (Promises).
  3. Handle **macrotasks** (setTimeout, events).
  4. Render updates between cycles.

- Event loop prevents **UI freezing**.

- **What is Event Loop**
  _Event loop is a mechanism that allows JavaScript (single-threaded) to handle async operations without blocking the main thread._

### Example Code Snippets

**Example 1: Synchronous**

```js
console.log("A");
console.log("B");
```

- Executes immediately

**Example 2: Asynchronous**

```js
setTimeout(() => console.log("C"), 0);
```

- Sent to task queue

**Example 3: Promise**

```js
Promise.resolve().then(() => console.log("D"));
```

- Microtask queue
- Runs before macrotasks

### Interview-Specific Answer

> The browser event loop coordinates JavaScript execution by running synchronous code first, then microtasks, then macrotasks, while allowing the browser to update the UI between cycles to keep the page responsive.

## Q11. How does the browser handle JavaScript execution?

### Concepts

Browser JavaScript execution is **single-threaded** and **non-blocking by design**.

High-level flow:

1. **JavaScript Engine (Call Stack)**
   - Executes JS code line by line
   - Only one task runs at a time

2. **Web APIs (Browser APIs)**
   - Handles async operations like:
     - `setTimeout`
     - DOM events
     - HTTP requests

   - These do **not** block the call stack

3. **Task Queues**
   - **Microtask Queue**: promises, mutation observers
   - **Macrotask Queue**: timers, UI events, network callbacks

4. **Event Loop**
   - Continuously checks:
     - Is call stack empty?
     - If yes → push microtasks
     - Then push one macrotask

Rendering happens **between tasks**, not during JS execution.

---

### Example Code Snippets

**Example 1: Synchronous execution**

```js
console.log("A");
console.log("B");
```

Output order is fixed because call stack runs top to bottom.

---

**Example 2: Async with timer**

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Execution:

- JS runs sync code first
- `setTimeout` goes to Web API
- Callback waits in task queue

---

**Example 3: Promise vs timer**

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Promise callback runs before timeout because microtasks have higher priority.

---

### Interview-Specific Answer

The browser executes JavaScript using a single-threaded call stack. Synchronous code runs immediately, while asynchronous operations are handled by browser APIs and queued. The event loop moves tasks back to the call stack when it’s free, prioritizing microtasks over macrotasks, ensuring non-blocking execution and smooth rendering.

![](https://substackcdn.com/image/fetch/$s_!qUhE!,w_1272,c_limit,f_webp,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc297bae5-67e2-4d8c-a020-162ea437c11c_1280x1664.gif)

## Q12. What are browser storage mechanisms?

### Concepts

Browser storage mechanisms allow frontend applications to **store data on the client side** for performance, state persistence, and user experience.

Main types:

1. **Cookies**
   - Small key–value data sent with every HTTP request
   - Used mainly for authentication and session tracking
   - Size limit ~4KB

2. **localStorage**
   - Persistent storage in the browser
   - Data survives browser restart
   - String-based key–value storage

3. **sessionStorage**
   - Storage for a single browser tab/session
   - Cleared when the tab is closed
   - Same API as localStorage

4. **IndexedDB**
   - Client-side NoSQL database
   - Stores large, structured data
   - Used for offline apps, caching, complex data

5. **Cache Storage (Service Workers)**
   - Stores network responses
   - Enables offline access and faster load times

---

### Example Code Snippets

**Example 1: localStorage**

```js
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
```

---

**Example 2: sessionStorage**

```js
sessionStorage.setItem("step", "2");
```

---

**Example 3: Cookie**

```js
document.cookie = "token=abc123; path=/;";
```

---

### Interview-Specific Answer

Browsers provide multiple storage options like cookies, localStorage, sessionStorage, IndexedDB, and cache storage. Each serves different use cases such as authentication, persistent UI state, session data, offline support, and performance optimization.

## Q13. Difference between cookies, localStorage, and sessionStorage

### Concepts

| Feature                 | Cookies         | localStorage         | sessionStorage  |
| ----------------------- | --------------- | -------------------- | --------------- |
| Size limit              | ~4KB            | ~5–10MB              | ~5–10MB         |
| Sent with HTTP requests | Yes             | No                   | No              |
| Expiry                  | Configurable    | Never (manual clear) | On tab close    |
| Access                  | Server + Client | Client only          | Client only     |
| Use case                | Auth, sessions  | Persistent UI data   | Temporary state |

Key differences:

- **Cookies** are part of HTTP protocol and affect network traffic
- **localStorage** is purely client-side and persistent
- **sessionStorage** is scoped to a single tab/session

---

### Example Code Snippets

**Example 1: Cookie**

```js
document.cookie = "user=tan; max-age=3600;";
```

---

**Example 2: localStorage**

```js
localStorage.setItem("lang", "en");
```

---

**Example 3: sessionStorage**

```js
sessionStorage.setItem("formStep", "1");
```

---

### Interview-Specific Answer

Cookies are small data pieces sent with every HTTP request and are mainly used for authentication. localStorage stores persistent client-side data, while sessionStorage stores temporary data limited to a single browser session or tab.

## Q14. What is same-origin policy?

![](https://i.sstatic.net/s6mrw.jpg)

### Concepts

Same-Origin Policy (SOP) is a **browser security rule** that restricts how documents or scripts from one origin can interact with resources from another origin.

**Origin = protocol + domain + port**

Example:

- `https://example.com:443` → one origin
- `http://example.com` → different origin (protocol differs)
- `https://api.example.com` → different origin (domain differs)

What SOP enforces:

1. **Restricted Access**
   - JS running on one origin cannot:
     - Read data from another origin
     - Access DOM, cookies, localStorage of another origin

2. **Protects User Data**
   - Prevents malicious sites from stealing:
     - Auth tokens
     - Session data
     - Private user information

3. **Applies To**
   - AJAX / fetch requests
   - Cookies
   - localStorage / sessionStorage
   - DOM access

4. **Not a Server Rule**
   - Enforced by the browser, not the backend

To allow controlled cross-origin access, browsers use **CORS**.

---

### Example Code Snippets

**Example 1: Blocked request**

```js
fetch("https://api.otherdomain.com/data");
```

Blocked if server does not allow cross-origin access.

---

**Example 2: Allowed via CORS**

```http
Access-Control-Allow-Origin: https://example.com
```

Browser allows response access.

---

**Example 3: Same-origin access**

```js
fetch("/api/user");
```

Always allowed because origin is same.

---

### Interview-Specific Answer

Same-origin policy is a browser security mechanism that prevents scripts from one origin from accessing data or resources of another origin. It protects user data by isolating websites, and cross-origin access is only allowed explicitly through mechanisms like CORS.

## Q14.1 CORS vs SOP (Clear + Smooth)

![CORS vs SOP](https://media.licdn.com/dms/image/v2/D5612AQGjz6Wuy_Fq0w/article-cover_image-shrink_720_1280/B56ZkGOzgdHMAQ-/0/1756746173676?e=2147483647&v=beta&t=2VM7VVgKqwQn0DFx-fv-kwp3_eMdIv69b-K77Vt6IsE)

### Concepts

**Browser by default = strict security**

---

### Same-Origin Policy (SOP)

SOP is a **rule inside the browser**.

What it says:

> “A website can only access data from the same origin.”

Origin means:

- Same protocol
- Same domain
- Same port

If any one is different → **blocked**

Why SOP exists:

- Prevents stealing cookies, tokens, user data
- Stops malicious websites from reading other site data

Example:

```js
// Running on https://frontend.com
fetch("https://api.backend.com/data");
```

Browser says:
**“Different origin → I will block JS from reading response.”**

Important:

- Request may go to server
- **Response is blocked by browser**
- Server is not the problem here

---

### CORS (Cross-Origin Resource Sharing)

CORS is **not a replacement** of SOP.

CORS is a **permission system on top of SOP**.

What CORS says:

> “This server allows these other origins to access my data.”

Server sends headers like:

```http
Access-Control-Allow-Origin: https://frontend.com
```

Browser checks:

- Is SOP violated? → Yes
- Is CORS header present? → Yes
- Origin allowed? → Yes
  → **Then browser allows JS to read response**

---

### Key Relationship

| Thing            | SOP      | CORS              |
| ---------------- | -------- | ----------------- |
| Lives where      | Browser  | Server headers    |
| Default behavior | Block    | Allow selectively |
| Purpose          | Security | Controlled access |
| Can disable      | No       | Configure         |

SOP = **Lock**
CORS = **Key**

---

### Example Flow (Real Life)

1. Frontend makes request to different origin
2. Browser sees SOP violation
3. Browser checks response headers
4. If CORS allows → data given to JS
5. Else → response blocked

---

### Interview-Specific Answer

Same-Origin Policy is a browser-enforced security rule that blocks cross-origin access by default. CORS is a server-driven mechanism that relaxes this restriction by explicitly telling the browser which origins are allowed to access the response.

## Q15. What is JavaScript’s role in frontend?

### Concepts

JavaScript is responsible for making web pages **interactive, dynamic, and intelligent**.

Core roles:

1. **Interactivity**
   - Handles user actions like clicks, input, scroll
   - Responds to events in real time

2. **DOM Manipulation**
   - Reads and updates HTML elements
   - Changes content, styles, structure dynamically

3. **State Management**
   - Maintains UI state in memory
   - Syncs data with UI

4. **Async Communication**
   - Fetches data from backend APIs
   - Handles promises, async/await

5. **Application Logic**
   - Validations, conditions, flows
   - Business logic on client side

6. **Browser API Usage**
   - Uses APIs like:
     - Fetch
     - Storage
     - History
     - Timers

Without JS:

- Web pages are static
- No real user interaction

---

### Example Code Snippets

**Example 1: Interactivity**

```js
button.addEventListener("click", () => {
  alert("Clicked");
});
```

---

**Example 2: DOM update**

```js
document.getElementById("title").innerText = "Updated";
```

---

**Example 3: API call**

```js
fetch("/api/data").then((res) => res.json());
```

---

### Interview-Specific Answer

JavaScript powers the frontend by handling user interactions, manipulating the DOM, managing UI state, performing asynchronous operations, and implementing client-side logic, making web applications dynamic instead of static.
