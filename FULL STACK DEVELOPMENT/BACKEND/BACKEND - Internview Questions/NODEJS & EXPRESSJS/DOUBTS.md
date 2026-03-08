# What is `process` in Node.js?

## Concept

`process` is a **global object** provided by Node.js.

It represents the **currently running Node.js application**.

You do NOT need to import it.

```js
console.log(process);
```

It is automatically available.

---

## Mental Model

When you run:

```bash
node app.js
```

Node creates a **process in the operating system**.

That running instance of your program = `process`.

So:

> `process` = information + control over the current running Node.js program.

---

## What Can `process` Do?

It gives you access to:

### 1. Environment Variables

```js
console.log(process.env);
```

Used for:

- PORT
- DB_URL
- API keys

---

### 2. Command Line Arguments

```js
console.log(process.argv);
```

Used for CLI tools.

---

### 3. Process ID

```js
console.log(process.pid);
```

Every running program has a unique PID.

---

### 4. Exit the Program

```js
process.exit(0);
```

0 → success
1 → error

---

### 5. Current Working Directory

```js
console.log(process.cwd());
```

Shows from where the program is running.

---

### 6. Listen to Process Events

```js
process.on("exit", () => {
  console.log("Process is exiting");
});
```

Or handle signals:

```js
process.on("SIGINT", () => {
  console.log("Ctrl + C pressed");
});
```

---

## Very Important Understanding

Browser JavaScript:

- Has `window`
- Has `document`

Node.js:

- Has `process`
- Has `global`

So:

> `process` is like the “control center” of your Node.js app.

---

## Interview Ready Answer

The `process` object in Node.js is a global object that represents the currently running Node.js application. It provides information about the environment, command-line arguments, process ID, memory usage, and allows handling system signals. It is commonly used for accessing environment variables, handling graceful shutdowns, and building CLI applications.

---
