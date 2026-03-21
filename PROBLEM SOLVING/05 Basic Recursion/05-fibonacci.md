# PROBLEM (Original Statement)

Given an integer **N**, return the **N-th Fibonacci number**.

The Fibonacci sequence is defined as:

```
F(0) = 0
F(1) = 1
```

For n ≥ 2

```
F(n) = F(n-1) + F(n-2)
```

Example

```
Input:  n = 5
Output: 5

Explanation:
0 1 1 2 3 5
```

---

# Topics / Patterns

### Topic

Recursion

Why:
Each Fibonacci number depends on **previous two values**.

---

### Patterns

**Recurrence Relation**

```
F(n) = F(n-1) + F(n-2)
```

This pattern appears in:

- Dynamic Programming
- Recursion Trees
- Memoization

---

# BREAKDOWN PROBLEM

### What is being asked?

Compute the **n-th Fibonacci number**.

Sequence example:

```
Index : 0 1 2 3 4 5 6
Value : 0 1 1 2 3 5 8
```

---

### Input

```
Integer n
```

---

### Output

```
Fibonacci(n)
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints

```
0 ≤ n ≤ 30
```

Important observation:

Recursive Fibonacci grows **exponentially slow**.

Example:

```
fib(5)
├── fib(4)
│   ├── fib(3)
│   └── fib(2)
└── fib(3)
```

You see **duplicate calculations**.

This becomes very important later in **Dynamic Programming**.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

First natural idea:

Follow the definition directly.

```
fib(n) = fib(n-1) + fib(n-2)
```

So just implement recursion.

---

## Thought Process (Step-wise)

Example

```
fib(5)
```

Break into smaller problems

```
fib(5)
= fib(4) + fib(3)
```

Then

```
fib(4)
= fib(3) + fib(2)
```

Continue until base case.

---

## Pseudocode

```
function fib(n)

if n <= 1
    return n

return fib(n-1) + fib(n-2)
```

---

## Algorithm

1. If n ≤ 1 return n
2. Otherwise compute

```
fib(n-1) + fib(n-2)
```

---

# CODE

## C++

### V1 (Required Function)

```cpp
int fib(int n)
{
    if(n <= 1)
        return n;

    return fib(n-1) + fib(n-2);
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

int fib(int n)
{
    if(n <= 1)
        return n;

    return fib(n-1) + fib(n-2);
}

int main()
{
    int n;

    cout << "Enter n: ";
    cin >> n;

    cout << "Fibonacci = " << fib(n);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(2^n)
```

Why?

Each call generates **two recursive calls**.

Example

```
fib(5)

fib(4) + fib(3)

fib(3) + fib(2)
fib(2) + fib(1)
```

Many repeated computations.

---

### Space Complexity

```
O(n)
```

Because recursion stack depth = n.

---

# Dry Run (All Cases)

Example

```
n = 5
```

Call tree

```
fib(5)
= fib(4) + fib(3)

fib(4)
= fib(3) + fib(2)

fib(3)
= fib(2) + fib(1)

fib(2)
= fib(1) + fib(0)
```

Now resolve:

```
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
```

---

# Edge Cases

```
n = 0 → 0
n = 1 → 1
```

These are base cases.

---

# How This Approach Handles the Problem

It directly follows the **mathematical definition of Fibonacci**.

---

# Does This Approach Fail?

Yes — performance issue.

Example

```
fib(40)
```

This will take extremely long because of repeated work.

Example duplicate calls:

```
fib(3) computed multiple times
fib(2) computed multiple times
```

So we move to better approach.

---

# BETTER APPROACH

## First Thought Intuition

Instead of recursion, compute sequentially.

Example

```
0 1 1 2 3 5 8
```

We can build the sequence iteratively.

---

## Thought Process

Keep two variables.

```
prev2 = F(n-2)
prev1 = F(n-1)
```

Compute next number.

---

## Pseudocode

```
if n <= 1 return n

prev2 = 0
prev1 = 1

for i = 2 → n
    curr = prev1 + prev2
    prev2 = prev1
    prev1 = curr

return prev1
```

---

## Algorithm

1. Initialize first two Fibonacci numbers
2. Iterate until n
3. Compute next value
4. Return result

---

# CODE

## C++

### V1

```cpp
int fib(int n)
{
    if(n <= 1)
        return n;

    int prev2 = 0;
    int prev1 = 1;

    for(int i = 2; i <= n; i++)
    {
        int curr = prev1 + prev2;

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

int fib(int n)
{
    if(n <= 1)
        return n;

    int prev2 = 0;
    int prev1 = 1;

    for(int i = 2; i <= n; i++)
    {
        int curr = prev1 + prev2;

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

int main()
{
    int n;

    cout << "Enter n: ";
    cin >> n;

    cout << "Fibonacci = " << fib(n);

    return 0;
}
```

---

# Time and Space Complexity

Time

```
O(n)
```

Space

```
O(1)
```

---

# Dry Run

Example

```
n = 5
```

```
prev2 = 0
prev1 = 1
```

Step 1

```
curr = 1
```

Step 2

```
curr = 2
```

Step 3

```
curr = 3
```

Step 4

```
curr = 5
```

Output

```
5
```

---

# Edge Cases

```
n = 0
n = 1
```

Handled automatically.

---

# Why This Is Optimal

The iterative approach avoids repeated calculations.

Instead of exponential complexity

```
O(2^n)
```

We achieve

```
O(n)
```

Which is optimal without using DP.

---

# Pattern Recognition (Important)

Whenever you see problems like

```
f(n) = f(n-1) + f(n-2)
```

Immediately think

```
Recursion Tree → Dynamic Programming
```

Fibonacci is the **foundation problem of DP**.

---
