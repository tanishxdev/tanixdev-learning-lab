# PROBLEM (Original Statement)

**GCD of Two Numbers**

Given two integers `A` and `B`, find the **Greatest Common Divisor (GCD)** of the two numbers.

The **GCD** is the **largest positive integer that divides both numbers without leaving a remainder**.

Example:

```
Input:  A = 12, B = 18
Output: 6
```

Because:

```
Divisors of 12 → 1, 2, 3, 4, 6, 12
Divisors of 18 → 1, 2, 3, 6, 9, 18

Common divisors → 1, 2, 3, 6
Greatest → 6
```

---

# Topics / Patterns

### Topic

Basic Math / Number Theory

### Patterns

1. **Divisor Enumeration Pattern**

We check numbers that divide both numbers.

2. **Euclidean Algorithm Pattern (Very Important)**

A mathematical identity:

```
gcd(a, b) = gcd(b, a % b)
```

This dramatically reduces computation.

---

# BREAKDOWN PROBLEM

### What is being asked?

Find the **largest number that divides both numbers exactly**.

### Input

```
Two integers A and B
```

### Output

```
An integer → GCD(A,B)
```

---

# CONSTRAINT UNDERSTANDING

Typical constraints:

```
1 ≤ A, B ≤ 10^9
```

Observations:

- Brute force might be slow for large values.
- Efficient algorithm needed.

Important mathematical fact:

```
GCD always ≤ min(A,B)
```

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Natural thought:

> If a number divides both A and B, it must be a divisor of both numbers.

So we can check every number from **1 to min(A,B)**.

Keep track of the largest one that divides both.

---

## Thought Process (Step-wise)

1. Compute `min(A,B)`
2. Check all numbers from `1 → min(A,B)`
3. If both numbers divisible → update answer
4. Continue until end

---

## Pseudocode

```
gcd = 1

limit = min(A,B)

for i from 1 to limit
    if A % i == 0 AND B % i == 0
        gcd = i

return gcd
```

---

## Algorithm

1. Initialize `gcd = 1`
2. Iterate from `1 → min(A,B)`
3. Check divisibility
4. Update gcd if valid

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
int findGCD(int a, int b)
{
    int limit = min(a,b);
    int gcd = 1;

    for(int i = 1; i <= limit; i++)
    {
        if(a % i == 0 && b % i == 0)
        {
            gcd = i;
        }
    }

    return gcd;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int findGCD(int a, int b)
{
    int limit = min(a,b);
    int gcd = 1;

    for(int i = 1; i <= limit; i++)
    {
        // Check if i divides both numbers
        if(a % i == 0 && b % i == 0)
        {
            gcd = i;
        }
    }

    return gcd;
}

int main()
{
    int a,b;

    cout<<"Enter two numbers: ";
    cin>>a>>b;

    cout<<"GCD: "<<findGCD(a,b);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(min(A,B))
```

This is slow if numbers are large.

Example:

```
A = 10^9
B = 10^9
```

Loop runs **1 billion times**.

---

### Space Complexity

```
O(1)
```

---

# Dry Run (All Cases)

Example:

```
A = 12
B = 18
```

Loop:

```
i=1 → valid → gcd=1
i=2 → valid → gcd=2
i=3 → valid → gcd=3
i=4 → not valid
i=5 → not valid
i=6 → valid → gcd=6
```

Final answer:

```
6
```

---

# Edge Cases

### Case 1

```
A = B
```

Example:

```
10,10 → gcd = 10
```

---

### Case 2

```
A = 1
B = anything
```

Answer:

```
1
```

---

### Case 3

Prime numbers

```
7,11 → gcd = 1
```

---

# How This Approach Handles the Problem

It tests every possible common divisor.

The largest valid divisor becomes the answer.

---

# Does This Approach Fail?

Yes.

For large inputs it becomes **too slow**.

Example:

```
A = 10^9
B = 10^9
```

Loop runs **1 billion times**.

So we need a faster method.

---

# BETTER APPROACH (Divisor Symmetry)

Observation:

Divisors appear in **pairs**.

Example:

```
36

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6
```

We only need to check up to:

```
sqrt(min(A,B))
```

But even this is not optimal.

---

# OPTIMAL APPROACH (Euclidean Algorithm)

## First Thought Intuition

Mathematical identity:

```
gcd(a,b) = gcd(b, a % b)
```

Why this works:

If a number divides both **a** and **b**, it will also divide **a % b**.

Example:

```
a = 18
b = 12

18 % 12 = 6
```

So:

```
gcd(18,12)
= gcd(12,6)
= gcd(6,0)
= 6
```

---

## Thought Process

1. Replace `(a,b)` with `(b, a%b)`
2. Continue until remainder becomes zero.

---

## Pseudocode

```
while b != 0
    temp = b
    b = a % b
    a = temp

return a
```

---

## Algorithm

1. While `b != 0`
2. Replace `(a,b)` with `(b,a%b)`
3. Continue
4. When `b=0`, answer is `a`.

---

# CODE

## C++

### V1 (Only Required Function)

```cpp
int findGCD(int a, int b)
{
    while(b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}
```

---

### V2 (Complete Program)

```cpp
#include <iostream>
using namespace std;

int findGCD(int a, int b)
{
    while(b != 0)
    {
        int temp = b;

        // remainder step
        b = a % b;

        // shift numbers
        a = temp;
    }

    return a;
}

int main()
{
    int a,b;

    cout<<"Enter two numbers: ";
    cin>>a>>b;

    cout<<"GCD: "<<findGCD(a,b);

    return 0;
}
```

---

# Time and Space Complexity

### Time Complexity

```
O(log(min(a,b)))
```

Extremely fast.

Even for numbers up to `10^18`.

---

### Space Complexity

```
O(1)
```

---

# Dry Run

Example:

```
a = 18
b = 12
```

Step 1

```
a=18 b=12
18%12=6
→ a=12 b=6
```

Step 2

```
12%6=0
→ a=6 b=0
```

Stop.

Answer:

```
6
```

---

# Edge Cases

```
gcd(a,0) = a
```

Example:

```
gcd(10,0)=10
```

---

# Why This Is Optimal

Each step **shrinks numbers drastically**.

Example:

```
1000000000
500000000
```

Becomes small very quickly.

This is why Euclidean algorithm is used everywhere.

---

# Pattern Recognition Notes

Whenever you see:

- Simplifying fractions
- LCM problems
- Number theory
- Coprime numbers

Your brain should think:

```
Use Euclidean GCD
```

Also remember:

```
LCM(a,b) = (a × b) / GCD(a,b)
```

Very common interview trick.

---
