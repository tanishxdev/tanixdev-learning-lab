Perfect — now we move to **first real bit problem** in your required **DSA structured + mindset format**.

---

# PROBLEM (Original Statement)

Check if the **i-th bit** of a number `n` is set (1) or not (0).

- Bits are **0-indexed from right (LSB)**

---

# BREAKDOWN PROBLEM

## What is being asked?

Given:

```
n = number
i = position
```

Return:

```
true  → if bit = 1
false → if bit = 0
```

---

## Example

```
n = 5 → binary = 101

index:   2 1 0
bits :   1 0 1
```

Check:

```
i = 2 → bit = 1 → true
i = 1 → bit = 0 → false
```

---

# CONSTRAINT UNDERSTANDING

- i is 0-based
- If i is large → bit = 0
- Need **O(1)** ideally

---

# BRUTE FORCE APPROACH

## First Thought Intuition

"Convert number to binary → then check i-th position"

Natural thinking:

```
"pehle binary bana lete hain"
```

---

## Thought Process (Step-wise)

1. Convert n → binary string
2. Reverse (or store LSB first)
3. Check index i

---

## Pseudocode

```
binary = ""

while n > 0:
    binary += n % 2
    n = n / 2

if i >= length:
    return false

return binary[i] == 1
```

---

## CODE (C++)

### V1 (Function Only)

```cpp
bool checkIthBit(int n, int i) {
    string binary = "";

    // Convert number to binary (LSB first)
    while (n > 0) {
        if (n % 2 == 0)
            binary += '0';
        else
            binary += '1';

        n = n / 2;
    }

    // If index out of range → bit is 0
    if (i >= binary.size())
        return false;

    return binary[i] == '1';
}
```

---

### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

bool checkIthBit(int n, int i) {
    string binary = "";

    // Step 1: Convert to binary (LSB first)
    while (n > 0) {
        binary += (n % 2 == 0 ? '0' : '1');
        n /= 2;
    }

    // Step 2: If i is out of bounds
    if (i >= binary.size())
        return false;

    // Step 3: Check i-th bit
    return binary[i] == '1';
}

int main() {
    int n = 5;
    int i = 2;

    if (checkIthBit(n, i))
        cout << "Bit is SET\n";
    else
        cout << "Bit is NOT SET\n";
}
```

---

## Time and Space Complexity

```
TC = O(log n)
SC = O(log n)
```

---

## Dry Run

```
n = 5

5 → 101 (stored as "101")

i = 2
binary[2] = '1' → true
```

---

## Does This Approach Fail?

YES

- Slow
- Unnecessary memory
- Not optimal

---

# OPTIMAL APPROACH (REAL BIT MAGIC)

## First Thought Intuition

Instead of converting:

```
"directly bit check karte hain"
```

---

## KEY IDEA (IMPORTANT)

Create a number where only i-th bit is 1:

```
1 << i
```

Then:

```
n & (1 << i)
```

---

## Thought Process

1. Create mask:

```
mask = 1 << i
```

2. AND with n:

```
if result != 0 → bit is 1
else → 0
```

---

## WHY THIS WORKS (VERY IMPORTANT)

```
n = 5 → 101
i = 2

1 << 2 = 100
```

Now:

```
101
100
-----
100 → non-zero → bit = 1
```

---

## Pseudocode

```
mask = 1 << i

if (n & mask) != 0:
    return true
else:
    return false
```

---

## CODE (C++)

### V1 (Function Only)

```cpp
bool checkIthBit(int n, int i) {
    return (n & (1 << i)) != 0;
}
```

---

### V2 (Complete Program)

```cpp
#include <bits/stdc++.h>
using namespace std;

bool checkIthBit(int n, int i) {
    // Step 1: Create mask with only i-th bit set
    int mask = (1 << i);

    // Step 2: AND with number
    // If result is non-zero → bit is set
    return (n & mask) != 0;
}

int main() {
    int n = 5;  // Binary: 101
    int i = 2;

    if (checkIthBit(n, i))
        cout << "Bit is SET\n";
    else
        cout << "Bit is NOT SET\n";
}
```

---

## Time and Space Complexity

```
TC = O(1)
SC = O(1)
```

---

## Dry Run (Important)

```
n = 5 → 101
i = 1

mask = 1 << 1 = 010

101
010
-----
000 → 0 → false
```

---

## Edge Cases

- i > number bits → always false
- n = 0 → always false
- i = 0 → check last bit

---

# HOW THIS APPROACH HANDLES THE PROBLEM

- Only target bit isolate hota hai
- Baaki sab ignore ho jata hai

---

# WHY THIS IS OPTIMAL

- No loops
- No extra memory
- Direct hardware-level operation

---

# FINAL MINDSET (VERY IMPORTANT)

Whenever you see:

```
"check bit"
```

Think:

```
mask banao → AND karo
```

---

# PATTERN NOTE (SAVE THIS)

```
Check bit → (n >> i) & 1
OR
Check bit → (n & (1 << i))
```

---

If you say **"next"**,
I’ll take you to:

### Level 1 Problems:

- Odd/Even (1 line trick)
- Count set bits
- Power of 2 (interview favorite)

And we’ll go deeper into **pattern mastery**.
