# PROBLEM (Original Statement)

**Print 1 to N (Using Recursion)**

Given an integer `N`, print numbers from **1 to N** using recursion.

Example:

```
Input: N = 5
```

Output:

```
1
2
3
4
5
```

---

# Topics / Patterns

### Topic

Recursion Fundamentals

### Patterns

**1. Linear Recursion Pattern**

The function repeatedly calls itself with a **smaller value**.

```
f(n) → f(n-1)
```

**2. Recursion Flow Control**

Understanding **execution order**:

```
Work before recursion  → forward order
Work after recursion   → reverse order
```

---

# BREAKDOWN PROBLEM

### What is being asked?

Print numbers from:

```
1 → N
```

But using recursion instead of loops.

### Input

```
Integer N
```

### Output

```
Numbers from 1 to N
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 1000
```

Observations:

- Recursion depth will be `N`.
- Stack memory grows linearly.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

> If we want to print numbers sequentially, we normally use a loop.

---

## Thought Process

Start from `1` and go to `N`.

---

## Pseudocode

```
for i from 1 to N
    print i
```

---

## Algorithm

Use iteration.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printNumbers(int n)
{
    for(int i = 1; i <= n; i++)
    {
        cout << i << endl;
    }
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

void printNumbers(int n)
{
    for(int i = 1; i <= n; i++)
    {
        cout << i << endl;
    }
}

int main()
{
    int n;

    cout << "Enter N: ";
    cin >> n;

    printNumbers(n);

    return 0;
}
```

---

# Time and Space Complexity

Time Complexity

```
O(N)
```

Space Complexity

```
O(1)
```

---

# Does This Approach Fail?

No.

But the **problem requires recursion**, so we solve recursively.

---

# BETTER APPROACH (Recursion)

## First Thought Intuition

We want:

```
1 2 3 4 5
```

But recursion naturally starts from `N`.

So we must **let recursion reach 1 first** and then print while returning.

---

## Key Recursion Insight

```
printNumbers(n)
    call printNumbers(n-1)
    print n
```

Meaning:

1. Recursively print `1 → n-1`
2. Then print `n`

---

## Thought Process

Example:

```
N = 3
```

Call stack:

```
print(3)
print(2)
print(1)
print(0)
```

Then printing happens while returning.

---

# Base Case

Stop recursion when:

```
n == 0
```

---

# Recursive Case

```
printNumbers(n-1)
print n
```

---

# Pseudocode

```
function printNumbers(n)

    if n == 0
        return

    printNumbers(n-1)

    print n
```

---

# Algorithm

1. Stop when `n == 0`.
2. Call function for smaller number.
3. Print current number.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printNumbers(int n)
{
    if(n == 0)
        return;

    printNumbers(n - 1);

    cout << n << endl;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

void printNumbers(int n)
{
    // Base case
    if(n == 0)
        return;

    // Recursive call
    printNumbers(n - 1);

    // Print number after recursion
    cout << n << endl;
}

int main()
{
    int n;

    cout << "Enter N: ";
    cin >> n;

    printNumbers(n);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

One recursive call per number.

---

### Space Complexity

```
O(N)
```

Because recursion stack stores `N` function calls.

---

# Dry Run

Example:

```
N = 3
```

Call stack:

```
printNumbers(3)
printNumbers(2)
printNumbers(1)
printNumbers(0)
```

Execution while returning:

```
1
2
3
```

---

# Edge Cases

### N = 0

```
Nothing printed
```

---

### N = 1

```
1
```

---

# How This Approach Handles the Problem

Recursion first reaches the smallest value (`1`).

Then printing occurs **during stack unwinding**, giving correct order.

---

# Why This Is Optimal

Because recursion inherently processes **smaller subproblems first**.

This pattern appears in:

```
DFS
Tree traversal
Backtracking
Divide and conquer
```

---

# Pattern Recognition Notes

Important recursion rule:

```
Work before recursion → reverse order
Work after recursion  → forward order
```

Example:

```
print before recursion → N → 1
print after recursion  → 1 → N
```

---
