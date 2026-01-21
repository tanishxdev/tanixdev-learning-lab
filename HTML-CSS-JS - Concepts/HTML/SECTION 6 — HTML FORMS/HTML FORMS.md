# SECTION 6 — HTML FORMS (COMPLETE AND ADVANCED)

---

# PART 1 — WHAT IS A FORM?

---

A **form** collects user input and sends it to a server.

Basic structure:

```html
<form action="/submit" method="POST">
    <input type="text">
</form>
```

---

# PART 2 — FORM ATTRIBUTES (CRITICAL)

---

### 1. action

Where the form data will be sent.

```html
<form action="/login">
```

### 2. method

Controls how data is sent.

| Method | Use                                     |
| ------ | --------------------------------------- |
| GET    | Data visible in URL, for reading        |
| POST   | Secure, used for writing, login, signup |

Example:

```html
<form method="POST">
```

### 3. target

Where to open result.

```html
<form target="_blank">
```

### 4. enctype

Required for file uploads.

```html
<form method="POST" enctype="multipart/form-data">
```

### 5. autocomplete

Enables browser auto-fill.

```html
<form autocomplete="off">
```

### 6. novalidate

Disables built-in HTML validation.

```html
<form novalidate>
```

---

# PART 3 — FORM ELEMENTS

---

Forms consist of:

• `<input>`
• `<textarea>`
• `<label>`
• `<select>` + `<option>`
• `<datalist>`
• `<button>`
• `<fieldset>` + `<legend>`
• `<output>`

Let’s explore each.

---

# PART 4 — INPUT TYPES (COMPLETE LIST)

---

### Text-based fields:

```html
<input type="text">
<input type="email">
<input type="password">
<input type="search">
<input type="url">
<input type="tel">
```

### Number fields:

```html
<input type="number">
<input type="range">
```

### Date & time:

```html
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">
```

### Choices:

```html
<input type="radio">
<input type="checkbox">
```

### File upload:

```html
<input type="file">
```

### Buttons:

```html
<input type="submit">
<input type="reset">
<input type="button" value="Click">
```

### Hidden fields:

```html
<input type="hidden">
```

---

# PART 5 — IMPORTANT INPUT ATTRIBUTES

---

### 1. placeholder

```html
<input type="text" placeholder="Enter your name">
```

### 2. required

```html
<input type="email" required>
```

### 3. minlength / maxlength

```html
<input type="text" minlength="3" maxlength="10">
```

### 4. pattern (RegEx-based validation)

```html
<input type="text" pattern="[A-Za-z]{3,10}">
```

### 5. readonly

Cannot be changed:

```html
<input type="text" value="Fixed" readonly>
```

### 6. disabled

Not submitted to server.

```html
<input type="text" disabled>
```

### 7. step (numeric increments)

```html
<input type="number" step="0.5">
```

### 8. value

Default input value.

```html
<input type="text" value="John">
```

### 9. name (very important for backend)

```html
<input name="username">
```

Without `name`, input is **not submitted**.

---

# PART 6 — LABEL ELEMENT

---

Used for accessibility and UX.

Correct usage:

```html
<label for="email">Email:</label>
<input id="email" type="email">
```

Clicking label focuses the input.

---

# PART 7 — TEXTAREA

---

```html
<textarea rows="5" cols="30" placeholder="Enter message"></textarea>
```

Used for long text (comments, messages).

---

# PART 8 — SELECT + OPTION

---

### Basic dropdown:

```html
<select>
    <option value="india">India</option>
    <option value="usa">USA</option>
</select>
```

### Multiple selection:

```html
<select multiple>
```

---

# PART 9 — DATALIST (Auto-suggest)

---

```html
<input list="cities">
<datalist id="cities">
    <option value="Delhi">
    <option value="Mumbai">
</datalist>
```

User can type or choose from suggestions.

---

# PART 10 — FIELDSET + LEGEND

---

Groups form fields.

```html
<fieldset>
    <legend>Personal Info</legend>

    <label>Name</label>
    <input type="text">
</fieldset>
```

---

# PART 11 — OUTPUT ELEMENT (Calculated Results)

---

Used with JavaScript:

```html
<output id="result"></output>
```

---

# PART 12 — NATIVE FORM VALIDATION (NO JS)

---

Best part: HTML has built-in validation.

Example:

```html
<input type="email" required>
```

Browser automatically checks:

• valid email format
• non-empty

### Pattern validation:

```html
<input type="text" pattern="[0-9]{10}" required>
```

Accepts only 10-digit numbers.

---

# PART 13 — AUTOCOMPLETE + NOVALIDATE

---

### Turn off autocomplete:

```html
<form autocomplete="off">
```

### Disable browser validation:

```html
<form novalidate>
```

Used when custom JS validation is implemented.

---

# PART 14 — FILE UPLOAD FORM (IMPORTANT)

---

```html
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="profile">
    <button type="submit">Upload</button>
</form>
```

`enctype="multipart/form-data"` is **mandatory**.

---

# PART 15 — FULL PROFESSIONAL FORM EXAMPLE

---

```html
<form action="/register" method="POST">

    <fieldset>
        <legend>Registration Form</legend>

        <label for="name">Full Name</label>
        <input id="name" name="name" type="text" placeholder="Enter name" required>

        <label for="email">Email</label>
        <input id="email" name="email" type="email" required>

        <label for="password">Password</label>
        <input id="password" name="password" type="password" minlength="6" required>

        <label for="country">Country</label>
        <select id="country" name="country">
            <option value="india">India</option>
            <option value="usa">USA</option>
        </select>

        <label>Gender</label>
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female

        <label>Skills</label>
        <input type="checkbox" name="skills" value="html"> HTML
        <input type="checkbox" name="skills" value="css"> CSS

        <label for="msg">Message</label>
        <textarea id="msg" name="message" rows="4"></textarea>

        <button type="submit">Register</button>
    </fieldset>

</form>
```

---

# PART 16 — INTERVIEW QUESTIONS (FORMS)

---

1. What is the difference between GET and POST?
2. Why is `name` attribute essential in forms?
3. Purpose of `enctype="multipart/form-data"`?
4. Difference between `readonly` and `disabled`?
5. How does HTML validation work without JavaScript?
6. Difference between checkbox vs radio?
7. What is the purpose of `<label>`?
8. When to use `<fieldset>` and `<legend>`?
9. What is `<datalist>` used for?
10. How do you create a responsive form?

---