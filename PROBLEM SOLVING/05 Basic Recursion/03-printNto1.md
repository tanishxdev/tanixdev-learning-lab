# PROBLEM (Original Statement)

**Print N to 1 (Using Recursion)**

Given an integer `N`, print numbers from **N to 1** using recursion.

Example:

```
Input: N = 5
```

Output:

```
5
4
3
2
1
```

---

# Topics / Patterns

### Topic

Recursion Fundamentals

### Patterns

**1. Linear Recursion Pattern**

Reduce the problem size step by step.

```
f(n) → f(n-1)
```

**2. Recursion Execution Order**

Important insight:

```
Work before recursion  → N → 1
Work after recursion   → 1 → N
```

For this problem we must print **before recursion**.

---

# BREAKDOWN PROBLEM

### What is being asked?

Print numbers from:

```
N → 1
```

### Input

```
Integer N
```

### Output

```
Numbers from N to 1
```

Example:

```
N = 4
Output:
4
3
2
1
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 1000
```

Observation:

Recursion depth = N.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural approach:

Use a loop.

---

## Thought Process

Start from N and decrease.

---

## Pseudocode

```
for i from N to 1
    print i
```

---

## Algorithm

1. Start loop from `N`.
2. Decrement until `1`.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printNumbers(int n)
{
    for(int i = n; i >= 1; i--)
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
    for(int i = n; i >= 1; i--)
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

But the problem specifically requires **recursion**.

---

# BETTER APPROACH (Recursion)

## First Thought Intuition

If we want:

```
5
4
3
2
1
```

We must print **current number first**, then ask recursion to print remaining numbers.

---

## Recursive Thinking

```
printNumbers(n)

print n

printNumbers(n-1)
```

---

# Base Case

Stop recursion when:

```
n == 0
```

---

# Recursive Case

```
print n
call printNumbers(n-1)
```

---

# Pseudocode

```
function printNumbers(n)

    if n == 0
        return

    print n

    printNumbers(n-1)
```

---

# Algorithm

1. Check base case.
2. Print current number.
3. Call recursion for `n-1`.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printNumbers(int n)
{
    if(n == 0)
        return;

    cout << n << endl;

    printNumbers(n - 1);
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

    // Print current number
    cout << n << endl;

    // Recursive call
    printNumbers(n - 1);
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

Due to recursion stack.

---

# Dry Run

Example:

```
N = 3
```

Execution:

```
printNumbers(3)
print 3
printNumbers(2)

print 2
printNumbers(1)

print 1
printNumbers(0)
```

Output:

```
3
2
1
```

---

# Edge Cases

### N = 0

Nothing printed.

---

### N = 1

```
1
```

---

# How This Approach Handles the Problem

Each recursion prints the current number and reduces the problem size.

Eventually base case stops recursion.

---

# Why This Is Optimal

Because recursion models the problem naturally.

No faster algorithm is possible since we must print `N` numbers.

---

# Pattern Recognition Notes

The **most important recursion insight** you learned today:

```
print before recursion  → N → 1
print after recursion   → 1 → N
```

This pattern appears in:

```
DFS traversal
Tree traversal
Backtracking
Subsequence generation
Permutation problems
```

---

# Day 2 Completed

You finished:

```
D2 P1 → Print Divisors
D2 P2 → Prime Check
D2 P3 → Print Name N Times
D2 P4 → Print 1 to N
D2 P5 → Print N to 1
```

You learned two **major patterns**:

```
√N divisor optimization
Recursion flow control
```

---
