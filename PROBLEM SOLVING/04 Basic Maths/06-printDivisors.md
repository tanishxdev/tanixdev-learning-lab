# PROBLEM (Original Statement)

**Print All Divisors**

Given an integer `N`, print **all divisors of the number**.

A **divisor** is a number that divides `N` exactly (remainder = 0).

Example:

```
Input: N = 12
Output: 1 2 3 4 6 12
```

Because:

```
12 % 1 = 0
12 % 2 = 0
12 % 3 = 0
12 % 4 = 0
12 % 6 = 0
12 % 12 = 0
```

---

# Topics / Patterns

### Topic

Basic Math / Number Theory

### Patterns

**1️⃣ Divisor Enumeration Pattern**

We check numbers that divide `N`.

**2️⃣ Divisor Symmetry Pattern (Important)**

Divisors always appear in **pairs**.

Example:

```
36

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6
```

So instead of checking `1 → N`, we only check up to:

```
√N
```

---

# BREAKDOWN PROBLEM

### What is being asked?

We must print every number that divides `N`.

### Input

```
Integer N
```

### Output

```
All divisors of N
```

Example:

```
N = 15

Divisors:
1 3 5 15
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ N ≤ 10^9
```

Observation:

Checking `1 → N` is slow for large numbers.

Better strategy is needed.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

> Every divisor must lie between `1` and `N`.

So we test every number.

---

## Thought Process (Step-wise)

1. Loop from `1 → N`
2. Check if `N % i == 0`
3. If yes → print divisor

---

## Pseudocode

```
for i from 1 to N
    if N % i == 0
        print i
```

---

## Algorithm

1. Start loop from `1`
2. Check divisibility
3. Print valid divisor

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printDivisors(int n)
{
    for(int i = 1; i <= n; i++)
    {
        if(n % i == 0)
        {
            cout << i << " ";
        }
    }
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

void printDivisors(int n)
{
    for(int i = 1; i <= n; i++)
    {
        // Check if i divides n
        if(n % i == 0)
        {
            cout << i << " ";
        }
    }
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    printDivisors(n);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(N)
```

Very slow for large `N`.

Example:

```
N = 1,000,000,000
```

Loop runs **1 billion times**.

---

### Space Complexity

```
O(1)
```

---

# Dry Run

Example:

```
N = 6
```

Loop:

```
i=1 → valid → print 1
i=2 → valid → print 2
i=3 → valid → print 3
i=4 → not valid
i=5 → not valid
i=6 → valid → print 6
```

Output:

```
1 2 3 6
```

---

# Edge Cases

### N = 1

```
Divisors → 1
```

---

### Prime numbers

```
N = 7
Divisors → 1 7
```

---

# Does This Approach Fail?

Yes.

For large numbers:

```
O(N)
```

is extremely slow.

So we improve.

---

# BETTER APPROACH (Divisor Symmetry)

## First Thought Intuition

Divisors always come in **pairs**.

Example:

```
36

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6
```

Notice something:

We only need to check until:

```
√36 = 6
```

Because every divisor after √N is already paired.

---

## Thought Process

Loop from:

```
1 → √N
```

If:

```
N % i == 0
```

Then we get two divisors:

```
i
N/i
```

---

## Pseudocode

```
for i from 1 to √N

    if N % i == 0

        print i

        if i != N/i
            print N/i
```

---

## Algorithm

1. Loop from `1 → √N`
2. Check divisibility
3. Print divisor pair

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
void printDivisors(int n)
{
    for(int i = 1; i * i <= n; i++)
    {
        if(n % i == 0)
        {
            cout << i << " ";

            if(i != n / i)
                cout << n / i << " ";
        }
    }
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <cmath>
using namespace std;

void printDivisors(int n)
{
    for(int i = 1; i * i <= n; i++)
    {
        if(n % i == 0)
        {
            // First divisor
            cout << i << " ";

            // Paired divisor
            if(i != n / i)
                cout << n / i << " ";
        }
    }
}

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    printDivisors(n);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(√N)
```

Huge improvement.

Example:

```
N = 1,000,000,000
√N ≈ 31623
```

Only **31k iterations instead of 1 billion**.

---

### Space Complexity

```
O(1)
```

---

# Dry Run

Example:

```
N = 36
```

Loop:

```
i=1 → print 1 & 36
i=2 → print 2 & 18
i=3 → print 3 & 12
i=4 → print 4 & 9
i=5 → skip
i=6 → print 6
```

Output:

```
1 36 2 18 3 12 4 9 6
```

---

# Edge Cases

### Perfect Square

Example:

```
N = 36
```

When:

```
i = 6
```

Then:

```
i == N/i
```

So print only once.

---

### Prime numbers

Example:

```
N = 7
```

Output:

```
1 7
```

---

# Why This Is Optimal

Every divisor greater than √N already has a partner smaller than √N.

So we never need to check beyond √N.

---

# Pattern Recognition Notes

Whenever a problem asks:

```
Divisors
Factors
Factorization
Prime checks
```

Your brain should immediately think:

```
Loop until √N
```

This is one of the **most important math patterns in DSA**.

---
