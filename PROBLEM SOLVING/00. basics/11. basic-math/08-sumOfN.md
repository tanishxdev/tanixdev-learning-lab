# PROBLEM (Original Statement)

Given an integer **N**, compute the **sum of the first N natural numbers**.

Example:

```
Input:  N = 5
Output: 15
Explanation:
1 + 2 + 3 + 4 + 5 = 15
```

---

# Topics/Patterns

### Topic

**Recursion**

Why:

- We solve the problem by **breaking it into smaller subproblems**.

### Pattern

**Recurrence Relation**

Because:

```
Sum(n) = n + Sum(n-1)
```

This is the recursive pattern.

---

# BREAKDOWN PROBLEM

### What is being asked?

Find the sum:

```
1 + 2 + 3 + ... + N
```

### Input

Single integer **N**

### Output

Single integer → **sum of numbers from 1 to N**

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 10^5
```

Observations:

- If **N small** → recursion fine
- If **N very large** → recursion may cause **stack overflow**

So later we could also use **math formula**.

But today’s topic is **recursion**, so we focus on recursive thinking.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

When we see:

```
1 + 2 + 3 + 4 + ... + N
```

First natural thought:

> Just keep adding numbers from 1 to N.

Example:

```
N = 5

sum = 0
sum += 1
sum += 2
sum += 3
sum += 4
sum += 5
```

Result = 15

So we can **loop from 1 to N**.

---

## Thought Process (Step-wise)

1. Create variable `sum = 0`
2. Run loop from `1 → N`
3. Add each number to sum
4. Return sum

---

## Pseudocode

```
sum = 0

for i from 1 to N
    sum = sum + i

return sum
```

---

## Algorithm

1. Start
2. Initialize `sum = 0`
3. Iterate `i` from `1 to N`
4. Add `i` to `sum`
5. Return sum

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
int sumN(int n)
{
    int sum = 0;

    for(int i = 1; i <= n; i++)
    {
        sum += i;
    }

    return sum;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

int sumN(int n)
{
    int sum = 0;

    // Loop from 1 to n
    for(int i = 1; i <= n; i++)
    {
        sum += i; // keep adding numbers
    }

    return sum;
}

int main()
{
    int n;

    cout << "Enter N: ";
    cin >> n;

    int result = sumN(n);

    cout << "Sum of first N numbers = " << result;

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

Because loop runs **N times**.

### Space Complexity

```
O(1)
```

No extra memory used.

---

# Dry Run (All Cases)

### Normal Case

```
N = 5

i=1 → sum=1
i=2 → sum=3
i=3 → sum=6
i=4 → sum=10
i=5 → sum=15
```

Output = **15**

---

### Best Case

```
N = 1
```

Loop runs once.

Output = **1**

---

### Worst Case

```
N = 100000
```

Loop runs **100000 times**.

Still works but slower than formula.

---

# Edge Cases

### Case 1

```
N = 0
```

Output = **0**

### Case 2

```
N = 1
```

Output = **1**

---

# How This Approach Handles the Problem

It simply adds numbers sequentially:

```
1 + 2 + 3 + ... + N
```

So the result is correct.

---

# Does This Approach Fail?

Not logically.

But it is **not optimal**.

Because:

```
Time = O(N)
```

But we can solve in **O(1)**.

So we move to better approach.

---

# BETTER APPROACH

## First Thought Intuition

Mathematics gives us formula:

```
1 + 2 + 3 + ... + N = N(N+1)/2
```

So instead of adding N numbers, we can compute it directly.

---

## Thought Process (Step-wise)

Instead of loop:

```
sum = n*(n+1)/2
```

One single calculation.

---

## Pseudocode

```
sum = n * (n + 1) / 2

return sum
```

---

## Algorithm

1. Take input `n`
2. Compute `n*(n+1)/2`
3. Return result

---

# CODE

## C++

### V1

```cpp
int sumN(int n)
{
    return n * (n + 1) / 2;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

int sumN(int n)
{
    // Using mathematical formula
    return n * (n + 1) / 2;
}

int main()
{
    int n;

    cout << "Enter N: ";
    cin >> n;

    cout << "Sum = " << sumN(n);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(1)
```

Constant time.

### Space Complexity

```
O(1)
```

---

# Dry Run

```
N = 5

sum = 5 * 6 / 2
sum = 30 / 2
sum = 15
```

---

# Edge Cases

```
N = 0 → 0
N = 1 → 1
```

Works correctly.

---

# How This Approach Handles the Problem

Uses mathematical identity to compute sum instantly.

---

# Does This Approach Fail?

No.

This is already optimal.

---

# OPTIMAL APPROACH

Same as **Better Approach**.

Because:

```
Time = O(1)
Space = O(1)
```

No algorithm can beat this.

---

# Why This Is Optimal

Constraint perspective:

If

```
N = 10^9
```

Loop approach:

```
10^9 operations
```

Formula approach:

```
1 operation
```

Huge improvement.

---

# Pattern Recognition (Important)

Whenever you see:

```
1 + 2 + 3 + ... + N
```

Immediately think:

```
N(N+1)/2
```

This appears in many problems like:

- Prefix sums
- Combinatorics
- Mathematics based problems

---
