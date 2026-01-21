## QUESTION 1: Array Sum

**Problem:**
Write a function `sumArray(arr)` that returns the **sum** of all elements in an array.

Example
Input: `[1, 2, 3, 4]`
Output: `10`

---

### What the interviewer is really testing

They are **not** testing addition.

They want to evaluate:

* Your understanding of array traversal
* Input validation discipline
* Edge-case awareness
* Clean, defensive JavaScript
* Time & space complexity awareness
* Whether you think like a **developer**, not a coder

---

### How beginners usually think (WRONG MENTAL MODEL)

Beginners assume:

* Input will always be valid
* Array will always contain only numbers
* Empty or bad input never happens

Typical beginner code:

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

Why this is **dangerous**:

* `arr = null` → crash
* `arr = []` → works by accident
* `arr = [1, "2"]` → implicit coercion
* `arr = ["a", 2]` → `NaN` silently spreads

Interviews punish **assumptions**.

---

### Correct mental model

Think like this:

> “I am building a reusable utility that must never behave unpredictably.”

So your steps become:

1. Validate input is an array
2. Handle empty array safely
3. Convert every value explicitly to number
4. Reject invalid values loudly
5. Accumulate cleanly

This is **senior-level thinking**.

---

### Your organised interview-ready code

```js
// ============================================================================
// QUESTION 1: Array Sum
// Problem: Return the sum of all numeric values in an array
// Approach:
// - Validate input is an array
// - Use reduce for clean accumulation
// - Convert each value explicitly to Number
// - Throw error if any value is not numeric
// - Empty array should return 0
// Time Complexity: O(n)
// Space Complexity: O(1)
// ============================================================================

function sumArray(arr) {
  // Step 1: Input validation
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // Step 2: Reduce handles iteration and accumulation
  return arr.reduce((total, value) => {
    // Step 3: Explicit conversion
    const num = Number(value);

    // Step 4: Validate numeric value
    if (Number.isNaN(num)) {
      throw new TypeError("Array must contain only numbers");
    }

    // Step 5: Accumulate
    return total + num;
  }, 0); // Initial value handles empty array
}
```

---

### Dry run (how code actually executes)

Input: `[1, "2", 3]`

| Iteration | total | value | num | new total |
| --------- | ----- | ----- | --- | --------- |
| start     | 0     | —     | —   | 0         |
| 1         | 0     | 1     | 1   | 1         |
| 2         | 1     | "2"   | 2   | 3         |
| 3         | 3     | 3     | 3   | 6         |

Output → `6`

---

### Time & Space Complexity

**Time Complexity:**
`O(n)` — every element is visited once

**Space Complexity:**
`O(1)` — no extra data structures used

---

### Interview one-liner

> “I used reduce with strict input validation to ensure predictable behavior even with bad input.”

---

### Why this style matters

You moved from:

> “Does this work?”

to:

> “Can this ever break in production?”

That mindset shift is what separates **junior** from **hire-ready**.

---
## QUESTION 2: Palindrome Check

**Problem:**
Write a function `isPalindrome(str)` that checks whether a given string is a palindrome.

A palindrome reads the same **forward and backward** after normalization.

Example
Input: `"madam"` → Output: `true`
Input: `"Race car"` → Output: `true`
Input: `"hello"` → Output: `false`

---

### What the interviewer is really testing

They are checking:

* String manipulation fundamentals
* Edge-case handling (spaces, casing, symbols)
* Ability to **normalize input**
* Understanding of two-pointer or reverse logic
* Defensive programming mindset

They are **not** testing `str === str.split('').reverse().join('')`.

---

### How beginners usually think (WRONG MENTAL MODEL)

Beginners think:

> “Just reverse the string and compare.”

```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
```

Why this fails in interviews:

* `"Race car"` → false
* `"A man, a plan, a canal: Panama"` → false
* `" "` → unclear behavior
* `null` / non-string → crash

This solution works only for **perfect input**.

---

### Correct mental model

Think like this:

> “I am validating user input that may contain spaces, casing issues, and symbols.”

So the steps become:

1. Validate input is a string
2. Normalize string:

   * Convert to lowercase
   * Remove non-alphanumeric characters
3. Compare characters from both ends
4. Return boolean result safely

This is how **interviewers expect you to think**.

---

### Your organised interview-ready code

```js
// ============================================================================
// QUESTION 2: Palindrome Check
// Problem: Check if a given string is a palindrome
// Approach:
// - Validate input type
// - Normalize string (lowercase + remove non-alphanumeric)
// - Use two-pointer technique
// - Compare characters from both ends
// Time Complexity: O(n)
// Space Complexity: O(1)
// ============================================================================

function isPalindrome(str) {
  // Step 1: Input validation
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Step 2: Normalize string
  // - Convert to lowercase
  // - Remove non-alphanumeric characters
  const cleanedStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  // Step 3: Two-pointer comparison
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  // Step 4: All characters matched
  return true;
}
```

---

### Dry run (how code actually executes)

Input: `"Race car"`

After normalization → `"racecar"`

| left | right | char(left) | char(right) | match |
| ---- | ----- | ---------- | ----------- | ----- |
| 0    | 6     | r          | r           | yes   |
| 1    | 5     | a          | a           | yes   |
| 2    | 4     | c          | c           | yes   |

Loop ends → `true`

---

### Time & Space Complexity

**Time Complexity:**
`O(n)` — each character checked once

**Space Complexity:**
`O(1)` — no extra data structures (ignoring normalized string)

---

### Interview one-liner

> “I normalize the string and use a two-pointer approach to handle casing, spaces, and symbols safely.”

---

### Why this style matters

Beginner mindset:

> “Does this string read the same backwards?”

Developer mindset:

> “How do I make this logic work for **real-world input**?”

That difference is exactly what interviews are testing.
