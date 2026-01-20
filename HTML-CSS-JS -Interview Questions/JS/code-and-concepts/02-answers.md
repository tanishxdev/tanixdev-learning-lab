## QUESTION 1: Sum of Array Elements

**Problem:**
Write a function that calculates the sum of all numbers in an array.

Example
Input: `[1, 2, 3, 4]`
Output: `10`

---

### What the interviewer is really testing

Not “can you add numbers”.
They want to see if you understand:

- Looping over arrays
- Handling edge cases
- Writing safe, production-style code
- Time & space complexity

---

### How beginners usually think (WRONG MENTAL MODEL)

Most people think like this:

```js
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
return sum;
```

This works **only when input is perfect**.

But interviews don’t give perfect input.

What if:

- `arr = []` (empty)?
- `arr = null`?
- `arr = [1, "2", 3]`?
- `arr = ["a", 3]`?

Real developers think:

> “How do I make this function impossible to misuse?”

---

### Correct mental model

Think of the problem as:

> “I am building a safe sum calculator for an array of numbers.”

So steps become:

1. First verify input is an array
2. Start sum from 0
3. Go through every element
4. Convert to number
5. If any element is not a number → throw error
6. Keep adding

This is **how seniors think**.

---

### Your organised interview-ready code

```js
// ============================================================================
// QUESTION 1: Sum of Array Elements
// Problem: Write a function that calculates the sum of all numbers in an array
// Thinking process:
// - Need to handle empty array (return 0)
// - Validate input is an array
// - Convert each value to number
// - Throw error if any value is not numeric
// - Use reduce for clean accumulation
// - TC: O(n)
// - SC: O(1)
// ============================================================================

function sumArray(arr) {
  // Step 1: Validate input
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // Step 2: Use reduce to accumulate sum
  return arr.reduce((accumulator, currentValue) => {
    // Step 3: Convert value to number (handles "2" → 2)
    const num = Number(currentValue);

    // Step 4: Validate number
    if (isNaN(num)) {
      throw new TypeError("Array must contain only numbers");
    }

    // Step 5: Add to total
    return accumulator + num;
  }, 0); // 0 handles empty array case
}
```

---

### Dry run (how code actually executes)

Input: `[1, "2", 3]`

| Step  | accumulator | currentValue | num | result |
| ----- | ----------- | ------------ | --- | ------ |
| start | 0           | –            | –   | 0      |
| 1st   | 0           | 1            | 1   | 1      |
| 2nd   | 1           | "2"          | 2   | 3      |
| 3rd   | 3           | 3            | 3   | 6      |

Output → `6`

---

### Time & Space Complexity

**Time Complexity:**
`O(n)` → you must read each element once

**Space Complexity:**
`O(1)` → no extra memory used (just one variable)

---

### Interview one-liner

> “I used reduce with input validation so the function works safely even with empty arrays and string numbers.”

---

### Why this style matters

Your earlier mistake was:

> “I only wrote logic for ideal input.”

Now you think like:

> “How do I protect this function from bad input?”

---

