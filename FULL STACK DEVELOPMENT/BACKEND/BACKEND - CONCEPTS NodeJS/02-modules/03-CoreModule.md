# Core Node.js Built-in Modules

(Engineering-first. Why → What → How → Code → Interview)

---

# 1. Query String

## Problem (Why)

When client sends URL:

```
/search?name=tanish&age=22
```

Server receives it as raw string.

We need to:

- Extract parameters
- Convert into usable object

---

## What

`querystring` module parses and formats URL query strings.

---

## Example

```js
// Import querystring module
const querystring = require("querystring");

// Raw query string
const qs = "name=tanish&age=22";

// Convert string → object
const parsed = querystring.parse(qs);

console.log(parsed);

// Convert object → string
const stringified = querystring.stringify(parsed);
console.log(stringified);
```

### Output

```
{ name: 'tanish', age: '22' }
name=tanish&age=22
```

---

## Engineering Note

Modern projects prefer:

```js
URLSearchParams;
```

---

## Interview

1. What is query string?
2. How to parse query parameters in Node?
3. Difference between querystring and URL module?

---

# 2. Buffer

## Problem (Why)

Network sends data in binary.

Files stored in binary.

JavaScript normally works with strings.

Need raw memory handling.

---

## What

Buffer is:

> A temporary storage for binary data.

---

## Example

```js
// Create buffer from string
const buffer = Buffer.from("Hello");

// Print raw buffer
console.log(buffer);

// Convert back to string
console.log(buffer.toString());
```

### Output

```
<Buffer 48 65 6c 6c 6f>
Hello
```

---

## Why Important

- File system
- Streaming
- Encryption
- TCP data

---

## Interview

1. What is Buffer?
2. Why buffer needed?
3. Difference between string and buffer?

---

# 3. Stream

## Problem (Why)

Large file (1GB).
If loaded fully → memory crash.

Need chunk-by-chunk processing.

---

## What

Stream processes data in small pieces.

---

## Types

1. Readable
2. Writable
3. Duplex
4. Transform

---

## Example (Read Stream)

```js
const fs = require("fs");

// Create readable stream
const stream = fs.createReadStream("file.txt", "utf8");

// Listen for data event
stream.on("data", (chunk) => {
  console.log("Chunk:", chunk);
});
```

---

## Engineering Advantage

- Low memory usage
- Faster response
- Used in video streaming

---

## Interview

1. What is stream?
2. Types of streams?
3. Why streams better for large files?

---

# 4. String Decoder

## Problem

Buffer may split multi-byte characters.

Example: UTF-8 character broken across chunks.

We need safe decoding.

---

## What

`string_decoder` decodes buffer safely.

---

## Example

```js
const { StringDecoder } = require("string_decoder");

const decoder = new StringDecoder("utf8");

const buffer = Buffer.from("Hello World");

console.log(decoder.write(buffer));
```

---

## Interview

1. Why string_decoder needed?
2. What problem does it solve?

---

# 5. Zlib

## Problem

Large data transfer → slow network.

Need compression.

---

## What

Zlib compresses and decompresses data.

---

## Example

```js
const zlib = require("zlib");
const fs = require("fs");

// Compress file
const readStream = fs.createReadStream("file.txt");
const writeStream = fs.createWriteStream("file.txt.gz");

readStream.pipe(zlib.createGzip()).pipe(writeStream);
```

---

## Why Important

- API response compression
- Save bandwidth
- Faster transmission

---

## Interview

1. What is gzip?
2. How Node handles compression?
3. Why compression improves performance?

---

# 6. Utility (util)

## Problem

Need helper functions:

- Promisify callbacks
- Format strings
- Debug objects

---

## What

`util` provides utility functions.

---

## Example (Promisify)

```js
const util = require("util");
const fs = require("fs");

// Convert callback-based function to promise
const readFilePromise = util.promisify(fs.readFile);

readFilePromise("file.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

## Interview

1. What is util.promisify?
2. Why convert callbacks to promises?

---

# 7. Assert

## Problem

Need to test code correctness.

---

## What

`assert` module helps in testing conditions.

---

## Example

```js
const assert = require("assert");

const result = 2 + 2;

// Check condition
assert.strictEqual(result, 4);

console.log("Test passed");
```

If wrong → throws error.

---

## Interview

1. What is assert?
2. Difference between strictEqual and equal?

---

# 8. Modules (Core Concept)

## Problem

Large application → messy code.

Need separation.

---

## What

Modules allow:

- Code reuse
- Encapsulation
- Clean structure

---

## Export Example

### math.js

```js
// Export function
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

### app.js

```js
// Import module
const add = require("./math");

console.log(add(2, 3));
```

---

## Types of Modules

1. Core Modules (fs, http)
2. Local Modules
3. Third-party Modules (npm)

---

## Interview

1. What is module.exports?
2. Difference between require and import?
3. What is CommonJS?

---

# Final Engineering Summary

Must deeply understand:

- Buffer → raw memory
- Stream → chunk processing
- Zlib → compression
- Util → helper utilities
- Assert → testing
- Modules → architecture foundation

These are low-level Node runtime building blocks.

---
